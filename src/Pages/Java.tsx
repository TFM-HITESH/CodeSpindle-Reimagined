import React from 'react';
import Navbar from '@/Components/Navbar';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HiddenNavbar from '@/Components/HiddenNavbar';
import Sidebar from '@/Components/Sidebar';

type javaProps = {
    
};

const java:React.FC<javaProps> = () => {
    
    return (
        <div>
          <Navbar />
          <h1>Java</h1>
          {/* Other content */}
        </div>
      );
}
export default java;