import React from 'react'
import ModalButton from './ModalButton'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-title">
                <h1>Leading provider of Off-grid solar systems</h1>
            </div>

            <div className="empty"></div>

            <div className="hero-content">
                <h2>We design and install efficient and cost-effective systems for remote locations and cabins.</h2>
                <ModalButton className="quote quoteBtn" text="Free Quote" />
            </div>
        </section>
    )
}

export default Hero