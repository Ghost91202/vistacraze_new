import Image from 'next/image'
import React from 'react'

import Head from 'next/head'
import AboutHero from '@/components/hero/about_hero'
import Section2 from '@/components/Sections/about/section2'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <div>

        <AboutHero />
        <Section2 />
  </div>


    </>
  )
}

export default page
