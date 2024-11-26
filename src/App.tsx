import React, { useState } from 'react';
import ImageGrid from "./components/ImageGrid.tsx";
import ImageUpload from "./components/ImageUpload.tsx";
import './App.css';

interface Image {
    thumbnailUrl: string;
}

const App: React.FC = () => {
    const [images, setImages] = useState<Image[]>([]);

    const handleUpload = (newImages: Image[]) => {
        setImages([...images, ...newImages]);
    };

    return (
        <div className="app-container">
            <ImageUpload onUpload={handleUpload}/>
            <ImageGrid images={images}/>
        </div>
    );
};

export default App;
