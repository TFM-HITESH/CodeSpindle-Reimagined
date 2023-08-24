import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'
import HiddenNavbar from '@/Components/HiddenNavbar';

type PhpmailProps = {
    
};

const Phpmail:React.FC<PhpmailProps> = () => {
    
    return (
        <div>
            <HiddenNavbar />
            <h1>PHP Mail</h1>
            {/* Other content */}
        </div>
    );
}
export default Phpmail;