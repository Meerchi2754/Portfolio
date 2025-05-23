import React from "react";
import Nav from "../src/Component/navbar.js";
import Project from "../src/Component/project.js";
import Skills from "./Component/skill.js";
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  return (
    <>
      <Nav id="nav" />
      <br />
      <br />
      <br />
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>
      <br />
      <br />
      <br />
      <br />

      <Skills></Skills>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
