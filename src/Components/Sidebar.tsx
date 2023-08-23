import Link from 'next/link';
import React from 'react';

type SidebarProps = {

};

const Sidebar: React.FC<SidebarProps> = () => {

    return (
        <div className="bg-gray-800 text-white h-[100%] w-[25.2%] fixed top-0 left-0 overflow-y-auto grid grid-rows-auto gap-0 z-0">
            <ul className={"md:flex-auto px-4 space-x-4 z-0"}>

                <div className={`text-white text-xl font-bold py-4`}>
                    <Link href="/Home">
                        CodeSpindle
                    </Link>
                </div>

                <li className="px-7 py-2 mb-3 mt-3 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Java
                    </Link>
                </li>
                <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Java
                    </Link>
                </li>
                <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Java
                    </Link>
                </li>
                <li className="px-7 py-2 transition duration-300 ease-in-out opacity-50 transform hover:bg-stone-300 hover:text-black hover:shadow-lg hover:scale-105 rounded-md hover:opacity-100 animate-glow-opacity">
                    <Link href="/Java">
                        Java
                    </Link>
                </li>

            </ul>
        </div>
        
    );
}
export default Sidebar;