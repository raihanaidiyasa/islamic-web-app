// app/khutbah/page.js
"use client";

import React, { useState } from 'react';
import styles from './khutbah.module.css'; // Pastikan path ini benar dan file ini ada

export default function HalamanKhutbah() {
  const [isMuqaddimahOpen, setIsMuqaddimahOpen] = useState(false);
  const [isKhutbahPertamaOpen, setIsKhutbahPertamaOpen] = useState(false);

   const contohTeksMuqaddimah = `
    إنَّ الـحَمْدَ لِلّهِ نَـحْمَدُهُ وَنَسْتَعِيْنُهُ وَنَسْتَغْفِرُهُ، وَنَعُوْذُ بِاللهِ مِنْ شُرُوْرِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا، مَنْ يَهْدِهِ اللهُ فَلَا مُضِلَّ لَهُ، وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ، 
    وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُـحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.
    يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ.
    يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا.
    يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا.
    أَمَّا بَعْدُ؛ فَإِنَّ أَصْدَقَ الْحَدِيثِ كِتَابُ اللهِ، وَخَيْرَ الْهَدْيِ هَدْيُ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَشَرَّ الْأُمُورِ مُحْدَثَاتُهَا، وَكُلَّ مُحْدَثَةٍ بِدْعَةٌ، وَكُلَّ بِدْعَةٍ ضَلَالَةٌ، وَكُلَّ ضَلَالَةٍ فِي النَّارِ.
  `;

  const contohTeksKhutbahPertama = `
    Hadirin jamaah Jum'at yang dirahmati Allah,
    Pada kesempatan yang mulia ini, marilah kita senantiasa meningkatkan ketakwaan kita kepada Allah Subhanahu wa Ta'ala, dengan menjalankan segala perintah-Nya dan menjauhi segala larangan-Nya.
    Tema khutbah kita hari ini adalah tentang pentingnya menjaga lisan... (lanjutkan isi khutbah)
  `;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Panduan dan Contoh Khutbah Jum'at</h1> {/* Asumsi teks judul putih untuk tema gelap */}

      {/* Bagian Muqaddimah */}
      <div className="mb-4 border border-gray-700 rounded-lg overflow-hidden"> {/* Styling pembungkus jika perlu */}
        <button
          onClick={() => setIsMuqaddimahOpen(!isMuqaddimahOpen)}
          // Terapkan kelas dari CSS Module di sini
          className={styles.accordionButton}
        >
          Muqaddimah Khutbah
          {/* Ganti classname untuk span jika ada styling khusus di CSS Module */}
          <span className={isMuqaddimahOpen ? styles.arrowUp : styles.arrowDown}>{isMuqaddimahOpen ? '▲' : '▼'}</span>
        </button>
        {isMuqaddimahOpen && (
          // Terapkan kelas dari CSS Module di sini
          // Gabungkan kelas jika perlu, contoh: ${styles.accordionContent} ${styles.arabicText}
          <div className={`${styles.accordionContent} ${styles.arabicText}`}>
            {contohTeksMuqaddimah}
          </div>
        )}
      </div>

      {/* Bagian Khutbah Pertama */}
      <div className="mb-4 border border-gray-700 rounded-lg overflow-hidden">
        <button
          onClick={() => setIsKhutbahPertamaOpen(!isKhutbahPertamaOpen)}
          className={styles.accordionButton} // Terapkan kelas
        >
          Isi Khutbah Pertama
          <span className={isKhutbahPertamaOpen ? styles.arrowUp : styles.arrowDown}>{isKhutbahPertamaOpen ? '▲' : '▼'}</span>
        </button>
        {isKhutbahPertamaOpen && (
          <div className={styles.accordionContent}> {/* Terapkan kelas */}
            {contohTeksKhutbahPertama}
          </div>
        )}
      </div>

      {/* ... (Rukun Khutbah Jum'at) ... */}
      {/* Jika rukun khutbah juga ingin di-style via CSS Modules, buat kelasnya */}
      <div className={`mt-8 p-4 border border-gray-700 rounded-lg ${styles.rukunContainer}`}> {/* Contoh kelas tambahan */}
        <h2 className={`text-xl font-semibold mb-3 ${styles.rukunTitle}`}>Rukun Khutbah Jum'at</h2>
        <ol className={`list-decimal list-inside ${styles.rukunList}`}>
          {/* ... item list ... */}
        </ol>
      </div>
    </div>
  );
}