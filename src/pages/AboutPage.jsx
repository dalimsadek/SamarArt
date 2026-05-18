import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true },
})

export default function AboutPage() {
  return (
    <div style={{ background: 'var(--bg)' }}>

      {/* Hero banner */}
      <div
        className="relative flex items-end"
        style={{ height: '38vh', minHeight: '260px', marginTop: '72px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://static.wixstatic.com/media/59de7a_f1a5e0f57f0443a586ec570673261951~mv2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            filter: 'brightness(0.45)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <span className="block h-px w-8" style={{ background: 'var(--gold)' }} />
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
            >
              À propos
            </span>
          </div>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            Samar Msadek
          </h1>
        </div>
      </div>

      {/* Main content */}
      <section style={{ padding: '6rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">

            {/* Portrait */}
            <motion.div {...fadeUp(0)} className="relative">
              <div
                className="absolute -top-5 -left-5 w-3/4 h-3/4 hidden lg:block"
                style={{ border: '1px solid var(--gold-pale)', borderRadius: '2px', zIndex: 0 }}
              />
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: '2px', aspectRatio: '3/4', zIndex: 1 }}
              >
                <img
                  src="/samar2.jpeg"
                  alt="Samar Msadek — Interior Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <div className="space-y-6">
              <motion.div {...fadeUp(0.1)}>
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--gold)',
                    letterSpacing: '0.02em',
                  }}
                >
                  Fondatrice — Sam'Art Interior Design
                </p>
              </motion.div>

              <motion.h2 {...fadeUp(0.18)}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                  fontWeight: 300,
                  lineHeight: 1.25,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}
              >
                Des intérieurs qui révèlent votre identité avec{' '}
                <em style={{ fontStyle: 'italic' }}>justesse et subtilité.</em>
              </motion.h2>

              <motion.div {...fadeUp(0.24)} style={{ height: '1px', background: 'var(--gold-pale)', width: '48px' }} />

              {[
                "Diplômée d'un Master en Décoration d'Intérieur et Design à l'école de Condé, j'ai lancé mon entreprise à 24 ans pour apporter une touche de nouveauté et d'originalité dans le monde de la décoration et du design. Mon attention aux détails, ma capacité à écouter les besoins de mes clients et mon engagement à respecter délais et budgets sont au cœur de ma pratique.",
                "Je conçois des espaces uniques qui reflètent la personnalité et les besoins de mes clients. Mon ambition : des lieux qui allient fonctionnalité, confort et identité — des espaces que l'on vit, que l'on ressent, et qui laissent une empreinte durable.",
              ].map((text, i) => (
                <motion.p key={i} {...fadeUp(0.3 + i * 0.1)}
                  className="leading-relaxed"
                  style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.85 }}
                >
                  {text}
                </motion.p>
              ))}

              {/* Quote */}
              <motion.blockquote {...fadeUp(0.5)}
                className="pl-5"
                style={{ borderLeft: '2px solid var(--gold)', paddingTop: '0.5rem', paddingBottom: '0.5rem' }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.05rem',
                    fontStyle: 'italic',
                    color: 'var(--text-soft)',
                    lineHeight: 1.6,
                  }}
                >
                  "Les détails ne sont pas les détails. Ils sont la conception."
                </p>
                <p
                  className="mt-2"
                  style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Charles Eames
                </p>
              </motion.blockquote>

              <motion.div {...fadeUp(0.58)} className="flex gap-3 pt-2">
                <Link to="/debuter-projet" className="btn-gold">Débuter votre projet</Link>
                <Link to="/#portfolio" className="btn-outline">Voir les projets</Link>
              </motion.div>
            </div>
          </div>

          {/* Studio section */}
          <div
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center mt-24 pt-16"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="gold-rule" />
                <span
                  className="text-[10px] tracking-[0.32em] uppercase font-medium"
                  style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Le Studio
                </span>
              </div>
              <motion.h2 {...fadeUp(0)}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.2,
                  color: 'var(--text)',
                }}
              >
                Sam'Art Décoration d'Intérieur
              </motion.h2>
              {[
                "Installée dans les Vosges à Saint-Nabord (88200), Sam'Art Interior Design intervient dans toute la France pour vos projets d'appartements, maisons, commerces et bureaux. Je m'engage à comprendre vos besoins, vous écouter et vous guider tout au long du processus de conception.",
                "Soucieuse de la qualité et de la fonctionnalité, je m'assure que chaque espace est optimalement utilisé pour créer un environnement confortable et fonctionnel. Je m'occupe du design, de la création de mobilier, du choix des matériaux et du suivi des travaux jusqu'à la livraison.",
              ].map((t, i) => (
                <motion.p key={i} {...fadeUp(i * 0.1)}
                  className="leading-relaxed"
                  style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.85 }}
                >
                  {t}
                </motion.p>
              ))}
              <motion.div {...fadeUp(0.25)}>
                <Link to="/debuter-projet" className="btn-outline inline-flex">Débuter votre projet</Link>
              </motion.div>
            </div>

            <motion.div {...fadeUp(0.15)} className="overflow-hidden" style={{ borderRadius: '2px', aspectRatio: '4/5' }}>
              <img
                src="https://static.wixstatic.com/media/59de7a_f1a5e0f57f0443a586ec570673261951~mv2.jpg"
                alt="Atelier Sam'Art"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
