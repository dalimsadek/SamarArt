import React from 'react'

const services = [
  {
    title: 'Prestation complète',
    desc: 'Accompagnement global : conception, plans, matériaux et suivi esthétique jusqu’à la livraison.',
    image: 'https://static.wixstatic.com/media/59de7a_8e47e99636874760a36088de9046c894~mv2.jpg/v1/fill/w_548,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/kam-idris-hYb7kbu4x7E-unsplash.jpg'
  },
  {
    title: 'Prestation semi-complète',
    desc: 'Refonte partielle ou pièces clés, en conservant l’ADN du lieu et votre rythme de travaux.',
    image: 'https://static.wixstatic.com/media/59de7a_a5227018c008425c85479afe66b202a0~mv2.jpg/v1/fill/w_548,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/59de7a_a5227018c008425c85479afe66b202a0~mv2.jpg'
  },
  {
    title: 'Prestation à distance',
    desc: 'Coaching visio, moodboards, listes shopping et plans pour avancer sereinement où que vous soyez.',
    image: 'https://static.wixstatic.com/media/59de7a_eb9ed66726904c36b7a31b20a72b2f25~mv2.jpg/v1/fill/w_548,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/alona-gross-Dn84m9cOGy0-unsplash.jpg'
  },
  {
    title: 'Réalisation de plan',
    desc: 'Plans d’exécution détaillés, optimisation des circulations et mise aux normes.',
    image: 'https://static.wixstatic.com/media/11062b_32767f6b0af8451595ebdc0f849eb65d~mv2.jpg/v1/crop/x_685,y_0,w_2502,h_3333/fill/w_548,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Examen%20du%20plan%20de%20la%20maison.jpg'
  },
  {
    title: "Conseil d'agencement",
    desc: 'Visite conseil pour débloquer vos choix : implantation, couleurs, matières, luminaires.',
    image: 'https://static.wixstatic.com/media/11062b_60b642e903e5401b898f3e809b17bbac~mv2.jpg/v1/fill/w_548,h_730,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Concepteur%20comparant%20des%20%C3%A9chantillons.jpg'
  },
]

export default function Design(){
  return (
    <section id="services" className="py-20 bg-base">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="serif uppercase tracking-[0.26em] text-sm text-secondary">Nos prestations</p>
        <h3 className="serif text-3xl font-bold mt-2">Architecture d'intérieur, à votre mesure</h3>
        <p className="mt-4 text-secondary max-w-3xl mx-auto">Du croquis aux finitions, chaque offre est pensée pour s’adapter à votre appartement, maison, commerce ou bureaux.</p>

        <div className="mt-10 -mx-6 px-6">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none pb-4 scrollbar-hide">
            {services.map(item => (
              <div
                key={item.title}
                className="min-w-[280px] md:min-w-0 flex-shrink-0 bg-surface rounded-xl shadow-sm border border-line overflow-hidden snap-start"
              >
                <div className="h-[260px] w-full overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 space-y-3">
                  <h4 className="font-semibold text-primary tracking-[0.1em] uppercase text-sm">{item.title}</h4>
                  <p className="text-sm text-secondary leading-relaxed">{item.desc}</p>
                  <a
                    href="/prestation"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-full bg-[var(--color-accent)] text-white tracking-[0.14em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="#contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-[var(--color-accent)] text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition shadow-sm">Débuter votre projet</a>
      </div>
    </section>
  )
}
