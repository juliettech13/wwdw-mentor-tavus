import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'
  ),
  title: "Wealthy Women Don't Wait",
  description:
    "A playful course hub for Wealthy Women Don't Wait, with curriculum highlights, resource shortcuts, and direct access to your Tavus AI investing mentor.",
  openGraph: {
    title: "Wealthy Women Don't Wait",
    description:
      "A playful course hub for Wealthy Women Don't Wait, with curriculum highlights, resource shortcuts, and direct access to your Tavus AI investing mentor.",
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wealthy Women Don't Wait",
    description:
      "A playful course hub for Wealthy Women Don't Wait, with curriculum highlights, resource shortcuts, and direct access to your Tavus AI investing mentor.",
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X5YN29Y5GM"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X5YN29Y5GM');
          `}
        </Script>
        <Script
          src="https://subscribe-forms.beehiiv.com/attribution.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
