import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <main>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <img className="img-bottom" src="yellow-bottom.svg" alt="yellow-shape" />
    </>
  );
}

export default App;
