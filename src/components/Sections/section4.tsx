
import Image from "next/image"

import { BsArrowUpRight } from "react-icons/bs";
import Secimg from "../../assets/section3.avif"


export default function section4() {
    return (
        <div className="p-3 -mt-10 relative">
             <div className=" p-5 relative z-10 ">
                <div className=" absolute rounded-xl mt-10  lg:left-1/2  flex flex-col gap-5 bg-cyan-500 p-5 lg:w-1/2 w-full   text-white h-auto  z-5">
                    <div className="lg:text-6xl flex  font-extrabold ">
                        <h1 className=" flex flex-row  text-xl">FOR BUSINESS<BsArrowUpRight className="text-white hidden"/>
                        </h1>
                    </div>
                    <div className="text-3xl font-extrabold text-balance pr-10">
                        <h1>
                            YOUR IDEAS, OUR EXPERTISE, INFINITE POSSIBILITIES.

                        </h1>
                    </div>
                    <div className="text-lg font-thin text-balance pr-10">
                        <h1>

                            WELCOME TO VISTA CRAZE, WHERE CREATIVITY MEETS EXPERTISE IN THE WORLD OF DIGITAL SERVICES. AS A DYNAMIC AND INNOVATIVE FREELANCING AGENCY, WE TAKE PRIDE IN DELIVERING TOP-NOTCH SOLUTIONS TAILORED TO MEET THE UNIQUE NEEDS OF OUR CLIENTS.
                        </h1>
                    </div>
                      <div className="bg-white text-slate-950 w-36 flex justify-center items-center rounded-lg font-semibold p-4 ">
                        <button>GET A QUOTE</button>
                    </div>
                </div>
            </div>

            <Image src={Secimg} alt=
                "VistaCraze digital marketing agency" className=" w-screen mr-20 rounded-2xl h-screen relative -z-2 " />

        </div>

    )
}
