import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetailPage(){
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if(!project){
    return (
      <section className="min-h-screen pt-24 pb-16 bg-surface flex items-center justify-center">
        <div className="text-center">
          <p className="text-sm text-secondary">Projet introuvable.</p>
          <Link to="/" className="mt-3 inline-block btn-primary serif px-4 py-2 rounded-full">Retour à l'accueil</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen pt-24 pb-16 bg-surface">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <div>
            <p className="serif uppercase tracking-[0.28em] text-xs text-secondary">Projet</p>
            <h1 className="serif text-3xl md:text-4xl font-bold mt-2">{project.title}</h1>
            <p className="text-secondary mt-2 text-sm">{project.year} · {project.location}</p>
          </div>
          <Link to={-1} className="btn-secondary px-4 py-2 rounded-full border border-line text-sm">Retour</Link>
        </div>

        <p className="mt-6 leading-relaxed text-primary">{project.description}</p>

        <div className="mt-10 grid gap-6">
          {project.gallery.map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-line">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading={idx === 0 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
