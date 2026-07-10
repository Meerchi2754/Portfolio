import Navbar from "./Component/Navbar/navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Projects from "./Component/project";
import Skills from "./Component/skill";
import Contact from "./Component/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
