import React from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root')

export default function ProjectModal({project, onClose}){
  if(!project) return null
  return (
    <ReactModal isOpen={!!project} onRequestClose={onClose} className="max-w-4xl mx-auto my-20 bg-white rounded-lg overflow-hidden outline-none" overlayClassName="fixed inset-0 bg-black/50 flex items-start justify-center z-50">
      <div className="grid md:grid-cols-2">
        <div className="md:col-span-1">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="serif text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-gray-700">{project.desc}</p>
          <p className="mt-4 text-sm text-gray-500">Category: {project.category}</p>
          <div className="mt-6">
            <button onClick={onClose} className="btn-ghost">Close</button>
          </div>
        </div>
      </div>
    </ReactModal>
  )
}
