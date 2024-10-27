import React from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  onClick?:any
}

const Button: React.FC<ButtonProps> = ({ type = "button", className = "", children,onClick }) => {
  return (
    <button type={type} className={`w-full bg-black text-white py-2 rounded-lg ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
