import React from 'react'
import Hero from '../components/Hero'
import Divider from '../components/Divider'
import Design from '../components/Design'
import Portfolio from '../components/Portfolio'
import Atelier from '../components/Atelier'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Design />
      <Divider />
      <Portfolio />
      <Divider />
      <Atelier />
      <Divider />
      <Testimonials />
      <Contact />
    </>
  )
}
