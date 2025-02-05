import React, { ReactNode } from 'react'
import Image from 'next/image'

//Components

// images AND icons
import Users from '@/assets/icons/users.svg'
import Company from '@/assets/icons/company.svg'
import Hands from '@/assets/icons/hands.svg'


interface CardProps {
    title: string;
    text: string;
    icon?: 'user' | 'company'
}

const Card: React.FC<CardProps> = ({ title, text, icon }) => {

    const iconName = () => {
        if(icon == 'user') return Users;
        if(icon == 'company') return Company;
    }

    return (
        <div className='w-full flex items-center gap-x-5 p-3 border border-slate-200 shadow-md md:w-[200px]'>
            <Image 
                src={iconName()} 
                height={32}
                width={32}
                alt='users'
                unoptimized
            />
            <div className='flex flex-col'>
                <h6 className='text-1xl font-semibold text-[#4D4D4D]'>{title}</h6>
                <span className='text-sm text-[#717171]'>{text}</span>
            </div>
        </div>
    )
}

// Impact Statistics Section Component
const ImpactStatisticsSection = () => {
  return (
    <div className='p-4 flex flex-col justify-around items-start gap-x-5 sm:flex-row sm:items-center bg-slate-50'>

        <div className='sm:min-h-32 sm:flex sm:flex-col p-2'>
            <h4 className='flex flex-col text-2xl font-semibold text-[#4D4D4D]'>
                Helping a local <span className='text-green-500'>business reinvent itself</span>
            </h4>
            <span className='text-sm my-3 text-[#18191F]'>We reached here with our hard work and dedication</span>
        </div>

        <div className='flex flex-wrap gap-5 p-2 sm:max-w-[460px] sm:justify-between'> 
            <Card title='2,245,341' text='Members' icon='user'/>
            <Card title='46,328' text='Clubs' icon='company'/>
            <Card title='828,867' text='Event Bookings' icon='user'/>
            <Card title='1,926,436' text='Payments' icon='user'/>
        </div>
    </div>
  );
};

export default ImpactStatisticsSection;