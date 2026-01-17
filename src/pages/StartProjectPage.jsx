import React, { useState } from 'react'

const contactOptions = ['MAIL', 'TÉLÉPHONE']
const propertyOptions = ['APPARTEMENT', 'MAISON', 'BUREAU', 'COMMERCE', 'IMMEUBLE', 'AUTRES']

export default function StartProjectPage({ mode = 'start' }){
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    contactPrefs: [],
    city: '',
    propertyTypes: [],
  })
  const [submitted, setSubmitted] = useState(false)

  const toggleValue = (key, value) => {
    setFormData(prev => {
      const exists = prev[key].includes(value)
      const nextValues = exists ? prev[key].filter(v => v !== value) : [...prev[key], value]
      return { ...prev, [key]: nextValues }
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const title = mode === 'contact' ? 'Contact' : 'Débuter votre projet'
  const subtitle = mode === 'contact'
    ? 'Dites-nous en plus concernant votre projet.'
    : 'Un devis sur-mesure, pensé pour vos besoins.'

  return (
    <section className="min-h-screen pt-24 pb-16 bg-surface">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="serif uppercase tracking-[0.28em] text-sm text-secondary">{title}</p>
          <h1 className="serif text-3xl md:text-4xl font-bold mt-2">{title}</h1>
          <p className="mt-3 text-secondary max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-[1fr_minmax(0,520px)_1fr] gap-6 items-stretch">
          <div className="hidden lg:block h-full rounded-2xl overflow-hidden shadow-lg">
            <img src="https://static.wixstatic.com/media/59de7a_046d9cf4a0f842f29f560f2594dfe9ff~mv2.jpg" alt="Inspiration intérieure" className="w-full h-full object-cover" />
          </div>

          <div className="bg-[var(--bg-base)] rounded-2xl shadow-xl border border-line p-6 md:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-secondary">Nom et prénom</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  placeholder="Votre nom complet"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-secondary">Numéro de téléphone</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="06 xx xx xx xx"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-secondary">E-mail</label>
                  <input
                    required
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                    placeholder="vous@email.fr"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary">Vous souhaitez être recontacté par</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {contactOptions.map(opt => (
                    <label key={opt} className={`px-3 py-2 rounded-full border cursor-pointer transition ${formData.contactPrefs.includes(opt) ? 'bg-[var(--color-accent)] text-white border-transparent' : 'bg-surface border-line text-primary'}`}>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.contactPrefs.includes(opt)}
                        onChange={() => toggleValue('contactPrefs', opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-secondary">Quelle ville</label>
                <input
                  required
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-line bg-surface px-3 py-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
                  placeholder="Ex : Paris, Metz, Nancy"
                />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary">Type de bien</p>
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {propertyOptions.map(opt => (
                    <label key={opt} className={`px-3 py-2 rounded-full border text-sm cursor-pointer transition ${formData.propertyTypes.includes(opt) ? 'bg-[var(--color-accent)] text-white border-transparent' : 'bg-surface border-line text-primary'}`}>
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={formData.propertyTypes.includes(opt)}
                        onChange={() => toggleValue('propertyTypes', opt)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full py-3 rounded-full bg-[var(--color-accent)] text-white tracking-[0.18em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition shadow-soft mt-2">Continuer</button>
              {submitted && (
                <p className="text-sm text-secondary">Merci ! Votre demande est prête. Ajoutez vos plans ou photos à votre message lors de l\'échange.</p>
              )}
            </form>
          </div>

          <div className="hidden lg:block h-full rounded-2xl overflow-hidden shadow-lg">
            <img src="https://static.wixstatic.com/media/59de7a_22b9acf0ad6944b7a38d9712497a41a1~mv2.jpg" alt="Inspiration intérieur chic" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
