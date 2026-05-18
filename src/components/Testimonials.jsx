import React from 'react'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    name: null,
    source: 'Conception complète — Salon & Cuisine',
    text: "Nous avons fait appel à Samar pour repenser entièrement notre salon et notre cuisine. Elle a su optimiser l'espace avec un plan très fonctionnel et proposer une ambiance à la fois chaleureuse et élégante. La 3D nous a beaucoup aidés à nous projeter, et la shopping list était très claire. Le résultat est fidèle à nos attentes, voire au-delà.",
  },
  {
    id: 2,
    name: 'Noura H.',
    source: 'Saint-Étienne-lès-Remiremont',
    text: "Un immense merci à Samar pour son travail remarquable sur le plan de mon salon ! Elle a su parfaitement cerner mes goûts et mes attentes. Le résultat est magnifique, tout à fait dans le style que je cherchais, et honnêtement, cela dépasse même ce que j'avais imaginé. Je suis ravie.",
  },
  {
    id: 3,
    name: 'Julie M.',
    source: 'Nancy',
    text: "J'ai réservé un coaching déco pour mon séjour et cela m'a vraiment débloquée. Samar m'a donné des conseils précis sur l'agencement, les couleurs et le mobilier. J'ai pu refaire mon intérieur en toute confiance, sans faire d'erreurs. Un vrai gain de temps et d'énergie.",
  },
  {
    id: 4,
    name: 'Ines.',
    source: 'Remiremont',
    text: "Samar est très professionnelle, à l'écoute et force de proposition. Elle a su respecter notre budget tout en apportant une vraie valeur ajoutée esthétique. Le projet a été fluide du début à la fin.",
  },
]

export default function Testimonials() {
  const scrollerRef = React.useRef(null)

  const scroll = (dir = 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section
      id="testimonials"
      style={{ background: 'var(--bg-surface)', padding: '7rem 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
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
              Témoignages{' '}
              <em style={{ fontStyle: 'italic' }}>clients</em>
            </motion.h2>
          </div>

          {/* Nav arrows — desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              aria-label="Précédent"
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                color: 'var(--text-muted)',
                background: 'var(--ivory)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            </button>
            <button
              aria-label="Suivant"
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center transition-all duration-200"
              style={{
                border: '1px solid var(--border)',
                borderRadius: '9999px',
                color: 'var(--text-muted)',
                background: 'var(--ivory)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* Cards scroller */}
        <div
          ref={scrollerRef}
          className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide snap-gallery pb-2"
        >
          {reviews.map((r, i) => (
            <motion.article
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              className="testimonial-card flex-none md:flex-auto"
              style={{ minWidth: '280px' }}
            >
              {/* Big decorative quote — positioned in CSS via ::before */}
              <div className="pt-8 flex flex-col gap-4 relative z-10">
                <blockquote
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.05rem',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    color: 'var(--text)',
                    lineHeight: 1.75,
                  }}
                >
                  "{r.text}"
                </blockquote>

                <div style={{ height: '1px', background: 'var(--border)', marginTop: '0.5rem' }} />

                <div className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 flex items-center justify-center shrink-0"
                    style={{ border: '1px solid var(--gold-pale)', borderRadius: '9999px' }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    {r.name && (
                      <p style={{ fontWeight: 500, fontSize: '0.85rem', color: 'var(--text)' }}>
                        {r.name}
                      </p>
                    )}
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}>
                      {r.source}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p
          className="mt-8 text-center"
          style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.08em' }}
        >
          Extraits d'avis clients — merci pour votre confiance.
        </p>
      </div>
    </section>
  )
}
