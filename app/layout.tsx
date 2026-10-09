import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pestraidcleaning.co.ke"),

  /* ── Titles ── */
  title: {
    default: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    template: "%s | Pestraid Cleaning Kenya",
  },

  /* ── Description ── */
  description:
    "Pestraid Cleaning Kenya offers professional cleaning services across Nairobi — home cleaning, office cleaning, carpet & sofa cleaning, post-construction cleaning and deep cleaning. Part of Pestraid Kenya Group. Call 0710907628 for a free quote!",

  /* ── Keywords ── */
  keywords: [
    "cleaning services Nairobi",
    "professional cleaners Kenya",
    "home cleaning Nairobi",
    "house cleaning Nairobi",
    "office cleaning Nairobi",
    "commercial cleaning Nairobi",
    "carpet cleaning Kenya",
    "sofa cleaning Nairobi",
    "deep cleaning Nairobi",
    "post-construction cleaning Nairobi",
    "after construction cleaning Kenya",
    "Pestraid Cleaning Kenya",
    "cleaning company Kenya",
    "domestic cleaning Nairobi",
    "move-in cleaning Nairobi",
    "move-out cleaning Nairobi",
    "spring cleaning Nairobi",
    "cleaning services Kilimani",
    "cleaning services Westlands",
    "cleaning services Karen Nairobi",
  ],

  /* ── Authorship ── */
  authors: [{ name: "Pestraid Cleaning Kenya", url: "https://pestraidcleaning.co.ke" }],
  creator: "Pestraid Kenya Group",
  publisher: "Pestraid Kenya Group",

  /* ── Icons ── */
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicon.png" },
    ],
  },

  /* ── Web App Manifest ── */
  manifest: "/site.webmanifest",

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },

  /* ── Open Graph ── */
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://pestraidcleaning.co.ke",
    siteName: "Pestraid Cleaning Kenya",
    title: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    description:
      "Professional cleaning services in Nairobi — home, office, carpet & post-construction cleaning. Part of Pestraid Kenya Group. Call 0710 907 628.",
    images: [
      {
        url: "https://pestraidcleaning.co.ke/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pestraid Cleaning Kenya — Professional Cleaning Services Nairobi",
        type: "image/jpeg",
      },
    ],
  },

  /* ── Twitter / X ── */
  twitter: {
    card: "summary_large_image",
    site: "@PestraidKenya",
    creator: "@PestraidKenya",
    title: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    description:
      "Professional cleaning services across Nairobi. Home, office, carpet & deep cleaning. Call 0710907628 for a free quote!",
    images: ["https://pestraidcleaning.co.ke/hero-banner.jpg"],
  },

  /* ── Canonical ── */
  alternates: {
    canonical: "https://pestraidcleaning.co.ke",
  },

  /* ── Category ── */
  category: "Cleaning Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE" className={`${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "CleaningService"],
              "@id": "https://pestraidcleaning.co.ke/#business",
              name: "Pestraid Cleaning Kenya",
              description:
                "Professional cleaning services in Nairobi, Kenya — home cleaning, office cleaning, carpet cleaning, sofa cleaning, deep cleaning, and post-construction cleaning. Part of Pestraid Kenya Group.",
              url: "https://pestraidcleaning.co.ke",
              logo: "https://pestraidcleaning.co.ke/logo-pestraid.png",
              image: "https://pestraidcleaning.co.ke/hero-banner.jpg",
              telephone: "+254710907628",
              email: "sales@pestraid.co.ke",
              priceRange: "KSh KSh",
              currenciesAccepted: "KES",
              paymentAccepted: "Cash, M-Pesa, Bank Transfer",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Argwings Kodhek Road, Rose Ave",
                addressLocality: "Nairobi",
                addressRegion: "Nairobi County",
                postalCode: "00100",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2921,
                longitude: 36.7960,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "15:00",
                },
              ],
              areaServed: [
                { "@type": "City", name: "Nairobi" },
                { "@type": "Place", name: "Kilimani" },
                { "@type": "Place", name: "Westlands" },
                { "@type": "Place", name: "Karen" },
                { "@type": "Place", name: "Lavington" },
                { "@type": "Place", name: "Parklands" },
                { "@type": "Place", name: "Lang'ata" },
                { "@type": "Place", name: "Upperhill" },
              ],
              sameAs: [
                "https://pestraid.co.ke",
                "https://www.termitescontrolservices.co.ke",
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "Pestraid Kenya Group",
                url: "https://pestraid.co.ke",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Professional Cleaning Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home & House Cleaning", url: "https://pestraidcleaning.co.ke/services#home-cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office & Commercial Cleaning", url: "https://pestraidcleaning.co.ke/services#office-cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpet Cleaning", url: "https://pestraidcleaning.co.ke/services#carpet-cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sofa & Upholstery Cleaning", url: "https://pestraidcleaning.co.ke/services#sofa-cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Post-Construction Cleaning", url: "https://pestraidcleaning.co.ke/services#construction-cleaning" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deep Cleaning", url: "https://pestraidcleaning.co.ke/services#deep-cleaning" } },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
