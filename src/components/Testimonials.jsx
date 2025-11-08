import React from 'react'

const reviews = [
  {id:1, img:'https://i.pravatar.cc/120?img=12', name:'Sophie L.', text:"Le décor a transformé notre salle — nos clients parlent encore de l'ambiance.", source:'Google — Le Jaune de Damas'},
  {id:2, img:'https://i.pravatar.cc/120?img=5', name:"Pierre M.", text:"Samar a su sublimer l'espace en gardant l'âme du lieu.", source:'Client'},
  {id:3, img:'https://i.pravatar.cc/120?img=20', name:'Aurélie D.', text:"Détails soignés, lumière et matériaux choisis avec goût.", source:'Google'},
  {id:4, img:'https://i.pravatar.cc/120?img=8', name:'Marc R.', text:"Les retours clients ont été immédiats — chaleur et confort retrouvés.", source:'Avis public'},
  {id:5, img:'https://i.pravatar.cc/120?img=30', name:'Nadia S.', text:"Un travail professionnel et délicat, très belle collaboration.", source:'Google'}
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
    <section className="py-16 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h4 className="serif text-xl font-bold">ILS PARLENT DE NOUS</h4>
          <div className="space-x-2">
            <button aria-label="left" onClick={()=>scroll(-1)} className="p-2 rounded-md bg-white/80 shadow">◀</button>
            <button aria-label="right" onClick={()=>scroll(1)} className="p-2 rounded-md bg-white/80 shadow">▶</button>
          </div>
        </div>

        <div ref={scrollerRef} className="mt-6 -mx-4 px-4 flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory">
          {reviews.map(r=> (
            <article key={r.id} className="min-w-[260px] snap-start bg-white rounded-lg p-4 shadow-md flex-none">
              <div className="flex items-center gap-3">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-full object-cover border" />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-gray-500">{r.source}</div>
                </div>
              </div>
              <p className="mt-3 text-sm italic">“{r.text}”</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-sm text-gray-600">Extraits d'avis publics (Google Reviews) et retours clients. Utilisés ici à titre représentatif — merci à tous pour leur confiance.</p>
      </div>
    </section>
  )
}
