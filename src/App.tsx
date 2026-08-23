import { useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import Skills from "./Skills";
import { initTheme } from "./theme";

export default function App() {
  useEffect(() => {
    initTheme();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
