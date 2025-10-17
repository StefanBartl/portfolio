import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import companies from '../../data/companies.json'

type CompanyData = {
  slug: string
  displayName: string
  logoUrl?: string
  customIntro?: string
  noIndex?: boolean
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = companies.map(c => ({ params: { slug: c.slug } }))
  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.slug as string
  const company = companies.find(c => c.slug === slug) ?? null

  if (!company) return { notFound: true }

  return {
    props: { company },
    revalidate: 60 * 60 * 24, // 24h ISR
  }
}

export default function CompanyPage({ company }: { company: CompanyData }) {
  return (
    <>
      <Head>
        <title>{company.displayName} — persönliche Bewerbung</title>
        {company.noIndex && <meta name="robots" content="noindex" />}
      </Head>
      <main className="p-8 space-y-8">
        <header className="flex items-center gap-4">
          {company.logoUrl && <img src={company.logoUrl} alt={`${company.displayName} logo`} className="h-16" />}
          <h1 className="text-3xl font-bold">Sehr geehrte Damen und Herren bei {company.displayName},</h1>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Warum ich mich bei Ihrem Unternehmen bewerbe</h2>
          <p>{company.customIntro}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Meine Projekte</h2>
          <a className="text-blue-600 underline" href="/projects">Zu meinen Projekten</a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Kontakt</h2>
          <a className="text-blue-600 underline" href="/contact">Kontaktieren Sie mich</a>
        </section>
      </main>
    </>
  )
}
