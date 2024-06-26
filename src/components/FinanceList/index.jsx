import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export function FinanceList() {
  return (
    <section className="container">
      
        <div>
          <h2 className="title2">Resumo financeiro</h2>
          {/* <div>
                <h1 className="title1">Você ainda não possui nenhum lançamento</h1>
            </div> */}
          <ul className={styles.financeList}>
            <FinanceCard />
            <FinanceCard />
            <FinanceCard />
          </ul>
        </div>
      
    </section>
  );
}
