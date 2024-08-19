import Head from 'next/head';
import Script from 'next/script';
import '@/CSS/reviews.css'

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <title>Customer Reviews - Off Grid Power</title>
                <meta name="description" content="Explore customer reviews and testimonials for our products and services. Read what our satisfied customers have to say about their experiences."></meta>
                <meta name="author" content="Off Grid Power"></meta>
                <meta name="robots" content="index, follow"></meta>
                {/* Client-side scripts */}
                <Script src="/javaScript/quote.js" strategy="lazyOnload" />
                <Script src="/javaScript/mobile.js" strategy="lazyOnload" />
                <Script src="/javaScript/reviews.js" strategy="lazyOnload" />
            </Head>
            {children}
        </>
    );
}
