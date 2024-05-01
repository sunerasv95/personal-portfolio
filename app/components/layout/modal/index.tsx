'use client'

import Button from '@/app/elements/button';
import IconButton from '@/app/elements/button/icon-button';
import { FunctionComponent, ReactNode, useState } from 'react'

interface props {
    isOpen: boolean,
    children: ReactNode,
    onClose: () => void
}

const Modal: FunctionComponent<props> = ({
    isOpen = true,
    children,
    onClose
}) => {

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-500 
            bg-opacity-75 transition-opacity duration-300 ease-in-out ${!isOpen ? 'hidden' : ''}`}>
            <div className='flex flex-col w-[30%] bg-neutral rounded-lg p-7'>
                <div className='flex justify-end'>
                    <IconButton icon='xCircle' iconSize="lg" iconColor='#121F18' onClick={onClose} />
                </div>
                <div className='my-2 py-2 px-3'>{children}</div>
            </div>
        </div>
    )
}

export default Modal;