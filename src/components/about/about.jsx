import React from 'react'
import './about.css'
function About() {
  return (
    <>
        <div className='about'>
            <img src="/about.jpg" alt="" />
            <div className='information'>
                <div className='aboutTitle'>
                    <h1>About Me</h1>
                    <button onClick={() => {
                        window.open("public/ARYAN_CHAUHAN_RESUME_PDF.pdf", "_blank");
                    }}>Resume</button>
                </div>
                <p>A Full Stack AI Engineer with hands-on experience in building complete applications from frontend interfaces to backend systems and cloud infrastructure. <br/><br/>My work includes developing agentic AI workflows, fine-tuning large language models (LLMs), and integrating AI into full-stack solutions. <br/><br/>I focus on building reliable, scalable systems that solve real-world problems using a mix of modern web and AI technologies.</p>  
            </div>
            
        </div>
    </>
  )
}

export default About;