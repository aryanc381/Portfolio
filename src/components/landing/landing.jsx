import React from 'react'
import './landing.css'
function Landing() {
  return (
    <div className="instrument-serif-regular" style={{minHeight: "100vh", position: "relative"}}>
      <BGVideo />
      <div className="nameLand">
        {/* <video autoPlay loop muted playsInline className="video-bg" src="/your-video.mp4" /> */}
        <h1>Aryan</h1>
        <div style={{display: "flex", flexDirection: "column"}}>
          {/* <p>Full Stack AI Engineer</p> */}
          {/* <h2 style={{fontSize: "1.4vw", letterSpacing: "0vw", margin: "0.5vw 0 0 7vw", fontWeight: "400"}}>AIML • NLP • LLM • Computer Vision • Web Development • Cloud </h2> */}
        </div>
      </div>
      <div className="surname">Chauhan®</div>
    </div>
  )
}

function BGVideo() {
  return (
    <div>
      <video autoPlay muted loop style={{ width: '90.9%', height: '100%', objectFit: 'cover', position: 'absolute', marginTop: "-2vw", transform: "scale(1.2)", opacity: "1"}}>
        <source src="/bgVid2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "30vh", // control how much fade
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #090909 100%)"
      }} />
      </video>
    </div>
  );
}

export default Landing;