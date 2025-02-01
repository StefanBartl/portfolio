import Link from 'next/link';
import { Box, Button } from '@mui/material';

export default function NavbarButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        component={Link}
        href="/"
        sx={{
          textDecoration: 'none',          // Keine Unterstreichung
          color: '#fff',                   // Standardfarbe weiß
          transition: 'color 0.3s ease',   // Transition für Farbübergang
          '&:hover': {
            color: '#FF6600',              // Hover-Farbe: secondary (hier als Beispiel #FF6600)
            backgroundColor: 'transparent' // Verhindert unerwünschte Hintergrundveränderungen
          }
        }}
      >
        Home
      </Button>

      <Button
        component={Link}
        href="/projects"
        sx={{
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#FF6600',
            backgroundColor: 'transparent'
          }
        }}
      >
        Projekte
      </Button>

      <Button
        component={Link}
        href="/certificates"
        sx={{
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#FF6600',
            backgroundColor: 'transparent'
          }
        }}
      >
        Zertifikate
      </Button>

      <Button
        component={Link}
        href="/about"
        sx={{
          textDecoration: 'none',
          color: '#fff',
          transition: 'color 0.3s ease',
          '&:hover': {
            color: '#FF6600',
            backgroundColor: 'transparent'
          }
        }}
      >
        Über mich
      </Button>
    </Box>
  );
}
