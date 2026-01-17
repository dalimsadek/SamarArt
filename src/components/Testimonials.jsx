import React from 'react'

const reviews = [
  {
    id: 1,
    img: 'https://static.wixstatic.com/media/59de7a_8e47e99636874760a36088de9046c894~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/kam-idris-hYb7kbu4x7E-unsplash.jpg',
    name: 'J.V',
    text: 'J’ai fait appel à Samar Msadek pour un projet de rénovation d’appartement, en peu de temps elle a su comprendre mes attentes tout en respectant certaines conditions budgétaires. Je ne manquerai pas de refaire appel à elle dans mes futurs projets !',
    source: 'Client résidentiel'
  },
  {
    id: 2,
    img: 'https://static.wixstatic.com/media/59de7a_a5227018c008425c85479afe66b202a0~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/59de7a_a5227018c008425c85479afe66b202a0~mv2.jpg',
    name: 'C.B',
    text: 'J’ai fait appel aux services de Léa Architecture d’Intérieur afin qu’elle réalise mon bureau sur mesure. Elle a su prendre en compte mes exigences, tout en apportant sa touche de créativité. Je recommande grandement Samar Msadek pour son professionnalisme, sa rigueur et sa gentillesse !',
    source: 'Bureau sur-mesure'
  },
  {
    id: 3,
    img: 'https://static.wixstatic.com/media/11062b_60b642e903e5401b898f3e809b17bbac~mv2.jpg/v1/fill/w_240,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Concepteur%20comparant%20des%20%C3%A9chantillons.jpg',
    name: 'A.P',
    text: 'Une vraie partenaire de projet, qui concilie esthétique et contraintes techniques. Process clair et rendu fidèle aux attentes.',
    source: 'Commerce'
  }
]

export default function Testimonials(){
  const scrollerRef = React.useRef(null)

  const scroll = (dir=1)=>{
    const el = scrollerRef.current
    if(!el) return
    const amount = el.clientWidth * 0.7
    el.scrollBy({left: dir * amount, behavior:'smooth'})
  }

  return (
    <section id="testimonials" className="py-16 bg-base">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="serif text-2xl font-bold tracking-[0.1em] uppercase text-primary">Ils parlent de nous</h4>
          <div className="hidden sm:flex space-x-2">
            <button aria-label="left" onClick={()=>scroll(-1)} className="p-2.5 rounded-full bg-white/90 border border-line shadow-sm text-primary hover:bg-surface">◀</button>
            <button aria-label="right" onClick={()=>scroll(1)} className="p-2.5 rounded-full bg-white/90 border border-line shadow-sm text-primary hover:bg-surface">▶</button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 -mx-4 px-4 flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible scroll-smooth scrollbar-hide snap-x snap-mandatory md:snap-none"
        >
          {reviews.map(r=> (
            <article key={r.id} className="min-w-[260px] sm:min-w-[300px] md:min-w-0 snap-start bg-surface rounded-2xl p-8 shadow-sm border border-line flex-none md:flex-auto flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-line shadow-sm mb-4">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover" />
              </div>
              <blockquote className="text-base md:text-lg leading-relaxed text-primary italic">“{r.text}”</blockquote>
              <p className="mt-4 font-semibold text-primary">{r.name}</p>
              <p className="text-sm text-muted">{r.source}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-secondary text-center md:text-left">Extraits d'avis publics et retours clients. Merci pour votre confiance.</p>
      </div>
    </section>
  )
}
