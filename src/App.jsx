import './App.css'
import About from './components/about/about'
import Education from './components/education/education'
import Landing from './components/landing/landing'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'

function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Projects />
    </>
  )
}

export default App
