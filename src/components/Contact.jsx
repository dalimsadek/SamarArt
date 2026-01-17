import React, {useState} from 'react'

export default function Contact(){
  const [status, setStatus] = useState({ sending:false, success:null, message: null })

  async function handleSubmit(e){
    e.preventDefault()
    const form = e.target
    const payload = { name: form.name.value, email: form.email.value, message: form.message.value }

    setStatus({ sending:true, success:null, message: null })

    try {
      // Try serverless endpoint first (Netlify/Vercel). Use a short timeout to avoid long waits.
      const controller = new AbortController()
      const id = setTimeout(() => controller.abort(), 2500)
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal
      })
      clearTimeout(id)
      const json = await res.json().catch(()=>null)
      if (res.ok && json && json.ok) {
        setStatus({ sending:false, success:true, message: 'Message sent — thank you!' })
        form.reset()
        return
      }
    } catch (err) {
      // ignore and fall back to FormSubmit
    }

    // Fallback: use formsubmit.co which allows sending form submissions to an email address without server-side code.
    // It will send a verification email to the recipient the first time. No API key required.
    try {
      const action = `https://formsubmit.co/${encodeURIComponent('contact@samart-interior.fr')}`
      const tempForm = document.createElement('form')
      tempForm.action = action
      tempForm.method = 'POST'
      tempForm.style.display = 'none'
      tempForm.enctype = 'application/x-www-form-urlencoded'
      Object.keys(payload).forEach(key => {
        const input = document.createElement('input')
        input.name = key
        input.value = payload[key]
        tempForm.appendChild(input)
      })
      document.body.appendChild(tempForm)
      tempForm.submit()
      setStatus({ sending:false, success:true, message: 'Redirecting to form handler — check your email inbox for confirmation.' })
    } catch (err) {
      setStatus({ sending:false, success:false, message: 'Unable to submit form. Please email contact@samart-interior.fr directly.' })
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="text-secondary">
          <h4 className="serif text-2xl font-bold text-primary">Débuter votre projet</h4>
          <p className="mt-3">Racontez-moi vos envies : appartement, maison, commerce ou bureau. Nous cadrerons ensemble les besoins, les délais et l’esthétique recherchée.</p>
          <div className="mt-6 text-sm">
            <p>Email: <a href="mailto:contact@samart-interior.fr" className="text-primary hover:text-clay">contact@samart-interior.fr</a></p>
            <p>Phone: <a href="tel:+33760755972" className="text-clay">+33 7 60 75 59 72</a></p>
            <p className="mt-4">Instagram: <a href="https://www.instagram.com/samarscorner/" target="_blank" rel="noreferrer" className="text-clay">@samarscorner</a></p>
            <p className="mt-2">Localisation: Remiremont, France</p>
          </div>

          <div className="mt-8">
            <iframe title="map" src="https://www.google.com/maps?q=48.019852,6.610639&z=14&output=embed" width="100%" height="220" className="rounded-md border" loading="lazy" />
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="bg-surface p-6 rounded-lg shadow-sm border border-line">
            <label className="block text-sm">Name</label>
            <input name="name" required className="w-full border rounded px-3 py-2 mt-2" />
            <label className="block text-sm mt-4">Email</label>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2 mt-2" />
            <label className="block text-sm mt-4">Message</label>
            <textarea name="message" rows="6" required className="w-full border rounded px-3 py-2 mt-2" />
            <div className="mt-4 flex items-center justify-between">
              <button type="submit" disabled={status.sending} className="px-5 py-2 rounded-full bg-[var(--color-accent)] text-white tracking-[0.12em] uppercase text-xs hover:bg-[var(--color-accent-2)] transition">{status.sending ? 'Envoi…' : 'Envoyer'}</button>
              {status.message && <span className={`text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}>{status.message}</span>}
            </div>
            <p className="mt-3 text-xs text-muted">If server-side email is not configured, your mail client will open as a fallback and the message will be sent from your email.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
