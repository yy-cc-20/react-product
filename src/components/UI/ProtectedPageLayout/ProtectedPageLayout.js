import React from 'react';

function ProtectedPageLayout(props) { 
    return (
        <div style={{marginLeft: '150px', marginRight: '15px'}}>
            {props.children}
        </div>
    );
}

export default ProtectedPageLayout;
