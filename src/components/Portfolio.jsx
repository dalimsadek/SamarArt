import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects as projectData } from '../data/projects'

export default function Portfolio() {
  const [filter, setFilter] = useState('Tous')
  const navigate = useNavigate()

  const categories = ['Tous', ...Array.from(new Set(projectData.map(p => p.category)))]
  const filtered = filter === 'Tous' ? projectData : projectData.filter(p => p.category === filter)

  return (
    <section id="portfolio" style={{ background: 'var(--bg-surface)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span
                className="text-[10px] tracking-[0.32em] uppercase font-medium"
                style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
              >
                Réalisations
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
              Projets <em style={{ fontStyle: 'italic' }}>sélectionnés</em>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className="text-[10px] tracking-[0.18em] uppercase font-medium px-4 py-2 transition-all duration-200"
                style={{
                  borderRadius: '9999px',
                  fontFamily: '"DM Sans", sans-serif',
                  background: filter === c ? 'var(--dark)' : 'transparent',
                  color: filter === c ? 'var(--ivory)' : 'var(--text-muted)',
                  border: `1px solid ${filter === c ? 'var(--dark)' : 'var(--border)'}`,
                }}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                key={p.slug}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="project-card group cursor-pointer"
                style={{ background: 'var(--bg)', aspectRatio: '4/5' }}
                onClick={() => navigate(`/projets/${p.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate(`/projets/${p.slug}`)}
              >
                <img
                  src={p.hero}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Category badge */}
                <div className="category-badge">{p.category}</div>

                {/* Hover overlay */}
                <div className="project-card-overlay" />

                {/* Info reveal */}
                <div className="project-card-info">
                  <p
                    className="mb-1"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {p.year} · {p.location}
                  </p>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--white)',
                      lineHeight: 1.2,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="mt-1.5 line-clamp-2"
                    style={{ fontSize: '0.78rem', color: 'rgba(253,250,247,0.7)', lineHeight: 1.6 }}
                  >
                    {p.summary}
                  </p>
                  <div
                    className="mt-3 flex items-center gap-2"
                    style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}
                  >
                    Voir le projet
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p
          className="mt-8 text-center"
          style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em', fontFamily: '"DM Sans", sans-serif' }}
        >
          Cliquez sur un projet pour voir la galerie complète — Avant · 3D · Réalisé
        </p>
      </div>
    </section>
  )
}
