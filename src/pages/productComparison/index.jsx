
import styles from "./productComparison.module.scss"
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';
import ComparisonTable from "../../Components/ComparisonTable/index"
import ProductCompare from "../../Components/productCompare";


function ProductComparison() {
  return (
    <div className={styles.comparisonContainer}>
      <PageHeader />
      <ProductCompare/>
      <ComparisonTable/>
      <FeaturesSection />
    </div>
  )
}

export default ProductComparison