

import styles from './profile.module.scss';
import { SignUp } from '../../SignUp/SignUp';

function Profile({ toggle, setToggle }) {


  return (
    <div>
      <div className={styles.icon} onClick={() => (toggle === "profile" ? setToggle(null) : setToggle("profile"))}>
        <img src="assets/navbar/profile.svg" alt="profile icon" />
        {toggle === "profile" && (
          <div className={styles.container}>
                <SignUp/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;



