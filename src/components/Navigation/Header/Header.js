import React, { useState, useEffect } from 'react';

import { useAuth } from '../../../services/AuthProvider';

import './Header.css';

function Header() {   
    const formatDate = (date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    }   

    const [currentTime, setCurrentTime] = useState(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(formatDate(new Date()))
          }, 1000);
        
          return () => clearInterval(timer);
    });
    
    const { user, logout } = useAuth();

    return (
        <nav className="header">
            <div style={{ marginBottom: '40px' }}>
                <p>{user ? `Hello ${user.username}` : ''}</p>
            </div>

            <div style={{ textAlign: 'right'}}>
                <p>Time: {currentTime}</p>

                {user
                    ? <p style={{ textAlign: 'right' }} onClick={logout}>Logout</p> 
                    : <a href='/SignIn' style={{textDecoration: 'none'}}>
                            <p style={{ textAlign: 'right' }}>Login</p>
                        </a>}
                
            </div>
        </nav>
    );
}

export default Header;
