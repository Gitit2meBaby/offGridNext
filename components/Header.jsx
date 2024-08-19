import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Toggle from './Toggle';
import ModalButton from './ModalButton';
import EmailButton from './EmailButton';

const Header = () => {
    return (
        <>
            <header>
                <Link href="/">
                    <div className="logo-container">
                        <Image
                            id="logo"
                            src="/assets/logo-white.webp"
                            alt="Off Grid Power Logo"
                            width={60}
                            height={60}
                        />
                    </div>
                </Link>

                <div className="split-header">
                    <div className="contact">
                        <div className="phone">
                            <svg
                                stroke="currentColor"
                                fill="#82A888"
                                strokeWidth="0"
                                viewBox="0 0 1024 1024"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z" />
                            </svg>
                            <a href="tel:1800283164">1800 283 164</a>
                        </div>
                        <EmailButton />
                    </div>

                    <div className="desktop-nav">
                        <Link href="/">Home</Link>
                        <div className="dropdown">
                            <p id="productsNavItem">Products</p>
                            <svg
                                id="arrowDown"
                                stroke="#3468B2"
                                fill="#3468B2"
                                strokeWidth="1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <svg
                                id="arrowUp"
                                className="hidden"
                                stroke="#82A888"
                                fill="#82A888"
                                strokeWidth="1"
                                viewBox="0 0 16 16"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <div className="dropdown-content hidden">
                                <ul>
                                    <li><Link href="/SMA">SMA Solar Inverters</Link></li>
                                    <li><Link href="/BYD">BYD Lithium Batteries</Link></li>
                                    <li><Link href="/winaico">Winaico Solar Panels</Link></li>
                                    <li><Link href="/radiant">Radiant Solar Racking</Link></li>
                                </ul>
                            </div>
                        </div>
                        <Link href="/downloads">Download</Link>
                        <Link href="/reviews">Reviews</Link>
                    </div>
                </div>
                <ModalButton className="invert-btn"
                    text="Free Quote" />
                <Toggle />
            </header>
        </>
    );
};

export default Header;
