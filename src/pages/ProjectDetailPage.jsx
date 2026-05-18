import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { getProjectBySlug } from '../data/projects'

const typeConfig = {
  avant: { label: 'Avant',   color: 'rgba(26,23,21,0.65)' },
  '3d':  { label: '3D',      color: 'rgba(184,144,90,0.75)' },
  reel:  { label: 'Réalisé', color: 'rgba(74,108,85,0.75)' },
}

function GallerySection({ type, items, onOpen }) {
  const cfg = typeConfig[type]
  if (!items.length) return null

  return (
    <div className="space-y-3">
      {/* Section label */}
      <div className="flex items-center gap-3">
        <span
          className="px-3 py-1 text-white"
          style={{
            background: cfg.color,
            fontSize: '0.6rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontFamily: '"DM Sans", sans-serif',
            fontWeight: 600,
            borderRadius: '2px',
          }}
        >
          {cfg.label}
        </span>
        <span style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Photos */}
      <div className={`grid gap-3 ${items.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden cursor-pointer"
            style={{ borderRadius: '2px' }}
            onClick={() => onOpen(item.globalIdx)}
          >
            <img
              src={item.src}
              alt={item.alt || cfg.label}
              className="w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              style={{ maxHeight: '70vh' }}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [lightbox, setLightbox] = useState(null)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'var(--bg)', paddingTop: '72px' }}>
        <div className="text-center space-y-4">
          <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 300, color: 'var(--text)' }}>
            Projet introuvable.
          </p>
          <Link to="/" className="btn-gold inline-flex">Retour à l'accueil</Link>
        </div>
      </div>
    )
  }

  // Attach a global index to each gallery item for lightbox
  const allItems = project.gallery.map((item, i) => ({ ...item, globalIdx: i }))
  const avantItems = allItems.filter(i => i.type === 'avant')
  const items3d    = allItems.filter(i => i.type === '3d')
  const reelItems  = allItems.filter(i => i.type === 'reel')

  return (
    <div style={{ background: 'var(--bg)', paddingTop: '72px' }}>

      {/* Hero */}
      <div className="relative w-full overflow-hidden" style={{ height: '55vh', minHeight: '340px' }}>
        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(26,23,21,0.7) 0%, rgba(26,23,21,0.15) 50%, transparent 100%)' }}
        />
        <div className="absolute bottom-8 left-8 lg:left-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="block h-px w-6" style={{ background: 'var(--gold)' }} />
            <span className="text-[10px] tracking-[0.28em] uppercase" style={{ color: 'var(--gold-light)', fontFamily: '"DM Sans", sans-serif' }}>
              {project.category}
            </span>
          </div>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 3.2rem)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 1.1,
            }}
          >
            {project.title}
          </h1>
          <p className="mt-2" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', fontFamily: '"DM Sans", sans-serif' }}>
            {project.year} · {project.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <section style={{ padding: '5rem 0 7rem' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12">

          {/* Description + back */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-relaxed max-w-2xl"
              style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.85 }}
            >
              {project.description}
            </motion.p>
            <Link to={-1} className="btn-outline shrink-0 self-start">← Retour</Link>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-10">
            {[
              { type: 'avant', show: avantItems.length > 0 },
              { type: '3d',    show: items3d.length > 0 },
              { type: 'reel',  show: reelItems.length > 0 },
            ].filter(x => x.show).map(({ type }) => (
              <div key={type} className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full inline-block"
                  style={{ background: typeConfig[type].color }}
                />
                <span style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}>
                  {typeConfig[type].label}
                </span>
              </div>
            ))}
          </div>

          {/* Gallery sections */}
          <div className="space-y-12">
            <GallerySection type="avant" items={avantItems} onOpen={setLightbox} />
            <GallerySection type="3d"    items={items3d}    onOpen={setLightbox} />
            <GallerySection type="reel"  items={reelItems}  onOpen={setLightbox} />
          </div>

          {/* Bottom CTA */}
          <div
            className="mt-16 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <p style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--text-soft)' }}>
              Un projet similaire en tête ?
            </p>
            <Link to="/debuter-projet" className="btn-gold">Débuter votre projet</Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(26,23,21,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-5 right-6"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.25rem' }}
              onClick={() => setLightbox(null)}
              aria-label="Fermer"
            >✕</button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={project.gallery[lightbox].src}
                alt={project.gallery[lightbox].alt || project.title}
                className="max-w-full max-h-[85vh] object-contain"
                style={{ borderRadius: '2px' }}
              />
              {/* Type badge in lightbox */}
              <span
                className="px-3 py-1 text-white"
                style={{
                  background: typeConfig[project.gallery[lightbox].type]?.color || 'rgba(26,23,21,0.65)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontFamily: '"DM Sans", sans-serif',
                  borderRadius: '2px',
                }}
              >
                {typeConfig[project.gallery[lightbox].type]?.label || ''}
              </span>
            </motion.div>

            {lightbox > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                onClick={e => { e.stopPropagation(); setLightbox(l => l - 1) }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              </button>
            )}
            {lightbox < project.gallery.length - 1 && (
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
              {lightbox + 1} / {project.gallery.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
