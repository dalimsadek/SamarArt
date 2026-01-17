import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import StartProjectPage from './pages/StartProjectPage'
import AboutPage from './pages/AboutPage'
import ProjectDetailPage from './pages/ProjectDetailPage'

export default function App(){
  const location = useLocation()

  useEffect(()=>{
    if(location.hash){
      const el = document.querySelector(location.hash)
      if(el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  return (
    <div className="relative overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Navbar />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/debuter-projet" element={<StartProjectPage mode="start" />} />
          <Route path="/contacter" element={<StartProjectPage mode="contact" />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/projets/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
