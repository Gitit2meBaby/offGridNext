'use client'
import ModalButton from '@/components/ModalButton'
import Quote from '@/components/Quote'
import { useNav } from '@/NavContext'
import Image from 'next/image'
import React, { Suspense } from 'react'

const Radiant = () => {
    const { isModalOpen } = useNav();
    return (
        <>
            <section class="content">
                <div class="text-content">
                    <h1>Radiant Solar Panel Racking</h1>
                    <p>Radiant solar panel mounting systems are designed to securely attach solar panels to roofs, ground
                        structures, or other surfaces, while also maximizing energy output and minimizing installation time and
                        costs. These systems use high-quality materials, such as aluminum and stainless steel, to withstand
                        harsh weather conditions and resist corrosion. They are also engineered to be lightweight and easy to
                        install, often featuring pre-assembled components and simple, tool-free installation processes.</p>
                    <p>Radiant solar panel mounting systems may include a variety of mounting options, such as fixed tilt,
                        adjustable
                        tilt, and tracking systems, to accommodate different solar panel sizes and orientations. These mounting
                        systems offer a reliable and efficient solution for solar panel installations in residential,
                        commercial, and utility-scale projects.</p>
                    <ModalButton className={"primary-btn"} text={"Get a Quote"} />
                </div>

                <div class="main-img">
                    <Image width={790} height={656} class="desk-img" src="/public/assets/radiant.webp" alt="Radiant Solar panel racking system"></Image>
                    <Image width={350} height={291} class="mob-img" src="/public/assets/radiant350.webp" alt="Radiant Solar panel racking system"></Image>
                </div>
            </section>
            {isModalOpen ? <Suspense><Quote /></Suspense> : <></>}
        </>
    )
}

export default Radiant