import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <span className={styles.copy}>
          © {year} Soheyl Izadkhah
        </span>
        <span className={styles.mono}>Byggd med React + Vite</span>
      </div>
    </footer>
  )
}
