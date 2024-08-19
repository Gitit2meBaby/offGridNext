import ModalButton from '@/components/ModalButton'
import Quote from '@/components/Quote'
import { useNav } from '@/NavContext'
import Image from 'next/image'
import React, { Suspense } from 'react'

const BYD = () => {
    const { isModalOpen } = useNav();

    return (
        <>
            <section className="content">
                <div className="text-content">
                    <h1 id="bydTitle">BYD Lithium Batteries</h1>
                    <p>BYD LVS (Lithium-ion Vehicle System) battery is a high-performance battery system developed by BYD, a
                        Chinese multinational automobile manufacturer and energy company. It is designed for use in energy
                        storage systems (ESS).

                        The BYD LVS battery features high energy density, which allows for reduced charging time. It is also
                        equipped with a sophisticated battery management system that enhances safety, reliability, and
                        durability. Additionally, the battery system is highly modular, making it flexible for use in different
                        applications and scalable for larger energy storage systems.</p>

                    <Image id="bydMidImg" className="mob-img" src="/public/assets/BYD-banner350.webp" alt="BYD Solar Batteries" width={350} height={163}></Image>

                    <p>BYD has a vertically integrated production process for their LVS batteries, which allows for more
                        control over the quality of materials and production processes, as well as improved cost
                        competitiveness. Furthermore, BYD has extensive experience in battery production, making it one of the
                        leading companies in the global energy storage systems.

                        Overall, the BYD LVS battery is a high-performance and reliable solution for use in EVs and energy
                        storage systems. Its advanced technology, extensive production experience, and vertically integrated
                        production process make it a competitive option in the market.</p>
                    <ModalButton
                        className="primary-btn quoteBtn"
                        text="Get a Quote"
                    />
                </div>

                <div class="main-img">
                    <Image className="desk-img desk-display" src="/public/assets/BYD.webp" alt="BYD batteries"
                        width={546} height={600}></Image>
                    <Image className="mob-img mob-display" src="/public/assets/BYD364.webp" alt="BYD batteries"
                        width={364} height={400}></Image>
                </div>
            </section>

            <section class="safety">
                <Image width={500} height={367} className="desk-img desk-display" src="/public/assets/BYD-safety500.webp" alt="BYD battery safety test"></Image>
                <Image width={350} height={263} className="mob-img mob-display" src="/public/assets/BYD-safety350.webp" alt="BYD battery safety test"></Image>
                <div className="info-text">
                    <h2>Battery Safety </h2>
                    <ul>
                        <li className="bydListItem"><strong>Environmentally friendly:</strong> No heavy metals or toxic
                            chemicals.
                        </li>
                        <li className="bydListItem"><strong>Long life:</strong> After 10,000 cycles, the battery retains
                            70% of its
                            original capacity, which enables us to provide a 12-year
                            warranty—the longest in the industry.</li>
                        <li className="bydListItem"><strong>Safe:</strong> Tested in the most extreme conditions</li>
                        <li className="bydListItem"><strong>Excellent performance in extreme temperatures:</strong>
                            Reliable operation from – 40° F to 140° F.</li>
                    </ul>
                </div>
            </section>

            <section class="banner-img">
                <Image className="desk-img" src="/public/assets/BYD-banner.webp" alt="BYD Solar Batteries"
                    width={800} height={372} ></Image>
            </section>

            {isModalOpen ? <Suspense><Quote /></Suspense> : <></>}
        </>

    )
}

export default BYD