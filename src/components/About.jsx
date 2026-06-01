import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag} aria-hidden="true">// 01 till om mig</span>
          <h2 id="about-heading" className={styles.heading}>
            Jag bygger saker<br />
            som <em>fungerar</em><br />
            och <em>ser bra ut</em>.
          </h2>
        </div>
        <div className={styles.right}>
          <p className={styles.bio}>
            Hej! Jag heter <strong>Soheyl Izadkhah</strong> och är en fullstack-utvecklare
            med passion för att skapa snabba, tillgängliga och väldesignade webbapplikationer.
          </p>
          <p className={styles.bio}>
            Jag trivs i hela stacken till från att designa användargränssnitt i React
            till att bygga robusta API:er och databaser på backend. Varje projekt
            är en chans att lära sig något nytt.
          </p>
          <div className={styles.stats} role="list">
            {[
              { value: '10+', label: 'Projekt slutförda' },
              { value: '2+', label: 'Års erfarenhet' },
              { value: '100%', label: 'Engagemang' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat} role="listitem">
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
