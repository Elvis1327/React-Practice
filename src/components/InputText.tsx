import React from 'react';

interface Props {
    label: string;
    className: string;
    onChange?: any;
    value?: string;
    name: string;
    placeholder?: string;
}

export const InputText = ({label,className,onChange,value,name,placeholder}: Props) => {
    return (
        <>
            <label>{label}</label>
            <input 
                type="text" 
                className={className}
                onChange={onChange}
                value={value}
                name={name}
                placeholder={placeholder}
                autoComplete='off'
            />
        </>
    )
};
