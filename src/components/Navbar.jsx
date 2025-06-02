import React from 'react'
import './styles.css'

export default function Navbar() {
  return (
      <nav className='navbar'>
        <div>
            <div className="nav-title">Vinnarasi Rajendran</div>
        </div>
        <div className='nav-link-container'>
            <div><a className="nav-links" href="#research-interests">Research Interest</a></div>
            <div><a className="nav-links" href="#education">Education</a></div>
            <div><a className="nav-links" href="#experience">Experience</a></div>
            <div><a className="nav-links" href="#publications">Publications</a></div>
            <div><a className="nav-links" href="#"></a></div>
        </div>
      </nav>
  )
}
