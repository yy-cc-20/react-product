import React from 'react';
import { useLocation } from 'react-router-dom';

import './Breadcrumb.css';

function Breadcrumb() {   
    let breadcrumb = '';
    const pathname = useLocation().pathname;

    if (pathname === "/Dashboard")
        breadcrumb = "Dashboard"
    
    else if (pathname === "/SignIn")
        breadcrumb = "Sign-In"

    else if (pathname === "/fgtpswd")
        breadcrumb = "Forget Password"

    else if (pathname === "/Profile")
        breadcrumb = "Profile"

    else if (pathname === "/changepswd")
        breadcrumb = "Profile/Change Password"

    else if (pathname === "/Product")
        breadcrumb = "Product"

    else if (pathname.includes("Product/"))
        breadcrumb = 'Product/Product Name'

    else if (pathname === "/Unauthorized")
        breadcrumb = "Unauthorized"

    return (
        <div className='breadcrumb'><p>{breadcrumb}</p></div> 
    );
}

export default Breadcrumb;
