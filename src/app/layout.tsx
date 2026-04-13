import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Medinsights+ | Healthcare Market Research & Intelligence",
    template: "%s | Medinsights+",
  },
  description:
    "Medinsights+ delivers actionable healthcare market intelligence to pharmaceutical, biotechnology, and medical technology companies across North America and Europe. Expert primary & secondary research, syndicated studies, and strategic consulting.",
  keywords: [
    "healthcare market research",
    "pharmaceutical research",
    "biotechnology market intelligence",
    "medtech research",
    "healthcare consulting",
    "market research agency",
    "primary research",
    "secondary research",
    "KOL research",
    "patient insights",
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
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
      </body>
    </html>
  );
}
