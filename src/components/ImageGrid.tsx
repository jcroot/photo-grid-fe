import React from 'react';

interface Image {
    key: string;
    thumbnailUrl: string;
}

interface ImageGridProps {
    images: Image[];
    onImageClick: (imageUrl: string) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({images, onImageClick}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center'}}>
            {images.map((image, index) => (
                <div key={image.key} style={{
                    width: '150px',
                    height: '150px',
                    overflow: 'hidden',
                    border: '2px solid #ccc',
                    borderRadius: '8px'
                }}>
                    <img
                        src={image.thumbnailUrl}
                        alt={`Thumbnail ${index}`}
                        style={{width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer'}}
                        onClick={() => onImageClick(image.thumbnailUrl)}
                    />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
