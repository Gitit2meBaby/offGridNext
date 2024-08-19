import Head from 'next/head';
import Script from 'next/script';

import "@/CSS/products.css"

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>SMA Solar Inverters - Off Grid Power</title>
                <meta name="keywords" content="Downloads, Off Grid Power, Off-Grid Solutions, Guides, Product Information"></meta>
                <meta name="description" content="Download general information, guides, and product information related to off-grid power solutions."></meta>
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
