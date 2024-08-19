'use client'
import { useNav } from '@/NavContext';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const MobileNav = () => {
    const { setNavOpen, navOpen, setIsModalOpen, isModalOpen } = useNav();
    const [menuDropdown, setMenuDropdown] = useState(false)

    useEffect(() => {
        if (!navOpen) {
            setMenuDropdown(false)
        }
    }, [navOpen])

    return (
        <nav className={"mobile-nav" + (navOpen ? " open" : "")}>
            <svg onClick={() => setNavOpen(false)} id="closeBtn" stroke="#fff" fill="#fff" strokeWidth="0" viewBox="0 0 1024 1024" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                <path d="M354 671h58.9c4.7 0 9.2-2.1 12.3-5.7L512 561.8l86.8 103.5c3 3.6 7.5 5.7 12.3 5.7H670c6.8 0 10.5-7.9 6.1-13.1L553.8 512l122.4-145.9c4.4-5.2.7-13.1-6.1-13.1h-58.9c-4.7 0-9.2 2.1-12.3 5.7L512 462.2l-86.8-103.5c-3-3.6-7.5-5.7-12.3-5.7H354c-6.8 0-10.5 7.9-6.1 13.1L470.2 512 347.9 657.9A7.95 7.95 0 0 0 354 671z"></path>
                <path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path>
            </svg>

            <Link onClick={() => setNavOpen(false)} href="/">Home</Link>

            <div onClick={() => setMenuDropdown(!menuDropdown)} className="mob-dropdown">
                <p>Products</p>

                <svg className={!menuDropdown ? "active" : "rotate"} id="mobProductArrow" stroke="#fff" fill="#1F1F1F" strokeWidth="2" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clipRule="evenodd"></path>
                </svg>

            </div>

            {menuDropdown &&
                <div className={menuDropdown ? "mob-dropdown-content active" : "mob-dropdown-content rotate"}>
                    <ul>
                        <Link onClick={() => setNavOpen(false)} href="/SMA"><li>SMA Solar Inverters</li></Link>
                        <Link onClick={() => setNavOpen(false)} href="/BYD"><li>BYD Lithium Batteries</li></Link>
                        <Link onClick={() => setNavOpen(false)} href="/winaico"><li>Winaico Solar Panels</li></Link>
                        <Link onClick={() => setNavOpen(false)} href="/radiant"><li>Radiant Solar Racking</li></Link>
                    </ul>
                </div>
            }

            <Link onClick={() => setNavOpen(false)} href="/downloads">Download</Link>
            <Link onClick={() => setNavOpen(false)} href="/reviews">Reviews</Link>
            <Link onClick={() => setNavOpen(false)} href="/index">Blog</Link>
            <button className="quoteBtn" onClick={() => { setIsModalOpen(!isModalOpen); setNavOpen(false) }}>Free Quote</button>
        </nav>
    )
}

export default MobileNav
