import React from "react"
import Header from "./component/Header/Header"
import Features from "./component/Features/Features"
import Home from "./component/Home/Home"
import Projects from "./component/Projects/Projects"
import Education from "./component/Education/Education"
import Achievments from "./component/Achievments/Achievments"
import Contact from "./component/Contact/Contact"
import Skills from "./component/Skills/Skills"
import Footer from "./component/Footer/Footer"
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Features />
      <Projects />
      <Education />
      <Achievments />
      <Contact />
      <Footer />
    </>
  )
}

export default App
