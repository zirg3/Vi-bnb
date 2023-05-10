'use client';

import { IconType } from "react-icons";

interface ButtonProps {
  label?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  full?: boolean;
  colorIcon?: string
}

const Button: React.FC<ButtonProps> = ({ 
  label, 
  onClick, 
  disabled, 
  outline,
  small,
  icon: Icon,
  full,
  colorIcon
}) => {
  return ( 
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        px-5
        flex
        justify-center
        items-center
        ${full ? 'w-fit' : 'w-full'}
        ${outline ? 'bg-white' : 'bg-rose-500'}
        ${outline ? 'border-black' : 'border-rose-500'}
        ${outline ? 'text-black' : 'text-white'}
        ${small ? 'text-sm' : 'text-md'}
        ${small ? 'py-4' : 'py-5'}
        ${small ? 'font-light' : 'font-semibold'}
        ${small ? 'border-[1px]' : 'border-2'}
      `}
    >
      {Icon && (
        <Icon
          size={25}
          color={`${colorIcon}`}
          className={`
            relative
            min-w-[25px]
            ${label ? 'mr-3' : 'mr-0'}
          `}
        />
        // absolute
        // left-4
        // top-2/4
        // translate-y-[-50%]
      )}
      {label}
    </button>
  );
}

export default Button;