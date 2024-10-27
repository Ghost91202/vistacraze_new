// components/StaticTabs.tsx
"use client"
import Link from 'next/link';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import Accordion from '../Accordion/Accordion';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const tabs = [
        { label: 'All' },
        { label: 'Website' },
        { label: 'Branding' },
        { label: 'Digital Marketing' },
    ];

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setActiveTab((prev) => Math.min(prev + 1, tabs.length - 1)),
        onSwipedRight: () => setActiveTab((prev) => Math.max(prev - 1, 0)),
    });

    return (
        <div className="flex relative rounded-b-3xl z-10 bg-slate-950  gap-10 xl:p-10 lg:p-10 p-5 lg:pl-10 xxl sm:flex-row flex-col justify-around b text-white">
            <div className=" justify-center xl:pl-0 xl:w-1/3 lg:w-1/3 flex flex-col gap-10">
                <span className="bg-purple-500 rounded-3xl w-fit text-sm px-3 py-1">FAQ&apos;S</span>
                <h1 className="xl:text-3xl lg:text-2xl font-semibold">
                    Answers To Frequently Asked Questions
                </h1>
                <p>
                    Curious about how Brand Vision, a leading Web Design Company and Marketing Agency, operates? Explore our FAQ section for a comprehensive understanding of our services and procedures.
                </p>
                <Link href="/" className=" w-fit pb-2 hover:text-blue-500">
                    Let&apos;s Discuss
                </Link>
            </div>
            <div {...swipeHandlers} className="ring-offset-transparent">
                <div className="flex border-b xl:text-base text-sm gap-5 border-gray-400/30">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`py-2 lg:px-3 px-2 xl:px-4 ${activeTab === index ? 'border-b-2 border-blue-500' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="p-4 ring-offset-transparent">
                    {activeTab === 0 && (
                        <div className=''>
                            <div>
                                <Accordion items={[
                                    { title: 'How long does it take to develop a website?', content: 'Development time varies but typically ranges from 2-12 weeks based on complexity.' },
                                    { title: 'What is the cost of website development?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What is your refund policy?', content: 'Our refund policy is...' },
                                    { title: 'How do I contact support?', content: 'You can contact support by...' }
                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 1 && (
                        <div className=' '>
                            <div>
                                <Accordion items={[
                                    { title: 'How long does it take to develop a website?   ', content: 'Development time varies but typically ranges from 2-12 weeks based on complexity.' },
                                    { title: 'What is the cost of website development?', content: 'Costs depend on requirements, features, and design; it can range from a few hundred to thousands of dollars.' },
                                     { title: 'Will my website be mobile-friendly?', content: 'Yes, modern websites are designed to be responsive and accessible on all devices, including mobiles and tablets.' },
                                    { title: 'Can I update the website content myself?', content: 'Most websites use CMS platforms (like WordPress), enabling easy updates without coding knowledge.' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[

                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 2 && (
                        <div className=' '>
                            <div>
                                <Accordion items={[
                                    { title: 'What is branding, and why is it important?', content: 'Branding creates a unique identity, building trust and loyalty with customers.' },
                                    { title: 'How does branding differ from marketing?', content: 'Branding establishes identity, while marketing promotes it to reach and attract audiences.' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What elements make up a strong brand?', content: 'A clear message, unique visuals, brand voice, and consistent values form a strong brand.' },
                                    { title: 'How can branding increase customer loyalty?', content: 'Consistent branding fosters trust, creating emotional connections that enhance customer loyalty.' }
                                ]} />
                            </div>
                        </div>
                    )}
                    {activeTab === 3 && (
                        <div className=' '>
                            <div>
                                <Accordion items={[
                                    { title: 'What is digital marketing, and how does it differ from traditional marketing?', content: 'Digital marketing uses online channels to promote products, while traditional marketing relies on offline methods.' },
                                    { title: 'How can I measure the success of my digital marketing campaigns?', content: 'Success can be measured using metrics like website traffic, conversion rates, and ROI.' }
                                ]} />
                            </div>
                            <div>
                                <Accordion items={[
                                    { title: 'What are the key components of an effective digital marketing strategy?', content: 'Key components include SEO, content marketing, social media, email marketing, and paid advertising.' },
                                    { title: 'How long does it take to see results from digital marketing efforts?', content: 'Results can vary, but noticeable improvements typically take 3 to 6 months of consistent effort.' }
                                ]} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
