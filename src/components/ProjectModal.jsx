import React, { useEffect } from 'react'
import ReactModal from 'react-modal'

// Avoid running before the DOM is ready in production builds (GitHub Pages loads the bundle from the head)
function useModalAppElement(){
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const el = document.getElementById('root')
      if (el) ReactModal.setAppElement(el)
    }
  }, [])
}

export default function ProjectModal({project, onClose}){
  useModalAppElement()
  if(!project) return null
  return (
    <ReactModal isOpen={!!project} onRequestClose={onClose} className="max-w-4xl mx-auto my-20 bg-white rounded-lg overflow-hidden outline-none" overlayClassName="fixed inset-0 bg-black/50 flex items-start justify-center z-50">
      <div className="grid md:grid-cols-2">
        <div className="md:col-span-1">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col">
          <h3 className="serif text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-secondary">{project.desc}</p>
          <p className="mt-4 text-sm text-muted">Catégorie: {project.category}</p>
          <div className="mt-4 flex gap-3">
            <button onClick={onClose} className="bg-softgold text-warmblack px-4 py-2 rounded">Fermer</button>
            <a href={project.img} target="_blank" rel="noreferrer" className="btn-ghost">Ouvrir l'image</a>
          </div>
          <div className="mt-auto text-xs text-muted">© Samar'Art — Tous droits réservés</div>
        </div>
      </div>
    </ReactModal>
  )
}
