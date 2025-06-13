import React from 'react'
import ResearchInterests from './ResearchInterests'
import ResearchProjects from './ResearchProjects'
import Publications from './Publications'
import Experience from './Experience'
import Education from './Education'
import Achievements from './Achievements'
import ScrollToHashElement from './ScollTOHashElement'
import TeamContainer from './TeamContainer'

export default function Team() {
    return (
        <div>
            <ScrollToHashElement />
            {/* <nav>
                <div>
                    <div className="nav-title">Vinnarasi Rajendran</div>
                </div>
                <div className='nav-link-container'>
                    <div><a className="nav-links" href="#research-interests">Research Interest</a></div>
                    <div><a className="nav-links" href="#education">Education</a></div>
                    <div><a className="nav-links" href="#experience">Experience</a></div>
                    <div><a className="nav-links" href="#publications">Publications</a></div>
                    <div><a className="nav-links" href="#research-projects">Research Projects</a></div>
                    <div><a className="nav-links" href="#achievements">Achievements</a></div>

                </div>
            </nav> */}
            <div className='content-container'>
                <div className='profile-container'>
                    <div className='profile-div'>
                        <img style={{ borderRadius: '50%' }} width='100%' src={require('../assets//vinnarasi.png')} />
                    </div>
                    <div>
                        <p className='title_2'>Vinnarasi Rajendran</p>
                        <p className='title_3'>
                            Assistant Professor <br />
                            Department of Civil Engineering <br />
                            IIT Roorkee.
                        </p>
                    </div>
                    <div style={{ textAlign: 'start', paddingLeft: '20%' }}>
                        <p className='text-2'>
                            Room No. 228,CED <br />
                            IITR,Roorkee - 247667 <br />
                            Uttarakhand ,India <br />
                            <i class="fa-solid fa-mobile-screen"></i> +91 8826654392 <br />
                            <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in <br />
                            <i class="fa-solid fa-globe"></i> faculty.iitr.ac.in/vinnarasi
                        </p>
                        <p style={{ textAlign: 'start' }}>

                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: 'black' }}><i class="fa-solid fa-globe"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#0077B5' }}><i class="fa-brands fa-linkedin"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#0077B5' }}><i class="fa-brands fa-google-scholar"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: 'black' }}><i class="fa-brands fa-square-github"></i></a>
                            <a href='#' target='_blank' style={{ fontSize: '30px', marginRight: '20px', fontWeight: '500', color: '#00ccbb' }}><i class="fa-brands fa-researchgate"></i></a>

                        </p>
                    </div>

                </div>
                <div className='info-container'>
                    <ResearchInterests />

                    <Experience />

                    <Education />

                    <Publications />

                    <ResearchProjects />

                    <Achievements />

                </div>
            </div>
            <TeamContainer />
        </div>
    )
}
