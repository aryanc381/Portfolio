import React from 'react'
import './footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className="left">
            <h1>Aryan Chauhan</h1>
            <p>Get work done.</p>
        </div>
        <div className="center">
            <h1>Sections</h1>
            <p onClick={() => window.location.href = "http://localhost:5173/"}>About</p>
            <p onClick={() => window.location.href = "http://localhost:5173/time"}>Education</p>
            <p onClick={() => window.location.href = "http://localhost:5173/dev"}>Projects</p>
            <p onClick={() => window.location.href = "http://localhost:5173/business"}>Stack</p>
            <p onClick={() => window.location.href = "http://localhost:5173/team"}>Research and Experience</p>
        </div>
        <div className='contributors'>
            <h1>Contribute</h1>
            <button onClick={() => window.open("https://linkedin.com/in/aryanc381", "_blank")}>KahaaniAI</button>
            <button onClick={() => window.open("https://www.linkedin.com/in/aditya-yenpure-5089832b1/?originalSubdomain=in", "_blank")}>MIT-Mitra</button>
            <button onClick={() => window.open("https://research.mitwpu.edu.in/researcher/deepa-nath", "_blank")}>Conversational AI</button>
        </div>
        <div className="right">
            <h1>Contact Me</h1>
            <p>We will get back to you in 2-3 business days.</p>
            <div className="contactIcons">
                <div className="containerIcons">
                    <button onClick={() => window.open("https://linkedin.com", "_blank")}><img src="/icons/linkedin.png" alt="linkedin" h/></button>
                    <button onClick={() => window.open("https://github.com", "_blank")}><img src="/icons/github.png" alt="github" /></button>
                    <button onClick={() => window.open("https://x.com", "_blank")}><img src="/icons/X.avif" alt="X" /></button>
                    <button onClick={() => window.open("mailto: work@kahaani-devs.com", "_blank")}><img src="/icons/gmail.webp" alt="Gmail" /></button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer