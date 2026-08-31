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
  title: "Shri B. P. Brahmbhatt Arts & M. H. Guru Commerce College, Unjha | HNGU Patan Affiliated",
  description: "Official web portal of Shri B. P. Brahmbhatt Arts and M. H. Guru Commerce College, Unjha (Est. 1965). NAAC Accredited, UGC Recognized, affiliated with Hemchandracharya North Gujarat University (HNGU), Patan. Offers B.Com, B.A., M.Com, M.A., BBA, LL.B., BAOU programs, online HNGU results, digital notices, and scholarships.",
  keywords: [
    "Unjha College",
    "B P Brahmbhatt Arts College",
    "M H Guru Commerce College",
    "HNGU College Unjha",
    "HNGU Patan Results",
    "Unjha Education Board",
    "Unjha Kelavani Mandal",
    "Seth V S Law College Unjha",
    "North Gujarat College",
    "B.Com Unjha",
    "B.A. Gujarati Unjha"
  ],
  authors: [{ name: "Unjha College Administration" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e3a8a",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
