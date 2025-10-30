import styles from './input.module.scss';
// import '@fontsource/poppins';

function Input({ label, placeholder, type = 'text'}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
