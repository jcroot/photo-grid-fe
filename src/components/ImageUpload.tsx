import React from 'react';
import { useDropzone } from 'react-dropzone';
import api from "../lib/api/api.ts";

interface ImageUploadProps {
    onUpload: (images: { thumbnailUrl: string }[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
    const onDrop = async (acceptedFiles: File[]) => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append('images', file);
        });

        try {
            const response = await api.post<{ images: { thumbnailUrl: string }[] }>('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUpload(response.data.images);
        } catch (error) {
            console.error('Error uploading images:', error);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
        </div>
    );
};

export default ImageUpload;
