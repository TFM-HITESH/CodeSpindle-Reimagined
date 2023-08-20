'use client';
import Link from 'next/link';
import React, { useState } from 'react';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    return (
        <nav className="bg-gray-900 relative">
            <div className="flex items-center justify-between px-4 py-3 md:px-8 ">
                    
                <div className={`text-white text-xl font-bold ${isMenuOpen ? 'hidden' : 'block'} md:block`}>
                    <Link href="/">
                        CodeSpindle
                    </Link>
                </div>

                <ul className={`md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'} md:block md:space-x-5 md:ml-auto`}>
                    
                    <div className={`text-white text-xl font-bold ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                        <Link href="/">
                            CodeSpindle
                        </Link>
                    </div>
                    
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Java">
                            Java
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            HTML
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            CSS
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            Javascript
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            PHP
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            AJAX
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            JQuery
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            XML
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            NodeJS
                        </Link>
                    </li>
                    <li className="px-8 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            PHP Mail
                        </Link>
                    </li>
                    {/* Add more links as needed */}
                </ul>

                <div className="md:hidden">
                    {/* Mobile menu icon */}
                    <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                        <svg
                        className="w-6 h-6 stroke-current text-white-500"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        >
                        {isMenuOpen ? (
                        // X symbol when the navbar is open
                        <>
                            <path d="M6 6l12 12M6 18l12-12" />
                        </>
                        ) : (
                        // Menu bar symbol when the navbar is closed
                        <>
                            <path d="M4 6h16M4 12h16M4 18h16" />
                        </>
                        )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;