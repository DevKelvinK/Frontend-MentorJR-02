import styles from "./Header.module.css";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logotipo Fylo" />

      <nav>
        <a href="#features">Features</a>
        <a href="#team">Team</a>
        <a href="#signIn">Sign In</a>
      </nav>
    </header>
  );
}
