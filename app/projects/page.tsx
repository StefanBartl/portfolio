import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  const projects = [
    { id: 'a', title: 'Projekt A', description: 'Kurzbeschreibung A' },
    { id: 'b', title: 'Projekt B', description: 'Kurzbeschreibung B' },
    { id: 'c', title: 'Projekt C', description: 'Kurzbeschreibung C' },
  ]

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Meine Projekte</h1>
      <div className="grid grid-cols-12 gap-6">
        {projects.map(p => (
          <div key={p.id} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <ProjectCard title={p.title} description={p.description} />
          </div>
        ))}
      </div>
    </main>
  )
}
