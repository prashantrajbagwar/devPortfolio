
import './App.css'
import { ThemeProvider } from './common/themeContext'
import Hero from './sections/Hero/Hero'
import Project from './sections/projects/Project'
import Skills from './sections/Skills/skills'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <>
      <ThemeProvider>
        <Hero />
        <Project/>
        <Skills/>
        <Contact/>
        <Footer/>
        
      </ThemeProvider>
      
      
    </>
  )
}

export default App
