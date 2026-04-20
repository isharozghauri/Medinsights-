import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: {
    default: "Medinsights+ | Global Healthcare Market Research & Intelligence",
    template: "%s | Medinsights+",
  },
  description:
    "Medinsights+ delivers actionable healthcare market intelligence to pharmaceutical, biotechnology, and medical technology companies worldwide. Expert primary & secondary research, syndicated studies, and strategic consulting.",
  keywords: [
    "healthcare market research",
    "pharmaceutical research",
    "biotechnology market intelligence",
    "medtech research",
    "healthcare consulting",
    "global market research",
    "primary research",
    "secondary research",
    "syndicated reports",
    "KOL research",
    "patient insights",
    "healthcare intelligence",
  ],
  icons: {
    icon: [
      {
        url: `${basePath}/favicon-16x16.png`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `${basePath}/favicon-32x32.png`,
        sizes: "32x32",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Medinsights+",
    title: "Medinsights+ | Global Healthcare Market Research & Intelligence",
    description:
      "Actionable healthcare market intelligence for pharma, biotech, and medtech companies worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medinsights+ | Global Healthcare Market Research & Intelligence",
    description:
      "Actionable healthcare market intelligence for pharma, biotech, and medtech companies worldwide.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
