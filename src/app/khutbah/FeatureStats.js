"use client";
import styles from "./khutbah.module.css";

export default function FeatureStats() {
  return (
    <section className={styles.stats}>
      <div className={styles.statCard} role="img" aria-label="4 Topik Utama">
        <h3>4</h3>
        <p>Topik Utama</p>
      </div>
      {/* <div className={styles.statCard} role="img" aria-label="Interaktif Accordion System">
        <h3>Interaktif</h3>
        <p>Accordion System</p>
      </div> */}
      <div className={styles.statCard} role="img" aria-label="Edukatif Berbasis Fiqih">
        <h3>Edukatif</h3>
        <p>Berbasis Fiqih</p>
      </div>
    </section>
  );
}
