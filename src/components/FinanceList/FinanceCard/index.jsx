import styles from "./style.module.scss";

export function FinanceCard({ transition }) {
  
  return (
    <li className={transition.valueType == "Entrada" ? `${styles.card} ${styles.deposit}` : `${styles.card} ${styles.withdraw}`}>
      <div className={styles.cardTop}>
        <h2 className="title2">{transition.description}</h2>
        <p className="paragraph">{transition.valueType}</p>
      </div>
      <div className={styles.cardBottom}>
        <p className="paragraph">{Number(transition.value).toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</p>
        <button>Excluir</button>
      </div>
    </li>
  );
}
