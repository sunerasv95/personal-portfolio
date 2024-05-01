import Link from 'next/link'
import React, { FunctionComponent } from 'react'

interface props {
    path: string
    linkName: string
}

const NavItem: FunctionComponent<props> = ({
    path,
    linkName
}) => {

    return (
        <li className="inline-block text-base text-light py-5 ps-16 
            text-center hover:text-highlight">
            <Link href={path}>
                {linkName}
            </Link>
        </li>
    )
}

export default NavItem