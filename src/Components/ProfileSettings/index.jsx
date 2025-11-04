import Input from "../Input/index"
import Buttons from "../Button/button"
import styles from "./profileSettings.module.scss"


function ProfileSettings() {
  return (
    <div className={styles.container}>
        <div>
            <img src="assets/furniture/pp.png" alt="pp"/>
        </div>
     <Input label="Your name" placeholder="John Doe" type="text" />
          <Input label="Email address" placeholder="Abc@def.com" type="email" />
          <Input label="Password" placeholder="*******" type="password" />
          <Buttons text = "Save" variant = 'primary' />
    </div>
  )
}

export default ProfileSettings
