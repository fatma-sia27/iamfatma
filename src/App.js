import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Contact from './components/Contact'
import Education from './components/education'
import Skills from './components/skills'
import Ratings from './components/ratings'
import AboutMe from './components/about'
import Project from './components/project'
import Intro from './components/intro'

function App() {
  return (
    <>
    <Navbar/>
    <Intro/>
    <AboutMe/>
    <Project/>
    <Skills/>
    <Ratings/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;

