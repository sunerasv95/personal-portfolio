import { FunctionComponent, ReactNode } from 'react';

interface props {
    size: "default" | "screen"
    children: ReactNode
}

const Container: FunctionComponent<props> = ({ size, children }) =>
    <div className={`container mx-auto py-[20%] md:py-[10%] ${size === "screen" ?? 'h-screen'}`}>{children}</div>

export default Container;