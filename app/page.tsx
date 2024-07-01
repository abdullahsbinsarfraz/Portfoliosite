"use client"
import About from '@/app/About'
import Contact from '@/app/Contact'
import Main from '@/app/Main'
import Projects from '@/app/Projects'
import Skills from '@/app/Skills'
import Image from 'next/image'
import Footer from './Footer'


export default function Home() {
  return (
    <div>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}
