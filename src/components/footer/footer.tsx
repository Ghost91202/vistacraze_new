import React from 'react'
import Logo from "../../../public/logo.png"
import Image from 'next/image'
import Link from 'next/link'
import "./style.css"
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialPintarest } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialGithub } from "react-icons/sl";
import { TiSocialFacebook } from "react-icons/ti";

export default function Footer() {
  return (
    <div className=' w-full footerbg raleway_font relative bottom-0 z-0 lg:p-32 lg:pb-10'>
      <div className=' -z-1   text-white flex p-5 xl:p-10 flex-col gap-10'>

        <footer className=' flex  justify-between lg:items-center  gap-10 lg:flex-row flex-col pb-5 sm:pb-10  '>
          <Link className='hover:text-yellow-400/90' href="/">
          <Image src={Logo.src} alt="vistaCraze logo" width={200} height={50} />
        </Link>


          <h2 className='text-3xl lg:w-1/2 '>
            Vistacraze has full type of potential for your start-up business.
        </h2>
        </footer>
        <div className=' grid lg:grid-flow-col  gap-10  lg-gap-0 xl:grid-cols-2 '>
          <div className='flex flex-col text-4xl  gap-2 sm:flex-col'>

            <div className='flex flex-col font-semibold  gap-2 '>
              <Link className='hover:text-yellow-400/90' href="/">Home</Link>
              <Link className='hover:text-yellow-400/90' href="/">About</Link>
              <Link className='hover:text-yellow-400/90' href="/"> Work</Link>
              <Link className='hover:text-yellow-400/90' href="/">Services</Link>

              <Link className='hover:text-yellow-400/90' href="/">Pricing</Link>

              <Link className='hover:text-yellow-400/90' href="/">Contact</Link>
            </div>
          </div>


          <div className='flex xl:flex-row flex-col justify-around text-2xl'>

          <div className='flex flex-col  gap-2 '>

            <div className='flex flex-col gap-2'>
              <Link className='hover:text-yellow-400/90' href="/">Insights</Link>
              <Link className='hover:text-yellow-400/90' href="/career">Career</Link>
              <Link className='hover:text-yellow-400/90' href="#faq">FAQs</Link>
              <Link className='hover:text-yellow-400/90' href="/privacy">Privacy Policy</Link>
            </div>
            </div>
              <div className='flex flex-col gap-2'>
              <Link className='hover:text-yellow-400/90' href="/">LinkedIn</Link>
              <Link className='hover:text-yellow-400/90' href="/career">Instagram</Link>
              <Link className='hover:text-yellow-400/90' href="#faq">facebook</Link>
              <Link className='hover:text-yellow-400/90' href="/privacy">Pintrest</Link>
          </div>
          </div>

        </div>

       

        <h6 className='flex items-center text-center  justify-center'>© All Copyright Reserved by VistaCraze Marketing agency.</h6>
      </div>
    </div>
  )
}
