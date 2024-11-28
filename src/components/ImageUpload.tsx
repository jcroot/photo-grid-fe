import React, {useState} from 'react';
import { useDropzone } from 'react-dropzone';
import api from "../lib/api/api.ts";

interface ImageUploadProps {
    onUpload: (images: { key: string, thumbnailUrl: string }[]) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUpload }) => {
    const [loading, setLoading] = useState(false)

    const onDrop = async (acceptedFiles: File[]) => {
        const formData = new FormData();
        acceptedFiles.forEach(file => {
            formData.append('images', file);
        });

        setLoading(true);
        try {
            const response = await api.post<{ images: { key: string, thumbnailUrl: string }[] }>('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            onUpload(response.data.images);
        } catch (error) {
            console.error('Error uploading images:', error);
        } finally {
            setLoading(false);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drag & drop some files here, or click to select files</p>
            {loading && <p>Uploading...</p>}
        </div>
    );
};

export default ImageUpload;
