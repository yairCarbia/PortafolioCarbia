
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar";
import { Banner } from "./components/Banner/Banner";
import { Skills } from "./components/Skills/Skills";
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { Contact } from "./components/Contacto/Contact";
import { Footer } from "./components/Footer/Footer";
import { Projects } from "../src/components/Proyecto/Projects"
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <ProjectCard />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
