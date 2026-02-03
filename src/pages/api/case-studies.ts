import type { APIRoute } from 'astro';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  technologies: string[];
  description: string;
  impact: string[];
  confidential: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'E-Commerce Platform Modernization',
    client: 'Confidential Retail Company',
    industry: 'E-Commerce',
    duration: '6 months',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS'],
    description: 'Led the migration of a monolithic e-commerce platform to a modern microservices architecture, improving performance and scalability.',
    impact: [
      '60% reduction in page load times',
      '99.9% uptime achieved',
      'Handled 5x increase in traffic during peak seasons',
      'Reduced infrastructure costs by 40%',
    ],
    confidential: true,
  },
  {
    id: '2',
    title: 'Real-time Analytics Dashboard',
    client: 'FinTech Startup',
    industry: 'Financial Services',
    duration: '4 months',
    technologies: ['TypeScript', 'WebSockets', 'D3.js', 'Kafka', 'TimescaleDB'],
    description: 'Built a real-time analytics dashboard for monitoring financial transactions and detecting anomalies.',
    impact: [
      'Processing 10,000+ events per second',
      'Sub-second data visualization updates',
      '95% accuracy in anomaly detection',
      'Saved $2M annually in fraud prevention',
    ],
    confidential: false,
  },
  {
    id: '3',
    title: 'Developer Tools Ecosystem',
    client: 'Open Source Community',
    industry: 'Developer Tools',
    duration: 'Ongoing',
    technologies: ['Lua', 'Neovim', 'LSP', 'TreeSitter'],
    description: 'Created and maintain multiple Neovim plugins used by thousands of developers worldwide.',
    impact: [
      '500+ GitHub stars across projects',
      '50,000+ downloads',
      'Active community of 100+ contributors',
      'Featured in multiple developer newsletters',
    ],
    confidential: false,
  },
];

function renderCaseStudies(studies: CaseStudy[]): string {
  return `
    <div class="space-y-6">
      ${studies.map(study => `
        <div class="border border-terminal-accent/30 rounded-lg p-6 hover:border-terminal-accent/50 transition-colors">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-bold text-terminal-accent text-xl mb-1">${study.title}</h3>
              <p class="text-sm text-terminal-text/60">
                ${study.client} • ${study.industry} • ${study.duration}
              </p>
            </div>
            ${study.confidential ? `
              <span class="text-xs px-3 py-1 bg-terminal-accent/10 text-terminal-accent rounded border border-terminal-accent/30">
                🔒 NDA
              </span>
            ` : ''}
          </div>

          <p class="text-terminal-text/80 mb-4">${study.description}</p>

          <div class="mb-4">
            <h4 class="text-sm font-bold text-terminal-accent mb-2">Technologies Used:</h4>
            <div class="flex flex-wrap gap-2">
              ${study.technologies.map(tech => `
                <span class="text-xs px-2 py-1 bg-terminal-accent/10 text-terminal-accent rounded border border-terminal-accent/20">
                  ${tech}
                </span>
              `).join('')}
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-terminal-accent mb-2">Impact & Results:</h4>
            <ul class="space-y-1">
              ${study.impact.map(item => `
                <li class="text-sm text-terminal-text/70 flex items-start gap-2">
                  <span class="text-terminal-accent flex-shrink-0">▸</span>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

export const GET: APIRoute = async () => {
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 600));

  const html = renderCaseStudies(caseStudies);

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
};
