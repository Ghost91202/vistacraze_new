import React from 'react'
import Image from 'next/image'
import Icon1 from "../../../public/ball.png"
import Icon2 from "../../../public/CnKsdE3rl2U2u8De7EivFf24vNU.png"
import Icon3 from "../../../public/Z4mJFQzIrTNTjAePnRFtvPRfI.png"
import Icon4 from "../../../public/Icon-3.png"
import TextReveal from '../gsap/TextReveal'
import "./style/style.css"


type Props = {}

const Seosection3 = ( props: Props ) => {
    return (
        <div className='bg-slate-950 relative z-10 h-auto text-white raleway_font  lg:h-full   flex flex-col lg:p-32 lg:pb-5 p-5  justify-between'>
            <div className=' flex gap-10 justify-between'>


                <h1 className=' lg:text-6xl  lg:w-1/2 text-3xl '>
                    <TextReveal text="Why choose Vistcraze as your SEO Agency?" />

                </h1>
                 <span className='bg-gray-700/40 w-fit h-fit     px-3 py-1 rounded-md'>
                    Serach Engine Optimization Services
                </span>
            </div>
            <div className='grid grid-flow-row  gap-20 lg:p-32 grid-cols-1 lg:grid-cols-3'>
                <div className=' flex gap-5 flex-col border border-gray-400/20 rounded-2xl p-5 justify-between'>
                    <Image src={Icon1} alt="" className='w-full' />
                    <h1 className='lg:text-2xl font-semibold  '>Dedicated SEO Project Manager</h1>
                    <p>At Vistacraze, you will benefit from a dedicated SEO project manager who is fully informed about your objectives and progress, ensuring you receive frequent updates.</p>
                </div>
                <div className=' flex gap-5 flex-col border border-gray-400/20 rounded-2xl p-5 justify-between'>
                    <Image src={Icon2} alt="" className='w-full' />
                    <h1 className='lg:text-2xl font-semibold  '>Comprehensive Reporting</h1>
                    <p>Our SEO packages include detailed monthly and quarterly reports, highlighting your traffic growth, effective keywords, and comparative industry performance.</p>
                </div>
                <div className=' flex gap-5 flex-col border border-gray-400/20 rounded-2xl p-5 justify-between'>
                    <Image src={Icon3} alt="" className='w-full' />
                    <h1 className='lg:text-2xl font-semibold  '>Advanced Technology for SEO</h1>
                    <p>By partnering with us for your SEO needs, you gain access to the latest and most precise tracking and reporting technologies, ensuring optimal return on your investment.</p>
                </div>


            </div>

        </div>
    )
}

export default Seosection3
