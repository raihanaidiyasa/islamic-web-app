// app/zakat/page.js
"use client";

import React, { useState } from 'react';
import styles from './zakat.module.css';
import { panduanZakat } from './zakatContent.js';

function ExpandableSection({ titleNumber, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.expandableSection}>
      <button
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles.sectionTitleNumber}>{titleNumber}</span>
        <span className={styles.sectionTitleText}>{title}</span>
        <span className={styles.expandIcon}></span>
      </button>
      <div
        className={`${styles.sectionContent} ${isOpen ? styles.sectionContentOpen : ''}`}
      >
        <div className={styles.sectionContentInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HalamanZakat() {
  const data = panduanZakat;

  const renderSectionDetails = (section) => (
    <>
      {section.description && <p className={styles.sectionDescription}>{section.description}</p>}
      {section.details && section.details.length > 0 && (
        <ul className={styles.pointList}>
          {section.details.map((item, index) => (
            <li key={index} className={styles.pointItem}>{item.text}</li>
          ))}
        </ul>
      )}
      {section.subSections && section.subSections.length > 0 && (
        section.subSections.map((sub, index) => (
          <div key={index} className={styles.subSectionBlock}>
            <h4>{sub.title}</h4>
            <p>{sub.text}</p>
          </div>
        ))
      )}
      {section.dalil && (
        <div className={styles.dalilContainer}>
          <h4 className={styles.subSectionTitle}>{section.dalil.title}</h4>
          <p>{section.dalil.text}</p>
        </div>
      )}
    </>
  );

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContentArea}>
        <header className={styles.pageHeader}>
          <h1>{data.mainTitle}</h1>
        </header>
        <article className={styles.articleBody}>
          {data.introParagraphs.map((p, index) => (
            <p key={index} className={styles.introText}>{p}</p>
          ))}
          {data.mainQuote && (
            <blockquote className={styles.mainQuote}>
              <p>"{data.mainQuote.text}"</p>
              <footer>- {data.mainQuote.source}</footer>
            </blockquote>
          )}

          <div className={styles.sectionsContainer}>
            {data.sections.map(section => (
              <ExpandableSection key={section.id} titleNumber={section.titleNumber} title={section.title}>
                {renderSectionDetails(section)}
              </ExpandableSection>
            ))}
          </div>

          {data.sumberReferensi && (
            <section className={styles.footerSection}>
              <h2 className={styles.footerTitle}>{data.sumberReferensi.title}</h2>
              <p>{data.sumberReferensi.text}</p>
            </section>
          )}
          {data.hakCipta && (
            <footer className={styles.pageFooter}>
              <p>{data.hakCipta}</p>
            </footer>
          )}
        </article>
      </div>
    </div>
  );
}