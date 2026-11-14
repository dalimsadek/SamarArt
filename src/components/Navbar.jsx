import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  ['/', 'Accueil'],
  ['/#services', 'Prestations'],
  ['/#portfolio', 'Projets'],
  ['/#atelier', 'Atelier'],
  ['/a-propos', 'À propos'],
  ['/contacter', 'Contact'],
]

function NavLink({ to, children, onClick }) {
  const location = useLocation()
  const active = location.pathname === to

  return (
    <Link
      to={to}
      onClick={onClick}
      className="relative group"
      style={{ color: active ? 'var(--gold)' : 'var(--text-soft)' }}
    >
      <span
        className="text-[11px] tracking-[0.22em] uppercase font-medium transition-colors duration-200"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        {children}
      </span>
      <span
        className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
        style={{ background: 'var(--gold)', width: active ? '100%' : '0%' }}
      />
      {!active && (
        <span
          className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
          style={{ background: 'var(--gold)' }}
        />
      )}
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(248,244,239,0.95)' : 'rgba(248,244,239,0.80)',
          backdropFilter: 'blur(20px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
          borderBottom: scrolled
            ? '1px solid rgba(221,213,200,0.7)'
            : '1px solid rgba(221,213,200,0.3)',
        }}
      >
        <nav className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center" onClick={close}>
            <img
              src="/samar-interiot_logo.png"
              alt="Sam'Art Interior"
              className="h-16 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(([to, label]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
          </div>

          {/* Desktop CTA — wrapped in hidden div so btn-gold doesn't override hidden */}
          <div className="hidden md:block">
            <Link to="/debuter-projet" className="btn-gold text-[10px] py-2.5 px-5">
              Débuter votre projet
            </Link>
          </div>

          {/* Mobile hamburger — only visible on mobile */}
          <button
            className="md:hidden relative z-50 flex flex-col justify-center items-center w-10 h-10"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen(p => !p)}
          >
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: open ? '#fff' : 'var(--text)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, background 0.3s ease',
                transform: open ? 'translateY(4px) rotate(45deg)' : 'none',
                marginBottom: open ? 0 : 5,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 16,
                height: 1.5,
                background: open ? '#fff' : 'var(--text)',
                borderRadius: 2,
                transition: 'opacity 0.2s ease, background 0.3s ease',
                opacity: open ? 0 : 1,
                marginBottom: open ? 0 : 5,
              }}
            />
            <span
              style={{
                display: 'block',
                width: 22,
                height: 1.5,
                background: open ? '#fff' : 'var(--text)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, background 0.3s ease',
                transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <div
        className="md:hidden fixed inset-0 z-30"
        style={{
          background: 'var(--dark)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 40px 48px',
          overflowY: 'auto',
        }}
      >
        {/* Nav links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
          {NAV_LINKS.map(([to, label], i) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '18px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                textDecoration: 'none',
                transform: open ? 'translateX(0)' : 'translateX(20px)',
                opacity: open ? 1 : 0,
                transition: `transform 0.4s cubic-bezier(0.4,0,0.2,1) ${i * 0.06}s, opacity 0.4s ease ${i * 0.06}s`,
              }}
            >
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.6rem',
                  letterSpacing: '0.15em',
                  color: 'var(--gold)',
                  fontWeight: 500,
                  minWidth: 20,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(1.6rem, 7vw, 2.2rem)',
                  fontWeight: 300,
                  color: '#fff',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                }}
              >
                {label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div
          style={{
            marginTop: 40,
            transform: open ? 'translateX(0)' : 'translateX(20px)',
            opacity: open ? 1 : 0,
            transition: `transform 0.4s ease ${NAV_LINKS.length * 0.06 + 0.05}s, opacity 0.4s ease ${NAV_LINKS.length * 0.06 + 0.05}s`,
          }}
        >
          <Link
            to="/debuter-projet"
            onClick={close}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '14px 32px',
              background: 'var(--gold)',
              color: '#fff',
              borderRadius: 100,
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              width: '100%',
            }}
          >
            Débuter votre projet
          </Link>
        </div>

        {/* Social hint */}
        <p
          style={{
            marginTop: 24,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.65rem',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.1em',
            textAlign: 'center',
            transform: open ? 'translateY(0)' : 'translateY(8px)',
            opacity: open ? 1 : 0,
            transition: 'all 0.4s ease 0.45s',
          }}
        >
          contact@samart-interior.fr
        </p>
      </div>

      {/* Backdrop (subtle, behind overlay) */}
      <div
        className="md:hidden fixed inset-0 z-20"
        style={{
          background: 'rgba(0,0,0,0.3)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        onClick={close}
      />
    </>
  )
}
