import './App.css';
import './components/styles.css';
import Navbar from './components/Navbar';
import ResearchInterests from './components/ResearchInterests';
import Experience from './components/Experience';
import Education from './components/Education';
import Publications from './components/Publications';
import Achievements from './components/Achievements';
import ResearchProjects from './components/ResearchProjects';
import Team from './components/Team';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/home';
import Research from './components/Research';
import Gallery from './components/Gallery';
import Tools from './components/Tools';

function App() {
      return (
            <div className="App">
                  <Router>
                        <Navbar />
                        <Routes>
                              <Route path='/' element={<Home/>} />
                              <Route path='/team' element={<Team />} />
                              <Route path='/publication' element={<Publications/>} />
                              <Route path='/research' element={<Research/>} />
                              <Route path='/gallary' element={<Gallery/>} /> 
                              <Route path='/tools' element={<Tools/>} />
                        </Routes>
                        <Footer/>
                  </Router>

            </div>
      );
}

export default App;
