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
        <div>
            <nav className="h-100 w-full bg-dark fixed top-0 left-0 right-0 z-10 py-4">

                <div className="grid grid-cols-12 gap-4">
                    <div className='col-start-2 col-span-10'>

                        <div className='flex flex-row justify-between items-center'>
                            <div className="w-1/2 py-3 px-10">
                                <Link href="/">
                                    <Image src={"./images/app-logo.svg"} width={40} height={70} alt='logo' />
                                </Link>
                            </div>
                            <div className={`w-1/2 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
                                <ul className="h-screen md:h-auto items-center justify-start md:flex ">
                                    <li className="text-base text-light py-2 px-10 text-center">
                                        <Link href="projects" onClick={() => setNavbar(!navbar)}>
                                            projects
                                        </Link>
                                    </li>
                                    <li className="text-base text-light py-2 px-10 text-center">
                                        <Link href="about" onClick={() => setNavbar(!navbar)}>
                                            about
                                        </Link>
                                    </li>
                                    <li className="text-base text-light py-2 px-10 text-center">
                                        <Link href="contact" onClick={() => setNavbar(!navbar)}>
                                            contact
                                        </Link>
                                    </li>
                                    <li className="text-base text-light py-2 px-10 text-center">
                                        <Link href="blog" onClick={() => setNavbar(!navbar)}>
                                            blog
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

