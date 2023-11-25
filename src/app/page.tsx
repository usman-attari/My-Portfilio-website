import Image from 'next/image'
import Hero from './Component/hero'
import Contact from './Component/contact'
import Project from './Component/project'
import About from './Component/about'
import Skill from './Component/skill'

export default function Home() {
  return (
  <div>
   <Hero/>
   <About/>
   <Skill/>
   <Project/>
   <Contact/>
   

 
  </div>

  )
}
