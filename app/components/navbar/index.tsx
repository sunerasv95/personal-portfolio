'use client';

import IconButton from '@/app/elements/button/icon-button';
import SvgIcon from '@/app/elements/icon/svg-icon';
import Image from 'next/image';
import Link from 'next/link';
import { FunctionComponent, useState } from 'react';
import NavItem from './nav-item';


interface props {
    navItems?: any
};

export const Navbar: FunctionComponent<props> = ({ navItems }) => {

    const [sidebarShow, setSidebarShow] = useState(false);

    return (
        <header className='flex justify-between items-center h-100 w-full bg-dark 
            fixed top-0 left-0 right-0 z-10 px-[15%] py-6 md:px-[15%] lg:px-[20%]'>
            <Link href="/">
                <Image src={"./images/app-logo.svg"} width={40} height={70} alt='logo' />
            </Link>
            <nav>
                <ul className='hidden md:flex'>
                    <NavItem linkName='projects' path='/projects' />
                    <NavItem linkName='about' path='/about' />
                    <NavItem linkName='contact' path='/contact' />
                    <NavItem linkName='blog' path='/blog' />
                </ul>
                <div className='flex md:hidden lg:hidden'>
                    <IconButton icon='bars' iconSize="lg" onClick={() => setSidebarShow(!sidebarShow)} />
                </div>
                <div className={`${sidebarShow
                    ? 'fixed top-0 left-0 h-screen w-[65%] bg-dark opacity-95 shadow-xl ease-out duration-500'
                    : 'fixed top-0 left-[-100%] h-screen ease-in duration-500'} bg-gradient-to-b 
                        from-dark from-[35%] to-primary to-[60%] md:hidden lg:hidden`}>
                    <div className='top-0 right-0 py-6 px-8 float-end'>
                        {/* <span><SvgIcon name='xCircle' size='lg' /></span> */}
                        <IconButton icon='xCircle' iconSize="lg" onClick={() => setSidebarShow(false)} />
                    </div>
                    <ul className='flex flex-col items-start pt-[150px] px-[15px]'>
                        <NavItem linkName='projects' path='projects' />
                        <NavItem linkName='about' path='about' />
                        <NavItem linkName='contact' path='contact' />
                        <NavItem linkName='blog' path='blog' />
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;

