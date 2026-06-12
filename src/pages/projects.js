'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import { portfolioData } from '@/data/portfolio'
import styles from '@/styles/Projects.module.css'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <>
      <Head>
        <title>Projects - {portfolioData.name}</title>
        <meta name="description" content="View my AI and LLM projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>My Projects</h1>
            <p>Showcasing my work in AI, LLM systems, and multi-agent architectures</p>
          </motion.div>

          <motion.div
            className={styles.projectsGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>

          <motion.section
            className={styles.moreSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Interested in collaborating?</h2>
            <p>I&apos;m always open to discussing new projects, creative ideas, and opportunities to be part of innovative AI solutions.</p>
            <a href={`mailto:${portfolioData.email}`} className={styles.ctaBtn}>
              Contact Me
            </a>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
