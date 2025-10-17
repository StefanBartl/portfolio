import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    { title: 'Projekt A', description: 'Kurzbeschreibung A' },
    { title: 'Projekt B', description: 'Kurzbeschreibung B' },
    { title: 'Projekt C', description: 'Kurzbeschreibung C' },
  ]

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Meine Projekte</h1>
      <div className="grid grid-cols-12 gap-6">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </main>
  )
}
