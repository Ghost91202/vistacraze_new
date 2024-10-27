'use client'
import React, { useState } from 'react';

const Newsletter = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="flex justify-center w-screen items-center  font-bold xl:h-[43vh]">
      <div className="flex flex-col items-center justify-center border border-gray-300 gap-5 p-10 bg-black rounded-3xl backdrop-blur-xl w-[90%] max-w-lg">
        <h1 className="text-3xl md:text-4xl text-white text-center">
          Elevate the way you source design
        </h1>
        <h6 className="w-full md:w-2/3 text-lg md:text-xl text-center text-gray-300">
          Get ready to start producing stunning, efficient design work without the hassles of hiring. Soon available.
        </h6>
        <div className="flex items-center w-full max-w-md p-1 border-2 border-gray-200 rounded-full">
          <input
            type="email"
            placeholder="name@gmail.com"
            className="flex-grow px-4 py-2 text-gray-200 bg-transparent outline-none rounded-full focus:ring-2 focus:ring-purple-500"
            aria-label="Email"
          />
          <button
            onClick={handleSubscribe}
            className={`p-3 text-white bg-purple-600 rounded-3xl transition-transform transform duration-200 ${
              isSubscribed ? 'scale-90 bg-green-500' : 'hover:scale-105'
            }`}
          >
            {isSubscribed ? 'Subscribed!' : 'Get noticed'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
