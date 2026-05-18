import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', padding: '4rem 0 2.5rem' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top row */}
        <div className="grid sm:grid-cols-[auto_1fr_auto] items-start gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="space-y-3">
            <Link to="/" className="inline-block">
              <img
                src="/samar-interiot_logo.png"
                alt="Sam'Art Interior"
                className="h-9 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '0.8rem',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.35)',
                maxWidth: '180px',
                lineHeight: 1.6,
              }}
            >
              Décoration d'Intérieur — Vosges &amp; partout en France
            </p>
          </div>

          {/* Nav */}
          <nav className="hidden sm:flex flex-wrap gap-x-8 gap-y-3 justify-center pt-1">
            {[
              ['/', 'Accueil'],
              ['/#services', 'Prestations'],
              ['/#portfolio', 'Projets'],
              ['/#atelier', 'Atelier'],
              ['/a-propos', 'À propos'],
              ['/contacter', 'Contact'],
              ['/debuter-projet', 'Débuter un projet'],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="transition-colors duration-200"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.72rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: 'https://www.facebook.com/benmsaddek.samar', Icon: FaFacebook, label: 'Facebook' },
              { href: 'https://www.linkedin.com/in/samar-msadek-558a89196/', Icon: FaLinkedin, label: 'LinkedIn' },
              { href: 'https://www.instagram.com/samarscorner/', Icon: FaInstagram, label: 'Instagram' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center transition-all duration-200"
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '9999px',
                  color: 'rgba(255,255,255,0.4)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)'
                  e.currentTarget.style.color = 'var(--gold-light)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.color = 'rgba(255,255,255,0.4)'
                }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-6">
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.25)',
            }}
          >
            © {new Date().getFullYear()} Sam'Art Interior Design — Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.75rem',
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            "Les détails ne sont pas les détails. Ils sont la conception." — Charles Eames
          </p>
        </div>
      </div>
    </footer>
  )
}
