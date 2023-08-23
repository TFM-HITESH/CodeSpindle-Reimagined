import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type CssProps = {
    
};

const Css:React.FC<CssProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>CSS</h1>
            {/* Other content */}
        </div>
    );
}
export default Css;