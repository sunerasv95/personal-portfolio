'use client';

import { FunctionComponent, useEffect, useState } from 'react';


interface props {
    tabHeading: string,
    content: string
};

export const ParagraphTab: FunctionComponent<props> = ({ tabHeading, content }) => {
    return (
        <div>
            <h4 className='text-h4 py-5'>{tabHeading}</h4>
            <p className='py-3'>{content}</p>
        </div>
    );
}

export default ParagraphTab;