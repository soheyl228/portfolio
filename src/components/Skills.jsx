import styles from './Skills.module.css'

const categories = [
  {
    name: 'Frontend',
    skills: ['React', 'JavaScript', 'HTML5', 'CSS', 'Vite'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
  },
  {
    name: 'Verktyg',
    skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
  },
  {
    name: 'Övrigt',
    skills: ['Unity', 'C#', 'Game Design', 'Linux'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-heading">
      <div className={styles.header}>
        <span className={styles.tag} aria-hidden="true">// 03 tekniker</span>
        <h2 id="skills-heading" className={styles.heading}>Skills & tekniker</h2>
      </div>

      <div className={styles.grid}>
        {categories.map((cat) => (
          <article key={cat.name} className={styles.category}>
            <h3 className={styles.catName}>{cat.name}</h3>
            <ul className={styles.skillList} role="list" aria-label={`${cat.name} tekniker`}>
              {cat.skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  <span className={styles.bullet} aria-hidden="true">→</span>
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marquee}>
          {[...categories.flatMap(c => c.skills), ...categories.flatMap(c => c.skills)].map((s, i) => (
            <span key={i} className={styles.marqueeItem}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
