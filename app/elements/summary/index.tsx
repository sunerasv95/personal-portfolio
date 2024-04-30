'use client';

import { FunctionComponent } from 'react';

interface props {
    text: string,
    maxCharLength: number
};

export const Summary: FunctionComponent<props> = ({
    text, maxCharLength
}) => {

    const trimmedText = `${text.length > maxCharLength ?
        text.substring(0, maxCharLength) :
        text}`;

    return <p className='my-4 text-sm max-w-[60ch]'>{trimmedText}...</p>;
}

export default Summary;