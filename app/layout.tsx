import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import Header from "@/components/Header/Header";

const sfRegular = localFont({
  src: "./fonts/sfProRegular.otf",
  variable: "--font-sf-regular",
  weight: "100 900",
});
const sfMedium = localFont({
  src: "./fonts/sfProMedium.otf",
  variable: "--font-sf-medium",
  weight: "100 900",
});
const productSans = localFont({
  src: "./fonts/ProductSansInfanity.ttf",
  variable: "--font-product-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Farouk Adedamola Portfolio V2",
  description: "A portfolio website for Farouk Adedamola Beautifully crafted with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Farouk Adedamola</title>
        <meta name="description" content="Farouk Adedamola Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${sfRegular.variable} ${sfMedium.variable} ${productSans.variable} antialiased bg-white/70 dark:bg-zinc-900 custom-scrollbar`}
      >
        <ThemeProvider attribute="class">
        <Header />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
