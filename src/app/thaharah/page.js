"use client";

import React, { useState } from "react";
import styles from "./thaharah.module.css";
import { tataCaraThaharah } from "./thaharahContent.js";

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
        className={`${styles.sectionContent} ${
          isOpen ? styles.sectionContentOpen : ""
        }`}
      >
        <div className={styles.sectionContentInner}>{children}</div>
      </div>
    </div>
  );
}

export default function HalamanKhutbah() {
  const data = tataCaraThaharah;

  const renderSectionDetails = (section) => (
    <>
      {section.description && (
        <p className={styles.sectionDescription}>{section.description}</p>
      )}
      {section.details && (
        <ul className={styles.pointList}>
          {section.details.map((item, index) => (
            <li key={index} className={styles.pointItem}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
      {section.dalil && (
        <div className={styles.dalilContainer}>
          <h4 className={styles.subSectionTitle}>{section.dalil.title}</h4>
          <p>{section.dalil.text}</p>
        </div>
      )}
      {section.contohTeks && (
        <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohTeks.title}</h4>
          {section.contohTeks.description && (
            <p className={styles.contohDescription}>
              {section.contohTeks.description}
            </p>
          )}
          <div
            className={`${styles.actualText} ${
              section.contohTeks.isArabic ? styles.arabicText : ""
            }`}
            dangerouslySetInnerHTML={{ __html: section.contohTeks.text }}
          />
        </div>
      )}
      {section.contohTema && (
        <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohTema.title}</h4>
          <p>{section.contohTema.text}</p>
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
          {data.contentBlocks.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <div key={index} className={styles.paragraphBlock}>
                  {block.title && (
                    <h3 className={styles.paragraphTitle}>{block.title}</h3>
                  )}
                  <p className={styles.introText}>{block.text}</p>
                </div>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={index} className={styles.mainQuote}>
                  <p>"{block.text}"</p>
                  <footer>- {block.source}</footer>
                </blockquote>
              );
            }
            if (block.type === "list") {
              return (
                <div key={index} className={styles.introText}>
                  <p>{block.text}</p>
                  {block.points && block.points.length > 0 && (
                    <ol className={styles.pointList}>
                      {block.points.map((point, i) => (
                        <li key={i} className={styles.pointItem}>
                          {point}
                        </li>
                      ))}
                    </ol>
                  )}
                </div>
              );
            }
            return null;
          })}

          <div className={styles.sectionsContainer}>
            {data.sections.map((section) => (
              <ExpandableSection
                key={section.id}
                titleNumber={section.titleNumber}
                title={section.title}
              >
                {renderSectionDetails(section)}
              </ExpandableSection>
            ))}
          </div>

          {data.sumberReferensi && (
            <section className={styles.footerSection}>
              <h2 className={styles.footerTitle}>
                {data.sumberReferensi.title}
              </h2>
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
