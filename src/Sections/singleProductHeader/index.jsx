import './singleProductHeader.scss';
import SingleProductDetails from '../../Components/SingleProductDetails';
import Gallery from '../../Components/ProductAlbum';

export const SingleProductHeader = ({ product }) => {
  if (!product) return null;
  return (
    <div className="single_product_header">
      <Gallery photos={product.images} />
      <SingleProductDetails product={product} />
    </div>
  );
};
