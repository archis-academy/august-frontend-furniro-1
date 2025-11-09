import styles from './productComparison.module.scss';
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import ComparisonTable from '../../Components/ComparisonTable/index';
import ProductCompare from '../../Components/productCompare';

function ProductComparison() {
  return (
    <div className={styles.comparisonContainer}>
      <PageHeader />
      <div className={styles.compareContainer}>
        <ProductCompare />
        <ComparisonTable />
      </div>
      <FeaturesSection />
    </div>
  );
}

export default ProductComparison;
