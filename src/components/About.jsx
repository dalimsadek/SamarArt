import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80" alt="portrait" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 className="serif text-3xl font-bold">Hello — I'm [Name],</h2>
          <p className="mt-4 text-lg leading-relaxed">I design interiors that feel lived in, considered and quietly luxurious. I blend a modern sensibility with handcrafted materials — sourcing antiques, textiles and artisan finishes that anchor a room’s story. My work prioritizes light, texture and the emotional weight of objects.</p>
          <blockquote className="mt-6 italic border-l-2 pl-4 text-clay">“We shape rooms not just to be seen, but to be felt.”</blockquote>
          <p className="mt-6">I collaborate with clients who value longevity over trend, and who want spaces that welcome gatherings, rest and creative living.</p>
        </div>
      </div>
    </section>
  )
}
