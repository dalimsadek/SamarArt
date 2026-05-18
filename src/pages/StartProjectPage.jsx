import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const projectTypes = [
  "Décoration d'intérieur",
  'Aménagement complet',
  'Coaching décoration',
  'Valorisation immobilière',
  'Tableau sur mesure',
  'Fresque murale',
]

const budgets = [
  'Moins de 200 €',
  '200 € – 500 €',
  '500 € – 1 000 €',
  '1 000 € – 3 000 €',
  'Plus de 3 000 €',
]

export default function StartProjectPage() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const preType = params.get('type')

  const defaultType = preType === 'tableau'
    ? 'Tableau sur mesure'
    : ''

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: defaultType,
    city: '',
    spaceType: '',
    dimensions: '',
    ambiance: '',
    colors: '',
    budget: '',
    message: '',
  })
  const [files, setFiles] = useState([])
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)

  const set = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const handleSubmit = async e => {
    e.preventDefault()
    setSending(true)
    try {
      const payload = {
        ...form,
        _captcha: 'false',
        _subject: `Nouveau projet — ${form.projectType || 'Sam\'Art'}`,
      }
      await fetch(`https://formsubmit.co/ajax/${encodeURIComponent('contact@samart-interior.fr')}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
    } catch { /* silent */ }
    setSending(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center px-6"
        style={{ background: 'var(--bg)', paddingTop: '72px' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-md space-y-5"
        >
          <div
            className="w-14 h-14 mx-auto flex items-center justify-center"
            style={{ border: '1px solid var(--gold)', borderRadius: '9999px' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h2
            style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)' }}
          >
            Demande envoyée
          </h2>
          <p style={{ color: 'var(--text-soft)', lineHeight: 1.8, fontSize: '0.9rem' }}>
            Merci pour votre message. Je vous réponds sous 24 à 48h.
          </p>
          <Link to="/" className="btn-gold inline-flex">Retour à l'accueil</Link>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh', paddingTop: '72px' }}>

      {/* Page header */}
      <div style={{ background: 'var(--bg-surface)', padding: '3.5rem 1.5rem 3rem', textAlign: 'center' }}>
        <div className="flex items-center gap-3 justify-center mb-5">
          <span className="gold-rule" />
          <span
            className="text-[10px] tracking-[0.32em] uppercase font-medium"
            style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
          >
            Votre projet
          </span>
          <span className="gold-rule" />
        </div>
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
          }}
        >
          Parlons de votre projet
        </h1>
        <p
          className="mt-3 mx-auto"
          style={{ color: 'var(--text-soft)', fontSize: '0.9rem', maxWidth: '520px', lineHeight: 1.75 }}
        >
          Chaque projet est unique.
          Partagez-moi vos envies, et je reviendrai vers vous avec une proposition adaptée.
        </p>
      </div>

      {/* Form */}
      <section style={{ padding: '4rem 1.5rem 6rem' }}>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >

            {/* ── Informations générales ─────────────────── */}
            <Fieldset label="Informations générales">
              <div>
                <label className="form-label">Nom &amp; Prénom</label>
                <input required className="form-input" placeholder="Votre nom complet"
                  value={form.name} onChange={e => set('name', e.target.value)} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">E-mail</label>
                  <input required type="email" className="form-input" placeholder="vous@email.fr"
                    value={form.email} onChange={e => set('email', e.target.value)} />
                </div>
                <div>
                  <label className="form-label">Téléphone</label>
                  <input className="form-input" placeholder="06 xx xx xx xx"
                    value={form.phone} onChange={e => set('phone', e.target.value)} />
                </div>
              </div>
            </Fieldset>

            {/* ── Type de projet ─────────────────────────── */}
            <Fieldset label="Type de projet">
              <div>
                <label className="form-label">Sélectionnez votre prestation</label>
                <select
                  className="form-input"
                  value={form.projectType}
                  onChange={e => set('projectType', e.target.value)}
                  style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238C8278' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                >
                  <option value="">Choisissez…</option>
                  {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </Fieldset>

            {/* ── Localisation ───────────────────────────── */}
            <Fieldset label="Localisation du projet">
              <div>
                <label className="form-label">Ville / Région</label>
                <input required className="form-input" placeholder="Ex : Paris, Metz, Nancy, Vosges…"
                  value={form.city} onChange={e => set('city', e.target.value)} />
              </div>
            </Fieldset>

            {/* ── Détails du projet ──────────────────────── */}
            <Fieldset label="Détails du projet">
              <div>
                <label className="form-label">Type d'espace</label>
                <input className="form-input" placeholder="Ex : appartement, maison, commerce, mur, pièce…"
                  value={form.spaceType} onChange={e => set('spaceType', e.target.value)} />
              </div>
              <div>
                <label className="form-label">Surface ou dimensions</label>
                <input className="form-input" placeholder="Ex : 25 m² / 120 × 80 cm…"
                  value={form.dimensions} onChange={e => set('dimensions', e.target.value)} />
              </div>
            </Fieldset>

            {/* ── Style & ambiance ───────────────────────── */}
            <Fieldset label="Style & Ambiance">
              <div>
                <label className="form-label">Ambiance souhaitée</label>
                <input className="form-input" placeholder="Ex : bohème, japandi, épuré, chaleureux…"
                  value={form.ambiance} onChange={e => set('ambiance', e.target.value)} />
              </div>
              <div>
                <label className="form-label">Couleurs envisagées <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optionnel)</span></label>
                <input className="form-input" placeholder="Ex : tons nudes, vert sauge, terracotta…"
                  value={form.colors} onChange={e => set('colors', e.target.value)} />
              </div>
            </Fieldset>

            {/* ── Budget ─────────────────────────────────── */}
            <Fieldset label="Budget">
              <div>
                <label className="form-label">Budget estimé</label>
                <select
                  className="form-input"
                  value={form.budget}
                  onChange={e => set('budget', e.target.value)}
                  style={{ cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238C8278' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                >
                  <option value="">Sélectionnez…</option>
                  {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
            </Fieldset>

            {/* ── Inspirations ───────────────────────────── */}
            <Fieldset label="Inspirations">
              <div>
                <label className="form-label">Images de référence <span style={{ fontWeight: 400, color: 'var(--text-muted)' }}>(optionnel)</span></label>
                <div
                  className="relative flex flex-col items-center justify-center gap-2 p-6 transition-colors duration-200"
                  style={{ border: '1px dashed var(--border)', borderRadius: '2px', background: 'var(--bg)', cursor: 'pointer' }}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    {files.length > 0
                      ? `${files.length} fichier(s) sélectionné(s)`
                      : 'Glissez vos images ici ou cliquez pour parcourir'}
                  </p>
                  <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>PNG, JPG, PDF — max 5 Mo</p>
                  <input
                    id="file-input"
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={e => setFiles([...e.target.files])}
                  />
                </div>
              </div>
            </Fieldset>

            {/* ── Message ────────────────────────────────── */}
            <Fieldset label="Votre message">
              <div>
                <label className="form-label">Décrivez votre projet</label>
                <textarea
                  required
                  rows={5}
                  className="form-input"
                  style={{ resize: 'vertical' }}
                  placeholder="Vos envies, vos contraintes, l'histoire de votre espace…"
                  value={form.message}
                  onChange={e => set('message', e.target.value)}
                />
              </div>
            </Fieldset>

            {/* ── Submit ─────────────────────────────────── */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                disabled={sending}
                className="btn-gold w-full justify-center"
                style={{ borderRadius: '2px', opacity: sending ? 0.65 : 1 }}
              >
                {sending ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </button>
              <p
                className="text-center"
                style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.06em', fontFamily: '"DM Sans", sans-serif' }}
              >
                Je vous réponds sous 24 à 48h
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  )
}

/* Small reusable fieldset wrapper */
function Fieldset({ label, children }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <span className="gold-rule" style={{ width: '24px' }} />
        <h3
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.65rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontWeight: 600,
            color: 'var(--text-muted)',
          }}
        >
          {label}
        </h3>
      </div>
      <div
        className="space-y-4 p-6"
        style={{ background: 'var(--ivory)', border: '1px solid var(--border)', borderRadius: '2px' }}
      >
        {children}
      </div>
    </div>
  )
}
