import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import { Header, Footer } from "./global-components/exports";
import Logic from "./contexes/Logic";
import "./globals.css";
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${caveat.className} bg-primary text-text`}>
        <Logic>
          <Header />
          {children}
          <Footer />
        </Logic>
      </body>
    </html>
  );
}
