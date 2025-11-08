// This Netlify Function sends an email using the SendGrid REST API directly.
// Environment variables:
// - SENDGRID_API_KEY (required to send emails)
// - RECIPIENT_EMAIL (optional, defaults to Samarmsadekk@gmail.com)
// - FROM_EMAIL (optional, recommended: verified sender in SendGrid)

exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const body = JSON.parse(event.body || '{}')
  const { name, email, message } = body
  const recipient = process.env.RECIPIENT_EMAIL || 'Samarmsadekk@gmail.com'

  if (!process.env.SENDGRID_API_KEY) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: 'No email provider configured. Set SENDGRID_API_KEY in your environment.' })
    }
  }

  const payload = {
    personalizations: [
      {
        to: [{ email: recipient }],
        subject: `New message from portfolio site — ${name || 'Visitor'}`
      }
    ],
    from: { email: process.env.FROM_EMAIL || recipient },
    content: [
      { type: 'text/plain', value: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}` },
      { type: 'text/html', value: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${(message||'').replace(/\n/g,'<br/>')}</p>` }
    ]
  }

  try {
    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (res.status === 202) {
      return { statusCode: 200, body: JSON.stringify({ ok: true }) }
    }

    const text = await res.text()
    console.error('SendGrid API error', res.status, text)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'SendGrid API error', details: text }) }
  } catch (err) {
    console.error('Fetch/send error', err)
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: 'Network or send error' }) }
  }
}
