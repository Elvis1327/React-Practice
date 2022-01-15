import React from 'react';
import './button.css';

export const STYLES = [
    'btn--primary',
    'btn--outline'
];

export const SIZES = [
    'btn--medium',
    'btn--large'
];

interface Types {
    children: any;
    type?: any;
    onClick?: any;
    buttonStyle?: any;
    buttonSize?: any;
}

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}: Types) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonsSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <button 
            className={`btn ${checkButtonStyle} ${checkButtonsSize}`}
            onClick={onClick} 
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
