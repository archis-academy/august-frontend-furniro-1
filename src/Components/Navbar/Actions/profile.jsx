import styles from './profile.module.scss';
import { SignUp } from '../../../pages/SignUp';

function Profile({ toggle, setToggle }) {
  return (
    <div className={styles.icon}>
      <img
        src="assets/icons/navbar/profile.svg"
        alt="profile icon"
        onClick={(e) => {
          e.stopPropagation(); 
          toggle === "profile" ? setToggle(null) : setToggle("profile");
        }}
      />

      {toggle === "profile" && (
        <div
          className={styles.container}
          onClick={(e) => e.stopPropagation()} 
        >
          <SignUp />
        </div>
      )}
    </div>
  );
}

export default Profile;
