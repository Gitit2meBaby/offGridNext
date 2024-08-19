'use client'
import { useNav } from '@/NavContext';
import Link from 'next/link';
import React from 'react'

const ClientLink = () => {
    const { setIsModalOpen } = useNav();
    return (
        <p onClick={() => setIsModalOpen(true)}>Free Quote</p>
    )
}

export default ClientLink