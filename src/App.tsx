import React, {useEffect, useState} from 'react';
import ImageGrid from "./components/ImageGrid.tsx";
import ImageUpload from "./components/ImageUpload.tsx";
import './App.css';
import api from "./lib/api/api.ts";

interface Image {
    thumbnailUrl: string;
}

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    const handleUpload = (newImages: Image[]) => {
        setImages([...images, ...newImages]);
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
            <ImageGrid images={images}/>
        </div>
    );
};

export default App;
