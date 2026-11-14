import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/cX558UTrVjY9xcnB6'

const reviews = [
  {
    id: 1,
    name: 'Khawla S.',
    initials: 'KS',
    date: 'septembre 2025',
    stars: 5,
    text: "Je recommande beaucoup Sam'Art, ses tableaux sont très originaux, personnalisés et faits avec beaucoup de soin. Elle met beaucoup de passion dans ce qu'elle fait. C'est toujours un plaisir de lui confier un projet, et le résultat est vraiment magnifique.",
  },
  {
    id: 2,
    name: 'Affaf Trabelsi',
    initials: 'AT',
    date: 'septembre 2025',
    stars: 5,
    text: "Projet très bien mené avec Samar, elle a su prendre en compte toutes mes attentes. Très contente du résultat.",
  },
  {
    id: 3,
    name: 'Le Petit Tounsy',
    initials: 'LT',
    date: 'novembre 2025',
    stars: 5,
    text: "Peintre à recommander — elle m'a fait un tableau sur mesure et le résultat était au-delà de mes attentes. Artiste à l'écoute, disponible et surtout talentueuse. La qualité de ses toiles est au top. Sans regret, je reviendrai.",
  },
]

const NORMAL_DURATION = 28
const FAST_DURATION = 10

export default function Testimonials() {
  const [duration, setDuration] = useState(NORMAL_DURATION)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  function accelerate() {
    setDuration(FAST_DURATION)
    clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setDuration(NORMAL_DURATION), 2500)
  }

  const doubled = [...reviews, ...reviews]

  return (
    <section
      id="testimonials"
      style={{ background: 'var(--bg-surface)', padding: '7rem 0', overflow: 'hidden' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-rule" />
              <span
                className="text-[10px] tracking-[0.32em] uppercase font-medium"
                style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
              >
                Témoignages
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
              Ce qu'ils{' '}
              <em style={{ fontStyle: 'italic' }}>disent</em>
            </motion.h2>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Ralentir"
              onClick={() => setPaused(p => !p)}
              style={{
                width: 38, height: 38,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                flexShrink: 0,
              }}
            >
              {paused ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              )}
            </button>
            <button
              aria-label="Accélérer"
              onClick={accelerate}
              style={{
                width: 38, height: 38,
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'var(--bg)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)',
                flexShrink: 0,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div
        style={{ overflow: 'hidden', cursor: 'grab' }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          style={{
            display: 'flex',
            gap: 20,
            width: 'max-content',
            animation: `tm-scroll ${duration}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            willChange: 'transform',
          }}
        >
          {doubled.map((r, i) => (
            <ReviewCard key={`${r.id}-${i}`} r={r} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 flex items-center justify-between flex-wrap gap-4">
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
          Avis vérifiés sur{' '}
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--gold)', textDecoration: 'none' }}
          >
            Google Maps
          </a>
          {' '}— 5,0 ★ · 15 avis
        </p>
        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            color: 'var(--text-muted)',
            borderBottom: '1px solid var(--border)',
            paddingBottom: 2,
            transition: 'color .2s, border-color .2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.borderColor = 'var(--gold)' }}
          onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
        >
          Laisser un avis
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>

      <style>{`
        @keyframes tm-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}

function ReviewCard({ r }) {
  return (
    <article
      style={{
        width: 320,
        flexShrink: 0,
        background: 'var(--bg)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        padding: '28px 28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        boxShadow: '0 2px 16px rgba(0,0,0,.05)',
      }}
    >
      {/* Top: stars + Google G */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 3 }}>
          {Array.from({ length: r.stars }).map((_, i) => (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="none">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        {/* Google G icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      {/* Review text */}
      <p
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '1rem',
          fontWeight: 300,
          fontStyle: 'italic',
          color: 'var(--text)',
          lineHeight: 1.75,
          flex: 1,
        }}
      >
        "{r.text}"
      </p>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)' }} />

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
            background: 'linear-gradient(135deg, #C9A96E 0%, #8B6914 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.65rem', fontWeight: 600, color: '#fff',
            letterSpacing: '0.05em',
          }}
        >
          {r.initials}
        </div>
        <div>
          <p style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text)', margin: 0 }}>
            {r.name}
          </p>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', letterSpacing: '0.06em', margin: 0, marginTop: 2 }}>
            {r.date}
          </p>
        </div>
      </div>
    </article>
  )
}
