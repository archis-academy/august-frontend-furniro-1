import styles from './form.module.scss';
import Input from '../Input/index.jsx';
import '@fontsource/poppins';

function form() {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <h1 className={styles.contactTitle}>Get In Touch With Us</h1>
        <p className={styles.contactText}>
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className={styles.form}>
        <div className={styles.infos}>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src="/assets/icons/form/location-icon.svg" alt="location icon" />
            </div>
            <div>
              <h2 className={styles.name}>Adress</h2>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src="/assets/icons/form/phone-icon.svg" alt="phone icon" />
            </div>
            <div>
              <h2 className={styles.name}>Phone</h2>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.icon}>
              <img src="/assets/icons/form/time-icon.svg" alt="time icon" />
            </div>
            <div>
              <h2 className={styles.name}>Working Time</h2>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <div>
          <Input label="Your name" placeholder="John Doe" type="text" />
          <Input label="Email address" placeholder="Abc@def.com" type="email" />
          <Input label="Subject" placeholder="This is optional" type="text" />
          <Input
            label="Subject"
            placeholder="Hi! i’d like to ask about"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default form;
