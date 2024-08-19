import Head from 'next/head';
import Script from 'next/script';

import "@/CSS/products.css"

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>SMA Solar Inverters - Off Grid Power</title>
                <meta name="keywords" content="SMA Solar Inverters, Off-Grid Solar Installations, Sunny Island battery inverters"></meta>
                <meta name="description" content="Discover SMA Solar Inverters for streamlined off-grid solar installations. Ensure reliable energy sources, even in remote locations."></meta>
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
