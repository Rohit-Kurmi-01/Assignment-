import React from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type = "button", className = "", children }) => {
  return (
    <button type={type} className={`w-full bg-black text-white py-2 rounded-lg ${className}`}>
      {children}
    </button>
  );
};

export default Button;
