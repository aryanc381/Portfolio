import { RecoilRoot } from 'recoil'
import './App.css'
import About from './components/about/about'
import Education from './components/education/education'
import Landing from './components/landing/landing'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'
import TechStack from './components/techstack/techstack'
import Experience from './components/experience/experience'
import Referral from './components/referral/referral'
import Footer from './components/footer/footer'


function App() {

  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Education />
      <RecoilRoot>
        <Projects />
      </RecoilRoot>
      <TechStack />
      <Experience />
      {/* <Referral /> */}
      <Footer />

      
    
    </>
  )
}

export default App
