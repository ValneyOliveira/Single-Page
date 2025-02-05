import Image from 'next/image'
import React from 'react'

import ImagePlash from '@/assets/images/image-04.png'

// Customer Testimonial Section Component
const TestimonialSection = () => {
  return (
    <div className="bg-slate-50 p-4">
        
        <div className='flex flex-col items-center gap-x-10 md:flex-row md:justify-center md:items-start md:gap-x-28'>
        {/* Photo by <a href="https://unsplash.com/@alexbemore?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alexander Shatov</a> */}
            <Image
                src={ImagePlash}
                height={200}
                width={260}
                alt='mobile-login'
            />
            
            <div className='flex flex-col gap-y-3 text-justify p-2 md:w-6/12'>
                <p className='text-sm font-normal text-[#89939E] max-w-max md:max-w-[700px]'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <div className='my-2'>
                    <span className='text-xl text-[#4CAF4F] font-semibold'>Bob Smith</span>
                    <p className="text-[#89939E]">British Dragon Boat Racing Association</p>
                </div>
                <span className="text-[#4CAF4F] font-bold">Meet all customers</span>
            </div>
        </div>
    </div>
  );
};

export default TestimonialSection