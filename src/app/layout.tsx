import { Metadata } from "next";
import { metadataSB } from "../lib/metadata";

export const metadata: Metadata = metadataSB;

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
      </head>
      <body>{children}</body>
    </html>
  );
}
