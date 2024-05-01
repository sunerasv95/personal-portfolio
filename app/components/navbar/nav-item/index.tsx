import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FunctionComponent, useState } from 'react'

interface props {
    path: string
    linkName: string
}

const NavItem: FunctionComponent<props> = ({
    path,
    linkName
}) => {

    const pathname = usePathname();
    console.log(pathname);

    return (
        <li className={`inline-block text-base 
        ${pathname === path
                ? 'text-highlight'
                : 'text-neutral'} py-5 ps-16 text-center hover:text-highlight`}>
            <Link href={path}>
                {linkName}
            </Link>
        </li>
    )
}

export default NavItem;