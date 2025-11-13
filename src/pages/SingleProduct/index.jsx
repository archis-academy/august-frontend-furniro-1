import BreadCrumb from '../../Components/BreadCrumb';
import RelatedProducts from '../../Components/RelatedProducts';
import { SingleProductHeader } from '../../Sections/singleProductHeader';
import { SingleProductMoreInfo } from '../../Components/SingleProductMoreInfo';
import './singleproductpage.scss';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';

const BASE_API_URL = 'https://furniro-api-vd0v.onrender.com/products';
const SingleProductPage = () => {

  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        const res = await fetch(`${BASE_API_URL}/${id}`);
        if (!res.ok) {
          if (res.status === 404) throw new Error('Ürün bulunamadı (404).');
          throw new Error(`HTTP hatası: ${res.status}`);
        }
        const data = await res.json();
        if (!ignore) {
          setProduct(data);
          setError(null);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message || 'Ürün bilgileri yüklenirken bir hata oluştu.');
          setProduct(null);
        }
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => { ignore = true; };
  }, [id]);

  if (loading) return <div className="spp-wrapper">Ürün yükleniyor...</div>;
  if (error) return <div className="spp-wrapper">{error}</div>;
  if (!product) return <div className="spp-wrapper">Ürün bulunamadı.</div>;

  return (
    <div className="spp-wrapper">
      <div className="full-bleed">
        <BreadCrumb />
      </div>
      <div className="spp-header">
        <SingleProductHeader product={product} />
      </div>
      <div className="spp-moreInfo">
        <SingleProductMoreInfo product={product} />
      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
