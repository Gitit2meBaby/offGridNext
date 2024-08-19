'use client'
import React from 'react';

function EmailButton() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:contact@offgridpower.store.com';
    };

    return (
        <div className="email" onClick={handleEmailClick} style={{ cursor: 'pointer' }}>
            <svg
                stroke="#82A888"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
            <p>CONTACT US</p>
        </div>
    );
}

export default EmailButton;
