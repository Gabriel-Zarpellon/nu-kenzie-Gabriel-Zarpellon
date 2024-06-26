import { TotalSection } from "../TotalSection";
import { FinanceInput } from "./FinanceInput";
import styles from "./style.module.scss";

export function FinanceForm() {
  return (
    <div className={styles.sectionLeft}>
      <div className="container">
        <form className={styles.form}>
          <div className={styles.inputContainer}>
            <FinanceInput label="Descrição" type="text" name="description" placeholder="Digite aqui sua descrição"/>
            <p className="paragraph faded">Ex: Compra de roupas</p>
          </div>

          <div className={styles.inputContainer}>
          <FinanceInput label="Valor (R$)" type="number" name="value" placeholder="1" min="1"/>
          </div>

          <div className={styles.inputContainer}>
            <label className="label" htmlFor="valueType">Tipo de valor</label>
            <select className="input" name="valueType">
              <option value="entrada" selected>Entrada</option>
              <option value="despesa">Despesa</option>
            </select>
          </div>
          <button>Inserir Valor</button>
        </form>
      </div>
      <TotalSection />
    </div>
  );
}
