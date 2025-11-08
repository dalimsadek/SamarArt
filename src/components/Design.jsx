import React from 'react'

export default function Design(){
  return (
    <section id="design" className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="serif text-2xl font-bold">Design Philosophy</h3>
        <p className="mt-6 text-lg leading-relaxed">I believe in the quiet power of materials: the seam of a linen cushion, the hand-glaze of a tile, the way morning light reveals grain. My approach blends craftsmanship, sustainability and rigorous editing — every object must earn its place.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Craftsmanship</h4>
            <p className="mt-2 text-sm text-gray-600">Local makers, custom details, and timeless finishes.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Sustainability</h4>
            <p className="mt-2 text-sm text-gray-600">Mindful sourcing and longevity over trend.</p>
          </div>
          <div className="p-6 bg-white/60 rounded-lg shadow">
            <h4 className="font-semibold">Light & Texture</h4>
            <p className="mt-2 text-sm text-gray-600">Harmony of material, light and human scale.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
