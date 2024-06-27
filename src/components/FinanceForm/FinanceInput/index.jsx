
import styles from "./style.module.scss";
export function FinanceInput({ label, type, name, value, placeholder, min, setValue, step}) {


  return (
    <div className={styles.inputContainer}>
      <label className="label" htmlFor={name}>{label}</label>
      <input className="input" type={type} name={name} value={value} step={step} placeholder={placeholder} min={min} onChange={(e) => setValue(e.target.value)} required/>
    </div>
  );
}
