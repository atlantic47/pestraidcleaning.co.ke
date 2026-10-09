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
  title: {
    default: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    template: "%s | Pestraid Cleaning Kenya",
  },
  description:
    "Pestraid Cleaning Kenya offers professional cleaning services in Nairobi — home cleaning, office cleaning, carpet cleaning, post-construction cleaning. Call 0710907628 today!",
  keywords: [
    "cleaning services Nairobi",
    "professional cleaners Kenya",
    "home cleaning Nairobi",
    "office cleaning Nairobi",
    "carpet cleaning Kenya",
    "post-construction cleaning Nairobi",
    "Pestraid Cleaning",
    "cleaning company Kenya",
    "house cleaning Nairobi",
    "commercial cleaning Nairobi",
  ],
  authors: [{ name: "Pestraid Cleaning Kenya" }],
  creator: "Pestraid Kenya Group",
  publisher: "Pestraid Kenya Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://pestraidcleaning.co.ke",
    siteName: "Pestraid Cleaning Kenya",
    title: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    description:
      "Professional cleaning services in Nairobi — home, office, carpet & post-construction cleaning. Part of Pestraid Kenya Group.",
    images: [
      {
        url: "/hero-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Pestraid Cleaning Kenya - Professional Cleaning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pestraid Cleaning Kenya | Professional Cleaning Services Nairobi",
    description:
      "Professional cleaning services in Nairobi. Call 0710907628 for a free quote!",
    images: ["/hero-banner.jpg"],
  },
  alternates: {
    canonical: "https://pestraidcleaning.co.ke",
  },
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
              "@type": "LocalBusiness",
              name: "Pestraid Cleaning Kenya",
              description:
                "Professional cleaning services in Nairobi, Kenya. Home cleaning, office cleaning, carpet cleaning, and post-construction cleaning.",
              url: "https://pestraidcleaning.co.ke",
              telephone: "+254710907628",
              priceRange: "KES",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Argwings Kodhek Road, Rose Ave",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2921,
                longitude: 36.8219,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
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
              sameAs: [
                "https://pestraid.co.ke",
                "https://www.termitescontrolservices.co.ke",
              ],
              parentOrganization: {
                "@type": "Organization",
                name: "Pestraid Kenya Group",
                url: "https://pestraid.co.ke",
              },
              serviceArea: {
                "@type": "City",
                name: "Nairobi",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cleaning Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Home Cleaning",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Office Cleaning",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Carpet Cleaning",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Post-Construction Cleaning",
                    },
                  },
                ],
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
