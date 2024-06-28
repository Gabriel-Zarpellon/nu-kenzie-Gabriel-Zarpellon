import styles from "./style.module.scss";

export function FinanceSelect({label, name, value, setValue, children}) {
  return (
    <div className={styles.inputContainer}>
      <label className="label" htmlFor={name}>{label}</label>
      <select className="input" name={name} value={value} onChange={(e) => setValue(e.target.value)}>
        {children}
      </select>
    </div>
  );
}
