import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar';
import HiddenNavbar from '@/Components/HiddenNavbar';

type HomeProps = {
    
};

const Home:React.FC<HomeProps> = () => {
    
    return (
        <div>
          <Navbar />
          <h1>Home Page</h1>
          {/* Other content */}
        </div>
      );
}
export default Home;