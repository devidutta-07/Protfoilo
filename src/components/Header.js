'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from '@/styles/Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span>DP</span>
        </Link>

        <nav className={`${styles.nav} ${isOpen ? styles.active : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <a href="mailto:deviduttaparida07@gmail.com" className={styles.cta}>
            Get in Touch
          </a>
        </nav>

        <button className={styles.menuBtn} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
