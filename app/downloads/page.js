'use client'
import Quote from '@/components/Quote'
import { useNav } from '@/NavContext'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Downloads = () => {
    const { isModalOpen } = useNav();
    return (
        <>
            <section className="downloads">
                <h1>General Information and Guides</h1>
                <div className="download-grid">
                    <div className="download-grid-item">
                        <Link href="https://offgridpower.store/downloads/NSW-Home-Solar-Battery-Guide_WEB.pdf" target='_blank'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>NSW Home Solar Battery Guide</h2>
                        </Link>
                    </div>

                    <div className="download-grid-item">
                        <Link href="https://youtu.be/JEIqZYJ2efY" target='_blank'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>Register your SMA Inverter in Sunny Portal</h2>
                        </Link>
                        <p>Note use url <Link id="sunnyLink" href="https://sunnyportal.com/Templates/Start.aspx?ReturnUrl=%2f" target='_blank'>www.sunnyportal.com</Link>
                        </p>
                    </div>

                    <div className="download-grid-item">
                        <Link href="https://offgridpower.store/downloads/Solar%20PV%20Maintenance.pdf" target='_blank'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>Solar PV Maintenance</h2>
                        </Link>
                    </div>


                    <div className="download-grid-item">
                        <Link target='_blank' href="https://youtu.be/0-vZW9y4Nes">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>Connect your SMA inverter to a WiFi Network</h2>
                        </Link>
                    </div>
                </div>

                <h2>Product Information</h2>
                <div className="download-grid">
                    <div className="download-grid-item">
                        <Link target='_blank' href="https://offgridpower.store/wp-content/uploads/2023/03/SI44M-80H-13-DS-en-30.pdf">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>SMA Sunny Island</h2>
                        </Link>
                    </div>

                    <div className="download-grid-item">
                        <Link target='_blank' href="https://offgridpower.store/wp-content/uploads/2023/03/Datasheet-BYD-Premium-LVS-4.0-24.0-AU-V1.1.pdf">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>BYD Batteries</h2>
                        </Link>
                    </div>

                    <div className="download-grid-item">
                        <Link target='_blank' href="https://offgridpower.store/wp-content/uploads/2023/03/Rooftop.pdf">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>Radiant Racking</h2>
                        </Link>
                    </div>

                    <div className="download-grid-item">
                        <Link target='_blank' href='https://offgridpower.store/wp-content/uploads/2023/03/SB30-60-DS-en-52.pdf'>
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z">
                                </path>
                            </svg>
                            <h2>SMA Sunny Boy 3kW to 5kWInverters</h2>
                        </Link>
                    </div>
                </div>
            </section>
            {isModalOpen ? <Suspense><Quote /></Suspense> : <></>}
        </>
    )
}

export default Downloads