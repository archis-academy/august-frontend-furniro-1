import OurProductSection from '../../Sections/OurProductSection';
import PageHeader from '../../Components/PageHeader';
import styles from './Shop.module.scss';
import FeaturesSection from '../../Components/FeaturesSection';
import ShoppingMenuSection from '../../Sections/ShoppingMenuSection/index';

function Shop() {
  return (
    <div className={styles.shopContainer}>
      <PageHeader />
      <ShoppingMenuSection />
      <OurProductSection showTitle={false} />
      <FeaturesSection />
    </div>
  );
}

export default Shop;
