import styles from "./style.module.scss";

export function FinanceCard() {
  return (
    <li className={styles.card}>
      <div className={styles.cardTop}>
        <h2 className="title2">Salário - Mês Dezembro</h2>
        <p className="paragraph">Entrada</p>
      </div>
      <div className={styles.cardBottom}>
        <p className="paragraph">R$ 6.660,00</p>
        <button>Excluir</button>
      </div>
    </li>
  );
}
