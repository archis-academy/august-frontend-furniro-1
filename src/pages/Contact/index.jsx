import styles from "./contact.module.scss"
import Form from "../../Components/Form/form"
import PageHeader from '../../Components/PageHeader';
import FeaturesSection from '../../Components/FeaturesSection';


function Contact() {
  return (
    <div className={styles.contactContainer}>
      <PageHeader />
      <Form/>
      <FeaturesSection />
    </div>
  )
}

export default Contact
