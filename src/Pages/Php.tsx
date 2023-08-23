import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type PhpProps = {
    
};

const Php:React.FC<PhpProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>PHP</h1>
            {/* Other content */}
        </div>
    );
}
export default Php;