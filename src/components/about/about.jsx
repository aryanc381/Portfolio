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
                <p>I'm a final-year Full Stack AI Engineer building real, production-ready systems that combine web development with AI/ML.</p> <br/>
                <p>I've handle the full ML dev pipeline, from data preparation to building or fine-tuning models, evaluating beyond metrics, and improving based on real-world feedback to finally deploying them to a serverless or server-based setup.</p><br/>
                <p>I'm currently an open-source contributor at Googe Deepmind where I am solving issues on Gemini.</p><br/>
                <p>I was previously an Instructor and Mentor at RanchoLabs, IITDelhi where I taught students Advance AI from the ground up.</p>  
            </div>
            
        </div>
    </>
  )
}

export default About;