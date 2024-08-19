import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>Radiant Solar Panel Racking - Off Grid Power</title>
                <meta name="keywords" content="Radiant Solar Panel Racking, Solar Panel Mounting Systems, Solar Panel Installation"></meta>
                <meta name="description" content="Learn about Radiant solar panel mounting systems designed for secure and efficient solar panel installations."></meta>
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
