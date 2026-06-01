import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about',   label: 'Om mig' },
  { href: '#projects', label: 'Projekt' },
  { href: '#skills',  label: 'Skills' },
  { href: '#contact', label: 'Kontakt' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <nav className={styles.nav} aria-label="Huvudnavigation">
        <a href="#" className={styles.logo} aria-label="Soheyl Izadkhah – hem">
          SI<span className={styles.dot}>.</span>
        </a>
        <ul className={styles.links} role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta}>
          Kontakta mig
        </a>
      </nav>
    </header>
  )
}
