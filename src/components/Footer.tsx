import React, { HTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

import Facebook from '@/assets/icons/facebook.svg';
import Instagram from '@/assets/icons/instagram.svg';
import X from '@/assets/icons/x.svg';

import Youtube from '@/assets/icons/youtube.svg';
import Image from 'next/image';

interface FooterProps extends HTMLAttributes<HTMLElement> {
    children?: ReactNode;
};

const Footer: React.FC<FooterProps> = ({ children, ...props}) => {
  return (
    <footer className='min-h-32 p-4 flex justify-center bg-[#263238]' {...props}>
        
        <div className='flex flex-wrap gap-x-40 md:justify-center md:items-start md:flex-nowrap'>

            <div className='flex flex-col justify-center'>
                <h6 className='hidden text-2xl text-[#FFFFFF] font-semibold md:flex mb-2'>Nexcode</h6>
                <p className='hidden text-sm text-[#F5F7FA] mt-2 mb-1.5 md:flex'> Copyright © 2025</p>
                <span className='hidden text-sm text-[#F5F7FA] md:flex'>All rights reserved</span>

                <span className='text-sm text-[#F5F7FA] md:hidden'>Copyright © 2025 - All rights reserved</span>

                <div className='my-2 md:my-10'>
                    <ul className='flex justify-center gap-3 md:justify-start'>
                        <a href="#">
                            <Image 
                                src={Instagram}
                                height={16}
                                width={16}
                                alt='Instagram'
                                unoptimized
                            />
                        </a>
                        
                        <a href="#" >
                            <Image 
                                src={Facebook}
                                height={16}
                                width={16}
                                alt='Facebook'
                                unoptimized
                                className='text-white'
                                
                            />
                        </a>

                        <a href="#">
                            <Image 
                                src={X}
                                height={16}
                                width={16}
                                alt='X'
                                unoptimized
                            />
                        </a>

                        <a href="#">
                            <Image 
                                src={Youtube}
                                height={16}
                                width={16}
                                alt='Youtube'
                                unoptimized
                            />
                        </a>
                    </ul>
                </div>
            </div>
            
            <div className='hidden justify-around gap-x-16 md:flex'>
                <div className='flex flex-col'>
                    <h6 className='text-[#FFFFFF] text-lg font-semibold mb-2'>Company</h6>
                    <ul className='text-[#F5F7FA] flex flex-col gap-1.5'>
                        <Link href={'/#'}>About us</Link>
                        <Link href={'/#'}>Blog</Link>
                        <Link href={'/#'}>Contact us</Link>
                        <Link href={'/#'}>Pricing</Link>
                        <Link href={'/#'}>Testimonials</Link>
                    </ul>
                </div>

                <div className='flex flex-col'>
                    <h6 className='text-[#FFFFFF] text-lg font-semibold mb-2'>Support</h6>
                    <ul className='text-[#F5F7FA] flex flex-col gap-1.5'>
                        <Link href={'/#'}>Helpe center</Link>
                        <Link href={'/#'}>Terms of service</Link>
                        <Link href={'/#'}>Legal</Link>
                        <Link href={'/#'}>Privicy policy</Link>
                        <Link href={'/#'}>Status</Link>
                    </ul>
                </div>

                <div className='hidden text-[#F5F7FA] lg:block'>
                    <h6 className='text-[#FFFFFF]'>Stay up to date</h6>

                    <div className="my-3 flex gap-2">
                        <input placeholder='Your email adress' type="text" className="block p-2 rounded-md border-none outline-none dark:placeholder:text-gray-100 dark:focus:outline-blue-500 dark:text-gray-400 dark:bg-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <button className='bg-green-500 rounded-md p-2 w-16 cursor-pointer hover:bg-green-600'>Sent</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;