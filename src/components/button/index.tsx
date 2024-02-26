import React from 'react';

type ButtonProps = {
  text: string;
  onClick: () => void;
  className: string;
  leadingIcon?: JSX.Element;
  trailingIcon?: JSX.Element;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, className, leadingIcon, trailingIcon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 space-x-2 rounded-md text-base font-medium focus:outline-none focus:ring transition ${className}`}
    >
      {leadingIcon && <span>{leadingIcon}</span>}
      {text}
      {trailingIcon && <span>{trailingIcon}</span>}
    </button>
  );
};

export default Button;