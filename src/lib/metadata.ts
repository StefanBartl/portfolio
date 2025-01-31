import { Metadata } from "next";

const Stefan = {
  url: "https://stefanbartl.at",
  name: "Stefan Bartl"
};

const ogImage = "/graphics/logos/rebellischCodenBG1920x1080.png";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Portfolio | Stefan Bartl",
  description: "Website von Stefan Bartl mit Projekten, Zertifikaten und mehr.",
  applicationName: "Portfolio",
  authors: Stefan,
  creator: "Stefan Bartl",
  generator: "Next.js",
  keywords: [
    "Portfolio",
    "Stefan Bartl",
    "Projects",
    "Web Development",
    "Software Development"
  ],
  icons: "/graphics/logos/dev_logo.png",

  // Open Graph Meta-Tags
  openGraph: {
    title: "Portfolio | Stefan Bartl",
    description: "Meine Portfolio-Website mit Projekten, Zertifikaten und mehr.",
    url: Stefan.url,
    siteName: "Stefan Bartl Portfolio",
    images: [
      {
        url: ogImage,
        width: 1920,
        height: 1080,
        alt: "Portfolio Thumbnail"
      }
    ],
    locale: "de_DE",
    type: "website"
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    site: "@StefanBartl2",
    creator: "@StefanBartl2",
    title: "Portfolio | Stefan Bartl",
    description: "Meine Portfolio-Website mit Projekten, Zertifikaten und mehr.",
    images: [ogImage]
  }
}