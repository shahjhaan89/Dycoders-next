
import React from "react";
import "./globals.css";
import { MyProvider } from "@/utils/myprovider";
import Header from '@/components/header';
import Head from "next/head";
import Footer from "@/components/footer";
import { Poppins, Kanit, Jost, Barlow } from "next/font/google"

export const poppins = Poppins({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-poppins"
});

export const kanit = Kanit({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-kanit"
});

export const jost = Jost({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-jost"
});


export const barlow = Barlow({
  weight: ['500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-barlow"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${kanit.variable} ${jost.variable} ${barlow.variable}`}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <MyProvider>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        </MyProvider>
      </body>
    </html>
  )
}
