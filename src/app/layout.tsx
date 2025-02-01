'use client'

import Navbar from '@/components/Navbar';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Material Design Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#FF6600',
    },
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {

  useEffect(() => {
    // Setze CSS-Variablen im :root-Element
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.palette.primary.main);
    root.style.setProperty('--secondary-color', theme.palette.secondary.main);
  }, [theme]);

  return (
    <html lang="de">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}