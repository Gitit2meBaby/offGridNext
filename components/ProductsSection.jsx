import Link from 'next/link';
import Image from 'next/image'; // Importing Image from next/image
import React from 'react';

const products = [
    {
        id: 'sma',
        title: 'SMA SOLAR INVERTERS',
        description: `SMA inverters are devices used in photovoltaic (PV) solar energy systems to convert direct
        current (DC) electricity generated by solar panels into alternating current (AC) electricity that can be
        used to power homes and businesses. SMA is a leading manufacturer of solar inverters, offering a range of
        products to suit different solar power systems and applications. These inverters are known for their high
        efficiency, reliability, and versatility, making them a popular choice among residential and commercial solar
        energy users. Additionally, SMA inverters come equipped with features such as monitoring and communication
        capabilities, enabling users to easily monitor and manage their solar energy systems.`,
        moreInfoLink: '/SMA',
        images: {
            desktop: {
                src: '/assets/SMA.webp',
                height: 600,
                width: 385
            },
            mobile: {
                src: '/assets/SMA350.webp',
                height: 400,
                width: 350
            }
        },
        className: 'slide-left animate-slide-left'
    },
    {
        id: 'byd',
        title: 'BYD LITHIUM BATTERIES',
        description: `BYD LVS (Lithium-ion Vehicle System) battery is a high-performance battery system developed by
        BYD, a Chinese multinational automobile manufacturer and energy company. It is designed for use in energy
        storage systems (ESS). The BYD LVS battery features high energy density, which allows for reduced charging
        time. It is also equipped with a sophisticated battery management system that enhances safety, reliability, and
        durability. Additionally, the battery system is highly modular, making it flexible for use in different
        applications and scalable for larger energy storage systems.`,
        moreInfoLink: '/BYD',
        images: {
            desktop: {
                src: '/assets/BYD.webp',
                height: 600,
                width: 546
            },
            mobile: {
                src: '/assets/BYD364.webp',
                height: 400,
                width: 364
            }
        },
        className: 'slide-right animate-slide-right'
    },
    {
        id: 'winaico',
        title: 'WINAICO SOLAR PANELS',
        description: `WINAICO is a Taiwanese solar panel manufacturer that is known for producing high-quality,
        high-performance photovoltaic panels. The company uses high-quality materials and cutting-edge manufacturing
        processes to produce panels that deliver excellent efficiency and durability. Overall, WINAICO solar panels are
        known for their high efficiency, durability, and high-quality components. If you are considering solar panels for
        your home or business, WINAICO is definitely worth considering.`,
        moreInfoLink: '/winaico',
        images: {
            desktop: {
                src: '/assets/winaico.webp',
                height: 600,
                width: 423
            },
            mobile: {
                src: '/assets/winaico282.webp',
                height: 400,
                width: 282
            }
        },
        className: 'slide-left animate-slide-left'
    }
];

const Product = ({ product }) => (
    <div className="product">
        <div className="img-container">
            <Image
                src={product.images.desktop.src}
                alt={product.title}
                id={`${product.id}Desk`}
                width={product.images.desktop.width}
                height={product.images.desktop.height}
            />
            <Image
                src={product.images.mobile.src}
                alt={product.title}
                id={`${product.id}Mob`}
                width={product.images.mobile.width}
                height={product.images.mobile.height}
            />
        </div>
        <div className="product-content">
            <h4 className={product.className}>{product.title}</h4>
            <div className="divider small"></div>
            <div className="product-info">
                <p className="slide-up">{product.description}</p>
                <Link href={product.moreInfoLink}>
                    <button className="text-btn">
                        more {product.title.split(' ')[0]} info
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                                clipRule="evenodd"
                            ></path>
                            <path
                                fillRule="evenodd"
                                d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    </div>
);

const ProductsSection = () => (
    <section className="products">
        <div className="products-title">
            <h3>Quality Components</h3>
            <h2>Industry Leading Technologies</h2>
            <div className="divider big"></div>
        </div>
        {products.map(product => (
            <Product key={product.id} product={product} />
        ))}
    </section>
);

export default ProductsSection;
