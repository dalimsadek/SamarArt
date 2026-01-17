import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({to, children, onClick}) => {
  const location = useLocation()
  const active = location.pathname === to || location.hash === to.replace('/','')
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-[14px] md:text-[15px] tracking-[0.18em] uppercase mx-2 px-3.5 py-2.5 rounded-full transition ${active ? 'text-[var(--color-accent)] border border-line' : 'text-secondary hover:text-primary'}`}
    >
      {children}
    </Link>
  )
}

export default function Navbar(){
  const [open, setOpen] = useState(false)

  const links = (handleClick)=> (
    <>
      <NavLink to="/" onClick={handleClick}>Accueil</NavLink>
      <NavLink to="/#services" onClick={handleClick}>Prestations</NavLink>
      <NavLink to="/#portfolio" onClick={handleClick}>Projets</NavLink>
      <NavLink to="/a-propos" onClick={handleClick}>À propos</NavLink>
      <NavLink to="/contacter" onClick={handleClick}>Contact</NavLink>
    </>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-30 px-4 md:px-10">
      <nav className="w-full bg-white/90 backdrop-blur border-b border-line py-4 px-3 md:px-6 shadow-sm">
        <div className="flex items-center gap-4 w-full">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/samar-interiot_logo.png"
              alt="Samar Interior"
              className="w-[140px] h-[68px] md:w-[170px] md:h-[83px] object-cover"
              loading="lazy"
            />
          </Link>

          <div className="hidden md:flex flex-1 items-center justify-center gap-2">
            {links()}
          </div>

          <Link
            to="/debuter-projet"
            className="hidden md:inline-flex items-center ml-auto px-5 py-2.5 rounded-full bg-[var(--color-accent)] text-white tracking-[0.16em] uppercase text-xs md:text-sm hover:bg-[var(--color-accent-2)] transition shadow-sm"
          >
            Débuter votre projet
          </Link>

          <button
            className="md:hidden ml-auto p-2 rounded-full border border-line text-primary bg-white/90"
            aria-label="Ouvrir le menu"
            onClick={()=>setOpen(prev=>!prev)}
          >
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current mb-1"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-3 flex flex-col gap-2 border-t border-line pt-3">
            {links(()=>setOpen(false))}
            <Link
              to="/debuter-projet"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-[var(--color-accent)] text-white tracking-[0.14em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition"
              onClick={()=>setOpen(false)}
            >
              Débuter votre projet
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
