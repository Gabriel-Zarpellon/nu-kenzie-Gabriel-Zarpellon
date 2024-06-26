import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.logoBox}>
        <img src={Logo} alt="Logo Nu Kenzie" />
        </div>
      </div>
    </header>
  );
}
