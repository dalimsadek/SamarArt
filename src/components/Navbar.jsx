import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

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
        style={{
          background: 'var(--gold)',
          width: active ? '100%' : '0%',
        }}
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

  const close = () => setOpen(false)

  return (
    <header
      className="fixed top-0 inset-x-0 z-30 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(248,244,239,0.92)' : 'rgba(248,244,239,0.75)',
        backdropFilter: 'blur(20px) saturate(1.5)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.5)',
        borderBottom: scrolled ? '1px solid rgba(221,213,200,0.6)' : '1px solid rgba(221,213,200,0.3)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

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
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/#services">Prestations</NavLink>
          <NavLink to="/#portfolio">Projets</NavLink>
          <NavLink to="/#atelier">Atelier</NavLink>
          <NavLink to="/a-propos">À propos</NavLink>
          <NavLink to="/contacter">Contact</NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/debuter-projet"
          className="hidden md:inline-flex btn-gold text-[10px] py-2.5 px-5"
        >
          Débuter votre projet
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Menu"
          onClick={() => setOpen(p => !p)}
        >
          <span
            className="block h-px w-6 transition-all duration-300 origin-center"
            style={{
              background: 'var(--text)',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-px w-5 transition-all duration-300"
            style={{
              background: 'var(--text)',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-6 transition-all duration-300 origin-center"
            style={{
              background: 'var(--text)',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '360px' : '0' }}
      >
        <div
          className="px-6 pt-2 pb-6 flex flex-col gap-5 border-t"
          style={{ borderColor: 'var(--border)', background: 'rgba(248,244,239,0.98)' }}
        >
          {[
            ['/', 'Accueil'],
            ['/#services', 'Prestations'],
            ['/#portfolio', 'Projets'],
            ['/#atelier', 'Atelier'],
            ['/a-propos', 'À propos'],
            ['/contacter', 'Contact'],
          ].map(([to, label]) => (
            <Link
              key={to}
              to={to}
              onClick={close}
              className="text-xs tracking-[0.2em] uppercase font-medium"
              style={{ color: 'var(--text-soft)' }}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/debuter-projet"
            onClick={close}
            className="btn-gold self-start mt-1 text-[10px] py-2.5 px-5"
          >
            Débuter votre projet
          </Link>
        </div>
      </div>
    </header>
  )
}
