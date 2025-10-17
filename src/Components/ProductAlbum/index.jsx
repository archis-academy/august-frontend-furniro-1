import { useState } from 'react'
import './product-album.scss'
import { photos } from '../../mock/data'

export const Gallery = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0] || null);

    const thumbnailPhotos = photos.filter(
        (photo) => photo.id !== selectedPhoto.id
    );

    const handleThumbnailClick = (photo) => {
        setSelectedPhoto(photo);
    };
    return (
        <div className="gallery-container">
            <div className="thumbnail-list">
                {thumbnailPhotos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.url}
                        alt={photo.alt}
                        className="thumbnail"
                        onClick={() => handleThumbnailClick(photo)}
                    />
                ))}
            </div>

            <div className="featured-image-container">
                <img
                    src={selectedPhoto.url}
                    alt={selectedPhoto.alt}
                    className="featured-image"
                />
            </div>
        </div>
    );
};
