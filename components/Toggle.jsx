'use client'
import { useNav } from '@/NavContext';
import React from 'react'

const Toggle = () => {
    const { setNavOpen, navOpen } = useNav();
    return (
        <div onClick={() => setNavOpen(!navOpen)} className="toggle">
            <svg stroke="currentColor" fill="#fff" strokeWidth="0" viewBox="0 0 512 512" height="3em" width="3em" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
            </svg>
        </div>
    )
}

export default Toggle
