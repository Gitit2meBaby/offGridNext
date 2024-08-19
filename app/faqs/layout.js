import Head from 'next/head';
import Script from 'next/script';

export default function RootLayout({ children }) {
    return (
        <>
            <Head>
                <meta name="description" content="Off Grid Power is a leading solar installation company specialising in off grid installations, this is some frequently asked questions we get."></meta>
                <meta name="keywords" content="solar, off-grid solar, solar installation, renewable energy, Australia"></meta>
                <meta name="author" content="Off Grid Power"></meta>
                <meta name="robots" content="index, follow"></meta>
                {/* Client-side scripts */}
                <Script src="/javaScript/quote.js" strategy="lazyOnload" />
                <Script src="/javaScript/mobile.js" strategy="lazyOnload" />
                <Script src="/javaScript/products.js" strategy="lazyOnload" />
                <Script type="application/ld+json">
                    {`
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is an off-grid solar installation?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An off-grid solar installation is a self-contained solar power system that is not connected to the electrical grid. It typically includes solar panels, batteries for energy storage, and an inverter to convert DC power to AC power for use in your home or facility."
                }
            },
            {
                "@type": "Question",
                "name": "How does an off-grid solar system work?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar systems generate electricity from solar panels during the day. Excess energy is stored in batteries for use at night or during cloudy days. An inverter converts DC power from the panels and batteries into AC power for your appliances."
                }
            },
            {
                "@type": "Question",
                "name": "What are the advantages of off-grid solar installations?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar installations provide energy independence, reduced electricity bills, and are environmentally friendly. They are ideal for remote areas without access to the grid."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need a backup generator with an off-grid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A backup generator is optional but can be useful during extended periods of low sunlight. It provides additional power when the battery storage is depleted."
                }
            },
            {
                "@type": "Question",
                "name": "What size of off-grid solar system do I need?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The size of your off-grid solar system depends on your energy needs. A solar professional can help determine the right system size based on your location and usage patterns."
                }
            },
            {
                "@type": "Question",
                "name": "How much does an off-grid solar installation cost in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The cost of an off-grid solar installation varies widely depending on system size, location, and equipment. On average, it can range from $10,000 to $50,000 or more."
                }
            },
            {
                "@type": "Question",
                "name": "Are there government incentives for off-grid solar in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Australia offers various incentives, such as the Small-scale Renewable Energy Scheme (SRES) and the Remote Power Generation Program, to support off-grid solar installations."
                }
            },
            {
                "@type": "Question",
                "name": "How do I maintain my off-grid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular maintenance includes cleaning solar panels, checking battery health, and ensuring proper wiring. It's advisable to have a professional conduct annual inspections."
                }
            },
            {
                "@type": "Question",
                "name": "Can I expand my off-grid solar system in the future?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems are scalable. You can add more solar panels, batteries, or inverters as your energy needs grow."
                }
            },
            {
                "@type": "Question",
                "name": "Is it possible to go completely off-grid in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is possible to go completely off-grid in Australia. However, it requires careful planning, sufficient battery storage, and backup power sources for extended cloudy periods."
                }
            },
            {
                "@type": "Question",
                "name": "Is off-grid solar suitable for residential use in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems are suitable for residential use in Australia, especially in remote or rural areas where grid access is limited or unreliable."
                }
            },
            {
                "@type": "Question",
                "name": "What is the lifespan of off-grid solar batteries?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar batteries typically last between 5 to 15 years, depending on factors like battery type, usage, and maintenance."
                }
            },
            {
                "@type": "Question",
                "name": "Can I sell excess energy back to the grid with an off-grid system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No, off-grid solar systems are designed for self-consumption. If you want to sell excess energy, you'll need an on-grid or hybrid system."
                }
            },
            {
                "@type": "Question",
                "name": "What is the maintenance cost of an off-grid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Maintenance costs for off-grid solar systems are relatively low and primarily involve occasional battery replacement and system checks."
                }
            },
            {
                "@type": "Question",
                "name": "How do I calculate the payback period for my off-grid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To calculate the payback period, divide the total system cost by the annual energy savings. It gives you an estimate of how long it takes to recoup your investment."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use off-grid solar power during a blackout?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems can provide backup power during grid outages, ensuring you have electricity when needed."
                }
            },
            {
                "@type": "Question",
                "name": "Do I need planning permits for off-grid solar installations in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regulations vary by location. Check with your local council or authority to determine if permits or approvals are required."
                }
            },
            {
                "@type": "Question",
                "name": "Can off-grid solar systems be integrated with diesel generators?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems can work in conjunction with diesel generators to provide power when solar generation is insufficient."
                }
            },
            {
                "@type": "Question",
                "name": "What is the typical warranty for off-grid solar panels in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most off-grid solar panels come with a warranty of 10 to 25 years, ensuring long-term performance and reliability."
                }
            },
            {
                "@type": "Question",
                "name": "Are off-grid solar systems eligible for government rebates in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Some off-grid solar systems may be eligible for government rebates and incentives, depending on location and system specifications. Check with relevant authorities for details."
                }
            },
            {
                "@type": "Question",
                "name": "What factors should I consider when sizing an off-grid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "When sizing an off-grid solar system, consider your energy consumption, location, climate, and the number of appliances you plan to power."
                }
            },
            {
                "@type": "Question",
                "name": "Can I add more solar panels to my off-grid system later on?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, you can expand your off-grid solar system by adding more solar panels and batteries to meet increasing energy demands."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between an off-grid and hybrid solar system?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An off-grid solar system is entirely self-sufficient, while a hybrid system is connected to the grid and can use grid power as backup when needed."
                }
            },
            {
                "@type": "Question",
                "name": "Are off-grid solar systems suitable for businesses and farms in remote areas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems are ideal for businesses and farms in remote areas where grid access is limited or costly to install."
                }
            },
            {
                "@type": "Question",
                "name": "How do I properly maintain off-grid solar panels?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Regular maintenance includes cleaning panels, checking connections, and monitoring battery health. Follow manufacturer guidelines for best practices."
                }
            },
            {
                "@type": "Question",
                "name": "What is the typical lifespan of off-grid solar inverters?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar inverters typically have a lifespan of 10 to 15 years. Regular maintenance can extend their longevity."
                }
            },
            {
                "@type": "Question",
                "name": "Can I use off-grid solar power to run air conditioning and heating systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, off-grid solar systems can power air conditioning and heating, but system size and battery capacity should be sufficient for the load."
                }
            },
            {
                "@type": "Question",
                "name": "What is the best battery type for off-grid solar systems in Australia?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Battery types like lithium-ion and lead-acid are commonly used in Australia. The best choice depends on factors like budget and energy requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Can off-grid solar systems be installed in urban areas?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar systems are typically installed in rural or remote areas, but they can be used in urban areas with proper planning and permits."
                }
            },
            {
                "@type": "Question",
                "name": "What are the environmental benefits of off-grid solar systems?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Off-grid solar systems reduce reliance on fossil fuels, lower greenhouse gas emissions, and promote clean, renewable energy sources."
                }
            }            
        ]
            `}
                </Script>
                <title>Off-Grid Solar Installation FAQ - Off Grid Power</title>
            </Head>
            {children}
        </>
    );
}
