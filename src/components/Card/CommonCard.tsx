import React, { ReactNode } from 'react'

interface CommonCardProps {
  children: ReactNode;
  title: string;
  paragraph: string;
}

// Common Card Component (used to display general information)
const CommonCard: React.FC<CommonCardProps> = ({ children, title, paragraph }) => {
  return (
    <div className='h-[220px] flex flex-col justify-center items-center text-center p-3 border border-slate-200 shadow-md lg:max-w-[330px]'>
        {children}
        <h4 className='text-lg text-[#4D4D4D] font-bold mt-3 mb-1'>{title}</h4>
        <p className='text-[#717171]'>{paragraph}</p>
    </div>
  );
};

export default CommonCard;