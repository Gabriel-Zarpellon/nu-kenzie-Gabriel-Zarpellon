import { useState } from "react";
import { FinanceForm } from "../FinanceForm";
import { FinanceList } from "../FinanceList";
import styles from "./style.module.scss";
import { TotalSection } from "../TotalSection";

export function FinanceSetion() {
  let [description, setDescription] = useState("");
  let [value, setValue] = useState("");
  let [valueType, setValueType] = useState("Entrada");

  let [financeList, setFinanceList] = useState([]);

  function submit(e) {
    e.preventDefault();
    let newItem = [
      ...financeList,
      {
        id: crypto.randomUUID(),
        description: description,
        value: value,
        valueType: valueType,
      },
    ];
    setFinanceList(newItem);
    setDescription("");
    setValue("");
    setValueType("Entrada");
  }

  function deleteTransition(deletingId){
    event.preventDefault();
    
    setFinanceList((financeList) => financeList.filter(transition => transition.id !== deletingId))
  }

  return (
    <section className="container">
      <div className={styles.flexBox}>
        <div>
          <FinanceForm
            setDescription={setDescription}
            setValue={setValue}
            setValueType={setValueType}
            description={description}
            value={value}
            valueType = {valueType}
            submit={submit}
          />

          <TotalSection financeList={financeList} />
        </div>

        <div className={styles.flexBox}>
          <FinanceList financeList={financeList} deleteTransition={deleteTransition}/>
        </div>
      </div>
    </section>
  );
}
