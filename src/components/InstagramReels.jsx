import { useRef, useState, useEffect } from 'react'
import { instagramReels } from '../data/instagramReels'

const INSTAGRAM_PROFILE = 'https://www.instagram.com/samart.interior/'

export default function InstagramReels() {
  const trackRef = useRef(null)
  const [activeIdx, setActiveIdx] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(instagramReels.length > 1)

  function getVisibleIdx() {
    const track = trackRef.current
    if (!track) return 0
    const trackLeft = track.getBoundingClientRect().left
    const items = Array.from(track.querySelectorAll('[data-reel]'))
    let closest = 0, minDist = Infinity
    items.forEach((c, i) => {
      const d = Math.abs(c.getBoundingClientRect().left - trackLeft)
      if (d < minDist) { minDist = d; closest = i }
    })
    return closest
  }

  function scrollToCard(i) {
    const track = trackRef.current
    if (!track) return
    const items = Array.from(track.querySelectorAll('[data-reel]'))
    const card = items[i]
    if (!card) return
    const pl = parseInt(getComputedStyle(track).paddingLeft) || 0
    track.scrollTo({ left: card.offsetLeft - pl, behavior: 'smooth' })
  }

  function updateState() {
    const i = getVisibleIdx()
    setActiveIdx(i)
    setCanPrev(i > 0)
    setCanNext(i < instagramReels.length - 1)
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    track.addEventListener('scroll', updateState, { passive: true })
    return () => track.removeEventListener('scroll', updateState)
  }, [])

  return (
    <section style={S.section}>

      {/* Header */}
      <div style={S.header}>
        <div style={S.eyebrow}>
          <IgIcon size={22} radius={6} />
          <span style={S.eyebrowText}>@samart.interior</span>
        </div>
        <h2 style={S.title}>Réalisations <em>en images</em></h2>
        <p style={S.sub}>
          Retrouvez tous les reels sur{' '}
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" style={S.link}>
            Instagram →
          </a>
        </p>
      </div>

      {/* Carousel */}
      <div style={S.carouselOuter}>
        <ArrowBtn
          dir="prev"
          disabled={!canPrev}
          onClick={() => scrollToCard(Math.max(0, getVisibleIdx() - 1))}
        />

        <div ref={trackRef} style={S.track}>
          {instagramReels.map((reel, i) => (
            <a
              key={i}
              data-reel
              href={reel.url}
              target="_blank"
              rel="noopener noreferrer"
              style={S.card}
              className="ig-reel-card"
            >
              {reel.thumbnail ? (
                <img src={reel.thumbnail} alt={reel.title} style={S.cardImg} loading="lazy" />
              ) : (
                <div style={S.placeholder} />
              )}
              <div style={S.overlay} />
              <div style={S.cardLabel}>
                <span style={S.badge}>
                  <svg viewBox="0 0 24 24" style={{ width: 8, height: 8, fill: 'white', flexShrink: 0 }}>
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                  Reel
                </span>
              </div>
            </a>
          ))}
        </div>

        <ArrowBtn
          dir="next"
          disabled={!canNext}
          onClick={() => scrollToCard(Math.min(instagramReels.length - 1, getVisibleIdx() + 1))}
        />
      </div>

      {/* Dot nav + CTA */}
      <div style={S.footer}>
        <div style={S.dotNav}>
          {instagramReels.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToCard(i)}
              style={i === activeIdx ? { ...S.dot, ...S.dotActive } : S.dot}
              aria-label={`Reel ${i + 1}`}
            />
          ))}
        </div>
        <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer" style={S.cta} className="ig-cta">
          <IgIcon size={16} radius={4} iconSize={10} />
          Voir tous les reels
        </a>
      </div>

      <style>{`
        .ig-reel-card { transition: transform .22s ease, box-shadow .22s ease !important; }
        .ig-reel-card:hover { transform: translateY(-4px) scale(1.015) !important; box-shadow: 0 10px 36px rgba(0,0,0,.22) !important; }
        .ig-cta:hover { background: #B8955A !important; color: #FAF8F5 !important; }
      `}</style>
    </section>
  )
}

function IgIcon({ size = 22, radius = 6, iconSize = 13 }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: radius, flexShrink: 0,
      background: 'linear-gradient(135deg, #f9ce34 0%, #ee2a7b 50%, #6228d7 100%)',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg viewBox="0 0 24 24" style={{ width: iconSize, height: iconSize, fill: 'white' }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    </span>
  )
}

function ArrowBtn({ dir, disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === 'prev' ? 'Précédent' : 'Suivant'}
      style={{
        ...S.arrow,
        ...(dir === 'prev' ? S.arrowPrev : S.arrowNext),
        opacity: disabled ? 0.3 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      <svg viewBox="0 0 24 24" style={S.arrowSvg}>
        {dir === 'prev'
          ? <polyline points="15 18 9 12 15 6"/>
          : <polyline points="9 18 15 12 9 6"/>}
      </svg>
    </button>
  )
}

const S = {
  section: {
    padding: '80px 0',
    overflow: 'hidden',
  },
  header: {
    paddingLeft: 'max(48px, env(safe-area-inset-left, 0px))',
    paddingRight: 'max(48px, env(safe-area-inset-right, 0px))',
    maxWidth: 1200,
    margin: '0 auto',
    marginBottom: 36,
  },
  eyebrow: {
    display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
  },
  eyebrowText: {
    fontSize: 11, fontWeight: 500, letterSpacing: '.12em',
    textTransform: 'uppercase', color: '#7A6E68',
  },
  title: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 300,
    letterSpacing: '-.01em', margin: '0 0 6px',
    lineHeight: 1.1,
  },
  sub: {
    fontSize: 13, color: '#7A6E68', margin: 0,
  },
  link: {
    color: '#B8955A', textDecoration: 'none', fontWeight: 500,
  },

  carouselOuter: {
    position: 'relative',
  },
  track: {
    display: 'flex',
    gap: 14,
    overflowX: 'auto',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none',
    paddingLeft: 'max(48px, env(safe-area-inset-left, 0px))',
    paddingRight: 'max(48px, env(safe-area-inset-right, 0px))',
    paddingBlock: '8px 20px',
  },

  card: {
    flexShrink: 0,
    width: 185,
    aspectRatio: '9/16',
    borderRadius: 16,
    overflow: 'hidden',
    scrollSnapAlign: 'start',
    position: 'relative',
    background: '#F0E8D8',
    boxShadow: '0 4px 24px rgba(0,0,0,.12)',
    cursor: 'pointer',
    display: 'block',
    textDecoration: 'none',
  },
  cardImg: {
    width: '100%', height: '100%', objectFit: 'cover', display: 'block',
  },
  placeholder: {
    width: '100%', height: '100%',
    background: 'linear-gradient(160deg, #EDE5D8 0%, #D4C4A8 100%)',
  },
  overlay: {
    position: 'absolute', inset: '40% 0 0 0',
    background: 'linear-gradient(to bottom, transparent, rgba(14,10,6,.65))',
    pointerEvents: 'none',
  },
  cardLabel: {
    position: 'absolute', bottom: 16, left: 14, right: 14, zIndex: 1,
  },
  cardTitle: {
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: 15, fontWeight: 400, color: '#fff',
    lineHeight: 1.2, margin: '0 0 6px',
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    background: 'rgba(255,255,255,.18)',
    backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
    border: '1px solid rgba(255,255,255,.25)',
    borderRadius: 20, padding: '2px 8px',
    fontSize: 10, fontWeight: 500, letterSpacing: '.06em',
    color: 'rgba(255,255,255,.9)', textTransform: 'uppercase',
  },

  arrow: {
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    width: 40, height: 40, borderRadius: '50%',
    background: '#fff', border: '1px solid #E8E0D6',
    boxShadow: '0 2px 12px rgba(0,0,0,.12)',
    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 2, padding: 0,
  },
  arrowPrev: { left: 8 },
  arrowNext: { right: 8 },
  arrowSvg: {
    width: 16, height: 16, stroke: '#1E1A17', fill: 'none',
    strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
  },

  footer: {
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 'max(48px, env(safe-area-inset-left, 0px))',
    paddingRight: 'max(48px, env(safe-area-inset-right, 0px))',
    marginTop: 24, gap: 16, flexWrap: 'wrap',
  },
  dotNav: { display: 'flex', gap: 6, alignItems: 'center' },
  dot: {
    width: 6, height: 6, borderRadius: '50%',
    background: '#E8E0D6', border: 'none', padding: 0,
    cursor: 'pointer', transition: 'all .2s',
  },
  dotActive: {
    width: 20, borderRadius: 3, background: '#B8955A',
  },
  cta: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '10px 20px', borderRadius: 100,
    border: '1.5px solid #B8955A',
    color: '#B8955A',
    fontSize: 12, fontWeight: 500, letterSpacing: '.08em',
    textTransform: 'uppercase', textDecoration: 'none',
    transition: 'all .18s',
  },
}
