import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const roles = ['Fullstack Developer', 'React Developer', 'Unity Game Creator', 'Problem Solver']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIndex])

  return (
    <section className={styles.hero} aria-label="Introduktion">
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.greeting} style={{ animationDelay: '0.1s' }}>
          <span className={styles.dot} />
          Tillgänglig för nya projekt
        </p>

        <h1 className={styles.name} style={{ animationDelay: '0.25s' }}>
          Soheyl<br />
          <span className={styles.surname}>Izadkhah</span>
        </h1>

        <div className={styles.roleRow} style={{ animationDelay: '0.45s' }}>
          <span className={styles.slash} aria-hidden="true">/</span>
          <span className={styles.role} aria-label={`Roll: ${displayed}`}>
            {displayed}
            <span className={styles.cursor} aria-hidden="true">|</span>
          </span>
        </div>

        <p className={styles.tagline} style={{ animationDelay: '0.6s' }}>
          Jag bygger snabba, tillgängliga och väldesignade webbapplikationer
          från idé till färdig produkt.
        </p>

        <div className={styles.actions} style={{ animationDelay: '0.75s' }}>
          <a href="#projects" className={styles.btnPrimary}>
            Se mina projekt
          </a>
          <a href="#contact" className={styles.btnSecondary}>
            Kontakta mig
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  )
}
