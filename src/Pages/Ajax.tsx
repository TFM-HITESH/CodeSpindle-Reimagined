import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type AjaxProps = {
    
};

const Ajax:React.FC<AjaxProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>AJAX</h1>
            {/* Other content */}
        </div>
    );
}
export default Ajax;