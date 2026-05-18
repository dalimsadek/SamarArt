import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  const imgRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return
      const y = window.scrollY
      imgRef.current.style.transform = `scale(1.06) translateY(${y * 0.18}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Background image with subtle parallax */}
      <div
        className="absolute inset-0 will-change-transform"
        ref={imgRef}
        style={{
          backgroundImage: "url('/page_garde.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.06)',
        }}
      />

      {/* Gradient overlay — stronger at bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,23,21,0.3) 0%, rgba(26,23,21,0.15) 40%, rgba(26,23,21,0.6) 80%, rgba(26,23,21,0.78) 100%)',
        }}
      />

      {/* Top-left micro label */}
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="absolute top-[88px] left-8 lg:left-14"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: 'rgba(255,255,255,0.6)', fontFamily: '"DM Sans", sans-serif' }}
        >
          Décoration d'Intérieur
        </span>
      </motion.div>

      {/* Bottom-right stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-10 right-8 lg:right-14 flex gap-8"
      >
        {[['10+', 'Projets réalisés'], ['100%', 'Sur mesure']].map(([num, label]) => (
          <div key={num} className="text-right">
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.6rem',
                fontWeight: 300,
                color: 'var(--gold-light)',
                lineHeight: 1,
              }}
            >
              {num}
            </p>
            <p
              className="mt-1"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              {label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Bottom-center: CTAs + scroll indicator stacked */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="/debuter-projet" className="btn-gold">
            Débuter votre projet
          </Link>
          <a
            href="#portfolio"
            className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium"
            style={{ color: 'rgba(255,255,255,0.8)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Voir les réalisations
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className="text-[9px] tracking-[0.28em] uppercase"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Défiler
          </span>
          <div
            className="w-px overflow-hidden"
            style={{ height: '36px', background: 'rgba(255,255,255,0.15)' }}
          >
            <motion.div
              className="w-full"
              style={{ height: '36px', background: 'var(--gold)' }}
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
