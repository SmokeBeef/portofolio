import Image from 'next/image'
import React from 'react'

interface prop{
  title: string,
  bgImage: string,
  desc: string
}
const Carousel = (props: prop) => {
  return (
    <div>
      <Image alt='' src={""} />
    </div>
  )
}

export default Carousel
