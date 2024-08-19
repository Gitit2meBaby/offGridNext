'use client'
import ModalButton from '@/components/ModalButton'
import Quote from '@/components/Quote'
import { useNav } from '@/NavContext'
import Image from 'next/image'
import React, { Suspense } from 'react'

const SMA = () => {
    const { isModalOpen } = useNav();

    return (
        <>
            <section className="content">
                <div className="text-content">
                    <h1>Streamline Off-Grid Solar Installations with SMA Solar Inverters</h1>
                    <p>
                        At Off Grid Power, we are proud to introduce SMA's game-changing Sunny Island battery
                        inverters. These cutting-edge inverters are your ultimate ally in effortlessly setting up off-grid
                        systems, ensuring a reliable energy source, even in remote locations.

                        Off-grid systems vary as much as the terrains they inhabit, each influenced by its unique environmental
                        factors. Our experience has taught us that specific combinations of components can seamlessly converge
                        to establish a robust foundation for complex energy systems.
                    </p>
                    <ModalButton className="primary-btn quoteBtn" text="Get a Quote" />
                </div>

                <div className="main-img">
                    <Image
                        width={385}
                        height={600}
                        className="desk-img"
                        src="/assets/SMA.webp"
                        alt="SMA solar inverter"
                    />
                    <Image
                        width={350}
                        height={400}
                        className="mob-img"
                        src="/assets/SMA350.webp"
                        alt="SMA solar inverter"
                    />
                </div>
            </section>

            <section className="iframes">
                <div className="container">
                    <iframe loading="lazy" className="responsive-iframe" width="" height="" src="https://www.youtube.com/embed/t7ySx6WDlfk" title="SMA Smart Connected Service Package" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className="container">
                    <iframe loading="lazy" className="responsive-iframe" width="" height="" src="https://www.youtube.com/embed/lNYgDmiJdDw" title="Greater energy production  Enhanced safety  Improved quality &amp; service life" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>

            {isModalOpen ? <Suspense><Quote /></Suspense> : <></>}
        </>
    )
}

export default SMA