import React from "react";
import styles from "./LandingPage.module.css";
import HoverUnderLine from "../../Components/HoverUnderLine";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <nav className={styles.navigation}>
          <a className={styles.nav}><HoverUnderLine>Sobre</HoverUnderLine></a>
          <a className={styles.nav}><HoverUnderLine>Projetos</HoverUnderLine></a>
          <a className={styles.nav}><HoverUnderLine>Conhecimentos</HoverUnderLine></a>
          <a className={styles.nav}><HoverUnderLine>Contanto</HoverUnderLine></a>
        </nav>
      </div>

    </div>
  );
}
