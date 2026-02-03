import { useState } from 'react';

interface Plugin {
  id: string;
  name: string;
  description: string;
  features: string[];
  github: string;
  docs?: string;
  stars: number;
  language: string;
  screenshot?: string;
  tags: string[];
}

const PLUGINS: Plugin[] = [
  {
    id: 'reposcope',
    name: 'reposcope.nvim',
    description: 'GitHub repository browser and manager for Neovim. Clone, browse, and manage repositories without leaving your editor.',
    features: [
      'Browse GitHub repositories directly in Neovim',
      'Clone repositories with a single command',
      'Smart caching for improved performance',
      'Integration with Telescope for fuzzy finding',
      'Full repository statistics and metadata',
    ],
    github: 'https://github.com/yourusername/reposcope.nvim',
    docs: 'https://github.com/yourusername/reposcope.nvim#readme',
    stars: 120,
    language: 'Lua',
    tags: ['git', 'github', 'productivity'],
  },
  {
    id: 'live-grep-memory',
    name: 'live-grep-memory.nvim',
    description: 'Intelligent grep tool with search history, favorites, and smart caching.',
    features: [
      'Search history with timestamps',
      'Favorite searches for quick access',
      'Smart caching system',
      'Integration with multiple search backends',
      'Customizable UI layouts',
    ],
    github: 'https://github.com/yourusername/live-grep-memory.nvim',
    stars: 85,
    language: 'Lua',
    tags: ['search', 'productivity', 'telescope'],
  },
  {
    id: 'statusline',
    name: 'statusline.nvim',
    description: 'Minimal, fast, and customizable statusline for Neovim.',
    features: [
      'Zero dependencies',
      'Extremely fast and lightweight',
      'Fully customizable components',
      'Git integration',
      'LSP diagnostics display',
    ],
    github: 'https://github.com/yourusername/statusline.nvim',
    stars: 230,
    language: 'Lua',
    tags: ['ui', 'statusline', 'minimal'],
  },
];

export default function PluginShowcase() {
  const [activePlugin, setActivePlugin] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const filteredPlugins = PLUGINS.filter(plugin => {
    if (filter === 'all') return true;
    return plugin.tags.includes(filter);
  });

  const allTags = Array.from(new Set(PLUGINS.flatMap(p => p.tags)));

  return (
    <div className="max-w-7xl mx-auto">
      {/* Terminal-style header */}
      <div className="terminal-window mb-8">
        <div className="terminal-header">
          <div className="terminal-dot bg-red-500"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-2 text-xs text-terminal-text/60">
            ~/.config/nvim/plugins/
          </span>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 text-sm mb-4">
            <span className="text-terminal-accent">$</span>
            <span className="text-terminal-text">ls plugins/ | grep</span>
            <input
              type="text"
              placeholder="filter by tag..."
              value={filter === 'all' ? '' : filter}
              onChange={(e) => setFilter(e.target.value || 'all')}
              className="flex-1 bg-transparent border-b border-terminal-accent/30 px-2 py-1 outline-none text-terminal-text focus:border-terminal-accent"
            />
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 text-xs rounded border transition-colors ${
                filter === 'all'
                  ? 'border-terminal-accent bg-terminal-accent/20 text-terminal-accent'
                  : 'border-terminal-accent/30 text-terminal-text/60 hover:border-terminal-accent/50'
              }`}
            >
              all
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1 text-xs rounded border transition-colors ${
                  filter === tag
                    ? 'border-terminal-accent bg-terminal-accent/20 text-terminal-accent'
                    : 'border-terminal-accent/30 text-terminal-text/60 hover:border-terminal-accent/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Split pane layout (Neovim style) */}
      <div className="grid lg:grid-cols-5 gap-6">
        {/* Plugin List (left pane) */}
        <div className="lg:col-span-2">
          <div className="terminal-window">
            <div className="terminal-content space-y-2 max-h-[600px] overflow-y-auto">
              {filteredPlugins.map((plugin, idx) => (
                <button
                  key={plugin.id}
                  onClick={() => setActivePlugin(plugin.id)}
                  className={`w-full text-left p-3 rounded transition-colors border ${
                    activePlugin === plugin.id
                      ? 'border-terminal-accent bg-terminal-accent/10'
                      : 'border-transparent hover:border-terminal-accent/30 hover:bg-terminal-accent/5'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-terminal-accent flex-shrink-0 text-sm">
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-terminal-text font-mono font-bold truncate">
                          {plugin.name}
                        </span>
                        <span className="text-terminal-accent text-xs flex-shrink-0">
                          ⭐ {plugin.stars}
                        </span>
                      </div>
                      <p className="text-xs text-terminal-text/60 line-clamp-2">
                        {plugin.description}
                      </p>
                      <div className="flex gap-1 mt-2">
                        {plugin.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-0.5 bg-terminal-accent/10 text-terminal-accent rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Plugin Details (right pane) */}
        <div className="lg:col-span-3">
          {activePlugin ? (
            <PluginDetails plugin={PLUGINS.find(p => p.id === activePlugin)!} />
          ) : (
            <div className="terminal-window h-[600px] flex items-center justify-center">
              <div className="text-center text-terminal-text/40">
                <div className="text-6xl mb-4">←</div>
                <div>Select a plugin to view details</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Vim-style help */}
      <div className="mt-4 text-xs text-terminal-text/40 font-mono text-center">
        <span className="text-terminal-accent">j/k</span> navigate •
        <span className="text-terminal-accent"> Enter</span> select •
        <span className="text-terminal-accent"> /</span> filter
      </div>
    </div>
  );
}

function PluginDetails({ plugin }: { plugin: Plugin }) {
  return (
    <div className="terminal-window animate-fade-in">
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-2 text-xs text-terminal-text/60">
          {plugin.name}
        </span>
      </div>

      <div className="p-6 space-y-6 max-h-[600px] overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-terminal-accent">
              {plugin.name}
            </h3>
            <span className="px-2 py-1 text-xs bg-terminal-accent/10 text-terminal-accent rounded border border-terminal-accent/30">
              {plugin.language}
            </span>
            <span className="text-terminal-accent">⭐ {plugin.stars}</span>
          </div>
          <p className="text-terminal-text/80">{plugin.description}</p>
        </div>

        {/* Features */}
        <div>
          <h4 className="text-terminal-accent font-bold mb-3 flex items-center gap-2">
            <span className="text-lg">▸</span>
            Features
          </h4>
          <ul className="space-y-2">
            {plugin.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-terminal-text/70">
                <span className="text-terminal-accent flex-shrink-0">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Screenshot placeholder */}
        {plugin.screenshot && (
          <div>
            <h4 className="text-terminal-accent font-bold mb-3 flex items-center gap-2">
              <span className="text-lg">▸</span>
              Preview
            </h4>
            <div className="border border-terminal-accent/30 rounded p-2 bg-terminal-bg">
              <img
                src={plugin.screenshot}
                alt={`${plugin.name} screenshot`}
                className="w-full rounded"
              />
            </div>
          </div>
        )}

        {/* Installation */}
        <div>
          <h4 className="text-terminal-accent font-bold mb-3 flex items-center gap-2">
            <span className="text-lg">▸</span>
            Installation
          </h4>
          <div className="bg-terminal-bg p-4 rounded border border-terminal-accent/30 font-mono text-sm">
            <div className="text-terminal-text/60">-- lazy.nvim</div>
            <div className="text-terminal-text">
              <span className="text-terminal-accent">return</span> &#123;
            </div>
            <div className="text-terminal-text pl-4">
              <span className="text-terminal-warning">"yourusername/{plugin.name}"</span>,
            </div>
            <div className="text-terminal-text pl-4">
              <span className="text-terminal-accent">config</span> = <span className="text-terminal-accent">function</span>()
            </div>
            <div className="text-terminal-text pl-8">
              <span className="text-terminal-accent">require</span>(<span className="text-terminal-warning">"{plugin.id}"</span>).setup()
            </div>
            <div className="text-terminal-text pl-4">
              <span className="text-terminal-accent">end</span>
            </div>
            <div className="text-terminal-text">&#125;</div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-terminal-accent/20">
          <a
            href={plugin.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          {plugin.docs && (
            <a
              href={plugin.docs}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Docs
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
