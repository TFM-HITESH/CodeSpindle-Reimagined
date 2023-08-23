import React from 'react';
import Navbar from '@/Components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HiddenNavbar from '@/Components/HiddenNavbar';


type htmlProps = {
    
};

const html:React.FC<htmlProps> = () => {
    
    return (
        <div>
          <Navbar />
          <h1>HTML</h1>
          {/* Other content */}
        </div>
      );
}
export default html;