import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import styles from '@/styles/index.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hier fügen wir ein Padding-Top von 50px hinzu */}
      <Box className={styles.main} sx={{ pt: '50px', px: { xs: 2, md: 4 } }}>
        <Grid container spacing={4} alignItems="center">
          {/* Linke Spalte: Bild */}  
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/graphics/images/@me/sb_bank.jpg"
                alt="Stefan"
                width={500}
                height={500}
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </Box>
          </Grid>
          {/* Rechte Spalte: Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h3" component="h1">
                Willkommen, mein Name ist Stefan.
              </Typography>
              <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
                Ich entwickle Web-Applikationen.
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2, fontStyle: 'italic' }}>
                PURE ENTHUSIASMUS
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Auf dieser Portfolio-Seite gebe ich einen Einblick in abgeschlossene Webentwicklungsprojekte. Als ich 2020 mit dem Programmieren anfing, konnte ich mir nicht vorstellen, wie viel Spaß und Leidenschaft dieses breite Feld in mir auslösen würde. Immer auf der Suche nach neuen Herausforderungen und deren Lösung, ist Webentwicklung für mich Technikbegeisterung getragen von Ehrgeiz und Leidenschaft.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                SCSS, React-Frameworks, Typescript &amp; Cyber-Security
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Aktuell liegt mein Fokus auf CSS/Sass, JavaScript/TypeScript &amp; Cyber-Security, spezialisiert auf Fullstack-Webentwicklung. Daher verweise ich hier vordergründig auf Projekte, die sich mit diesen drei 'Werkzeugen' beschäftigen. Teils rein spielerisch, teils mit praktischem Nutzen. Die Sprache Rust und Cyber-Security sind meine nächsten großen Themenbereiche.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                WITH LOVE FOR SCIENCE, TECHNOLOGY AND PEACE!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <footer className={styles.footer}>Hier steht der Footer.</footer>
    </div>
  );
}
