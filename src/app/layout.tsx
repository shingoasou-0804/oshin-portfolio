import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SideMenu from "@/components/SideMenu";
import TopMenu from "@/components/TopMenu";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

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
    <html lang="ja">
      <body className={notoSansJp.className}>
        <main className="flex flex-row">
          <SideMenu />
          <section className="pl-[300px] max-lg:pl-[146px] max-md:pl-0 w-full min-h-screen overflow-hidden">
            <TopMenu />
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
