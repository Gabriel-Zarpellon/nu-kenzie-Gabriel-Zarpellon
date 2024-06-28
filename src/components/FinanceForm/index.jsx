import { FinanceInput } from "./FinanceInput";
import { FinanceSelect } from "./FinanceSelect";
import styles from "./style.module.scss";

export function FinanceForm({
  description,
  setDescription,
  value,
  setValue,
  valueType,
  setValueType,
  submit,
}) {
  return (
    <div className="container">
      <form className={styles.form} onSubmit={submit}>
        <FinanceInput
          label="Descrição"
          type="text"
          name="description"
          value={description}
          placeholder="Digite aqui sua descrição"
          setValue={setDescription}
        />
        <p className="paragraph faded">Ex: Compra de roupas</p>

        <FinanceInput
          label="Valor (R$)"
          type="number"
          name="value"
          value={value}
          step="0.01"
          placeholder="1"
          min="0.01"
          setValue={setValue}
        />

        <FinanceSelect
          label="Tipo de valor"
          name="valueType"
          value={valueType}
          setValue={setValueType}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </FinanceSelect>

        <button type="submit">Inserir Valor</button>
      </form>
    </div>
  );
}
