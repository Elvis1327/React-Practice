import React from 'react';

interface Props {
    type: string;
    onChange?: any;
    className: string;
    name: string;
    value?: string;
    label?: string;
    placeholder?: string;
}

export const InputControls = ({type, onChange, className, name, value, label, placeholder}: Props) => {
    return (
        <>
        <label>{label}</label>
        <input 
            type={type}
            className={className}
            name={name}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
        </>
    )
}


