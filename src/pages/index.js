import Head from 'next/head'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Footer from '@/components/Footer'
import { portfolioData } from '@/data/portfolio'

export default function Home() {
  return (
    <>
      <Head>
        <title>{portfolioData.name} - AI Engineer</title>
        <meta name="description" content={portfolioData.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  )
}
