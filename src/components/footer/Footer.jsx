import React from "react";
import { Stack, Typography, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
const Footer = () => {
  return (
    <Container>
      <Stack
        sx={{
          paddingBottom: "80px",
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Stack sx={{flexDirection: 'row', gap: '130px'}}>
          <Typography color="#fff" sx={{fontSize: '32px'}}>
            Call me: <br />
            0982327807
          </Typography>
          <Typography color="#fff" sx={{fontSize: '32px'}}>
            Email: <br />
            kudinov.igor98@gmail.com
          </Typography>
        </Stack>
        <Stack sx={{flexDirection: 'row', gap: '30px'}}>
          <GitHubIcon sx={{ color: "#fff" , fontSize: '3rem'}} />
          <LinkedInIcon sx={{ color: "#fff", fontSize: '3rem' }} />
          <TelegramIcon sx={{ color: "#fff" , fontSize: '3rem'}} />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
