import React from 'react'
import Carousel from '../Carousel/HeroSection'
import TravelSection from '../TravelSection/TravelSection'
import About from '../About/About'
import DestinationGrid from '../TravelSection/DestinationGrid'

const main = () => {
  return (
    <div>
      <Carousel />
      <TravelSection />
      <About />
      <DestinationGrid />
    </div>
  )
}

export default main
