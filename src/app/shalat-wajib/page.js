"use client";

import React, { useState } from 'react';
import styles from './shalat-wajib.module.css';
import { shalatData } from './shalatContent.js';

function Accordion({ title, children, number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.accordionHeader} aria-expanded={isOpen}>
        <span className={styles.accordionNumber}>{number}</span>
        <span className={styles.accordionTitle}>{title}</span>
        <span className={`${styles.accordionIcon} ${isOpen ? styles.open : ''}`}></span>
      </button>
      <div className={`${styles.accordionCollapse} ${isOpen ? styles.show : ''}`}>
        <div className={styles.accordionBody}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HalamanShalatWajib() {
  const { title, introduction, pengertianSholat, niatSection, tataCaraSection } = shalatData;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
            <h1>{title}</h1>
            <p>{introduction}</p>
        </div>
      </div>

      <main className={styles.mainContent}>
        <section className={styles.section}>
          <h2>{pengertianSholat.title}</h2>
          <div>
            {pengertianSholat.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            <ol>
              {pengertianSholat.rukunIslam.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>

            <p>{pengertianSholat.conclusion}</p>
          </div>
        </section>


        
        <section className={styles.section}>
          <h2>{niatSection.title}</h2>
          <p className={styles.sectionDescription}>{niatSection.description}</p>
          <div className={styles.niatGrid}>
            {niatSection.niatList.map((niat, index) => (
              <div key={index} className={styles.niatCard}>
                <h3>{niat.name}</h3>
                <p className={styles.arabicText}>{niat.arabic}</p>
                <p className={styles.latinText}><em>{niat.latin}</em></p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{tataCaraSection.title}</h2>
          <div className={styles.accordionContainer}>
            {tataCaraSection.steps.map((step, index) => (
              <Accordion key={index} title={step.name} number={index + 1}>
                <p className={styles.stepDescription}>{step.description}</p>
                <div className={styles.bacaan}>
                  <p className={`${styles.arabicText} ${styles.bacaanArabic}`}>{step.arabic}</p>
                  <p className={styles.latinText}><em>{step.latin}</em></p>
                  <p className={styles.translation}>"{step.translation}"</p>
                </div>
              </Accordion>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}