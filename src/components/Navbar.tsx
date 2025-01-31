'use client'

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stefan Bartl
        </Typography>

        {/* Navigationslinks */}
        <Box>
          <Button color="inherit">
            <Link href="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link href="/projects">Projekte</Link>
          </Button>
          <Button color="inherit">
            <Link href="/certificates">Zertifikate</Link>
          </Button>
          <Button color="inherit">
            <Link href="/about">Über mich</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
