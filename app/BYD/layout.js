import Head from 'next/head';
import Script from 'next/script';

import "@/CSS/products.css"

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>BYD Lithium Batteries - High-Performance Energy Storage Solutions</title>
                <meta name="description" content="Learn about BYD Lithium Batteries, a high-performance battery system designed for energy storage systems (ESS) by BYD, a Chinese multinational automobile manufacturer and energy company."></meta>
                <meta name="keywords" content="BYD Lithium Batteries, energy storage systems, high-performance batteries, Chinese manufacturer, battery management system"></meta>
                <meta name="author" content="Off Grid Power"></meta>
                <meta name="robots" content="index, follow"></meta>
                {/* Client-side scripts */}
                <Script src="/javaScript/quote.js" strategy="lazyOnload" />
                <Script src="/javaScript/mobile.js" strategy="lazyOnload" />
                <Script src="/javaScript/products.js" strategy="lazyOnload" />
            </Head>
            {children}
        </>
    );
}
