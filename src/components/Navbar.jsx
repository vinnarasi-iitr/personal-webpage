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
        {/* <div><Link className="nav-links" to="/tools">Tools</Link></div> */}
        <div className='dropdown'>
          <Link className="nav-links dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tools</Link>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/tools">Go to tools...</Link></li>
            <li><a class="dropdown-item" href="#">WebTool for <br /> Design Flood Estimation</a></li>
            <li><a class="dropdown-item" href="#">Another tool</a></li>
          </ul>
        </div>

        <div><Link className="nav-links" to="/gallary">Gallery</Link></div>

      </div>
    </nav>
  )
}

{/* <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</li> */}
