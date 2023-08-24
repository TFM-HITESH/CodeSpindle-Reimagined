import Link from 'next/link';
import React from 'react';

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className="bg-gradient-to-b from-indigo-900 from-10% via-sky-800 via-30% to-transparent to-100% ... text-white h-[100%] w-[100%] overflow-y-auto grid grid-rows-auto gap-0 z-0">
            <ul className={"md:flex-auto px-4 z-0 bg-"}>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Introduction
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Ternary Operators
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Reading Console Input
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        If-else and Nested If-else
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Switch Case
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        for, while and do while
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Nested Loops
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Arrays
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Multidimensional Arrays
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Jagged Arrays
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Anonymous Arrays
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Strings
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Classes and Objects
                    </Link>
                </li>
                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Array of Objects
                    </Link>
                </li>



            </ul>
            <div className='md:flex-auto px-4 z-0'>
                <button className="text-left px-7 py-2 w-[100%] mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    Click me!
                </button>
                <button className="text-left px-7 py-2 w-[100%] mb-3 mt-3 transition duration-300 ease-in-out opacity-80 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    Click me!
                </button>
            </div>
        </div>

    );
}
export default Sidebar;