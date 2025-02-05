import Image from "next/image";
import HeroSection from "@/components/Hero";

import { Users, Company, Hands } from '@/assets/icons/Icons';
import { MobileLogin, LoginDesign, CardImage1, CardImage2, CardImage3 } from '@/assets/images/Images'
import { Google, Microsoft, Pinterest, Instagram} from '@/assets/brands/Brands'

import { 
    Header, CommonCard, CommonButton, 
    ImpactStatisticsSection, TestimonialSection,
    CustomSection, Footer 
} from '@/components/Components'


export default function Home() {
  return (
    <div>
        <Header/>
        <HeroSection/>
      
        <div className='h-full flex flex-col justify-between items-center gap-y-2 py-5 px-4 md:py-3'>
            
            {/* Header Section: Title and Subtitle */}
            <div className='text-center my-5'>
                <h2 className='text-2xl text-[#4D4D4D] font-semibold'>Our Clients</h2>
                <span className='text-[#717171]'>We have been working with some Fortune 500+ clients</span>
            </div>

            {/* Client Logos */}
            <div className='my-10 sm:gap-5'>
                <div className="w-full flex justify-between items-center gap-x-10 md:gap-x-20 lg:gap-x-40 md:mt-5 md:mb-8">
                    <Image 
                        src={Google}
                        height={100}
                        width={140}
                        alt="Brand Google"
                        unoptimized
                    />

                    <Image 
                        src={Microsoft}
                        height={100}
                        width={140}
                        alt="Brand Microsoft"
                        unoptimized
                    />

                    <Image 
                        src={Pinterest}
                        height={100}
                        width={140}
                        alt="Pinterest"
                        unoptimized
                    />
                    <Image 
                        src={Instagram}
                        height={100}
                        width={140}
                        alt="Instagram"
                        unoptimized
                        className="hidden md:block"
                    />
                </div>

            </div>


            {/* Section Title and Subtitle for Nextcode */}
            <div className='self-center text-center my-3'>
                <h3 className='text-2xl text-[#4D4D4D] font-semibold'>Manage your entire community in a single system</h3>
                <span className='text-[#717171]'>Who is Nextcode suitable for?</span>
            </div>

            {/* Card Section: List of Solutions with Icons */}
            <div className='flex flex-col justify-center items-center flex-wrap gap-5 md:gap-15 sm:flex-row md:flex-nowrap sm:max-w-[1200px]'>
                <CommonCard
                    title='Membership Organisations'
                    paragraph='Our membership management software provides full automation of membership renewals and payments'
                >
                    <Image src={Users} height={30} width={30} alt='users icons' unoptimized/>
                </CommonCard>

                <CommonCard
                    title='National Associations'
                    paragraph='Our membership management software provides full automation of membership renewals and payments'
                >
                    <Image src={Company} height={30} width={30} alt='users icons' unoptimized/>
                </CommonCard>

                <CommonCard
                    title='Clubs And Groups'
                    paragraph='Our membership management software provides full automation of membership renewals and payments'
                >
                <Image src={Hands} height={30} width={30} alt='users icons' unoptimized/>
                </CommonCard>
            </div>

            {/* Mobile Illustration and Text Section */}
            <div className='w-full flex flex-col items-center my-10 p-2 sm:gap-x-8 md:flex-row md:justify-center lg:gap-x-32 lg:w-4/5'>
            {/* <a href="https://storyset.com/mobile">Mobile illustrations by Storyset</a> */}
                <Image 
                    src={MobileLogin}
                    height={260}
                    width={300}
                    alt='mobile-login'
                    unoptimized
                />

                <div className='flex flex-col gap-y-3 mt-3 text-justify md:w-6/12 '>
                    <h3 className='text-2xl text-[#4D4D4D] font-semibold text-wrap md:text-3xl'>The unseen of spending three years at Pixelgrade</h3>
                    <p className='text-sm font-normal text-[#717171]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                    
                    {/* Call to Action Button */}
                    <CommonButton>
                        Learn More
                    </CommonButton>
                </div>
            </div>
        </div>

        <ImpactStatisticsSection/>

        <div className="h-full flex flex-col justify-between items-center gap-y-2 py-5 px-4 md:py-3">
            {/* Mobile Illustration and Text Section */}

            <div className='w-full flex flex-col items-center my-10 p-2 sm:gap-x-8 md:flex-row md:justify-center lg:gap-x-32 lg:w-4/5'>
                {/* Mobile Illustration Image */}
                <Image 
                    src={LoginDesign}
                    height={260}
                    width={300}
                    alt='mobile-login'
                    unoptimized
                />

                {/* Text Content Next to Mobile Illustration */}
                <div className='flex flex-col gap-y-3 mt-3 text-justify md:w-6/12 '>
                    <h3 className='text-2xl text-[#4D4D4D] font-semibold text-wrap md:text-3xl'>How to design your site footer like we did</h3>
                    <p className='text-sm font-normal text-[#717171]'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <CommonButton>
                        Learn More
                    </CommonButton>
                </div>
            </div>
        </div>

        <TestimonialSection />

        <div className='h-full flex flex-col justify-between items-center gap-y-2 py-5 px-4 md:py-3'>
            
            {/* Section Title and Description */}
            <div className='text-center my-5  md:w-5/12'>
                <h2 className='text-2xl text-[#4D4D4D] font-semibold'>Caring is the new marketing</h2>
                <p className='text-[#717171] text-sm my-2 text-justify sm:text-center'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>

            {/* Card Section: Display of Blog Post Cards */}
            <div className='flex flex-col justify-center items-center flex-wrap gap-5 md:gap-15 sm:flex-row lg:flex-nowrap sm:max-w-[1200px]'>
                
                {/* Card 1: Blog Post 1 */}
                <div className="flex flex-col justify-center items-center p-5">
                    <Image 
                        src={CardImage1}
                        height={200}
                        width={260}
                        alt=""
                        className="shadow-lg"
                    />

                    {/* Blog Post Description and "Read More" Link */}
                    <div className="h-32 font-semibold bg-slate-100 border border-slate-200 shadow-lg w-[220px] -mt-16 z-20 p-2 rounded">
                        <p className="text-[#717171] text-sm my-2">Creating Streamlined Safeguarding Processes with OneRen</p>
                        <span className="text-[#4CAF4F] text-sm">Readmore</span>
                    </div>
                </div>

                {/* Blog Post Description and "Read More" Link */}
                <div className="flex flex-col justify-center items-center p-5">
                    <Image 
                        src={CardImage2}
                        height={200}
                        width={260}
                        alt=""
                        className="shadow-lg"
                    />

                    {/* Blog Post Description and "Read More" Link */}
                    <div className="h-32 font-semibold bg-slate-100 border border-slate-200 shadow-lg w-[220px] -mt-16 z-20 p-2 rounded">
                        <p className="text-[#717171] text-sm my-2">What are your safeguarding responsibilities and how can you manage them?</p>
                        <span className="text-[#4CAF4F] text-sm">Readmore</span>
                    </div>
                </div>

                {/* Card 2: Blog Post 2 */}
                <div className="flex flex-col justify-center items-center p-5">
                    <Image 
                        src={CardImage3}
                        height={200}
                        width={260}
                        alt=""
                        className="shadow-lg"
                    />

                    {/* Blog Post Description and "Read More" Link */}
                    <div className="h-32 font-semibold bg-slate-100 border border-slate-200 shadow-lg w-[220px] -mt-16 z-20 p-2 rounded">
                        <p className="text-[#717171] text-sm my-2">Revamping the Membership Model with Triathlon Australia.</p>
                        <span className="text-[#4CAF4F] text-sm">Readmore</span>
                    </div>
                </div>
            </div>
        </div>

        <CustomSection />
        <Footer />
    </div>
  );
};
