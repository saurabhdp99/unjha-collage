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
  title: "Dr. Ashaben Patel Government Science College, Unjha | HNGU Patan Affiliated",
  description: "Official web portal of Dr. Ashaben Patel Government Science College, Unjha, Dist. Mehsana, Gujarat. MRS Highschool Campus. Affiliated with Hemchandracharya North Gujarat University (HNGU), Patan (College Code: 879, AISHE: C-64881). Offers B.Sc. (Chemistry, Physics, Mathematics, Botany), online HNGU results, and digital circulars.",
  keywords: [
    "Dr. Ashaben Patel Government Science College",
    "Government Science College Unjha",
    "APGSC Unjha",
    "Unjha Science College",
    "HNGU College Code 879",
    "AISHE C-64881",
    "MRS Highschool Campus Unjha",
    "Science College Mehsana",
    "HNGU Patan Results",
    "B.Sc. Chemistry Unjha",
    "B.Sc. Physics Unjha",
    "B.Sc. Mathematics Unjha",
    "B.Sc. Botany Unjha",
    "Government College Gujarat"
  ],
  authors: [{ name: "Dr. Ashaben Patel Government Science College Administration" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0284c7",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f8fbff] text-slate-900 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
