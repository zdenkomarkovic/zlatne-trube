import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import GoogleAnalyticsComponent from "@/components/GoogleAnalytics";

const poppins = Poppins({
  weight: ["400", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title:
    "Trubači ZLATNE TRUBE | Svadbe, Rođendani, Proslave | Srbija, Hrvatska, Slovenija",
  description:
    '🎺 Trubači "ZLATNE TRUBE" – najbolja trubačka muzika za svadbe, rođendane i proslave. Sviramo po celoj Srbiji, Hrvatskoj i Sloveniji. Brz kontakt i sigurna rezervacija!',
  keywords: [
    "trubači",
    "trubači za svadbe",
    "trubači cena",
    "trubači Beograd",
    "trubači Novi Sad",
    "trubači Subotica",
    "trubači Šabac",
    "trubači Kragujevac",
    "trubači Niš",
    "trubači Hrvatska",
    "trubači Slovenija",
    "orkestar za svadbe",
    "trubački orkestar",
    "muzika uživo",
    "Zlatne Trube",
  ],
  alternates: {
    canonical: "https://trubacikontakt.com/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "https://trubacikontakt.com/",
    siteName: "ZLATNE TRUBE",
    title: "Trubači ZLATNE TRUBE | Najbolja trubačka muzika za proslave",
    description:
      "Sviramo po celoj Srbiji, Hrvatskoj i Sloveniji. Energični, profesionalni i pristupačni – rezervišite termin danas!",
    images: [
      { url: "/hero.jpg", width: 1200, height: 630, alt: "ZLATNE TRUBE" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trubači ZLATNE TRUBE",
    description:
      "Najbolja trubačka muzika za svadbe, rođendane i proslave. Brz kontakt i rezervacija!",
    images: ["/hero.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <body
        className={`${poppins.variable} antialiased bg-background text-foreground text-base md:text-lg font-sans`}
      >
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalyticsComponent gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Trubači ZLATNE TRUBE",
              alternateName: "ZLATNE TRUBE",
              url: "https://zlatne-trube.rs/",
              image: "https://zlatne-trube.rs/hero.jpg",
              sameAs: [
                "https://www.facebook.com/share/14Mi5RPW5E9/",
                "https://www.instagram.com/trubaci_official?igsh=ZmJmN3EwcDlmbjJk",
              ],
              areaServed: ["RS", "HR", "SI", "AT"],
              telephone: "+381639662325",
              address: {
                "@type": "PostalAddress",
                addressCountry: "RS",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Trubači za svadbe i proslave",
                  },
                  areaServed: "RS",
                  availability: "InStock",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
