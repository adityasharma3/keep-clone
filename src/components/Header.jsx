import React from 'react';
import logo from '../logo.png';

export default function Header() {
    return (
        <div className="header">
            <nav>
                <img 
                    src = {logo}
                    style = {{
                        height :'60px',
                        marginLeft : '10%',
                    }}    
                />
                <h2>Keep</h2>
            </nav>
            <hr />
        </div>
    );
}