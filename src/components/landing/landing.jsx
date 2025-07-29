import React from 'react'
import './landing.css'
function Landing() {
  return (
    <div className="instrument-serif-regular">
      <div className="name">
        {/* <video autoPlay loop muted playsInline className="video-bg" src="/your-video.mp4" /> */}
        <h1>Aryan</h1>
        <div style={{display: "flex", flexDirection: "column"}}>
          <p>Full Stack AI Engineer</p>
          <h2 style={{fontSize: "1.4vw", letterSpacing: "0.05vw", margin: "0.5vw 0 0 6vw"}}>AIML | NLP | LLM | Computer Vision | WebDev + DevOps | Cloud </h2>
        </div>
        
      </div>
      <div className="surname">Chauhan®</div>
    </div>
  )
}

export default Landing