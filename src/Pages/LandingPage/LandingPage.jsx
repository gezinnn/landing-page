import React from "react";
import styles from "./LandingPage.module.css";
import HoverUnderLine from "../../Components/HoverUnderLine";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <nav className={styles.navigation}>
          <a className={styles.nav}>
            <HoverUnderLine>Sobre</HoverUnderLine>
          </a>
          <a className={styles.nav}>
            <HoverUnderLine>Projetos</HoverUnderLine>
          </a>
          <a className={styles.nav}>
            <HoverUnderLine>Conhecimentos</HoverUnderLine>
          </a>
          <a className={styles.nav}>
            <HoverUnderLine>Contato</HoverUnderLine>
          </a>
        </nav>
      </div>

      <div className={styles.contentMain}>
        <div className={styles.picture}></div>
        <div className={styles.text}>
          <p className={styles.sobremim}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            nobis deleniti facilis mollitia doloribus! Quaerat, deserunt
            delectus. Atque distinctio aliquam aperiam corporis, necessitatibus
            amet explicabo laborum, ducimus sapiente exercitationem molestiae
          </p>
          <p className={styles.sobremim}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            nobis deleniti facilis mollitia doloribus! Quaerat, deserunt
            delectus. Atque distinctio aliquam aperiam corporis, necessitatibus
            amet explicabo laborum, ducimus sapiente exercitationem molestiae
          </p>
          <p className={styles.sobremim}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            nobis deleniti facilis mollitia doloribus! Quaerat, deserunt
            delectus. Atque distinctio aliquam aperiam corporis, necessitatibus
            amet explicabo laborum, ducimus sapiente exercitationem molestiae
          </p>
        </div>
      </div>
      <section className={styles.projetos}>
        <p className={styles.title}>Projetos</p>
      </section>
      <section className={styles.sec2}></section>
    </div>
  );
}
