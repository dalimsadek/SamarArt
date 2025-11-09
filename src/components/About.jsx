import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          {/* portrait image served from Vite `public/` directory; this uses BASE_URL so it works with non-root bases */}
          <img src={import.meta.env.BASE_URL + 'samar.jpeg'} alt="Samar Msadek portrait" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="serif text-3xl font-bold">Bonjour — je suis Samar Msadek</h2>
          <p className="mt-4 text-lg leading-relaxed">Je conçois des intérieurs qui donnent envie d’habiter, pensés et subtilement luxueux. J’allie une sensibilité contemporaine à des matériaux artisanaux — meubles chinés, textiles et finitions réalisés par des artisans. La lumière, la matière et l’équilibre sont au cœur de mon travail.</p>
          <blockquote className="mt-6 italic border-l-2 pl-4 text-clay">« Nous façonnons des espaces qui se ressentent, pas seulement qui se regardent. »</blockquote>
          <p className="mt-6">Je collabore avec des clients qui privilégient la longévité aux modes passagères et souhaitent des lieux pour accueillir, se reposer et créer.</p>
        </div>
      </div>
    </section>
  )
}
