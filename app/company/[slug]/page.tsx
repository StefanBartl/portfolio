import { notFound } from 'next/navigation'
import companies from '../../../data/companies.json'

type Company = {
  slug: string
  displayName: string
  logoUrl?: string | null
  customIntro?: string
  noIndex?: boolean
}

export async function generateStaticParams() {
  // Pre-generate pages for known slugs (optional).
  return companies.map((c: Company) => ({ slug: c.slug }))
}

export default function CompanyPage({ params }: { params: { slug: string } }) {
  const slug = params.slug
  const company = (companies as Company[]).find(c => c.slug === slug)
  if (!company) return notFound()

  return (
    <>
      {company.noIndex && <meta name="robots" content="noindex" />}
      <main className="p-8 space-y-8">
        <header className="flex items-center gap-4">
          {company.logoUrl && <img src={company.logoUrl} alt={`${company.displayName} logo`} className="h-16" />}
          <h1 className="text-3xl font-bold">Sehr geehrte Damen und Herren bei {company.displayName},</h1>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-2">Warum ich mich bei Ihrem Unternehmen bewerbe</h2>
          <p>{company.customIntro}</p>
        </section>
        <nav className="flex gap-4">
          <a className="text-blue-600 underline" href="/projects">Meine Projekte</a>
          <a className="text-blue-600 underline" href="/contact">Kontakt</a>
        </nav>
      </main>
    </>
  )
}
