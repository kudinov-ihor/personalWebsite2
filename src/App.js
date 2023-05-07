import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Drawer, Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <Router>
      <MenuIcon onClick={() => setDrawerOpen(true)}></MenuIcon>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Link to="/">Main</Link>
          <Link to="/about">About</Link>
        </Box>
      </Drawer>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
