import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gudurujeevankumarportfolio.netlify.app'),
  title: {
    default: "Guduru Jeevan Kumar | Python Full Stack Developer",
    template: "%s | Guduru Jeevan Kumar",
  },
  description: "Guduru Jeevan Kumar is a Python Full Stack Developer building practical web applications with Python, Django, JavaScript, React and SQL. Explore his projects, experience and developer journey.",
  keywords: [
    "Guduru Jeevan Kumar",
    "Jeevan Kumar Guduru",
    "Python Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Django Developer",
    "Python Developer Bengaluru"
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gudurujeevankumarportfolio.netlify.app",
    siteName: "Guduru Jeevan Kumar",
    title: "Guduru Jeevan Kumar | Python Full Stack Developer",
    description: "Guduru Jeevan Kumar is a Python Full Stack Developer building practical web applications with Python, Django, JavaScript, React and SQL. Explore his projects, experience and developer journey.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Guduru Jeevan Kumar — Python Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guduru Jeevan Kumar | Python Full Stack Developer",
    description: "Python Full Stack Developer building practical web applications with Python, Django, JavaScript, React and SQL.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/logo.png' },
    ],
    shortcut: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} dark h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var urlParams = new URLSearchParams(window.location.search);
                  var themeParam = urlParams.get('theme');
                  var stored = themeParam || localStorage.getItem('portfolio-theme');
                  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
                  var theme = stored || (prefersLight ? 'light' : 'dark');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Guduru Jeevan Kumar",
              "url": "https://gudurujeevankumarportfolio.netlify.app",
              "jobTitle": "Python Full Stack Developer",
              "sameAs": [
                "https://github.com/gudurujeevankumar",
                "https://www.linkedin.com/in/gudurujeevankumar",
                "https://www.youtube.com/@JeevanKumarGuduru"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Guduru Jeevan Kumar",
              "url": "https://gudurujeevankumarportfolio.netlify.app"
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative bg-background text-foreground">
        <div className="pointer-events-none fixed top-0 inset-x-0 h-28 z-40 backdrop-blur-md top-blur-curtain" aria-hidden="true" />
        <Navbar />
        <div className="flex-1 flex flex-col pt-16 sm:pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
