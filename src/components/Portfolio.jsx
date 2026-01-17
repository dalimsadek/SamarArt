import React, {useState} from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { projects as projectData } from '../data/projects'

export default function Portfolio(){
  const [filter, setFilter] = useState('Tous')
  const navigate = useNavigate()

  const categories = ['Tous', ...Array.from(new Set(projectData.map(p => p.category)))]
  const projects = projectData.filter(p => filter==='Tous' ? true : p.category===filter)

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="serif text-2xl font-bold">Projets</h3>
        <p className="mt-2 text-sm text-secondary">Projets sélectionnés — survolez pour les détails. Cliquez pour agrandir.</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map(c => (
            <button
              key={c}
              onClick={()=>setFilter(c)}
              className={`px-3 py-1 rounded-full border border-line ${filter===c ? 'bg-[var(--color-accent)] text-white shadow-soft' : 'bg-[var(--bg-base)] text-primary hover:bg-[var(--color-surface)]'}`}
            >{c}</button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map(p => (
            <motion.div
              key={p.slug}
              layout
              className="group card-fancy relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={()=>navigate(`/projets/${p.slug}`)}
              whileHover={{ scale: 1.03, rotateX: 3, rotateY: -4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 18 }}
            >
              <div className="card-inner w-full h-56 overflow-hidden">
                <img src={p.hero} alt={p.title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="card-shine" aria-hidden></div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/65 to-transparent dark:from-black/65 dark:via-black/45 dark:to-transparent flex items-end p-4"
              >
                <div>
                  <h4 className="font-semibold text-warmblack dark:text-white drop-shadow">{p.title}</h4>
                  <p className="text-sm text-warmblack/80 dark:text-white/85 mt-1">{p.summary}</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-3 left-3 category-pill px-2 py-1 rounded text-xs text-warmblack"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >{p.category}</motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
