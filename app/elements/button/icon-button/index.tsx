import Image from 'next/image';
import React, { FunctionComponent, MouseEventHandler } from 'react';
import SvgIcon from '../../icon/svg-icon';

interface props {
    icon: string,
    background?: "filled" | "transparent",
    backgroundColor?: "string",
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const IconButton: FunctionComponent<props> = ({
    icon,
    background,
    backgroundColor,
    onClick
}) => {

    return (
        <button className='p-1' onClick={onClick} type='button'>
            <SvgIcon name={icon} size='md' />
        </button>
    )
}

export default IconButton;