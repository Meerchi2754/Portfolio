import Navbar from "./Component/Navbar/navbar";
import About from "./Component/About/About";
import Projects from "./Component/project";
import Skills from "./Component/skill";
import Contact from "./Component/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
