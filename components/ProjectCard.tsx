export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl">{title}</h3>
      <p>{description}</p>
    </div>
  )
}

