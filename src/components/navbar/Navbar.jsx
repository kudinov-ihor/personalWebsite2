import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Box, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
    <MenuIcon onClick={() => setDrawerOpen(true)}></MenuIcon>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Link to="/" onClick={() => setDrawerOpen(false)}>Main</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </Box>
      </Drawer>
    </div>
  )
}

export default Navbar
