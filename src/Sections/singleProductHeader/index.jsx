import { useParams } from "react-router-dom";
import "./singleProductHeader.scss";
import singleProductData from "../../mock/data";
import SingleProductDetails from "../../Components/SingleProductDetails";
import Gallery from "../../Components/ProductAlbum";


export const SingleProduct = () => {
  const { product_title } = useParams();

  const product = singleProductData.find(
    (p) => p.product_title === product_title,
  );

    return (
        <div className="single_product_header">
            <Gallery photos={product.photos} />
        <SingleProductDetails product={product} />
        
        </div>
    );
};
