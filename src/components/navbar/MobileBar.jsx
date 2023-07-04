import React from 'react';
import { Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
const MobileBar = () => {
  return (
    <Stack sx={{display: {xs: 'flex', md: 'none'}}}>
      <MenuIcon/>
    </Stack>
  )
}

export default MobileBar
