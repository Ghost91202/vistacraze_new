import React from 'react'
import Seo from "../../../public/TrbTQ8gSDTFgzJUBQkhOk2hAWOA.jpg"
import Image from 'next/image'
import TextReveal from '../gsap/TextReveal'

type Props = {}

const seosection2 = (props: Props) => {
    return (
        <div className='h-auto relative z-10 lg:h-screen bg-slate-950 text-white grid grid-flow-row grid-cols-1 p-5 lg:grid-cols-2  gap-10 items-center lg:gap-10 lg:p-32'>

            <div className='flex  flex-col gap-10'>
                <span className=' backdrop-blur-lg bg-gray-700/40 rounded-xl w-fit px-3 py-1 text-sm '>
                    Top SEO Agency
                </span>
                <h1 className='lg:text-6xl text-3xl  font-semibold '>
                    <TextReveal text=" Your Trusted SEO
                    Agency for Real Results"/>

                </h1>
                <p> Our top priority is to increase the online visibility of your brand by developing and implementing tailored Search Engine Optimization (SEO) strategies.

                </p>
                <p>Understanding your brand&apos;s unique value, we focus on targeted keyword optimization, on-page enhancements, and quality link building to improve your website&apos;s search engine rankings, ensuring your brand achieves lasting digital growth.

                </p>
                <div className='flex flex-col gap-5'>
                    <div className='flex gap-5'>
                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                            Increase Organic Traffic
                        </span>

                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                            Create Brand Awereness
                        </span>
                    </div>

                    <div className='flex gap-5'> <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>
                        Generate Leads and increase Sales
                    </span>
                        <span className=' backdrop-blur-lg border rounded-xl w-fit px-3 py-1 text-sm '>

                            Improve Local Search Visibility
                        </span>
                    </div>

                </div>
            </div>
            <div className='flex flex-col gap-10 right-0 ml-32'>
                <Image src={Seo} alt="SEO Image" width={600} height={400} className='rounded-2xl'/>
            </div>

        </div>
    )
}

export default seosection2
