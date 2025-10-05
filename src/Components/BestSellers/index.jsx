import { bestSellers } from "./data";



export const BestSellerProduct = ({ title, image, star, oldPrice, newPrice }) => {
    const rating = Math.max(0, Math.min(5, Number(star) || 0));
    const filledWidth = `${(rating / 5) * 100}%`;
    return (
        <div className='bs-item'>
            <img className='bs-image' src={image} alt={title} />
            <div className='bs-info'>
                <div className='bs-title'>{title}</div>
                <div className='bs-stars' aria-label={`${rating} out of 5`}>
                    <span className="bs-stars-bg">★★★★★</span>
                    <span className="bs-stars-fg" style={{ width: filledWidth }}>★★★★★</span>
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
