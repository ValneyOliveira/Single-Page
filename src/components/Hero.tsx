import React from 'react'
import CommonButton from './Button/CommonButton';
import Image from 'next/image';

import LessonInsights from '@/assets/images/image-01.svg'

const HeroSection = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center pt-20 p-2 bg-slate-50 mg:pt-5 md:flex-row md:justify-around'>
        
        <div className='flex flex-col gap-y-10'>

            <div className='flex flex-col justify-center items-start'>
                <h1 className='text-[#4D4D4D] text-4xl font-semibold flex flex-col'>
                    Lessons and insights 
                    <span className='text-green-400'> from 8 years</span>
                </h1>
                <p className='mt-5 text-sm text-gray-300'>
                    Where to grow your business as a photographer: site or social media?
                </p>
            </div>
            <CommonButton>
                Register
            </CommonButton>
        </div>
       
        <Image 
            src={LessonInsights}
            width={400}
            height={300}
            alt='imagen 01'
            className='mt-11 sm:mt-0 md:block'
            unoptimized
        />
    </div>
  )
}

export default HeroSection;