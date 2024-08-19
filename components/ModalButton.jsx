'use client'
import { useNav } from '@/NavContext';
import React from 'react'
import '@/CSS/styles.css'

const ModalButton = ({ className, text }) => {
    const { isModalOpen, setIsModalOpen } = useNav();
    return (
        <button className={className}
            onClick={() => { setIsModalOpen(!isModalOpen); console.log(isModalOpen) }
            }
        >{text}</button>
    )
}

export default ModalButton