import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="hero" className="min-h-screen flex items-center" style={{paddingTop: '6rem'}}>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className="w-full">
        <div className="relative h-[70vh] md:h-[85vh] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505692952047-5d5b09c7b3b6?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center transform-gpu scale-100" style={{filter:'brightness(0.85)'}}> </div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="text-center text-ivory max-w-3xl">
              <h1 className="serif text-4xl md:text-6xl font-bold leading-tight">Des espaces qui racontent une histoire — créés avec âme et équilibre.</h1>
              <p className="mt-6 text-lg md:text-2xl opacity-95 text-ivory/90">Un mariage du minimalisme moderne et du savoir-faire artisanal. Intérieurs chaleureusement texturés, pensés pour durer.</p>
              <a href="#portfolio" className="inline-block mt-8 bg-softgold text-warmblack py-3 px-6 rounded-full shadow hover:scale-105 transition">Voir mes projets</a>
            </div>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm">Faites défiler ↓</div>
        </div>
      </motion.div>
    </section>
  )
}
