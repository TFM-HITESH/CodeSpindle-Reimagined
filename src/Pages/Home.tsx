import React from 'react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar';
import HiddenNavbar from '@/Components/HiddenNavbar';
import Sidebar from '@/Components/Sidebar';
import HomeNavbar from '@/Components/HomeNavbar';

type HomeProps = {
    
};

const Home:React.FC<HomeProps> = () => {
    
    return (
        <div>
          <HomeNavbar />
          <h1>Home Page</h1>
          {/* Other content */}
        </div>
      );
}
export default Home;