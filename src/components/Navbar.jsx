import React from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div>
        <div className="nav-title">
          {/* <img width='40px' style={{borderRadius:'50%',padding:'2px'}} src={require('../assets/werg-logo.png')} alt="" /> */}
          <i class="fa-solid fa-cloud-showers-water"></i>
            Water Extremes Research Group
        </div>
      </div>
      <div className='nav-link-container'>
        <div><Link className="nav-links" to="/">Home</Link></div>
        <div><Link className="nav-links" to="/research">Research</Link></div>
        <div><Link className="nav-links" to="/team">Team</Link></div>
        <div><Link className="nav-links" to="/publication">Publications</Link></div>
        {/* <div><Link className="nav-links" to="/research-projects">Research Projects</Link></div> */}
        <div><Link className="nav-links" to="/tools">Tools</Link></div>
        <div><Link className="nav-links" to="/gallary">Gallery</Link></div>

      </div>
    </nav>
  )
}
