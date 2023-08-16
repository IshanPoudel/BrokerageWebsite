// #Contains banner and listings and such
//Header is already present

import React from 'react'
import Banner from '../components/Banner'
import Testimonials from '../components/Testimonials'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
        
        <Banner/>
        <Testimonials/>
        <Featured/>
    </div>
    
  )
}

export default Home