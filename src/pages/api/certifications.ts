import type { APIRoute } from 'astro';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credential?: string;
  verify?: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Professional level certification for designing distributed systems on AWS',
    credential: 'ABC-123-XYZ',
    verify: 'https://aws.amazon.com/verify/ABC-123-XYZ',
  },
  {
    id: '2',
    title: 'Google Cloud Professional',
    issuer: 'Google Cloud',
    date: '2023',
    description: 'Advanced cloud architecture and deployment strategies',
    credential: 'GCP-456-ABC',
    verify: 'https://google.com/verify/GCP-456-ABC',
  },
  {
    id: '3',
    title: 'Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023',
    description: 'Certification for Kubernetes cluster administration',
    credential: 'CKA-789-DEF',
    verify: 'https://cncf.io/verify/CKA-789-DEF',
  },
];

function renderCertifications(certs: Certification[]): string {
  return `
    <div class="space-y-4">
      ${certs.map(cert => `
        <div class="border border-terminal-accent/30 rounded-lg p-4 hover:border-terminal-accent/50 transition-colors">
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="font-bold text-terminal-accent text-lg">${cert.title}</h3>
              <p class="text-sm text-terminal-text/60">${cert.issuer} • ${cert.date}</p>
            </div>
            ${cert.verify ? `
              <a
                href="${cert.verify}"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs px-3 py-1 border border-terminal-accent/50 rounded hover:bg-terminal-accent/10 transition-colors"
              >
                Verify ↗
              </a>
            ` : ''}
          </div>
          <p class="text-sm text-terminal-text/70 mb-2">${cert.description}</p>
          ${cert.credential ? `
            <p class="text-xs text-terminal-text/40 font-mono">
              Credential ID: ${cert.credential}
            </p>
          ` : ''}
        </div>
      `).join('')}
    </div>
  `;
}

export const GET: APIRoute = async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const html = renderCertifications(certifications);

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
};
