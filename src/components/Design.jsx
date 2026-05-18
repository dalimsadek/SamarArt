import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Conseil Décoration',
    tagline: 'Un accompagnement ponctuel pour affiner vos idées et faire les bons choix.',
    image: '/conseil.png',
    intro: 'Un regard expert pour révéler votre intérieur.',
    description: 'Un rendez-vous personnalisé pour vous guider dans vos choix et structurer vos idées.',
    inclus: [
      'Analyse de votre espace',
      'Conseils en aménagement',
      'Couleurs et matières',
      'Orientation stylistique',
      'Recommandations personnalisées',
    ],
  },
  {
    number: '02',
    title: 'Conception Complète',
    tagline: 'Un accompagnement global pour transformer votre intérieur avec cohérence, élégance et sérénité.',
    image: '/conception.png',
    intro: 'Un projet pensé dans les moindres détails, du concept à la réalisation.',
    description: 'Je vous accompagne dans la transformation complète de votre intérieur en alliant esthétique, fonctionnalité et respect de votre budget.',
    inclus: [
      'Prise de mesures',
      "Plans d'aménagement 2D",
      'Modélisation 3D',
      'Plans de détails',
      "Proposition d'ambiance",
      "Liste d'achats complète",
      'Accompagnement global du projet',
    ],
  },
  {
    number: '03',
    title: 'Valorisation Immobilière',
    tagline: "Une approche esthétique pour révéler le potentiel de votre bien.",
    image: '/selection.png',
    intro: 'Créer le coup de cœur dès la première visite.',
    description: 'Je mets en valeur votre bien pour en révéler tout le potentiel et faciliter sa vente ou sa location.',
    inclus: [
      'Diagnostic du bien',
      'Optimisation des espaces',
      'Conseils en désencombrement',
      'Mise en scène',
      'Recommandations ciblées',
    ],
  },
]

function ServiceModal({ service, onClose }) {
  return (
    <AnimatePresence>
      {service && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(26,23,21,0.7)', backdropFilter: 'blur(6px)' }}
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative w-full pointer-events-auto overflow-hidden"
              style={{
                maxWidth: '620px',
                maxHeight: '90vh',
                background: 'var(--ivory)',
                borderRadius: '2px',
                border: '1px solid var(--border)',
                overflowY: 'auto',
              }}
            >
              {/* Image strip */}
              <div className="relative w-full overflow-hidden" style={{ height: '200px', flexShrink: 0 }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,23,21,0.45) 0%, transparent 60%)' }}
                />
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center transition-colors duration-200"
                style={{
                  background: 'rgba(26,23,21,0.5)',
                  borderRadius: '9999px',
                  color: 'white',
                }}
                aria-label="Fermer"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="p-8 space-y-5" style={{ background: '#FDFAF7' }}>
                {/* Number + title */}
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.1rem',
                      fontWeight: 300,
                      color: 'var(--gold)',
                    }}
                  >
                    {service.number}
                  </span>
                  <span style={{ height: '1px', width: '24px', background: 'var(--gold-pale)', display: 'block' }} />
                  <h2
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.5rem',
                      fontWeight: 400,
                      color: 'var(--text)',
                      lineHeight: 1.2,
                    }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Intro — italic large */}
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.15rem',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1.5,
                  }}
                >
                  {service.intro}
                </p>

                {/* Description */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-soft)', lineHeight: 1.8 }}>
                  {service.description}
                </p>

                {/* Separator */}
                <div style={{ height: '1px', background: 'var(--border)' }} />

                {/* Inclus */}
                <div>
                  <p
                    className="mb-3"
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.24em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: 'var(--text-muted)',
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    Inclus
                  </p>
                  <ul className="space-y-2">
                    {service.inclus.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3"
                        style={{ fontSize: '0.88rem', color: 'var(--text-soft)' }}
                      >
                        <span
                          className="shrink-0 w-4 h-4 flex items-center justify-center"
                          style={{ border: '1px solid var(--gold)', borderRadius: '9999px' }}
                        >
                          <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  <Link
                    to="/debuter-projet"
                    onClick={onClose}
                    className="btn-gold w-full justify-center"
                    style={{ borderRadius: '2px', display: 'flex' }}
                  >
                    Réaliser votre projet
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default function Design() {
  const [active, setActive] = useState(null)

  return (
    <>
      <ServiceModal service={active} onClose={() => setActive(null)} />

      <section id="services" style={{ background: 'var(--bg-surface)', padding: '7rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-rule" />
                <span
                  className="text-[10px] tracking-[0.32em] uppercase font-medium"
                  style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
                >
                  Accompagnements
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
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
                L'art de concevoir des lieux{' '}
                <em style={{ fontStyle: 'italic' }}>qui vous ressemblent.</em>
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ color: 'var(--text-soft)', fontSize: '0.9rem', lineHeight: 1.8 }}
            >
              Trois formules d'accompagnement pour répondre à chaque besoin — du conseil
              ponctuel à la conception globale, en passant par la valorisation de votre bien.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
            {services.map((s, i) => (
              <motion.div
                key={s.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group flex flex-col"
                style={{ background: 'var(--bg-surface)' }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6 flex flex-col gap-4"
                  style={{ background: 'var(--ivory)' }}
                >
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.3rem',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {s.number}
                  </span>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: '1.2rem',
                      fontWeight: 500,
                      color: 'var(--text)',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <div style={{ height: '1px', background: 'var(--gold-pale)', width: '32px' }} />
                  <p
                    className="flex-1 leading-relaxed"
                    style={{ fontSize: '0.82rem', color: 'var(--text-soft)', lineHeight: 1.75 }}
                  >
                    {s.tagline}
                  </p>

                  {/* Découvrir button */}
                  <button
                    onClick={() => setActive(s)}
                    className="group/btn flex items-center gap-2 mt-auto self-start transition-colors duration-200"
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: 'var(--gold)',
                      fontFamily: '"DM Sans", sans-serif',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    Découvrir
                    <svg
                      width="13" height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="transition-transform duration-200 group-hover/btn:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
