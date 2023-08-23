import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'
import Sidebar from '@/Components/Sidebar';

type JavascriptProps = {
    
};

const Javascript:React.FC<JavascriptProps> = () => {
    
    return (
        <div>
            <Sidebar />
            <Navbar />
            <h1>Javascript</h1>
           
            {/* Other content */}
        </div>
    );
}
export default Javascript;