import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>Dies ist der Inhalt der Seite.</main>
      <footer className={styles.footer}>Hier steht der Footer.</footer>
    </div>
  );
}
