
import Link from 'next/link';
import React from 'react';

type NavbarProps = {

};

const Navbar: React.FC<NavbarProps> = () => {

    return (
        <div className="bg-cyan-500">
            <h1>Home Page</h1>
            <Link href="/Java">
                Java
            </Link>
            
        </div>
    )
}
export default Navbar;