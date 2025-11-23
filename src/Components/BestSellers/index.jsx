
import './style.scss';

export const BestSellerProduct = ({ item }) => {
  return (
    <div className="bs-item">
      <img
        className="bs-image"
        src={item?.images[0]?.url}
        onError={(e) => {
          e.currentTarget.src = '/assets/images/category-card/broken-image.png';
        }}
        alt={item.name}
      />
      <div className="bs-info">
        <div className="bs-title">{item.name}</div>
        <div className="bs-stars">
          {'★'.repeat(item.rating.stars)}
          {'☆'.repeat(5 - item.rating.stars)}
        </div>
        <div className="bs-price">
          <span className="old-price">{item?.oldPrice}</span>
          <span className="new-price">{item?.price}</span>
        </div>
      </div>
    </div>
  );
};

export const BestSellersList = ({ products }) => {
  const sortedProducts = [...products].sort((a, b) => b.price - a.price);
  return (
    <div className="bs-list">
      <h4 className="bs-header">BEST SELLERS</h4>
      {sortedProducts.slice(0, 4).map((item, p) => (
        <BestSellerProduct item={item} />
      ))}
    </div>
  );
};
