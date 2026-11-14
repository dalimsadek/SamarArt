import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const NAV_LEFT = [
  ['/', 'Accueil'],
  ['/#services', 'Prestations'],
  ['/#portfolio', 'Projets'],
  ['/#atelier', 'Atelier'],
]

const NAV_RIGHT = [
  ['/a-propos', 'À propos'],
  ['/contacter', 'Contact'],
  ['/debuter-projet', 'Débuter un projet'],
]

const SOCIAL = [
  { href: 'https://www.facebook.com/benmsaddek.samar', Icon: FaFacebook, label: 'Facebook' },
  { href: 'https://www.linkedin.com/in/samar-msadek-558a89196/', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/samart.interior/', Icon: FaInstagram, label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--dark)', color: '#fff' }}>

      {/* Main section */}
      <div
        className="max-w-7xl mx-auto"
        style={{ padding: '64px 48px 48px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* Col 1 — Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
              <img
                src="/samar-interiot_logo.png"
                alt="Sam'Art Interior"
                style={{ height: 120, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                loading="lazy"
              />
            </Link>
            <p style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '0.95rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7,
              marginBottom: 24,
              textAlign: 'center',
            }}>
              Architecture d'intérieur & décoration artisanale à Remiremont, Vosges.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              {SOCIAL.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 36, height: 36,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '50%',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'all .2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold, #B8955A)'; e.currentTarget.style.color = 'var(--gold, #B8955A)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold, #B8955A)',
              marginBottom: 20,
              fontWeight: 600,
            }}>
              Navigation
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[...NAV_LEFT, ...NAV_RIGHT].map(([to, label]) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.4)',
                    textDecoration: 'none',
                    transition: 'color .18s',
                    letterSpacing: '0.03em',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold, #B8955A)',
              marginBottom: 20,
              fontWeight: 600,
            }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { label: 'Email', value: 'contact@samart-interior.fr', href: 'mailto:contact@samart-interior.fr' },
                { label: 'Téléphone', value: '+33 7 54 37 89 89', href: 'tel:+33754378989' },
                { label: 'Instagram', value: '@samart.interior', href: 'https://www.instagram.com/samart.interior/' },
                { label: 'Localisation', value: 'Remiremont, Vosges', href: null },
              ].map(({ label, value, href }) => (
                <div key={label}>
                  <p style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.58rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.22)',
                    marginBottom: 2,
                    fontWeight: 500,
                  }}>
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.78rem',
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                        transition: 'color .18s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold, #B8955A)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.5)',
                    }}>
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <Link
              to="/debuter-projet"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 24,
                padding: '10px 22px',
                background: 'var(--gold, #B8955A)',
                color: '#fff',
                borderRadius: 100,
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'opacity .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Débuter un projet
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '16px 48px',
          flexWrap: 'wrap',
        }}
      >
        <p style={{
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.63rem',
          letterSpacing: '0.07em',
          color: 'rgba(255,255,255,0.18)',
          margin: 0,
        }}>
          © {new Date().getFullYear()} Sam'Art Interior Design — Tous droits réservés.
        </p>
        <p style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: '0.7rem',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.15)',
          margin: 0,
        }}>
          "Les détails ne sont pas les détails. Ils sont la conception." — Charles Eames
        </p>
      </div>

      {/* Mobile responsive */}
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; padding: 48px 24px 40px !important; }
        }
      `}</style>
    </footer>
  )
}
