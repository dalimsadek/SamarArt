import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-20 bg-base">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-soft border border-line bg-surface">
          <img src="/samar2.jpeg" alt="Portrait Samar Msadek" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <p className="serif uppercase tracking-[0.28em] text-sm text-secondary">À propos</p>
          <h2 className="serif text-3xl md:text-4xl font-bold mt-2">Bienvenue dans mon univers architecturale</h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary">Où les espaces se transforment en toiles d'expression. En tant qu'architecte d'intérieur passionnée, je crée des designs uniques qui reflètent votre histoire.</p>
          <p className="mt-4 text-secondary">Chaque projet marie style et fonctionnalité, chaque détail est méticuleusement pensé pour dépasser vos attentes. Ensemble, nous donnerons vie à vos rêves.</p>
          <a href="#contact" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition shadow-sm">Débuter votre projet</a>
        </div>
      </div>
    </section>
  )
}
