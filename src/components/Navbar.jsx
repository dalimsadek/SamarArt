import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({to, children}) => {
  const location = useLocation()
  const active = location.pathname === to || location.hash === to.replace('/','')
  return (
    <Link
      to={to}
      className={`text-[14px] md:text-[15px] tracking-[0.18em] uppercase mx-2 px-3.5 py-2.5 rounded-full transition ${active ? 'text-[var(--color-accent)] border border-line' : 'text-secondary hover:text-primary'}`}
    >
      {children}
    </Link>
  )
}

export default function Navbar(){
  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-10">
      <nav className="w-full bg-white/90 backdrop-blur border-b border-line py-4 px-3 md:px-6 shadow-sm">
        <div className="flex items-center gap-6 w-full">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/samar-interiot_logo.png"
              alt="Samar Interior"
              className="w-[170px] h-[83px] object-cover"
              loading="lazy"
            />
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center gap-4">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/#services">Prestations</NavLink>
            <NavLink to="/#portfolio">Projets</NavLink>
            <NavLink to="/a-propos">À propos</NavLink>
            <NavLink to="/contacter">Contact</NavLink>
          </div>

          <Link
            to="/debuter-projet"
            className="hidden md:inline-flex items-center ml-auto px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-white tracking-[0.16em] uppercase text-sm hover:bg-[var(--color-accent-2)] transition shadow-sm"
          >
            Débuter votre projet
          </Link>
        </div>
      </nav>
    </header>
  )
}
