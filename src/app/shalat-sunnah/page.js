"use client";

import React, { useState } from "react";
import styles from "./sholatSunnah.module.css";
import { sholatSunnahContent } from "./sholatSunnahContent";

/* =====================================
   DETAIL ACCORDION (A / B / C)
===================================== */

function DetailAccordion({ label, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.detailAccordion}>
      <button
        className={styles.detailHeader}
        onClick={() => setOpen(!open)}
      >
        <span>{label}</span>
        <span
          className={`${styles.detailIcon} ${
            open ? styles.rotate : ""
          }`}
        >
          ▼
        </span>
      </button>

      {open && (
        <div
          className={styles.detailContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </div>
  );
}

/* =====================================
   MAIN SECTION ACCORDION
===================================== */

function ExpandableSection({ titleNumber, title, section }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.expandableSection}>
      <button
        className={styles.sectionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.titleWrapper}>
          <span className={styles.sectionTitleNumber}>
            {titleNumber}
          </span>
          <span className={styles.sectionTitleText}>
            {title}
          </span>
        </div>

        <span
          className={`${styles.expandIcon} ${
            isOpen ? styles.rotate : ""
          }`}
        >
          ▼
        </span>
      </button>

      {isOpen && (
        <div className={styles.sectionContentInner}>
          
          {/* DETAIL A B C */}
          {section.details &&
            section.details.map((item, index) => (
              <DetailAccordion
                key={index}
                label={item.label}
                content={item.content}
              />
            ))}

          {/* CATATAN */}
          {section.contohTeks && (
            <div className={styles.catatanBox}>
              <h4 className={styles.catatanTitle}>
                {section.contohTeks.title}
              </h4>
              <p className={styles.catatanText}>
                {section.contohTeks.text}
              </p>
            </div>
          )}

        </div>
      )}
    </div>
  );
}

/* =====================================
   PAGE
===================================== */

export default function HalamanSholatSunnah() {
  const data = sholatSunnahContent;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContentArea}>

        <header className={styles.pageHeader}>
          <h1>{data.mainTitle}</h1>
        </header>

        {data.introParagraphs.map((text, index) => (
          <p key={index} className={styles.introText}>
            {text}
          </p>
        ))}

        <div className={styles.sectionsContainer}>
          {data.sections.map((section) => (
            <ExpandableSection
              key={section.id}
              titleNumber={section.titleNumber}
              title={section.title}
              section={section}
            />
          ))}
        </div>

        {data.hakCipta && (
          <footer className={styles.pageFooter}>
            {data.hakCipta}
          </footer>
        )}

      </div>
    </div>
  );
}
