import React from 'react';


interface Props {
 placeHolder?: any;
 type: any;
 value: any;
 onChange: any;
 className: string;
};

export const Input = ({
    placeHolder, 
    type, 
    value, 
    onChange,
    className}: Props) => {
        return (
            <>
                <input 
                    type={type}
                    placeholder={placeHolder}
                    value={value}
                    onChange={onChange}
                    className={className}
                />
            </>
    );
};

