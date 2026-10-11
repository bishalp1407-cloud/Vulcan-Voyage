import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "@/components/chrome/Footer";
import { Navbar } from "@/components/chrome/Navbar";
import { MotionRoot } from "@/components/motion/MotionRoot";
import { LoadingScreen } from "@/components/motion/LoadingScreen";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Vulcan Voyage — Product Design Companion";
const description =
  "Vulcan Voyage is a product design companion from India. We stay with the problem until we find the need behind the need — then design products that can exist in the world.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Vulcan Voyage",
  authors: [{ name: "Vulcan Voyage" }],
  keywords: [
    "product design",
    "industrial design",
    "India",
    "Vulcan Voyage",
    "product design companion",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Vulcan Voyage",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <Script id="vv-motion" strategy="beforeInteractive">
          {`try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion-on')}catch(e){}`}
        </Script>
        <MotionRoot>
          <LoadingScreen />
          <a className="skip-link" href="#contact">
            Skip to bring us a problem
          </a>
          <Navbar />
          {children}
          <Footer />
        </MotionRoot>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Vulcan Voyage",
              description,
              areaServed: "IN",
              slogan: "Don’t design the obvious.",
            }),
          }}
        />
      </body>
    </html>
  );
}
