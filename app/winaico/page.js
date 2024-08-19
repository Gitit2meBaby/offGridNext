'use client'
import ModalButton from '@/components/ModalButton'
import Quote from '@/components/Quote'
import WinaicoDropdowns from '@/components/WinaicoDropdowns'
import { useNav } from '@/NavContext'
import Image from 'next/image'
import React, { Suspense } from 'react'

const Winaico = () => {
    const { isModalOpen } = useNav();
    return (
        <>
            <section className="content">
                <div className="text-content">
                    <h1>Winaico Solar Panels</h1>
                    <p>WINAICO is a Taiwanese solar panel manufacturer that is known for producing high-quality,
                        high-performance photovoltaic panels. The company uses high-quality materials and cutting-edge
                        manufacturing processes to produce panels that deliver excellent efficiency and durability.</p>
                    <p>Here are a <strong>few key features and benefits</strong> of WINAICO solar panels:</p>

                    <WinaicoDropdowns />

                    <p className="bold-text">Overall, WINAICO solar panels are known for their high efficiency, durability, and
                        high-quality
                        components. If you are considering solar panels for your home or business, WINAICO is definitely worth
                        considering.</p>
                    <ModalButton className="primary-btn quoteBtn" text='Get a Quote' />
                </div>

                <div id="winaicoMainImg" className="main-img">
                    <Image width={423} height={600} className="desk-img" src="/assets/winaico.webp" alt="Winaico Solar Panels"></Image>
                    <Image width={282} height={400} className="mob-img" src="/assets/winaico282.webp" alt="SWinaico Solar Panels"></Image>
                </div>
            </section>

            <section className="iframes">
                <div className="container">
                    <iframe loading="lazy" class="responsive-iframe" width="456" height="257" src="https://www.youtube.com/embed/oTbFYgTI3jc" title="Next Generation of M10 High Efficiency Solar Modules WST-MGX GEMINI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </section>

            {isModalOpen ? <Suspense><Quote /></Suspense> : <></>}
        </>
    )
}

export default Winaico