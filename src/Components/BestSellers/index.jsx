import { bestSellers } from "./data";
import './style.scss'

export const BestSellerProduct = ({ title, image, star, oldPrice, newPrice }) => {
    const rating = Math.round(Number(star) || 0);

    return (
        <div className='bs-item'>
            <img className='bs-image' src={image} alt={title} />
            <div className='bs-info'>
                <div className='bs-title'>{title}</div>
                <div className="bs-stars">
                    {"★".repeat(rating)}
                    {"☆".repeat(5 - rating)}
                </div>
                <div className='bs-price'>
                    <span className='old-price'>{oldPrice}</span>
                    <span className='new-price'>{newPrice}</span>
                </div>
            </div>
        </div>
    );
};

export const BestSellersList = () => {
    return (
        <div className="bs-list">
            <h4 className="bs-header">BEST SELLERS</h4>
            {
                bestSellers.map(p => (
                    <BestSellerProduct
                        key={p.id}
                        title={p.title}
                        image={p.img}
                        star={p.star}
                        oldPrice={p.oldPrice}
                        newPrice={p.newPrice}
                    />
                ))
            }
        </div>
    );
};
