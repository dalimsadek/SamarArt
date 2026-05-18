import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--bg)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="gold-rule" />
          <span
            className="text-[10px] tracking-[0.32em] uppercase font-medium"
            style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
          >
            À propos
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-16 xl:gap-24 items-center">

          {/* Image column */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            custom={0}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative offset frame */}
            <div
              className="absolute -top-4 -left-4 w-2/3 h-2/3 hidden lg:block"
              style={{ border: '1px solid var(--gold-pale)', borderRadius: '2px', zIndex: 0 }}
            />
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: '2px', aspectRatio: '4/5', zIndex: 1 }}
            >
              <img
                src="/samar2.jpeg"
                alt="Samar Msadek — Interior Designer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gold tag on image */}
              <div
                className="absolute bottom-6 right-6 px-4 py-2"
                style={{ background: 'rgba(26,23,21,0.82)', backdropFilter: 'blur(8px)' }}
              >
                <p
                  className="text-[9px] tracking-[0.22em] uppercase"
                  style={{ color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Samar Msadek
                </p>
                <p
                  className="text-[9px] tracking-[0.16em] uppercase mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Interior Designer
                </p>
              </div>
            </div>
          </motion.div>

          {/* Text column */}
          <div className="space-y-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={1}
              viewport={{ once: true }}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 300,
                lineHeight: 1.2,
                color: 'var(--text)',
                letterSpacing: '-0.01em',
              }}
            >
              Chaque espace est pensé comme une composition sensible, où{' '}
              <em style={{ fontStyle: 'italic' }}>esthétique et émotion</em>{' '}
              se rencontrent.
            </motion.h2>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={2}
              viewport={{ once: true }}
              style={{ height: '1px', background: 'var(--gold-pale)', width: '60px' }}
            />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={3}
              viewport={{ once: true }}
              className="leading-relaxed"
              style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.8 }}
            >
              Diplômée d'un Master en Décoration d'Intérieur et Design à l'école de Condé,
              j'ai fondé Sam'Art Interior Design pour apporter une touche d'originalité
              dans chaque projet. J'imagine des intérieurs authentiques et intemporels,
              conçus pour révéler votre identité avec justesse et subtilité.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={4}
              viewport={{ once: true }}
              className="leading-relaxed"
              style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.8 }}
            >
              Des lieux qui se vivent, se ressentent, et laissent une empreinte durable.
              Installée dans les Vosges, j'interviens partout en France.
            </motion.p>

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={5}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                ['50+', 'Projets'],
                ['6', 'Années'],
                ['3', 'Catégories'],
              ].map(([n, l]) => (
                <div key={l} className="text-center py-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '2rem',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)' }}
                  >
                    {l}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={6}
              viewport={{ once: true }}
              className="flex gap-3 pt-2"
            >
              <Link to="/debuter-projet" className="btn-gold">
                Débuter votre projet
              </Link>
              <Link to="/a-propos" className="btn-outline">
                En savoir plus
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
