import React, {useEffect, useState} from 'react';
import ImageGrid from "./components/ImageGrid.tsx";
import ImageUpload from "./components/ImageUpload.tsx";
import './App.css';
import api from "./lib/api/api.ts";
import ImageModal from "./components/ImageModal.tsx";

interface Image {
    key: string;
    thumbnailUrl: string;
}

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleUpload = (newImages: Image[]) => {
        setImages([...images, ...newImages]);
    };

    const handleImageClick = (imageUrl: string) => {
        setSelectedImage(imageUrl);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await api.get<{ key: string; signedUrl: string }[]>('/api/images');
                const images = response.data
                    .filter(image => image.key !== "myuploads/")
                    .map(image => ({
                        key: image.key,
                        thumbnailUrl: image.signedUrl
                    }));
                setImages(images);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };
        fetchImages();
    }, [])

    return (
        <div className="app-container">
            <ImageUpload onUpload={handleUpload}/>
            <ImageGrid images={images} onImageClick={handleImageClick} />
            {selectedImage && <ImageModal imageUrl={selectedImage} onClose={handleCloseModal} />}
        </div>
    );
};

export default App;
