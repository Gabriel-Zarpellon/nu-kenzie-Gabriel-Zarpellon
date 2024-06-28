import { FinanceCard } from "./FinanceCard";
import styles from "./style.module.scss";

export function FinanceList({ financeList, deleteTransition}) {
  return (
    <section className="container">
      <div className={styles.flexBox}>
        <h2 className="title2">Resumo financeiro</h2>
        <div>
          {financeList.length > 0 ? (
            <ul className={styles.financeList}>
              {financeList.map((transition) => (
                <FinanceCard key={transition.id} transition={transition} deleteTransition={deleteTransition}/>
              ))}
            </ul>
          ) : (
            <h1 className="title1">Você ainda não possui nenhum lançamento</h1>
          )}
        </div>
      </div>
    </section>
  );
}
