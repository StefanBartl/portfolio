export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-xl">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>
    </article>
  )
}
