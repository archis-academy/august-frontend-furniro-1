
import { useState } from 'react';
import styles from './profile.module.scss';
import { SignUp } from '../../SignUp/SignUp';

function Profile() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className={styles.icon} onClick={() => setToggle(!toggle)}>
        <img src="assets/navbar/profile.svg" alt="profile icon" />
        {toggle && (
          <div className={styles.container}>
                <SignUp/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;



