import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type JqueryProps = {
    
};

const Jquery:React.FC<JqueryProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>JQuery</h1>
            {/* Other content */}
        </div>
    );
}
export default Jquery;