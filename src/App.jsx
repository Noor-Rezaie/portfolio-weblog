import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Navbar from "./layouts/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Projects />
      <Hireme />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
