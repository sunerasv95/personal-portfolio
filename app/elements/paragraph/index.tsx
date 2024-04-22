'use client';

import { FunctionComponent } from 'react';

interface props {
    content?: any
};

export const Paragraph: FunctionComponent<props> = ({ content }) => {
    return <p>{content}</p>;
}

export default Paragraph;