import styles from "./style.module.scss";

export function TotalSection({ financeList }) {
  let depositTotal = financeList
    .filter((transition) => transition.valueType == "Entrada")
    .map((element) => Number(element.value))
    .reduce((total, currentValue) => total + currentValue, 0);

  let withdrawTotal = financeList
    .filter((transition) => transition.valueType == "Despesa")
    .map((element) => Number(element.value))
    .reduce((total, currentValue) => total + currentValue, 0);

  let totalValue = depositTotal - withdrawTotal;

  return (
    <section>
      <div className="container">
        {financeList.length > 0 ? (
          <div className={styles.totalBox}>
            <div className={styles.totalLeftSide}>
              <h2 className="title2">Valor total</h2>
              <p className="paragraph">O valor se refere ao saldo</p>
            </div>
            <h2 className="title2 pink">
              {totalValue.toLocaleString("pt-Br", {style: "currency", currency: "BRL"})}
            </h2>
          </div>
        ) : null}
      </div>
    </section>
  );
}
