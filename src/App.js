import './App.css';
import './components/styles.css';
import Navbar from './components/Navbar';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import ResearchProjects from './components/ResearchProjects';

function App() {
      return (
            <div className="App">
                  <Navbar />
                  <div className='content-container'>
                        <div className='profile-container'>
                              <div className='profile-div'>
                                    <img style={{ borderRadius: '50%' }} width='100%' src={require('./assets/image.png')} />
                              </div>
                              <div>
                                    <p className='title_2'>Vinnarasi Rajendran</p>
                                    <p className='title_3'>
                                          Assistant Professor <br />
                                          Department of Civil Engineering <br />
                                          IIT Roorkee.
                                    </p>
                              </div>
                              <div style={{ textAlign: 'start',paddingLeft:'20%' }}>
                                    <p className='text-2'>
                                          Room No. 228,CED <br />
                                          IITR,Roorkee - 247667 <br />
                                          Uttarakhand ,India <br />
                                          <i class="fa-solid fa-mobile-screen"></i> +91 8826654392 <br />
                                          <i class="fa-solid fa-envelope"></i> vinnarasi@ce.iitr.ac.in <br />
                                          <i class="fa-solid fa-globe"></i> faculty.iitr.ac.in/vinnarasi
                                    </p>
                              </div>

                        </div>
                        <div className='info-container'>
                              <ResearchInterests />

                              <Experience />

                              <Education />

                              <Publications />

                              <ResearchProjects/>

                              <Achievements/>

                        </div>
                  </div>

            </div>
      );
}

export default App;
