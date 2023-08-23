import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type PhpmailProps = {
    
};

const Phpmail:React.FC<PhpmailProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>PHP Mail</h1>
            {/* Other content */}
        </div>
    );
}
export default Phpmail;