import React from 'react';

interface ImageGridProps {
    images: { thumbnailUrl: string }[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'flex-start' }}>
            {images.map((image, index) => (
                <div key={index} style={{ width: '150px', height: '150px', overflow: 'hidden', border: '2px solid #ccc', borderRadius: '8px' }}>
                    <img src={image.thumbnailUrl} alt={`Thumbnail ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            ))}
        </div>
    );
};

export default ImageGrid;
