import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Drawer, Stack, Typography, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoPhoto from "../../assets/img/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import MobileBar from "./MobileBar";
const Navbar = () => {
  return (
    <Container>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "45px",
        }}
      >
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
          <Typography
            sx={{ fontSize: { lg: "30px", md: "25px" }, color: "#fff" }}
          >
            Kudinov Ihor
          </Typography>
        </Link>

        <Stack sx={{ flexDirection: "row", gap: {lg: "70px", md: '30px'}, display: {xs: 'none', md: 'flex'} }}>
          <Link
            to="/about"
            style={{
              fontSize: { lg: "30px", md: "25px" },
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Typography sx={{fontSize: { lg: "30px", md: "25px", },}}>About</Typography>
          </Link>
          <Link
            to="/projects"
            style={{
              fontSize: { lg: "30px", md: "25px" },
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Typography sx={{fontSize: { lg: "30px", md: "25px" },}}>Projects</Typography>
          </Link>
          <Link
            to="/contact"
            style={{
              fontSize: { lg: "30px", md: "25px" },
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Typography sx={{fontSize: { lg: "30px", md: "25px" },}}>Contacts</Typography>
          </Link>
        </Stack>
        <Stack sx={{ flexDirection: "row", gap: "20px", display:{sm: 'flex', xs: 'none'} }}>
          <GitHubIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
          <LinkedInIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
          <TelegramIcon sx={{ color: "#fff", fontSize: "1.5rem" }} />
        </Stack>
        <MobileBar/>
      </Stack>
    </Container>
  );
};

export default Navbar;
