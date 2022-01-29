import React from 'react';

interface Props  {
  children: React.ReactNode;
  className?: string;
  onClick?: any
};

export const Button = ({children, className, onClick}: Props) => {
  return (
    <button 
      className={`${className}`}
      type='submit'
      onClick={onClick}
    >
      {children}
    </button>
  )
};
