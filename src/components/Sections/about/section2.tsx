import React from 'react'

type Props = {}

const Section2 = ( props: Props ) => {
    return (
        <div>

            <div className=' grid grid-flow-row gap-10 p-5 sm:grid-flow-col  raleway_font justify-center  lg:p-32 lg:grid-cols-2 '>
                <div>
                    <h5 className=' text-purple-600'>
                        How it works

                    </h5>
                    <h1 className='text-5xl text-balance'>
                        Our Journey Towords Technological Excellence
                    </h1>
                </div>
                <div className='flex flex-col gap-10'>
                    <h1 className='text-3xl text-pretty'>
                        At Vistacraze, we specialize in providing innovative software  solutions  that impower business to streamline  opeartions, enhance  productivity, and  achieve   their goals efficiently.
                    </h1>
                    <div>
                        <h4 className='text-xl text-purple-600'>
                            01 Efficiency
                        </h4>
                        <p>Designed for your team, see yourself  and manage time with vistacraze</p>
                    </div>
                      <div>
                        <h4 className='text-xl text-purple-600'>
                            02 Reliability
                        </h4>
                        <p>Designed for your team, see yourself  and manage time with vistacraze</p>
                    </div>
                      <div>
                        <h4 className='text-xl text-purple-600'>
                            03 Innovative
                        </h4>
                        <p>Designed for your team, see yourself  and manage time with vistacraze</p>
                    </div>
                      <div>
                        <h4 className='text-xl text-purple-600'>
                            04 Integrates
                        </h4>
                        <p>Designed for your team, see yourself  and manage time with vistacraze</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2
