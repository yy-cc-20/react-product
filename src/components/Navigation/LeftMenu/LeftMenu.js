import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAuth } from '../../../services/AuthProvider';
import './LeftMenu.css';

function LeftMenu() { 
    const { user } = useAuth();

    const pathname = useLocation().pathname;
    return user ? (
        <nav className="left-menu">
            <a href="/Profile" className={pathname === '/Profile' ? 'active-link' : ''}>Profile</a>
            <a href="/changepswd" className={pathname === '/changepswd' ? 'active-link' : ''}>Change Password</a>
            <a href="/Product" className={pathname.includes('/Product') ? 'active-link' : ''}>Products</a>
        </nav>
    ) : null;
}

export default LeftMenu;
