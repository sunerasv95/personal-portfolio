import {
    ButtonHTMLAttributes,
    FunctionComponent,
    MouseEventHandler,
    ReactNode
} from "react";

interface props {
    varient?: "button" | "submit" | "reset",
    size?: any, /* to-do */
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode
}

const buttonConfig = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
}

const Button: FunctionComponent<props &
    ButtonHTMLAttributes<HTMLButtonElement>> = ({
        varient = "button",
        size = "md",
        onClick,
        children,
        ...props
    }) => {

        return (
            <button
                className={`text-base text-center inline-block items-center bg-highlight rounded-lg`}
                type={varient}
                onClick={onClick}
                {...props}
            >
                {children}
            </button>
        );
    }

export default Button;