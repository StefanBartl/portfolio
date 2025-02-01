import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import NavbarButtons from './NavbarButtons';
import Image from 'next/image';
import MyLogo from '../../public/graphics/logos/dev_logo.png';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={MyLogo} alt="My development logo" width={40} height={40} />
        </Box>
        <NavbarButtons />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
