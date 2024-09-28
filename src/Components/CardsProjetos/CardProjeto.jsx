import React from "react";
import styles from "../CardsProjetos/CardProjeto.module.css";

export default function CardProjeto({ title, description }) {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
