// app/khutbah/khutbahContent.js

export const tataCaraKhutbah = {
  mainTitle: "Tata Cara Khutbah: Panduan Lengkap",
  introParagraphs: [
    "Khutbah adalah bagian penting dari shalat Jumat bagi umat Muslim, bertujuan memberikan nasihat, mengingatkan ajaran Islam, dan memperkuat iman. Setiap Muslim wajib mengikuti Khutbah ini."
  ],
  mainQuote: {
    text: "Allah SWT berfirman dalam QS. Al-Jumu’ah ayat 9: “Wahai orang-orang yang beriman! Apabila diseru untuk melaksanakan shalat pada hari Jumat, maka bersegeralah mengingat Allah dan tinggalkanlah jual beli. Yang demikian itu lebih baik bagimu jika kamu mengetahui.”",
    source: "QS. Al-Jumu'ah ayat 9"
  },
  sections: [
    {
      id: 'muqaddimah',
      titleNumber: 'A.',
      title: 'Muqaddimah Khutbah (Pembukaan)',
      description: 'Muqaddimah atau pembukaan Khutbah mencakup:',
      details: [ // Bisa berupa string atau objek untuk formatting lebih lanjut
        { type: 'point', text: 'Salam (Assalamualaikum Warahmatullahi Wabarakatuh)' },
        { type: 'point', text: 'Pujian kepada Allah (Alhamdulillah)' },
        { type: 'point', text: 'Shalawat kepada Nabi Muhammad SAW (Allahumma Sholli Ala Muhammad)' },
        { type: 'point', text: 'Kalimat Syahadat (Asyhadu Alla Ilaha Illallah, Wa Asyhadu Anna Muhammadar Rasulullah)' },
        { type: 'point', text: 'Nasehat Taqwa (Ushikum wa iyyaaya bi taqwaa Allah)' },
      ],
      dalil: {
        title: 'Dalil:',
        text: "Hadits-hadits Nabi SAW menekankan pentingnya memulai segala sesuatu dengan Basmallah dan Hamdallah."
      },
      contohTeks: {
        title: 'Contoh Teks Muqaddimah:',
        // description: "(Contoh teks akan muncul saat di-hover/klik)", // Untuk V2, sekarang tampilkan langsung
        text: `إنَّ الـحَمْدَ لِلّهِ نَـحْمَدُهُ وَنَسْتَعِيْنُهُ وَنَسْتَغْفِرُهُ، وَنَعُوْذُ بِاللهِ مِنْ شُرُوْرِ أَنْفُسِنَا وَمِنْ سَيِّئَاتِ أَعْمَالِنَا، مَنْ يَهْدِهِ اللهُ فَلَا مُضِلَّ لَهُ، وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ،<br />وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيْكَ لَهُ، وَأَشْهَدُ أَنَّ مُـحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ.<br />يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنْتُمْ مُسْلِمُونَ.<br />يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِنْ نَفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا.<br />يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَنْ يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا.<br />أَمَّا بَعْدُ؛ فَإِنَّ أَصْدَقَ الْحَدِيثِ كِتَابُ اللهِ، وَخَيْرَ الْهَدْيِ هَدْيُ مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَشَرَّ الْأُمُورِ مُحْدَثَاتُهَا، وَكُلَّ مُحْدَثَةٍ بِدْعَةٌ، وَكُلَّ بِدْعَةٍ ضَلَالَةٌ، وَكُلَّ ضَلَالَةٍ فِي النَّارِ.`,
        isArabic: true
      }
    },
    {
      id: 'khutbah_pertama',
      titleNumber: 'B.',
      title: 'Khutbah Pertama',
      description: 'Dalam Khutbah pertama, Khatib menyampaikan:',
      details: [
        { type: 'point', text: "Ayat-ayat Al-Qur'an dan Hadits Nabi Muhammad SAW yang relevan dengan tema Khutbah." },
        { type: 'point', text: "Nasehat tentang iman, ibadah, akhlak, dan muamalah." },
        { type: 'point', text: "Kisah-kisah inspiratif dari Al-Qur'an dan sejarah Islam." },
      ],
      contohTema: {
        title: "Contoh Tema:",
        text: "Pentingnya Shalat, Keutamaan Ramadhan, Menjaga Persatuan."
      },
      dalil: {
        title: 'Dalil:',
        text: "Ayat-ayat Al-Qur'an tentang menyampaikan kebenaran, Hadits tentang keutamaan nasehat."
      }
      // Anda bisa menambahkan 'contohTeks' di sini jika ada
    },
    {
      id: 'duduk_antara_khutbah',
      titleNumber: 'C.',
      title: 'Duduk di Antara Dua Khutbah',
      description: 'Khatib disunnahkan untuk duduk sebentar dengan tenang di antara dua khutbah, biasanya membaca doa pendek permohonan ampunan. Ini adalah sunnah Nabi Muhammad SAW.',
      details: [], // Kosongkan jika tidak ada poin utama selain deskripsi
      contohDoa: { // Mengganti 'contohTeks' menjadi lebih spesifik
        title: 'Contoh Doa Pendek:',
        // description: '(Doa akan muncul saat di-hover/klik)',
        text: `رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا`,
        isArabic: true
      }
    },
    {
      id: 'khutbah_kedua',
      titleNumber: 'D.',
      title: 'Khutbah Kedua',
      description: 'Khutbah kedua berisi pujian kepada Allah, shalawat kepada Nabi SAW, nasehat singkat yang menguatkan pesan Khutbah pertama, dan doa untuk umat Islam.',
      details: [],
      dalil: {
          title: 'Dalil:',
          text: "Sunnah Nabi Muhammad SAW untuk melanjutkan Khutbah dengan nasehat dan doa."
      },
      contohDoaUntukUmat: {
          title: 'Contoh Doa untuk Umat Islam:',
          // description: '(Doa akan muncul saat di-hover/klik)',
          text: `اَللَّهُمَّ اغْفِرْ لِلْمُسْلِمِيْنَ وَالْمُسْلِمَاتِ وَالْمُؤْمِنِيْنَ وَالْمُؤْمِنَاتِ اْلأَحْيَاءِ مِنْهُمْ وَاْلأَمْوَاتِ إِنَّكَ سَمِيْعٌ قَرِيْبٌ مُجِيْبُ الدَّعَوَاتِ.`,
          isArabic: true
      }
    },
    {
      id: 'doa_penutup',
      titleNumber: 'E.',
      title: 'Doa Penutup',
      description: 'Doa penutup dibaca setelah Khutbah kedua selesai, sebagai anjuran untuk berdoa setelah ibadah.',
      details: [],
      contohDoaPenutup: {
        title: 'Contoh Doa Penutup:',
        // description: '(Doa akan muncul saat di-hover/klik)',
        text: `رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.<br />عِبَادَ اللهِ، إِنَّ اللهَ يَأْمُرُ بِالْعَدْلِ وَاْلإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَى وَيَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ وَالْبَغْيِ يَعِظُكُمْ لَعَلَّكُمْ تَذَكَّرُوْنَ.<br />فَاذْكُرُوا اللهَ الْعَظِيْمَ يَذْكُرْكُمْ وَاشْكُرُوْهُ عَلَى نِعَمِهِ يَزِدْكُمْ وَلَذِكْرُ اللهِ أَكْبَرُ، وَاللهُ يَعْلَمُ مَا تَصْنَعُوْنَ.`,
        isArabic: true
      }
    }
  ],
  sumberReferensi: {
    title: "Sumber & Referensi",
    text: "Informasi ini disarikan dari berbagai kitab, buku, dan sumber terpercaya mengenai fikih Khutbah Jumat."
  },
  hakCipta: "Hak cipta © [Nama Anda/Organisasi Anda] [Tahun]."
};