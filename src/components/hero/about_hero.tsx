import Image from 'next/image'
import React from 'react'
import BgIMG1 from "../../../public/about.png"
import "./style.css"
import Link from 'next/link'
type Props = {}

const AboutHero = ( props: Props ) => {
    return (
        <div className='relative bg-black z-10 sm:pb-0 pb-80 h-screen w-screen raleway_font overflow-x-hidden text-white overflow-hidden'>
            <div className=' relative h-auto overflow-hidden lg:h-auto'>
                <Image src={BgIMG1} alt='vistacraze background poster' className='lg:h-screen h-screen w-screen' />

            </div>

            <div className='absolute  top-72  left-0 z-10 flex justify-center items-end bottom-32 w-screen gap-10 sm:gap-5 sm:pb-0  p-5 sm:p-20    '>

                <div className=' flex flex-col  backdrop-blur-xl p-5 sm:p-10 rounded-xl w-1/2 bg-black/10 gap-10 sm:gap-5 '>
                    <h6 className=' flex items-start justify-start'>About us</h6>
                    <div className='grid grid-flow-row grid-cols-1 sm:grid-cols-2'>
                        <h1 className='text-4xl sm:text-5xl'>Transforming Businesses with <span className='text-violet-500'>Cutting edge solution</span></h1>
                        <h4 className='text-xl md:text-lg lg:text-base'>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. At Brand Vision, we understand the value of your brand. We provide a range of customized services including branding, website design & development, SEO, marketing consultation, and more</h4>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutHero
