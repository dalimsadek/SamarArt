import React from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="py-10 bg-base">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.facebook.com/benmsaddek.samar" target="_blank" rel="noreferrer" className="text-primary hover:text-[var(--color-accent-2)]"><FaFacebook/></a>
          <a href="https://www.linkedin.com/in/samar-msadek-558a89196/" target="_blank" rel="noreferrer" className="text-primary hover:text-[var(--color-accent-2)]"><FaLinkedin/></a>
          <a href="https://www.instagram.com/samarscorner/" target="_blank" rel="noreferrer" className="text-primary hover:text-[var(--color-accent-2)]"><FaInstagram/></a>
        </div>
        <p className="mt-4 text-sm text-secondary">© {new Date().getFullYear()} Léa Architecture d'Intérieur — Tous droits réservés.</p>
        <p className="mt-2 signature text-muted">Architecture d'intérieur — Vosges & partout en France</p>
      </div>
    </footer>
  )
}
