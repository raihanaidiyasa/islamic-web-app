// app/khutbah/page.js
"use client";

import React, { useState, useEffect } from 'react';
import styles from './khutbah.module.css'; // Pastikan file ini ada dan diisi

// Komponen untuk Kartu Modal
function KhutbahModalCard({ khutbah, isOpen, onClose }) {
  const [copySuccess, setCopySuccess] = useState(''); // HOOK 1: State untuk pesan copy

  // HOOK 2: Efek untuk mereset pesan copy saat modal dibuka/ditutup
  useEffect(() => {
    if (isOpen) {
      setCopySuccess(''); // Reset pesan saat modal dibuka
    }
  }, [isOpen]); // Bergantung pada isOpen

  // HOOK 3: Efek untuk mengunci/melepas scroll body
  // Pindahkan ini SEBELUM return kondisional
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Kunci scroll saat modal terbuka
    } else {
      document.body.style.overflow = 'unset'; // Lepas kunci scroll saat modal tertutup
    }
    // Fungsi cleanup: pastikan scroll dilepas saat komponen di-unmount atau sebelum efek berjalan lagi
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]); // Bergantung pada isOpen

  // Setelah SEMUA hooks dipanggil, baru kita bisa melakukan return kondisional
  if (!isOpen || !khutbah) {
    // Meskipun efek scroll body berjalan, jika isOpen false, ia akan mengatur overflow ke 'unset'.
    // Jadi ini aman.
    return null;
  }

  // Fungsi untuk menyalin teks (tetap sama)
  const handleCopy = () => {
    const plainTextContent = khutbah.content.replace(/<br\s*\/?>/gi, "\n").replace(/<[^>]*>?/gm, '');
    navigator.clipboard.writeText(plainTextContent).then(() => {
      setCopySuccess('Teks disalin!');
      setTimeout(() => setCopySuccess(''), 2000);
    }).catch(err => {
      setCopySuccess('Gagal menyalin.');
      console.error('Gagal menyalin teks: ', err);
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className={styles.closeButton} aria-label="Tutup">
          &times;
        </button>
        <h2 className={styles.modalTitle}>{khutbah.title}</h2>
        <div className={`${styles.modalContent} ${khutbah.arabicContent ? styles.arabicTextModal : styles.normalTextModal}`}>
          <div dangerouslySetInnerHTML={{ __html: khutbah.arabicContent ? khutbah.content : khutbah.content.replace(/\n/g, '<br />') }} />
        </div>
        <div className={styles.modalActions}>
          <button onClick={handleCopy} className={styles.copyButtonModal}>
            Salin Teks
          </button>
          {copySuccess && <span className={styles.copySuccessMessageModal}>{copySuccess}</span>}
        </div>
      </div>
    </div>
  );
}

// Komponen utama halaman Khutbah
export default function HalamanKhutbah() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedKhutbah, setSelectedKhutbah] = useState(null);

  // Contoh data khutbah (sama seperti sebelumnya)
  const khutbahData = [
    {
      id: 'muqaddimah',
      title: 'Muqaddimah Khutbah',
      preview: 'Pembukaan khutbah, pujian kepada Allah, shalawat, dan wasiat takwa.',
      arabicContent: true,
      content: `إنَّ الـحَمْدَ لِلّهِ نَـحْمَدُهُ وَنَسْتَعِيْنُهُ وَنَسْتَغْفِرُهُ، وَنَعُوْذُ بِاللهِ مِنْ شُرُوْرِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا، مَنْ يَهْدِهِ اللهُ فَلَا مُضِلَّ لَهُ، وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ،<br />وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُـحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.<br />يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ.<br />يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا.<br />يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا.<br />أَمَّا بَعْدُ؛ فَإِنَّ أَصْدَقَ الْحَدِيثِ كِتَابُ اللهِ، وَخَيْرَ الْهَدْيِ هَدْyُ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَشَرَّ الْأُمُورِ مُحْدَثَاتُهَا، وَكُلَّ مُحْدَثَةٍ بِدْعَةٌ، وَكُلَّ بِدْعَةٍ ضَلَالَةٌ، وَكُلَّ ضَلَالَةٍ فِي النَّارِ.`
    },
    {
      id: 'khutbah_pertama',
      title: 'Isi Khutbah Pertama',
      preview: 'Wasiat takwa dan pembahasan tema utama khutbah.',
      arabicContent: false,
      content: `Hadirin jamaah Jum'at yang dirahmati Allah,\nPada kesempatan yang mulia ini, khatib berwasiat kepada diri khatib pribadi dan kepada seluruh jamaah sekalian, marilah kita senantiasa meningkatkan kualitas iman dan takwa kita kepada Allah Subhanahu wa Ta'ala dengan sebenar-benar takwa, yaitu dengan menjalankan segala perintah-Nya dan menjauhi segala larangan-Nya.\n\nSalah satu aspek penting dalam kehidupan seorang muslim adalah menjaga lisannya. Lisan adalah amanah yang akan dimintai pertanggungjawaban. Rasulullah SAW bersabda: "Barangsiapa yang beriman kepada Allah dan hari akhir, maka hendaklah ia berkata baik atau diam." (HR. Bukhari Muslim).\n\nPerkataan yang baik akan mendatangkan kebaikan, sebaliknya perkataan yang buruk dapat menimbulkan kerusakan dan permusuhan. Oleh karena itu, marilah kita berpikir sebelum berbicara, memastikan bahwa apa yang kita ucapkan adalah sesuatu yang bermanfaat dan tidak menyakiti orang lain.`
    },
    {
      id: 'duduk',
      title: 'Duduk di Antara Dua Khutbah',
      preview: 'Istirahat sejenak dan membaca doa.',
      arabicContent: false,
      content: `Setelah menyampaikan khutbah pertama, khatib duduk sejenak untuk istirahat dan membaca doa.\nDoa yang biasa dibaca: رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا (Rabbighfir lī wa liwālidayya warhamhumā kamā rabbayānī ṣaghīrā).`
    },
    // Tambahkan item khutbah lainnya di sini dengan properti 'preview'
  ];

  const handleOpenModal = (khutbah) => {
    setSelectedKhutbah(khutbah);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Tidak perlu setSelectedKhutbah(null) di sini agar animasi fade out (jika ada) tetap punya data
    // Data akan di-reset saat modal dibuka lagi.
  };


  return (
    <div className={styles.pageContainerKhutbah}>
      <h1 className={styles.pageTitleKhutbah}>Panduan dan Contoh Khutbah Jum'at</h1>

      <p className={styles.carouselIntro}>Pilih bagian khutbah untuk dibaca:</p>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselTrack}>
          {khutbahData.map(item => (
            <div key={item.id} className={styles.carouselItem} onClick={() => handleOpenModal(item)}>
              <h3 className={styles.carouselItemTitle}>{item.title}</h3>
              <p className={styles.carouselItemPreview}>{item.preview}</p>
            </div>
          ))}
        </div>
      </div>

      <KhutbahModalCard
        khutbah={selectedKhutbah}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}