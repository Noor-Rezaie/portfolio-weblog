import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Navbar from "./layouts/Navbar";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hireme" element={<Hireme />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
        <Route
          path="*"
          element={
            <h1 className="min-h-screen flex items-center justify-center bg-green-100 min-w-[100vw]">
              Sorry the page does not exist.
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
