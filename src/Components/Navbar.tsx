'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
//https://fontawesome.com/v5/docs/web/use-with/react#get-started Fontawesome docs

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faSquareJs } from '@fortawesome/free-brands-svg-icons';
import { faPhp } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';


type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-gradient-to-r from-gray-900 from-15% via-cyan-950 via-40% to-[#181634] to-90% ...">
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

                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Java">
                            <FontAwesomeIcon icon={faJava} className='pr-2 w-5 h-5' />
                            Java
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faHtml5} className='pr-2 w-5 h-5' />
                            HTML
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faCss3Alt} className='pr-2 w-5 h-5' />
                            CSS
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faSquareJs} className='pr-2 w-5 h-5'/>
                            Javascript
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faPhp} className='pr-2 w-5 h-5' />
                            PHP
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faSpinner} className='pr-2 w-5 h-5' />
                            AJAX
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            JQuery
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faFileCode} className='pr-2 w-5 h-5' />
                            XML
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faNodeJs} className='pr-2 w-5 h-5' />
                            NodeJS
                        </Link>
                    </li>
                    <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                        <Link href="/Html">
                            <FontAwesomeIcon icon={faEnvelope} className='pr-2 w-5 h-5' />
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
            {/*<div className="w-[100%] h-2 bg-cyan-500"></div>*/}
        </nav>
    );
}
export default Navbar;