import React from 'react';

import './Error.css';

function Error(props) { 
    return (
        <p className='error'>{props.children}</p> 
    );
}

export default Error;
