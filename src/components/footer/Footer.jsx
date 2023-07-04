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
          paddingBottom: {xs: '40px', lg: '80px'},
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: {xs: '30px', lg: 0}
          
        }}
      >
        <Stack sx={{flexDirection: {xs: 'column', md: 'row'}, gap: '50px'}}>
          <Typography color="#fff" sx={{fontSize: '16px'}}>
            Call me: <br />
            0982327807
          </Typography>
          <Typography color="#fff" sx={{fontSize: '16px'}}>
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
