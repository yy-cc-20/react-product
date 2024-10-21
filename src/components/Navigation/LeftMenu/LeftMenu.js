import React from 'react';
import { useLocation } from 'react-router-dom';

import './LeftMenu.css';

function LeftMenu() { 
    const pathname = useLocation().pathname;
    return (
        <nav className="left-menu">
            <a href="/Profile" className={pathname === '/Profile' ? 'active-link' : ''}>Profile</a>
            <a href="/changepswd" className={pathname === '/changepswd' ? 'active-link' : ''}>Change Password</a>
            <a href="/Product" className={pathname.includes('/Product') ? 'active-link' : ''}>Products</a>
        </nav>
    );
}

export default LeftMenu;
