import { useParams } from "react-router-dom";
import "./singleProductHeader.scss";
import SingleProductDetails from "../../Components/SingleProductDetails";
import Gallery from "../../Components/ProductAlbum";
import { useEffect, useState } from "react";

const BASE_API_URL = "https://furniro-api-vd0v.onrender.com/products";

export const SingleProductHeader = () => {
  const { product_title } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const urlSafeTitle = encodeURIComponent(product_title);
        const response = await fetch(`${BASE_API_URL}/${urlSafeTitle}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Ürün bulunamadı (404).");
          }
          throw new Error(`HTTP hatası: ${response.status}`);
        }

        const apiData = await response.json();
        setProduct(apiData);
        setError(null);
      }
      catch (err) {
        console.error("Ürün çekme hatası:", err);
        setError(err.message || "Ürün bilgileri yüklenirken bilinmeyen bir hata oluştu.");
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [product_title]);


  if (loading) {
    return <div className="single_product_header">Ürün yükleniyor...</div>;
  }

  if (error) {
    return <div className="single_product_header">{error}</div>;
  }

  if (!product) {
    return <div className="single_product_header">Ürün bulunamadı.</div>;
  }

  return (
    <div className="single_product_header">
      <Gallery photos={product.photos} />
      <SingleProductDetails product={product} />
    </div>
  );
};
