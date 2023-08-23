import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'

type NodejsProps = {
    
};

const Nodejs:React.FC<NodejsProps> = () => {
    
    return (
        <div>
            <Navbar />
            <h1>NodeJS</h1>
            {/* Other content */}
        </div>
    );
}
export default Nodejs;