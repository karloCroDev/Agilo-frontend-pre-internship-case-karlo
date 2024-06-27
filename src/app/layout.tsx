import type { Metadata } from "next";
import { caveat } from "./fonts";
import { Toaster } from "react-hot-toast";
import { Header, ScrollToTopBtn } from "./global-components/exports";
import Logic from "./contexes/Logic";
import "./globals.css";

export const metadata: Metadata = {
  title: "GoofyGoods", //I don't have favicon image, so I've left only title and description for now
  description: "Awesome webshop to find antything you need!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className={`${caveat.className} bg-primary text-text`}>
        <Logic>
          <Header />
          {children}
          <ScrollToTopBtn />
        </Logic>
        <Toaster
          position="bottom-left"
          //I have to style like this, can't use tailwind css in this library
          toastOptions={{
            style: {
              background: "#00ADB5",
              color: "#EEE",
              fontSize: 22,
              fontWeight: "bold",
            },
          }}
        />
      </body>
    </html>
  );
}
