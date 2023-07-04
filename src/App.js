import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Extra-small devices (portrait phones)
      sm: 576, // Small devices (landscape phones)
      md: 768, // Medium devices (tablets)
      lg: 992, // Large devices (desktops)
      xl: 1200, // Extra-large devices (large desktops)
      xxl: 1400, // Custom breakpoint
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
        <Router>
          <Navbar />
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
