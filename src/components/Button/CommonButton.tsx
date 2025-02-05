
import Link from 'next/link';
import React, { ButtonHTMLAttributes, HTMLProps, ReactNode } from 'react'

interface ButtonProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

const CommonButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div className='bg-green-500 max-w-max p-2 rounded-sm cursor-pointer hover:bg-green-600 hover:text-white' {...props}>
      <Link href={'/#'}>
        {children}
      </Link>
    </div>
  );
};

export default CommonButton;