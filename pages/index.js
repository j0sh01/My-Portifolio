import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import EducationTimeline from '../components/School' 
import Carousel from '../components/Carousel' // Import the Carousel component

export default function Home() {
  return (
    <>
      <Head>
        <title>Joshua J Michael - Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my work and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Carousel />
        <EducationTimeline /> 
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  )
}