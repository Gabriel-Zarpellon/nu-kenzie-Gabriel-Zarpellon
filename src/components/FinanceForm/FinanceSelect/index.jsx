import styles from "./style.module.scss";

export function FinanceSelect({label, name, value, setValue}) {
  return (
    <div className={styles.inputContainer}>
      <label className="label" htmlFor={name}>{label}</label>
      <select className="input" name={name} value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
    </div>
  );
}
