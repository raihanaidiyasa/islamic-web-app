// app/khutbah/page.js
"use client";

import React, { useState } from 'react';
import styles from './khutbah.module.css'; // Kita akan buat CSS baru/rombak total
import { tataCaraKhutbah } from './khutbahContent.js';

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
      {/* BARU: Konten selalu dirender, visibilitas dikontrol oleh CSS dan kelas dinamis */}
      <div
        className={`${styles.sectionContent} ${isOpen ? styles.sectionContentOpen : ''}`}
      >
        {/* BARU: Wrapper tambahan di dalam untuk padding yang lebih baik saat transisi,
            atau untuk memastikan konten tidak terpotong aneh oleh max-height.
            Ini juga membantu jika ada border-top yang ingin dianimasikan terpisah.
        */}
        <div className={styles.sectionContentInner}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function HalamanKhutbah() {
  const data = tataCaraKhutbah;

  // Helper untuk merender detail konten (poin, dalil, contohTeks, dll.)
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
      {section.dalil && (
        <div className={styles.dalilContainer}>
          <h4 className={styles.subSectionTitle}>{section.dalil.title}</h4>
          <p>{section.dalil.text}</p>
        </div>
      )}
      {section.contohTema && (
        <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohTema.title}</h4>
          <p>{section.contohTema.text}</p>
        </div>
      )}
      {section.contohTeks && (
        <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohTeks.title}</h4>
          {section.contohTeks.description && <p className={styles.contohDescription}>{section.contohTeks.description}</p>}
          <div className={`${styles.actualText} ${section.contohTeks.isArabic ? styles.arabicText : ''}`}
               dangerouslySetInnerHTML={{ __html: section.contohTeks.text }} />
        </div>
      )}
      {section.contohDoa && (
         <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohDoa.title}</h4>
          {section.contohDoa.description && <p className={styles.contohDescription}>{section.contohDoa.description}</p>}
          <div className={`${styles.actualText} ${section.contohDoa.isArabic ? styles.arabicText : ''}`}
               dangerouslySetInnerHTML={{ __html: section.contohDoa.text }} />
        </div>
      )}
       {section.contohDoaUntukUmat && (
         <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohDoaUntukUmat.title}</h4>
          {section.contohDoaUntukUmat.description && <p className={styles.contohDescription}>{section.contohDoaUntukUmat.description}</p>}
          <div className={`${styles.actualText} ${section.contohDoaUntukUmat.isArabic ? styles.arabicText : ''}`}
               dangerouslySetInnerHTML={{ __html: section.contohDoaUntukUmat.text }} />
        </div>
      )}
        {section.contohDoaPenutup && (
         <div className={styles.contohContainer}>
          <h4 className={styles.subSectionTitle}>{section.contohDoaPenutup.title}</h4>
          {section.contohDoaPenutup.description && <p className={styles.contohDescription}>{section.contohDoaPenutup.description}</p>}
          <div className={`${styles.actualText} ${section.contohDoaPenutup.isArabic ? styles.arabicText : ''}`}
               dangerouslySetInnerHTML={{ __html: section.contohDoaPenutup.text }} />
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
      {/* Bagian untuk gambar di sisi kanan bisa ditambahkan di sini jika diinginkan */}
      {/* <aside className={styles.sideImageContainer}>
        <img src="/path/to/your/mosque-image.jpg" alt="Mosque Interior" />
      </aside> */}
    </div>
  );
}