import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { defaultMetadata } from "@/lib/seo-config";
import {
  organizationSchema,
  websiteSchema,
  serviceSchema,
} from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...defaultMetadata,
  verification: {
    google: "google-site-verification-code", // À remplacer par votre code Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="52721484-2e96-43ea-a3c3-386377071862"
        ></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "inTheGleam",
              url: "https://www.inthegleam.com",
              description:
                "Freelancers spécialisés en développement web et mobile sur mesure.",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.inthegleam.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "inTheGleam",
            url: "https://www.inthegleam.com",
            logo: "https://www.inthegleam.com/public/logos/LogoPNG_inTheGleam_Black.png",
            sameAs: ["https://www.linkedin.com/company/inthegleam"],
            contactPoint: [
              {
                "@type": "ContactPoint",
                // telephone: "+123456789",
                contactType: "customer service",
              },
            ],
          })}
        </script>

        <script>
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5JM23FR7');
        `}
        </script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JM23FR7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Analytics />
        <div className="fixed top-0 z-50 w-full flex justify-center">
          <Navbar />
        </div>
        {children}
        <QuoteButton />
        <SpeedInsights />
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
