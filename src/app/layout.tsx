import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "MedInsights | Healthcare Market Research & Intelligence",
    template: "%s | MedInsights",
  },
  description:
    "MedInsights delivers actionable healthcare market intelligence to pharmaceutical, biotechnology, and medical technology companies across North America and Europe. Expert primary & secondary research, syndicated studies, and strategic consulting.",
  keywords: [
    "healthcare market research",
    "pharmaceutical research",
    "biotechnology market intelligence",
    "medtech research",
    "healthcare consulting",
    "market research agency",
    "primary research",
    "secondary research",
    "North America healthcare",
    "Europe healthcare",
    "KOL research",
    "patient insights",
  ],
  openGraph: {
    title: "MedInsights | Healthcare Market Research & Intelligence",
    description:
      "Empowering healthcare decisions with data-driven market intelligence across North America and Europe.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
