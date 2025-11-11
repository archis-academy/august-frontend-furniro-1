import styles from "./profile.module.scss"
import PageHeader from '../../Components/PageHeader';
import ProfileSettings from '../../Components/ProfileSettings';
import FeaturesSection from '../../Components/FeaturesSection';


function Profile() {
  return (
    <div className={styles.contactContainer}>
      <PageHeader />
      <ProfileSettings/>
      <FeaturesSection />
    </div>
  )
}

export default Profile