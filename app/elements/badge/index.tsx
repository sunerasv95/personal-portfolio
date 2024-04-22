import React, { FunctionComponent } from 'react';

interface props {
    children: any
}

const Badge: FunctionComponent<props> = ({ children }) => (
    <span className="inline-flex items-center border rounded-full px-3 py-1 text-sm me-2 my-2">
        {children}
    </span>
)

export default Badge;