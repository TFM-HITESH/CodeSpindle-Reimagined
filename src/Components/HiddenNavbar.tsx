'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
    

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [cursorPosY, setCursorPosY] = useState<number>(0);
    const [isVisible, setIsVisible] = useState<boolean>(true);

    const handleMouseMove = (e: MouseEvent) => {
        setCursorPosY(e.clientY);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setIsVisible(cursorPosY < window.innerHeight/1.75);  //change the 1.75 to change where on the screen past where the navbar is hidden or seen
        }, 30); // Adjust the delay time in milliseconds (e.g., 300ms)
    
        return () => clearTimeout(timeoutId);
      }, [cursorPosY]);


    return (
        //w-full bg-gray-900 : old Design
        <nav className={`fixed w-full top-[-8.5%] bg-gradient-to-r from-gray-900 from-15% via-cyan-950 via-40% to-[#181634] to-90% ... ${isVisible ? 'translate-y-full' : 'translate-y-0'}`} style={{ transition: 'transform 0.70s' }}>
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
            <div className="w-[100%] h-0.5 opacity-40 bg-slate-300"></div>
            {/* <div className="w-[100%] h-2 bg-cyan-500"></div> */}
        </nav>
    );
}
export default Navbar;