export default function Home() {
  return (
    <main className="p-8 space-y-8">
      <h1 className="text-4xl font-bold">Willkommen zu meinem Portfolio</h1>
      <p>Hier finden Sie meine Projekte und wie Sie mich kontaktieren können.</p>
      <a href="/projects" className="text-blue-600 underline">Projekte</a>
      <a href="/contact" className="text-blue-600 underline">Kontakt</a>
    </main>
  )
}
