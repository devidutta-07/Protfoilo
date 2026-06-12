'use client'

import { motion } from 'framer-motion'
import styles from '@/styles/ProjectCard.module.css'

export default function ProjectCard({ project, index }) {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
      },
    },
  }

  return (
    <motion.div className={styles.card} variants={variants}>
      <div className={styles.header}>
        <h3>{project.title}</h3>
        <p className={styles.subtitle}>{project.subtitle}</p>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.features}>
        <h4>Key Features:</h4>
        <ul>
          {project.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className={styles.techStack}>
        <h4>Tech Stack:</h4>
        <div className={styles.tags}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
        )}
        {project.link && project.link !== '#' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
