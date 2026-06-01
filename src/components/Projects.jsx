import styles from './Projects.module.css'

const projects = [
  {
    number: '01',
    title: 'Yardery',
    description:
      'Ett spel jag skapade och publicerade på itch.io. Byggt i Unity med fokus på spelmekanik och användarupplevelse.',
    tech: ['Unity', 'C#', 'Game Design'],
    status: 'Live',
    href: 'https://hockaj.itch.io/yardery',
  },
  {
    number: '02',
    title: 'PokémonAPI Explorer',
    description:
      'En interaktiv webbapp som hämtar och visar Pokémon-data från PokeAPI. Filtrering, sökning och detaljvyer med React.',
    tech: ['React', 'JavaScript', 'CSS Modules'],
    status: 'GitHub',
    href: 'https://github.com/soheyl228',
  },
  {
    number: '03',
    title: 'Kommande projekt',
    description:
      'Fler projekt på väg. Följ min GitHub för att se vad jag jobbar med just nu.',
    tech: ['React', 'Node.js'],
    status: 'GitHub',
    href: 'https://github.com/soheyl228',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-heading">
      <div className={styles.header}>
        <span className={styles.tag} aria-hidden="true">// 02 projekt</span>
        <h2 id="projects-heading" className={styles.heading}>Utvalda projekt</h2>
      </div>

      <ul className={styles.grid} role="list">
        {projects.map((p) => (
          <li key={p.number} className={styles.card}>
            <article>
              <header className={styles.cardHeader}>
                <span className={styles.number} aria-hidden="true">{p.number}</span>
                <span className={`${styles.statusBadge} ${p.status === 'Live' ? styles.live : styles.github}`}>
                  {p.status}
                </span>
              </header>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.description}>{p.description}</p>
              <footer className={styles.cardFooter}>
                <ul className={styles.techList} role="list" aria-label="Tekniker använda">
                  {p.tech.map((t) => (
                    <li key={t} className={styles.techTag}>{t}</li>
                  ))}
                </ul>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={styles.arrow} aria-label={`Visa ${p.title}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H7M17 7v10"/>
                  </svg>
                </a>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
