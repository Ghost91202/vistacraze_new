"use client";
// src/components/RightDrawer.tsx
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { IoIosMenu, IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import { FiList } from "react-icons/fi";
import { FiGift } from "react-icons/fi";

const RightDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className=' '>
      <button onClick={toggleDrawer} >
        <div className='flex flex-col'>
          <div className='rotate-90'>
          |||
        </div>

        </div>
        <FiGift className="text-4xl text-white" />
      </button>
      <div
        className={`fixed z-50 top-0 pt-20 right-0 w-64  h-screen bg-slate-950 backdrop-blur-3xl text-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className=" p-5 flex flex-col gap-5 text-2xl">
          <button
            onClick={toggleDrawer}
            className="p-2 w-fit absolute right-10 top-8 text-white rounded-lg "
          >
            <RxCross2 />
          </button>


          <h1 className="text-violet-600 font-semibold">All Services</h1>
          <div className="flex flex-col gap-5 text-lg items-start pl-2">
            <Link href="/webdesign" className="flex items-center  backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              Web Design <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>

            <Link href="/uiux" className="flex items-center  backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              UI/UX <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
            <Link href="/seo" className="flex items-center  backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
              SEO <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </Link>
          <Link href="/About" className="flex items-center  backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
            About <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
          <Link href="/Contact" className="flex items-center  backdrop-blur-xl px-2 rounded-md group hover:text-violet-700" onClick={handleLinkClick}>
            Contact <IoIosArrowRoundForward className="flex items-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightDrawer;
