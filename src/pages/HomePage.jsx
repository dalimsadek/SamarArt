import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Divider from '../components/Divider'
import Design from '../components/Design'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage(){
  return (
    <>
      <Hero />
      <About />
      <Divider />
      <Design />
      <Divider />
      <Portfolio />
      <Divider />
      <Testimonials />
      <Contact />
    </>
  )
}
