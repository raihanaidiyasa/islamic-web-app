export const tataCaraHaji = {
  mainTitle: "Materi Praktik Haji: Urutan Ibadah Haji dari Awal sampai Akhir",
  introParagraphs: [
    "Ibadah haji adalah rukun Islam kelima yang wajib dilaksanakan bagi umat Islam yang mampu. Pelaksanaan haji memiliki urutan manasik yang harus dipahami agar ibadah sah dan sempurna.",
    "Berikut adalah rangkuman urutan ibadah haji dari awal sampai akhir sebagai panduan materi praktik haji."
  ],
  mainQuote: {
    text: "Dan berserulah kepada manusia untuk mengerjakan haji, niscaya mereka akan datang kepadamu dengan berjalan kaki, dan mengendarai unta yang kurus, mereka datang dari segenap penjuru yang jauh.",
    source: "QS. Al-Hajj: 27"
  },
  sections: [
    {
      id: "niat_ihram",
      titleNumber: "1.",
      title: "Niat Ihram dari Miqat",
      description: "Tahapan awal ibadah haji dimulai dengan ihram dari miqat.",
      details: [
        { type: "point", text: "Mandi sunnah sebelum ihram (jika memungkinkan)." },
        { type: "point", text: "Memakai pakaian ihram (laki-laki: 2 lembar kain putih tanpa jahitan)." },
        { type: "point", text: "Melaksanakan shalat sunnah ihram (jika memungkinkan)." },
        { type: "point", text: "Berniat haji atau umrah sesuai jenis haji yang dipilih." },
        { type: "point", text: "Mulai membaca talbiyah setelah niat." }
      ],
      dalil: {
        title: "Catatan Penting:",
        text: "Setelah ihram, jamaah wajib menjaga larangan ihram seperti tidak memakai wangi-wangian, tidak memotong kuku/rambut, dan tidak berburu."
      },
      contohTeks: {
        title: "Bacaan Talbiyah:",
        text: `لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيْكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيْكَ لَكَ`,
        isArabic: true
      }
    },

    {
      id: "wukuf_arafah",
      titleNumber: "2.",
      title: "Wukuf di Arafah",
      description: "Wukuf adalah rukun haji yang paling utama. Tanpa wukuf, haji tidak sah.",
      details: [
        { type: "point", text: "Dilaksanakan pada tanggal 9 Dzulhijjah." },
        { type: "point", text: "Waktu wukuf dimulai sejak tergelincir matahari sampai terbit fajar 10 Dzulhijjah." },
        { type: "point", text: "Memperbanyak doa, dzikir, istighfar, dan membaca Al-Qur’an." }
      ],
      dalil: {
        title: "Dalil:",
        text: "Rasulullah SAW bersabda: “Haji itu adalah Arafah.” (HR. Tirmidzi)"
      }
    },

    {
      id: "mabit_muzdalifah",
      titleNumber: "3.",
      title: "Mabit di Muzdalifah",
      description: "Setelah wukuf, jamaah bergerak menuju Muzdalifah untuk mabit (bermalam).",
      details: [
        { type: "point", text: "Dilaksanakan pada malam 10 Dzulhijjah." },
        { type: "point", text: "Jamaah mengumpulkan batu kerikil untuk melontar jumrah." },
        { type: "point", text: "Disunnahkan memperbanyak dzikir dan doa." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Minimal mabit dilakukan walau sebentar setelah tengah malam, tergantung kondisi jamaah."
      }
    },

    {
      id: "melontar_jumrah_aqabah",
      titleNumber: "4.",
      title: "Melontar Jumrah Aqabah",
      description: "Jumrah Aqabah dilontar pada tanggal 10 Dzulhijjah sebagai salah satu rangkaian utama haji.",
      details: [
        { type: "point", text: "Dilakukan dengan 7 lemparan batu kerikil." },
        { type: "point", text: "Setiap lemparan disertai bacaan takbir." },
        { type: "point", text: "Jumrah Aqabah adalah jumrah terbesar." }
      ],
      contohTeks: {
        title: "Bacaan Saat Melontar:",
        text: `اللهُ أَكْبَرُ`,
        isArabic: true
      }
    },

    {
      id: "menyembelih_hewan",
      titleNumber: "5.",
      title: "Menyembelih Hewan Kurban (Hadyu)",
      description: "Setelah melontar jumrah aqabah, jamaah haji melaksanakan penyembelihan hewan kurban.",
      details: [
        { type: "point", text: "Dilakukan pada tanggal 10 Dzulhijjah." },
        { type: "point", text: "Wajib bagi jamaah haji tamattu’ dan qiran." },
        { type: "point", text: "Boleh diwakilkan kepada petugas." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Penyembelihan biasanya dilakukan melalui layanan resmi penyelenggara haji."
      }
    },

    {
      id: "tahallul_awal",
      titleNumber: "6.",
      title: "Tahallul Awal (Cukur Rambut)",
      description: "Tahallul awal dilakukan setelah jumrah aqabah dan penyembelihan kurban.",
      details: [
        { type: "point", text: "Laki-laki dianjurkan mencukur gundul (halq)." },
        { type: "point", text: "Perempuan cukup memotong sedikit ujung rambut." },
        { type: "point", text: "Setelah tahallul awal, sebagian larangan ihram menjadi boleh." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Setelah tahallul awal, larangan yang masih berlaku adalah hubungan suami-istri sampai tahallul tsani."
      }
    },

    {
      id: "tawaf_ifadah",
      titleNumber: "7.",
      title: "Tawaf Ifadah",
      description: "Tawaf Ifadah adalah rukun haji yang dilakukan setelah kembali ke Makkah.",
      details: [
        { type: "point", text: "Dilaksanakan dengan mengelilingi Ka'bah sebanyak 7 putaran." },
        { type: "point", text: "Dimulai dari Hajar Aswad dan berakhir di tempat yang sama." },
        { type: "point", text: "Disunnahkan membaca doa dan dzikir." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Tawaf Ifadah wajib dilakukan. Tanpa tawaf ini, haji tidak sempurna."
      }
    },

    {
      id: "sai_shafa_marwah",
      titleNumber: "8.",
      title: "Sa’i antara Shafa dan Marwah",
      description: "Sa’i adalah berjalan bolak-balik antara bukit Shafa dan Marwah sebanyak 7 kali.",
      details: [
        { type: "point", text: "Dimulai dari bukit Shafa dan berakhir di Marwah." },
        { type: "point", text: "Dilakukan sebanyak 7 perjalanan." },
        { type: "point", text: "Boleh dilakukan setelah tawaf ifadah." }
      ],
      dalil: {
        title: "Dalil:",
        text: "Allah SWT berfirman: “Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar Allah...” (QS. Al-Baqarah: 158)"
      }
    },

    {
      id: "tahallul_tsani",
      titleNumber: "9.",
      title: "Tahallul Tsani",
      description: "Tahallul tsani menandakan jamaah sudah bebas dari seluruh larangan ihram.",
      details: [
        { type: "point", text: "Dilakukan setelah menyelesaikan tawaf ifadah dan sa’i." },
        { type: "point", text: "Setelah ini seluruh larangan ihram menjadi halal kembali." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Tahallul tsani menandakan jamaah telah menyempurnakan rangkaian utama haji."
      }
    },

    {
      id: "mabit_mina_jumrah",
      titleNumber: "10.",
      title: "Mabit di Mina & Melontar 3 Jumrah (Hari Tasyrik)",
      description: "Jamaah bermalam di Mina dan melontar tiga jumrah selama hari tasyrik.",
      details: [
        { type: "point", text: "Dilakukan pada tanggal 11, 12, dan 13 Dzulhijjah." },
        { type: "point", text: "Melontar Jumrah Ula, Wustha, dan Aqabah." },
        { type: "point", text: "Setiap jumrah dilontar 7 batu." },
        { type: "point", text: "Setiap lemparan disertai bacaan takbir." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Jika jamaah mengambil nafar awal, maka boleh meninggalkan Mina pada tanggal 12 Dzulhijjah."
      }
    },

    {
      id: "tawaf_wada",
      titleNumber: "11.",
      title: "Tawaf Wada (Tawaf Perpisahan)",
      description: "Tawaf Wada dilakukan sebelum meninggalkan kota Makkah sebagai tawaf perpisahan.",
      details: [
        { type: "point", text: "Dilakukan dengan 7 putaran mengelilingi Ka'bah." },
        { type: "point", text: "Menjadi penutup ibadah haji." },
        { type: "point", text: "Wanita haid mendapat keringanan tidak melaksanakan tawaf wada." }
      ],
      dalil: {
        title: "Catatan:",
        text: "Tawaf wada termasuk wajib haji menurut mayoritas ulama."
      }
    }
  ],

  sumberReferensi: {
    title: "Sumber Materi",
    text: "Materi disusun berdasarkan artikel Bank Muamalat: 'Ini 10 Urutan Ibadah Haji dari Awal sampai Akhir'."
  },

  hakCipta: "Hak cipta © Materi Praktik Haji - 2026."
};