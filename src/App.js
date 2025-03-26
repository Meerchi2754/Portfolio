import React from "react";
import Spline from '@splinetool/react-spline';
import Nav from "../src/Component/navbar.js"
import Project from "../src/Component/project.js"
import Skills from './Component/skill.js';
import About from './Component/About.js';
import Contact from './Component/Contact.js';

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
  return (<>
    <Nav id="nav"/>
    <ErrorBoundary>
    <Spline scene="https://prod.spline.design/3Yevb2gYy0IQa0RM/scene.splinecode">
      </Spline>
    {/* <Spline scene={myScence}/>  */}
    </ErrorBoundary>
    <br/>
    <br/>
    <br/>

            <section id="projects">
                <Project />
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <Skills></Skills>
            
            <section id="about">
                <About />
            </section>

            <section id="contact">
                <Contact />
            </section>

    </>
  );
}

export default App;
