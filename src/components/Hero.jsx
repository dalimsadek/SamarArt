import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="min-h-screen flex items-center bg-base" style={{paddingTop: '6rem'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full">
        <div className="relative h-[72vh] md:h-[86vh] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('/samar2.jpeg')] bg-cover bg-center transform-gpu scale-105" style={{filter:'brightness(0.55)'}}></div>

          <div className="absolute inset-0 pointer-events-none" style={{background:'linear-gradient(120deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.2) 90%)'}}></div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center">
              <p className="uppercase tracking-[0.38em] text-xs text-white/80">Architecture d'intérieur</p>
              <h1 className="serif text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white tracking-[0.02em] mt-3">NOUS VOUS AIDONS À CRÉER VOTRE RÊVE</h1>
              <p className="mt-4 text-base md:text-lg text-white/90 max-w-2xl">Chaque détail est pensé pour conjuguer style et fonctionnalité, et raconter votre histoire.</p>
              <div className="flex flex-col md:flex-row items-center gap-3 justify-center mt-6">
                <a href="#contact" className="inline-flex items-center px-6 py-3 rounded-full bg-[var(--color-accent)] text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition shadow-soft">Débuter votre projet</a>
                <a href="#portfolio" className="inline-flex items-center gap-2 text-sm md:text-base text-white hover:text-[var(--color-accent)] transition">
                  <span>Découvrir les réalisations</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M19 12l-7 7-7-7"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/75 text-sm tracking-[0.18em] uppercase">Faites défiler</div>
        </div>
      </motion.div>
    </section>
  )
}
