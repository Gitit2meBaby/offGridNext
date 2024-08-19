'use client'
import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const NavContext = createContext();

const NavProvider = ({ children }) => {

    const [navOpen, setNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <NavContext.Provider value={{ navOpen, setNavOpen, isModalOpen, setIsModalOpen }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    const context = useContext(NavContext);
    if (!context) {
        throw new Error('useNav must be used within a NavProvider');
    }
    return context;
};

NavProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { NavProvider, NavContext };
