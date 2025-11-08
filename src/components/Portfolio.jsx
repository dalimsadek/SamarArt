import React, {useState} from 'react'
import { motion } from 'framer-motion'
import ProjectModal from './ProjectModal'

const initialProjects = [
  {id:1,title:'Sage Living Room',category:"Résidentiel",img:'https://images.unsplash.com/photo-1505692794406-6d6b4d92f1a6?auto=format&fit=crop&w=1200&q=80',desc:'Palette chaleureuse, textures superposées.'},
  {id:2,title:'Studio Office',category:'Commercial',img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',desc:'Lignes minimalistes et bois travaillé.'},
  {id:3,title:'Kitchen Story',category:"Résidentiel",img:'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80',desc:'Carreaux faits main et détails en laiton.'},
  {id:4,title:'Gallery Installation',category:'Installations artistiques',img:'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',desc:'Pièce textile in situ.'},
  {id:5,title:'Cozy Reading Nook',category:"Résidentiel",img:'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',desc:'Coin ensoleillé avec objets choisis.'}
]

export default function Portfolio(){
  const [filter, setFilter] = useState('Tous')
  const [modal, setModal] = useState(null)

  const categories = ['Tous','Résidentiel','Commercial','Installations artistiques']
  const projects = initialProjects.filter(p => filter==='Tous' ? true : p.category===filter)

  return (
    <section id="portfolio" className="py-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),transparent)]">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="serif text-2xl font-bold">Projets</h3>
        <p className="mt-2 text-sm text-gray-600">Projets sélectionnés — survolez pour les détails. Cliquez pour agrandir.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map(c => (
            <button key={c} onClick={()=>setFilter(c)} className={`px-3 py-1 rounded-full ${filter===c ? 'bg-clay text-white' : 'bg-white/60 text-warmblack'}`}>{c}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.div key={p.id} layout whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={()=>setModal(p)}>
              <img src={p.img} alt={p.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <div className="p-4 text-white">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm opacity-90">{p.desc}</p>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white/40 text-warmblack px-2 py-1 rounded text-xs">{p.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
      {modal && <ProjectModal project={modal} onClose={()=>setModal(null)} />}
    </section>
  )
}
