import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSent(true)
    setLoading(false)
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag} aria-hidden="true">// 04 kontakt</span>
          <h2 id="contact-heading" className={styles.heading}>
            Har du ett projekt
            i åtanke?
          </h2>
          <p className={styles.sub}>
            Jag är alltid öppen för nya möjligheter och samarbeten.
            Hör av dig så svarar jag inom 24 timmar.
          </p>
          <address className={styles.links}>
            <a href="mailto:Soheylizadkhah@gmail.com" className={styles.contactLink}>
              <span className={styles.linkIcon} aria-hidden="true">✉</span>
              Soheylizadkhah@gmail.com
            </a>
            <a href="https://github.com/soheyl228" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.linkIcon} aria-hidden="true">⌥</span>
              github.com/soheyl228
            </a>
            <a href="https://www.linkedin.com/in/soheyl-izadkhah-99250b340/" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span className={styles.linkIcon} aria-hidden="true">⌘</span>
              LinkedIn
            </a>
          </address>
        </div>

        <div className={styles.right}>
          {sent ? (
            <div className={styles.success} role="status">
              <span className={styles.successIcon} aria-hidden="true">✓</span>
              <p className={styles.successText}>Tack! Jag hör av mig snart.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.field}>
                <label htmlFor="name" className={styles.label}>Namn</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ditt namn"
                  required
                  className={styles.input}
                  autoComplete="name"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email" className={styles.label}>E-post</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="din@epost.se"
                  required
                  className={styles.input}
                  autoComplete="email"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>Meddelande</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Berätta om ditt projekt..."
                  required
                  rows={5}
                  className={styles.textarea}
                />
              </div>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Skickar...' : 'Skicka meddelande'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
