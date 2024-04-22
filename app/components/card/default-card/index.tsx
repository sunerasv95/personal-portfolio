import Image from 'next/image';
import React, { FunctionComponent, ReactNode } from 'react'

interface props {
    width: number,
    height: number,
    title: string,
    description: string,
    withImage?: boolean,
    imagePath?: string
}

const DefaultCard: FunctionComponent<props> = ({
    width,
    height,
    title,
    description,
    withImage = false,
    imagePath = "" /* TO_DO: setup a default image*/
}) => {
    return (
        <div className={`w-${width} h-${height} rounded-lg bg-[#2D4F3E] px-9 py-8`} >
            {
                withImage ?
                    (
                        <>
                            <div className="flex justify-between items-start mb-5">

                                <Image className="pb-5 inline-block rounded-full" width={90} height={90} src={'./images/cash-me.svg'} alt='money-icon' />
                                <span className='my-4'>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5989 16.644L16.1319 16.644C16.781 16.644 17.3058 16.1192 17.3023 15.4736L17.3058 2.05305C17.3058 1.40395 16.781 0.879142 16.1353 0.882594L2.71135 0.882593C2.06225 0.882593 1.53744 1.4074 1.54089 2.05305L1.5409 3.58603C1.5409 4.24204 2.08296 4.7703 2.73897 4.75649L10.8631 4.55969L0.940131 14.4827C0.480926 14.9419 0.480926 15.6807 0.940131 16.1399L2.04499 17.2448C2.50419 17.704 3.24306 17.704 3.70227 17.2448L13.6252 7.32182L13.4284 15.446C13.4112 16.1054 13.9394 16.6475 14.5989 16.644Z" fill="#F1F8F0" />
                                    </svg>
                                </span>
                            </div>
                            <h5 className='text-h5 font-bold max-w-readable'>{title}</h5>
                            <p className='text-sm py-4'>{description}</p>
                        </>
                    ) :
                    <>
                        <div className="flex justify-between items-start mb-5">
                            <h5 className='text-h5 font-bold max-w-readable'>{title}</h5>
                            <span className='my-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5989 16.644L16.1319 16.644C16.781 16.644 17.3058 16.1192 17.3023 15.4736L17.3058 2.05305C17.3058 1.40395 16.781 0.879142 16.1353 0.882594L2.71135 0.882593C2.06225 0.882593 1.53744 1.4074 1.54089 2.05305L1.5409 3.58603C1.5409 4.24204 2.08296 4.7703 2.73897 4.75649L10.8631 4.55969L0.940131 14.4827C0.480926 14.9419 0.480926 15.6807 0.940131 16.1399L2.04499 17.2448C2.50419 17.704 3.24306 17.704 3.70227 17.2448L13.6252 7.32182L13.4284 15.446C13.4112 16.1054 13.9394 16.6475 14.5989 16.644Z" fill="#F1F8F0" />
                                </svg>
                            </span>
                        </div>
                        <p className='text-sm py-4'>{description}</p>
                    </>
            }

        </div>
    )
}

export default DefaultCard;