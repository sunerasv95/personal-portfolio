import {
    ButtonHTMLAttributes,
    FunctionComponent,
    MouseEventHandler,
    ReactNode
} from "react";

interface props {
    varient?: "button" | "submit" | "reset",
    size?: "sm" | "md" | "lg", /* to-do */
    mode?: 'filled' | 'outlined',
    onClick?: MouseEventHandler<HTMLButtonElement>,
    children: ReactNode
}

const Button: FunctionComponent<props &
    ButtonHTMLAttributes<HTMLButtonElement>> = ({
        varient = "button",
        size = "md",
        mode = 'filled',
        onClick,
        children,
        ...rest
    }) => {

        const sizeClasses = {
            sm: 'px-3 py-1 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg'
        }

        const outlinedClasses = `border`;
        const filedClasses = `bg-gradient-to-r from-highlight from-10% to-primary to-100%`;

        const buttonClasses = `text-base text-center inline-block items-center rounded-lg   
            ${sizeClasses[size]} ${mode === 'outlined' ? outlinedClasses : filedClasses}`;

        return (
            <button
                className={buttonClasses}
                type={varient}
                onClick={onClick}
                {...rest}>
                {children}
            </button>
        );
    }

export default Button;