import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Stack, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoPhoto from "../../assets/img/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
const Navbar = () => {
  return (
    <Container>
      <Stack sx={{ flexDirection: "row" , alignItems: 'center', justifyContent: 'space-between', paddingTop: '45px'}}>
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <img src={LogoPhoto} alt="LogoPhoto" />{" "}
          <Typography sx={{ fontSize: "30px", color: "#fff" }}>
            Kudinov Ihor
          </Typography>
        </Link>

        <Stack sx={{flexDirection: 'row', gap: '70px'}}>
          <Link to="/about" style={{fontSize: '30px', color: '#fff', textDecoration: 'none'}}>About</Link>
          <Link to="/projects" style={{fontSize: '30px', color: '#fff', textDecoration: 'none'}}>Projects</Link>
          <Link to="/contact" style={{fontSize: '30px', color: '#fff', textDecoration: 'none'}}>Contact</Link>
        </Stack>
        <Stack sx={{flexDirection: 'row', gap: '20px'}}>
          <GitHubIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
          <LinkedInIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
          <TelegramIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Navbar;
