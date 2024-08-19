import Head from 'next/head';
import Script from 'next/script';
// import { hindGuntur, openSans } from '../fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import "@/CSS/styles.css"
import "@/CSS/quote.css"
import "@/CSS/header.css"
import "@/CSS/quote.css"

import MobileNav from '@/components/MobileNav';
import { NavProvider } from '@/NavContext';


export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Leading provider of off-grid solar systems in NSW, Australia. We design and install efficient and cost-effective systems for remote locations and cabins." />
          <meta name="keywords" content="off-grid solar systems, solar installations, remote locations, cabins, NSW Australia" />
          <meta name="author" content="Off Grid Power" />
          <meta name="robots" content="index, follow" />
          <link rel="icon" href="@/assets/logo-white50.ico" type="image/x-icon" />

          <title>Off Grid Power - Leading Off-Grid Solar Systems Provider in NSW</title>
          {/* Client-side scripts */}
          <Script src="/javaScript/quote.js" strategy="lazyOnload" />
          <Script src="/javaScript/mobile.js" strategy="lazyOnload" />
          <Script src="/javaScript/script.js" strategy="lazyOnload" />
          <Script src="/javaScript/testimonial.js" strategy="lazyOnload" />
        </Head>
        <body
        //  className={`${hindGuntur.className} ${openSans.className}`}
        >
          <NavProvider>
            <MobileNav />
            <Header />
            {children}
            <Footer />
          </NavProvider>
        </body >
      </html>
    </>
  );
}
