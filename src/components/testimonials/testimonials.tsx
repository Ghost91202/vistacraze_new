// components/CardSlider.tsx
"use client"
// components/CardSlider.tsx
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProfileImage from '../../../public/profile.png'; // Replace with your image path

const Testimonials: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { id: 2,  Name: "Rghav Shing ", content: `"The team crafted a social media strategy that truly resonates with our target audience. Our engagement rates have soared, and we are finally seeing conversions from our social channels. Highly recommend their expertise!"`, img: ProfileImage },
        { id: 1,  Name: "Shatvik yadav ", content: 'Since partnering with this agency, our website traffic has increased by over 150%! They took the time to understand our business, and it shows in the results. We have seen a direct impact on our sales and brand visibility', img: ProfileImage },
        { id: 3,  Name: "Isha Choudhary ", content: 'They completely overhauled our SEO strategy, and now we are ranking on the first page for key search terms. The team provided clear, actionable insights and kept us in the loop with monthly progress reports. We are thrilled with the results!', img: ProfileImage },
        { id: 4,  Name: "Rohan Deshmukh ", content: 'The content they developed for us is exactly what we needed to set ourselves apart. Fresh, engaging, and perfectly aligned with our brand voice. We have seen more leads and better client retention because of their work!', img: ProfileImage },
        { id: 5,  Name: "Simran Nair ", content: 'Their team is super responsive and proactive. Anytime we have questions or need adjustments, they handle everything right away. It is refreshing to work with an agency that truly feels like an extension of our own team!', img: ProfileImage },
        { id: 6,  Name: "Ananya Bansal ", content: 'They created and managed our Google Ads campaign with precision. We have seen our ROI double in just a few months! They know the right strategies to get results, and their data-driven approach gives us confidence in every campaign.', img: ProfileImage },
        { id: 7,  Name: "Rahul Bhattacharya ", content: 'They helped us redefine our brand positioning in the market, and the results have been incredible. Our message is clearer, and clients now see the unique value we offer. Their strategic insight and creative approach are top-notch!', img: ProfileImage },
        { id: 8,  Name: "Priya Singh ", content: 'Their team provided in-depth market analysis that completely changed how we approach our digital strategy. We were able to identify new target segments and adjust our campaigns accordingly. The insights they provide are invaluable for our growth!', img: ProfileImage },
        { id: 9,  Name: "Neha Kapoor ", content: 'Working with this agency has been a game-changer. They deliver consistent results month after month, which has allowed us to plan confidently and expand faster. Their professionalism and reliability are unmatched!', img: ProfileImage },
    ];

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(cards.length / 3) - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === Math.ceil(cards.length / 3) - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative z-10 w-full  bg-slate-950 raleway_font text-white flex flex-col gap-10 overflow-hidden p-5 lg:p-5 xl:p-20">
            <div className='flex flex-col gap-5'>
                <span className='text-sm w-fit px-3 py-1 bg-purple-600 rounded-xl'>Testimonials</span>
                <h1 className='xl:w-1/2 lg:w-1/2 text-2xl lg:text-4xl  xl:text-5xl'>Never Convinced?
Hear From Our Clients.</h1>
            </div>
            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {Array.from({ length: Math.ceil(cards.length / 3) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex">
                        <div className='xl:flex lg:flex hidden '>
                            {cards.slice(slideIndex * 3, slideIndex * 3 + 3).map((card) => (
                            <div key={card.id} className="w-full flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">

                                <div className="p-6 flex flex-col gap-5 border m-4 rounded-lg shadow-lg">

                                    <div>
                                        {card.content}
                                    </div>
                                </div>
                                <div className="relative items-center pl-5 flex gap-5 w-full">
                                    <Image
                                        src={card.img}
                                        alt=""
                                        className="rounded-full h-12 w-12"
                                        width={50}

                                    />
                                    <h6>{card.Name}</h6>
                                </div>
                            </div>
                        ))}
                        </div>
                        <div className=' flex xl:hidden lg:hidden '>
                            {cards.slice(slideIndex * 1, slideIndex * 1 + 1).map((card) => (
                            <div key={card.id} className="w-full flex flex-col gap-5 sm:w-1/2 lg:w-1/3 p-2">

                                <div className="p-6 flex flex-col gap-5 border m-4 rounded-lg shadow-lg">

                                    <div>
                                        {card.content}
                                    </div>
                                </div>
                                <div className="relative items-center pl-5 flex gap-5 w-full">
                                    <Image
                                        src={card.img}
                                        alt=""
                                        className="rounded-full h-12 w-12"
                                        width={50}

                                    />
                                    <h6>{card.Name}</h6>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className=' flex items-center gap-5 justify-center'>
                <button onClick={handlePrev} className=" left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
                    <FaChevronLeft />
                </button>
                <button onClick={handleNext} className=" right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
