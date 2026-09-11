import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const serif = Fraunces({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Dr. Ashaben Patel Govt. Science College, Unjha | B.Sc. Admissions, HNGU Patan",
    template: "%s | APGSC Unjha",
  },
  description:
    "Government Science College at MRS Campus, Unjha (Mehsana). B.Sc. in Chemistry, Physics, Maths & Botany affiliated to HNGU Patan (Code 879). Notices, admissions, labs, library, NSS & results.",
  keywords: [
    "Dr. Ashaben Patel Government Science College",
    "Government Science College Unjha",
    "HNGU College Code 879",
    "B.Sc. Admission Unjha",
    "HNGU Patan Results",
  ],
  authors: [{ name: "APGSC Unjha" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2540",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${serif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f6f8fb] text-[#0b1b2e]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
