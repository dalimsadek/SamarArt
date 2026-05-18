import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { tableaux } from '../data/tableaux'

export default function Atelier() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <section id="atelier" style={{ background: 'var(--bg)', padding: '7rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" />
                <span
                  className="text-[10px] tracking-[0.32em] uppercase font-medium"
                  style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Création artistique
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 300,
                  lineHeight: 1.15,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}
              >
                L'Atelier{' '}
                <em style={{ fontStyle: 'italic' }}>Sam'Art</em>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <p style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                Au-delà de la décoration d'intérieur, je crée des œuvres originales — peintures
                acryliques, tableaux texturés — qui apportent une âme unique à chaque espace.
                Chaque tableau est une création unique, disponible à la commande sur mesure.
              </p>
              <Link
                to="/debuter-projet?type=tableau"
                className="btn-gold inline-flex"
              >
                Créer mon œuvre
              </Link>
            </motion.div>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {tableaux.map((tab, i) => (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden cursor-pointer"
                style={{ background: 'var(--bg)', aspectRatio: '1/1' }}
                onClick={() => setLightbox(i)}
              >
                <img
                  src={tab.src}
                  alt={tab.nom}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-400"
                  style={{
                    background: 'linear-gradient(to top, rgba(26,23,21,0.75) 0%, transparent 55%)',
                    opacity: 0,
                  }}
                  ref={el => {
                    if (el) {
                      el.closest('.group').addEventListener('mouseenter', () => { el.style.opacity = 1 })
                      el.closest('.group').addEventListener('mouseleave', () => { el.style.opacity = 0 })
                    }
                  }}
                >
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1rem',
                      fontWeight: 400,
                      color: 'white',
                      lineHeight: 1.2,
                    }}
                  >
                    {tab.nom}
                  </p>
                  <p
                    className="mt-1"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.14em', color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {tab.technique}
                  </p>
                </div>

                {/* Always-visible bottom label (mobile) */}
                <div
                  className="md:hidden absolute bottom-0 left-0 right-0 p-3"
                  style={{ background: 'rgba(26,23,21,0.6)' }}
                >
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '0.9rem',
                      color: 'white',
                      lineHeight: 1.2,
                    }}
                  >
                    {tab.nom}
                  </p>
                  <p
                    style={{ fontSize: '0.6rem', letterSpacing: '0.1em', color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {tab.technique}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA band */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{
              background: 'var(--dark)',
              borderRadius: '2px',
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.3rem',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: 'var(--gold-light)',
                  lineHeight: 1.4,
                }}
              >
                Tableau sur mesure, fresque murale,<br />
                création unique pour votre intérieur.
              </p>
              <p className="mt-2" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                Chaque œuvre est conçue en accord avec votre espace, votre palette et votre sensibilité.
              </p>
            </div>
            <Link
              to="/debuter-projet?type=tableau"
              className="btn-gold shrink-0"
              style={{ background: 'transparent', border: '1px solid var(--gold)', color: 'var(--gold-light)' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--ivory)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold-light)' }}
            >
              Créer mon œuvre
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(26,23,21,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-6"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem' }}
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
            >
              ✕
            </button>

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 max-w-lg w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={tableaux[lightbox].src}
                alt={tableaux[lightbox].nom}
                className="max-h-[75vh] w-auto object-contain"
                style={{ borderRadius: '2px' }}
              />
              <div className="text-center">
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    color: 'white',
                  }}
                >
                  {tableaux[lightbox].nom}
                </p>
                <p
                  className="mt-1"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {tableaux[lightbox].technique}
                </p>
              </div>
              <Link
                to="/debuter-projet?type=tableau"
                onClick={() => setLightbox(null)}
                className="btn-gold"
              >
                Créer mon œuvre
              </Link>
            </motion.div>

            {/* Prev / Next */}
            {lightbox > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onClick={e => { e.stopPropagation(); setLightbox(l => l - 1) }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
            )}
            {lightbox < tableaux.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onClick={e => { e.stopPropagation(); setLightbox(l => l + 1) }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            )}

            <p
              className="absolute bottom-5 left-1/2 -translate-x-1/2"
              style={{ fontSize: '0.65rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', fontFamily: '"DM Sans", sans-serif' }}
            >
              {lightbox + 1} / {tableaux.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
