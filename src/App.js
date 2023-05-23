import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/navbar/Navbar";


function App() {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
