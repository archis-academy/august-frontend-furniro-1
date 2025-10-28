import { useState } from 'react'
import './product-album.scss'

const Gallery = ({ photos = [] }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

    const thumbnailPhotos = photos.filter((p) => p.id !== selectedPhoto.id);

    return (
        <div className="gallery-container">
            <div className="thumbnail-list">
                {thumbnailPhotos.map((photo) => (
                    <img
                        key={photo.id}
                        src={photo.url}
                        alt={photo.alt}
                        className="thumbnail"
                        onClick={() => setSelectedPhoto(photo)}
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
export default Gallery;