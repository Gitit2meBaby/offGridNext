import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
    return (
        <section className="info">
            <div className="info-img">
                <Image
                    className="desktop-info-img"
                    src="/assets/clip-art800.webp"
                    alt="clip art of an off grid installation"
                    width={800}
                    height={600}
                />
            </div>

            <div className="info-content">
                <h2>Off Grid Power</h2>
                <h3>
                    Based on the North Coast of NSW, we take pride in sourcing only the highest quality components to deliver reliable and long-lasting systems.
                </h3>
                <p>
                    With extensive experience designing off-grid systems, we know that properly assessing your location is crucial for energy efficiency. Therefore, we work with you to design a system that meets your needs and budget. We understand that off-grid systems can be as diverse as the landscapes they are installed in and that the best renewable energy source varies case by case.
                </p>
                <Image
                    className="mob-info-img"
                    src="/assets/clip-art450.webp"
                    alt="clip art of an off grid installation"
                    width={450}
                    height={337}
                />
                <p>
                    Investing in an off-grid system is a significant decision, and our staff takes the time to work with you. Off Grid Power leverages our experience and expertise to integrate optimal component combinations for complex systems. In summary, we are a trusted provider of off-grid solar systems that delivers high-quality, efficient, and cost-effective systems tailored to your unique needs and locations.
                </p>
            </div>
        </section>
    )
}

export default InfoSection
