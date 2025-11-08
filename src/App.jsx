import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Design from './components/Design'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const [dark, setDark] = useState(false)

  React.useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  },[dark])

  return (
    <div className={`relative overflow-x-hidden ${dark ? 'bg-warmblack text-ivory' : ''}`}>
      <Navbar dark={dark} setDark={setDark} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Design />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
