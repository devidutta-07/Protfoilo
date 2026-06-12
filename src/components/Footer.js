import Link from 'next/link'
import { portfolioData } from '@/data/portfolio'
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3>Devidutta Parida</h3>
            <p>AI Engineer | GenAI & LLM Systems</p>
          </div>

          <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <a href={`mailto:${portfolioData.email}`}>Email</a>
              </li>
              <li>
                <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Pages</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Devidutta Parida. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
