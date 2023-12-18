import React from "react";
import { Route, Routes } from "react-router";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import ResumeDis from "./pages/ResumeDis";
import About from "./components/home/About";
import Publications from "./components/home/Publications";
import Testimonial from "./components/home/Testimonial";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";


const theme = {
  mainColors: {
    black: "#000000",
    white: "#f1f1f1",
    dark: "#48C8F0",
  },
};

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experiences />} />
              <Route path="/resume" element={<ResumeDis />} />
              <Route path="/#about" element={<About />} />
        <Route path="/#publications" element={<Publications />} />
              <Route path="/#testimonials" element={<Testimonial />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
