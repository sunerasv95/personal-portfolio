import Image from 'next/image';
import { FunctionComponent, MouseEventHandler, ReactNode, useState } from 'react';

interface props {
    name: string,
    size?: "sm" | "md" | "lg",
    color?: string,
    hoverColor?: string
}

const SvgIcon: FunctionComponent<props> = ({
    name,
    size = "md",
    color = "#C0C9C4",
    hoverColor = "#F9BB96"
}) => {

    const [isHovered, setIsHovered] = useState(false);

    const sizes: { [key: string]: { height: number, width: number } } = {
        sm: { height: 16, width: 16 },
        md: { height: 24, width: 24 },
        lg: { height: 32, width: 32 },
    }

    const { height, width } = sizes[size];


    const svgIconPaths: { [key: string]: ReactNode } = {
        arrowUpLeft: (<path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />),
        xCircle: (<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />),
        bars: (<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />)
    }

    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={height} strokeWidth={2}
        stroke={`${isHovered ? hoverColor : color}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {svgIconPaths[name]}
    </svg> || null;

}

export default SvgIcon;


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">

</svg>


