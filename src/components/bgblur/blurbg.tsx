import Image from 'next/image'
import React from 'react'
import BgIMG1 from "../../../public/contact.jpg"

import "./style.css"
import Link from 'next/link'
type Props = {}

const Blurbg = (props: Props) => {
    return (
        <div className='relative bg-black z-10 h-screen overflow-hidden text-white'>
            <div className=' absolute h-screen overflow-hidden'>
                <Image src={BgIMG1} alt='vi'  className='h-screen w-screen'/>

            </div>
            <div className='w-screen z-0  h-screen overflow-hidden xl:bottom-0 flex items-end  absolute'>


            </div>

            <div className='absolute  top-72  left-0    z-10 flex justify-center items-end bottom-10 sm:bottom-32 w-screen gap-10 sm:gap-5 sm:pb-0  p-5 sm:p-20  '>
                <div className='flex flex-col text-end backdrop-blur-xl p-10 gap-5 sm:w-1/2 rounded-2xl'>
                    <h1 className='sm:text-4xl text-2xl font-semibold bottom-9 top-44'>UI/UX Design <span className='text-purple-600'>Agency</span></h1>
                    <p className='sm:text-md  pb-5 border-b border-white/30'>User Interface and User Experience Design Agency
                    </p>
                    <p>Vistacraze is an award-winning UI/UX Agency that focuses on creating effective designs based on research and in-depth testing.
                    </p>
                    <div className=' border border-white/40 rounded-full px-3 w-fit hover:bg-purple-500 hover:text-white sm:mt-10 sm:text-md flex text-sm items-end  justify-end right-0 p-2'>
                        <Link href="#sticky" >
                        Scroll to explore
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blurbg
