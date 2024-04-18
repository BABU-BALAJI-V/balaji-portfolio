import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import HeroImg from './components/HeroImg';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import {Helmet} from "react-helmet";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Balaji Portfolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Helmet application" />
      </Helmet>
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