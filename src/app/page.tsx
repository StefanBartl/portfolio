import styles from "@/styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <h1>Willkommen auf meiner Portfolio-Website!</h1>
          <p>Hier findest du meine Projekte, Zertifikate und Kontaktinformationen.</p>
        </div>
      </main>
      <footer className={styles.footer}>Hier steht der Footer.</footer>
    </div>
  );
}
