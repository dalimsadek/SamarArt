import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState({ sending: false, success: null, message: null })

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const payload = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }

    setStatus({ sending: true, success: null, message: null })

    // Try Netlify function first
    try {
      const controller = new AbortController()
      const tid = setTimeout(() => controller.abort(), 3000)
      const res = await fetch('/.netlify/functions/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      clearTimeout(tid)
      const json = await res.json().catch(() => null)
      if (res.ok && json?.ok) {
        setStatus({ sending: false, success: true, message: 'Message envoyé — merci !' })
        form.reset()
        return
      }
    } catch {
      /* fall through to FormSubmit */
    }

    // Fallback: FormSubmit API via fetch (no page navigation)
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent('contact@samart-interior.fr')}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...payload, _captcha: 'false' }),
      })
      const json = await res.json().catch(() => null)
      if (res.ok && json?.success !== 'false') {
        setStatus({ sending: false, success: true, message: 'Message envoyé — nous vous répondrons rapidement !' })
        form.reset()
      } else {
        throw new Error('form error')
      }
    } catch {
      setStatus({
        sending: false,
        success: false,
        message: "Impossible d'envoyer le message. Écrivez-nous directement à contact@samart-interior.fr",
      })
    }
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '7rem 0' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="gold-rule" />
            <span
              className="text-[10px] tracking-[0.32em] uppercase font-medium"
              style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif' }}
            >
              Contact
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            Débuter votre{' '}
            <em style={{ fontStyle: 'italic' }}>projet</em>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p
              className="leading-relaxed"
              style={{ color: 'var(--text-soft)', fontSize: '0.95rem', lineHeight: 1.8 }}
            >
              Racontez-nous vos envies — appartement, maison, commerce ou bureau.
              Nous cadrerons ensemble les besoins, les délais et l'esthétique recherchée.
            </p>

            <div className="space-y-4" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem' }}>
              {[
                ['Email', 'contact@samart-interior.fr', 'mailto:contact@samart-interior.fr'],
                ['Téléphone', '+33 7 60 75 59 72', 'tel:+33760755972'],
                ['Instagram', '@samarscorner', 'https://www.instagram.com/samarscorner/'],
                ['Localisation', 'Remiremont, France', null],
              ].map(([label, value, href]) => (
                <div key={label} className="flex gap-6">
                  <span
                    className="shrink-0 w-24 text-[10px] tracking-[0.2em] uppercase font-medium"
                    style={{ color: 'var(--text-muted)', fontFamily: '"DM Sans", sans-serif', paddingTop: '2px' }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noreferrer' : undefined}
                      className="transition-colors duration-200"
                      style={{ color: 'var(--text)', fontSize: '0.9rem' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: 'var(--text)', fontSize: '0.9rem' }}>{value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="overflow-hidden" style={{ borderRadius: '2px', border: '1px solid var(--border)' }}>
              <iframe
                title="Localisation Sam'Art"
                src="https://www.google.com/maps?q=48.019852,6.610639&z=14&output=embed"
                width="100%"
                height="220"
                loading="lazy"
                style={{ display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8"
              style={{
                background: 'var(--ivory)',
                border: '1px solid var(--border)',
                borderRadius: '2px',
              }}
            >
              <div>
                <label className="form-label">Nom &amp; prénom</label>
                <input
                  name="name"
                  required
                  className="form-input"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label className="form-label">Adresse e-mail</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="vous@email.fr"
                />
              </div>

              <div>
                <label className="form-label">Votre message</label>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="form-input"
                  style={{ resize: 'vertical' }}
                  placeholder="Décrivez votre projet, vos envies, votre espace…"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                <button
                  type="submit"
                  disabled={status.sending}
                  className="btn-gold self-start"
                  style={{ opacity: status.sending ? 0.6 : 1 }}
                >
                  {status.sending ? 'Envoi en cours…' : 'Envoyer le message'}
                </button>

                {status.message && (
                  <p
                    className="text-sm"
                    style={{ color: status.success ? '#4a7c59' : '#c0392b' }}
                  >
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
