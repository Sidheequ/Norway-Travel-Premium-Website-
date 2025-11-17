import React from 'react'
import Carousel from '../Carousel/HeroSection'
import TravelSection from '../TravelSection/TravelSection'
import About from '../About/About'
import DestinationGrid from '../TravelSection/DestinationGrid'
import TestimonialSection from '../Testimony/Testimony'
import Contact from '../Contact/contact'

const main = () => {
  return (
    <div>
      <Carousel />
      <TravelSection />
      <About />
      <TestimonialSection />
      <DestinationGrid />
      <Contact />
    </div>
  )
}

export default main
