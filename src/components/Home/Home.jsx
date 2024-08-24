import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import Programs from '../Programs/Programs'
import JobOffer from '../JobOffer/JobOffer'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Programs />
      <JobOffer />
    </div>
  )
}

export default Home
