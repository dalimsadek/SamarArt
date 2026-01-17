import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutPage(){
  return (
    <section className="pt-24 pb-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-line">
            <img
              src="samar2.jpeg"
              alt="Samar Msadek portrait"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <p className="serif uppercase tracking-[0.32em] text-sm text-secondary">À propos</p>
            <h1 className="serif text-3xl md:text-4xl font-bold">Samar Msadek</h1>
            <p className="text-sm uppercase tracking-[0.28em] text-secondary">Fondatrice</p>
            <p className="leading-relaxed text-primary">
              Diplômée d'un Master en Architecture d'intérieur et Design à l'école de Condé, je lance mon entreprise à l'âge de 24 ans pour apporter une touche de nouveauté et d'originalité dans le monde de l'architecture d'intérieur et du design. Mes qualités incluent mon attention aux détails, ma capacité à écouter les besoins des clients et à comprendre leurs souhaits, ainsi que mon engagement à respecter les délais et les budgets.
            </p>
            <p className="leading-relaxed text-primary">
              Je conçois des espaces uniques qui reflètent la personnalité et les besoins de mes clients. Mon ambition : des lieux qui allient fonctionnalité, confort et identité.
            </p>
            <Link to="/debuter-projet" className="inline-block btn-primary serif px-5 py-3 rounded-full shadow-soft">Débuter votre projet</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-14 items-start">
          <div className="space-y-4">
            <h2 className="serif text-2xl font-bold tracking-[0.18em] uppercase">SAMAR ARCHITECTURE D'INTÉRIEUR</h2>
            <p className="leading-relaxed text-primary">
              Installée dans les Vosges à Saint-Nabord (88200), Samar Architecture d'Intérieur intervient dans toute la France pour vos projets d'appartements, maisons, commerces et bureaux. Je m'engage à comprendre vos besoins, vous écouter et vous guider tout au long du processus de conception pour que le résultat final réponde à vos attentes.
            </p>
            <p className="leading-relaxed text-primary">
              Soucieuse de la qualité et de la fonctionnalité, je m'assure que chaque espace est optimalement utilisé pour créer un environnement confortable et fonctionnel. Je m'occupe du design, de la création de mobilier, du choix des matériaux et du suivi des travaux jusqu'à la livraison.
            </p>
            <p className="leading-relaxed text-primary italic text-center">"Les détails ne sont pas les détails. Ils sont la conception."<br />
              <span className="font-semibold">Charles Eames</span>
            </p>
            <Link to="/debuter-projet" className="inline-block btn-secondary serif px-5 py-3 rounded-full border border-line">Débuter votre projet</Link>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-line">
            <img
              src="https://static.wixstatic.com/media/59de7a_f1a5e0f57f0443a586ec570673261951~mv2.jpg"
              alt="Samar Msadek atelier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
