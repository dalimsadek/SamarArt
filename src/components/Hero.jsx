import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{paddingTop: '6rem'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full">
        <div className="relative h-[70vh] md:h-[85vh] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505692952047-5d5b09c7b3b6?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center transform-gpu scale-100" style={{filter:'brightness(0.82)'}}> </div>

          {/* subtle topographic lines SVG */}
          <div className="absolute inset-0 pointer-events-none hero-decor">
            <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <g fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5">
                <path d="M0,420 C150,360 300,460 450,420 C600,380 750,460 900,420 C1050,380 1200,460 1200,460" />
                <path d="M0,360 C150,300 300,380 450,340 C600,300 750,380 900,340 C1050,300 1200,380 1200,380" />
                <path d="M0,300 C150,240 300,320 450,280 C600,240 750,320 900,280 C1050,240 1200,320 1200,320" />
              </g>
              <g fill="none" stroke="rgba(0,0,0,0.04)" strokeWidth="2">
                <path d="M0,200 C200,150 400,220 600,200 C800,180 1000,220 1200,200" />
              </g>
            </svg>
          </div>

          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center max-w-3xl">
              <div className="inline-block bg-warmblack/70 backdrop-blur-sm px-6 py-6 md:px-10 md:py-8 rounded-xl">
                <h1 className="serif text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight text-ivory">Des espaces qui racontent une histoire — créés avec âme et équilibre.</h1>
                <p className="mt-6 text-base md:text-xl lg:text-2xl text-ivory max-w-2xl mx-auto">Un mariage du minimalisme moderne et du savoir-faire artisanal. Intérieurs chaleureusement texturés, pensés pour durer.</p>
                <a href="#portfolio" className="inline-block mt-8 bg-softgold text-warmblack py-3 px-6 rounded-full shadow hover:scale-105 transition">Voir mes projets</a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/70 text-sm">Faites défiler ↓</div>
        </div>
      </motion.div>
    </section>
  )
}
