import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://regenloop.ng";
const SITE_DESCRIPTION =
  "Regenloop is a Nigerian climate-tech company developing distributed biogas systems that convert agricultural and industrial organic waste into renewable energy — turning organic waste into affordable clean energy for industry.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Regenloop | Biogas Waste-to-Energy for Nigerian Industry",
    template: "%s | Regenloop",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "biogas Nigeria",
    "anaerobic digestion",
    "waste-to-energy",
    "organic waste management",
    "renewable energy Nigeria",
    "climate tech Nigeria",
    "industrial biogas",
    "distributed digesters",
    "circular economy Nigeria",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Regenloop",
    title: "Regenloop | Biogas Waste-to-Energy for Nigerian Industry",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Regenloop",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regenloop | Biogas Waste-to-Energy for Nigerian Industry",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Regenloop",
    url: SITE_URL,
    logo: `${SITE_URL}/images/regenloop-logo-full.png`,
    description: SITE_DESCRIPTION,
  };

  return (
    <html lang="en" className={`${sora.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
