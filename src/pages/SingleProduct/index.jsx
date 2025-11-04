import BreadCrumb from '../../Components/BreadCrumb';
import RelatedProducts from '../../Components/RelatedProducts';
import { SingleProductHeader } from '../../Sections/singleProductHeader';
import { SingleProductMoreInfo } from '../../Components/SingleProductMoreInfo';

import './singleproductpage.scss';

const SingleProductPage = () => {
  return (
    <div className="spp-wrapper">
      <div className="full-bleed">
        <BreadCrumb />
      </div>
      <div className="spp-header">
        <SingleProductHeader />
      </div>
      <div className="spp-moreInfo">
        <SingleProductMoreInfo />
      </div>
      <div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
