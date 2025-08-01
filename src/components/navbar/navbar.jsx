import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <>
        <div className="nav">
            <div className="logo">
              <img src="/pfp.jpg" alt="" />
                <p>Portfolio</p>
            </div>
            <div className="nav-links">
                <p>About</p>
                <p>Education</p>
                <p>Projects</p>
                <p>Stack</p>
                <p>Experience</p>
                <p>Research</p>
                <p>Contact </p>
            </div>
        </div>
    </>
  )
}

export default Navbar;