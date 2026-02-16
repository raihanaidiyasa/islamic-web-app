import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Islamic Web App",
    template: "%s | Islamic Web App", // otomatis format judul
  },
  description: "Situs panduan ibadah Islam: shalat, zakat, haji, thaharah, dan lainnya.",
  keywords: ["Islam", "shalat", "zakat", "haji", "ibadah", "khutbah"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://domainmu.com", // ganti dengan url website setelah di hosting
    siteName: "Islamic Web App",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
