import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amit Kumar | Freelance Software Engineer & Designer",
  description:
    "Portfolio of Amit Kumar — freelance software engineer and designer building digital products for EdTech, FinTech, healthcare, and education platforms.",
  metadataBase: new URL("https://amitkmaurya.com"),
  openGraph: {
    title: "Amit Kumar | Freelance Software Engineer & Designer",
    description:
      "Explore selected projects and services from Amit Kumar.",
    url: "https://amitkmaurya.com",
    siteName: "Amit Kumar",
    images: ["/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </body>
    </html>
  );
}
