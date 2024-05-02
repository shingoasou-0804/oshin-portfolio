import type { Metadata } from "next";
import { Noto_Sans_Javanese } from "next/font/google";
import "./globals.css";

const notoSansJpn = Noto_Sans_Javanese({ subsets: ["latin"], weight: ['400', '500', '700']});

export const metadata: Metadata = {
  title: "Oshin Portfolio",
  description: "Oshinのポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansJpn.className}>{children}</body>
    </html>
  );
}
