import Input from "../Input";
import styles from './billingdetails.module.scss';


const BillingDetailsForm = () => {
    return (
        <div className={styles.formContainer}>
            <h2 className={styles.heading}>
                Billing details
            </h2>
            <form className={styles.formCard}>
                <div className={styles.name}>
                    <Input label="First Name"/>
                    <Input label="Last Name"/>
                </div>
                <Input label="Company Name (Optional)"/>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Country / Region</label>
                    <select className={styles.select}>
                        <option value="sri-lanka">Sri Lanka</option>
                    </select>
                </div>
                <Input label="Street address"/>
                <Input label="Town / City"/>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Province</label>
                    <select className={styles.select}>
                        <option value="western-province">Western Province</option>
                    </select>
                </div>
                <Input label="ZIP code"/>
                <Input label="Phone" type="tel" />
                <Input label="Email address"type="email" />
                <button type="button" className={styles.additionalInfoButton}>
                    Additional information
                </button>
            </form>
        </div>
    );
}

export default BillingDetailsForm