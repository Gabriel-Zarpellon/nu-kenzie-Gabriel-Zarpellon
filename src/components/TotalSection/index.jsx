import styles from "./style.module.scss";

export function TotalSection() {
  return (
    <section>
      <div className="container">
        <div className={styles.totalBox}>
          <div className={styles.totalLeftSide}>
            <h2 className="title2">Valor total</h2>
            <p className="paragraph">O valor se refere ao saldo</p>
          </div>
          <h2 className={`title2 ${styles.pinkTitle}`}>R$ 8184,00</h2>
        </div>
      </div>
    </section>
  );
}
