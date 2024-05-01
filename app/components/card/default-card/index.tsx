import Button from '@/app/elements/button';
import IconButton from '@/app/elements/button/icon-button';
import Summary from '@/app/elements/summary';
import Image from 'next/image';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react'

interface props {
    width: number,
    height: number,
    title: string,
    description: string,
    withImage?: boolean,
    imagePath?: string,
    onClick: () => void
}

const DefaultCard: FunctionComponent<props> = ({
    width,
    height,
    title,
    description,
    withImage = false,
    imagePath = "", /* TO_DO: setup a default image*/
    onClick
}) => {
    return (
        <div className={`flex flex-col w-${width} h-${height} rounded-lg bg-brunswick-green px-9 py-8`}>
            <div className='flex justify-between items-start'>
                <div className='flex flex-col'>
                    {
                        withImage ? <Image className="pb-5 inline-block rounded-full" width={90} height={90} src={imagePath} alt='money-icon' /> : ''
                    }
                    <h5 className='text-h5 font-bold max-w-[10ch] mb-3'>{title}</h5>
                </div>
                <IconButton icon='arrowUpLeft' onClick={onClick} />
            </div>
            <div>
                <Summary text={`${description}`} maxCharLength={150} />
            </div>
        </div>
    )
}

export default DefaultCard;