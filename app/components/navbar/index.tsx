'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';


interface props {
    navItems?: any
};

export const Navbar: FunctionComponent<props> = ({ navItems }) => {

    const [navbar, setNavbar] = useState(false);

    return (
        <header className='flex justify-between items-center h-100 w-full bg-dark fixed top-0 left-0 right-0 z-10 px-[20%] py-6'>
            <Link href="/">
                <Image src={"./images/app-logo.svg"} width={40} height={70} alt='logo' />
            </Link>
            <nav>
                <ul>
                    <li className="inline-block text-base text-light py-2 ps-16 text-center">
                        <Link href="projects" onClick={() => setNavbar(!navbar)}>
                            projects
                        </Link>
                    </li>
                    <li className="inline-block text-base text-light py-2 ps-16 text-center">
                        <Link href="about" onClick={() => setNavbar(!navbar)}>
                            about
                        </Link>
                    </li>
                    <li className="inline-block text-base text-light py-2 ps-16 text-center">
                        <Link href="contact" onClick={() => setNavbar(!navbar)}>
                            contact
                        </Link>
                    </li>
                    <li className="inline-block text-base text-light py-2 ps-16 text-center">
                        <Link href="blog" onClick={() => setNavbar(!navbar)}>
                            blog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

