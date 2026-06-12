'use client'

import Head from 'next/head'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { portfolioData } from '@/data/portfolio'
import styles from '@/styles/About.module.css'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        <title>About - {portfolioData.name}</title>
        <meta name="description" content="Learn more about Devidutta Parida" />
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
            <h1>About Me</h1>
            <p className={styles.intro}>{portfolioData.summary}</p>
          </motion.div>

          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Education</motion.h2>
            <div className={styles.grid}>
              {portfolioData.education.map((edu, idx) => (
                <motion.div key={idx} className={styles.card} variants={itemVariants}>
                  <h3>{edu.degree}</h3>
                  <p className={styles.institution}>{edu.institution}</p>
                  <p className={styles.year}>{edu.year}</p>
                  {edu.cgpa && <p className={styles.cgpa}>CGPA: {edu.cgpa}</p>}
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Technical Skills</motion.h2>
            <div className={styles.skillsGrid}>
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <motion.div key={category} className={styles.skillCategory} variants={itemVariants}>
                  <h3>{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                  <div className={styles.skillTags}>
                    {skills.map((skill, idx) => (
                      <span key={idx} className={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Achievements & Leadership</motion.h2>
            <div className={styles.achievementsGrid}>
              {portfolioData.achievements.map((achievement, idx) => (
                <motion.div key={idx} className={styles.achievementCard} variants={itemVariants}>
                  <div className={styles.achievementIcon}>🏆</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Certifications</motion.h2>
            <div className={styles.certsList}>
              {portfolioData.certifications.map((cert, idx) => (
                <motion.div key={idx} className={styles.certItem} variants={itemVariants}>
                  <span className={styles.checkmark}>✓</span>
                  <div>
                    <h3>{cert.title}</h3>
                    <p>{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className={styles.section}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants}>Interests & Languages</motion.h2>
            <div className={styles.interestsGrid}>
              <motion.div className={styles.interestBox} variants={itemVariants}>
                <h3>Languages</h3>
                <p>{portfolioData.languages.join(', ')}</p>
              </motion.div>
              <motion.div className={styles.interestBox} variants={itemVariants}>
                <h3>Hobbies</h3>
                <p>{portfolioData.hobbies.join(', ')}</p>
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            className={styles.ctaSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Let&apos;s Work Together</h2>
            <p>I&apos;m interested in hearing about new opportunities and collaborations in AI and generative systems.</p>
            <a href={`mailto:${portfolioData.email}`} className={styles.ctaBtn}>
              Get in Touch
            </a>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  )
}
