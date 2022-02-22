import React from 'react';

interface Props {
    children: any;
    className: string;
    type: "button" | 'submit' | 'reset';
    onClick?: any;
}

export const Button = ({children, className, type, onClick}: Props) => {
    return (
        <button
            className={className}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

