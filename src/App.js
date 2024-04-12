import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import HeroImg from './components/HeroImg';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <AppBar/>
      <HeroImg/>
      <About/>
      <Skills/>
      <Resume/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;