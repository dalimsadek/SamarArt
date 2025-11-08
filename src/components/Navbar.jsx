import React from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

const NavLink = ({href, children}) => (
  <a href={href} className="text-sm mx-3 hover:text-clay transition">{children}</a>
)

export default function Navbar({dark, setDark}){
  return (
    <header className="fixed top-4 left-0 right-0 z-30 px-6 md:px-12">
      <nav className="max-w-6xl mx-auto flex items-center justify-between bg-white/60 dark:bg-warmblack/60 backdrop-blur rounded-full py-2 px-4 shadow-sm">
        <div className="flex items-center">
          <a href="#hero" className="serif text-xl font-bold px-3">Decor by Name</a>
          <div className="hidden md:flex ml-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#portfolio">Portfolio</NavLink>
            <NavLink href="#design">Philosophy</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={()=>setDark(!dark)} className="p-2 rounded-full hover:bg-black/5 transition mr-3">
            {dark ? <FiSun/> : <FiMoon/>}
          </button>
          <a href="#contact" className="btn-ghost serif hidden md:inline">Book a Consultation</a>
        </div>
      </nav>
    </header>
  )
}
