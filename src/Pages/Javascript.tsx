import Navbar from '@/Components/Navbar';
import React from 'react';
import './globals.css'
import Sidebar from '@/Components/Sidebar';

type JavascriptProps = {
    
};

const Javascript:React.FC<JavascriptProps> = () => {
    
    return (
        // <div>
        //     <Sidebar />
        //     <Navbar />
        //     <h1>Javascript</h1>
           
        //     {/* Other content */}
        // </div>

        <div>
            <div className=''>
                <Navbar />
            </div>
            <div className='flex'>
                <div className='w-[25%] h-[100vh]'>
                    {/* sidebar */} 
                    <Sidebar />
                </div>
                <div>
                    {/* text */}
                    Test
                </div>
            </div>
        </div>
    );
}
export default Javascript;