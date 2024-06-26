import {FinanceForm} from "../FinanceForm";
import {FinanceList} from "../FinanceList";
import styles from "./style.module.scss";

export function FinanceSetion() {
  return (
    <section className="container">
      <div>
        <div className={styles.flexBox}>
            <FinanceForm/>
            <FinanceList/>
        </div>
      </div>
    </section>
  );
}
