import { useParams } from 'react-router-dom';
import { Gallery } from '../../Components/ProductAlbum';
import { singleProductData } from '../../mock/data';
import SingleproductDetails from '../../Components/SingleProductDetails';
import RelatedProducts from '../../Components/RelatedProducts';

export const SingleProduct = () => {
  const { product_title } = useParams();

  const product = singleProductData.find(
    (p) => p.product_title === product_title,
  );

  return (
    <>
      <div style={{ display: 'flex', gap: '40px' }}>
        <Gallery photos={product.photos} />
        <SingleproductDetails product={product} />
      </div>
      <RelatedProducts />
    </>
  );
};
