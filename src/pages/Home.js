import React from 'react'
import About from '../components/home/About'
import Video from '../components/home/Video'
import MainPageLayout from '../components/MainPageLayout'
import Publications from '../components/home/Publications'
import Testimonials from '../components/home/Testimonial'

const Home = () => {
  return (
      <MainPageLayout>
          <div id='home'>
              <Video />
          </div>
          <div id='about'>
              <About />
          </div>
          <div id='publications'>
              <Publications />
          </div>
          <div id='testimonials'>
              <Testimonials />
          </div>
      </MainPageLayout>
  )
}

export default Home