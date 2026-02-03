import { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string | JSX.Element;
  timestamp: Date;
}

const COMMANDS = {
  help: `Available commands:
  whoami       - Display information about me
  skills       - Show technical skills
  projects     - List my projects
  contact      - Get contact information
  clear        - Clear terminal
  ls           - List directory contents
  cat bio.txt  - Read biography
  neofetch     - System information`,

  whoami: `Full-Stack Developer & Neovim Enthusiast
Location: Vienna, Austria
Focus: Modern Web Development, Performance Optimization
Passion: Open Source, Developer Tools`,

  'cat bio.txt': `Hi! I'm a passionate developer who loves building
efficient, elegant solutions. When I'm not coding,
you'll find me tweaking my Neovim config or
contributing to open source projects.

I believe in writing clean, maintainable code
and creating tools that make developers' lives easier.`,

  ls: `drwxr-xr-x  projects/
drwxr-xr-x  skills/
-rw-r--r--  bio.txt
-rw-r--r--  contact.txt
-rwxr-xr-x  run-game.sh`,

  contact: `📧 Email: your@email.com
🐙 GitHub: github.com/yourusername
💼 LinkedIn: linkedin.com/in/yourprofile
📍 Location: Vienna, Austria`,

  projects: `Loading projects...`,

  skills: `Loading skills visualization...`,
};

const ASCII_ART = `
    ╔═══════════════════════════════╗
    ║   DEVELOPER TERMINAL v1.0     ║
    ║   Type 'help' for commands    ║
    ╚═══════════════════════════════╝
`;

export default function Terminal() {
  const [history, setHistory] = useState<Command[]>([
    {
      input: 'welcome',
      output: ASCII_ART,
      timestamp: new Date(),
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    if (!trimmedCmd) return;

    // Add to command history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let output: string | JSX.Element = '';

    if (trimmedCmd === 'clear') {
      setHistory([]);
      setCurrentInput('');
      return;
    }

    if (trimmedCmd === 'skills') {
      output = <SkillsOutput />;
    } else if (trimmedCmd === 'projects') {
      output = <ProjectsOutput />;
    } else if (trimmedCmd === 'neofetch') {
      output = <NeofetchOutput />;
    } else if (COMMANDS[trimmedCmd as keyof typeof COMMANDS]) {
      output = COMMANDS[trimmedCmd as keyof typeof COMMANDS];
    } else if (trimmedCmd.startsWith('cat ')) {
      output = `cat: ${trimmedCmd.slice(4)}: No such file or directory`;
    } else {
      output = `Command not found: ${trimmedCmd}. Type 'help' for available commands.`;
    }

    setHistory(prev => [
      ...prev,
      {
        input: cmd,
        output,
        timestamp: new Date(),
      }
    ]);

    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle arrow up/down for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Enter') {
      handleCommand(currentInput);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete
      const matches = Object.keys(COMMANDS).filter(cmd =>
        cmd.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  return (
    <div className="terminal-window max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="terminal-header">
        <div className="terminal-dot bg-red-500"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-2 text-xs text-terminal-text/60">
          bash - portfolio@terminal
        </span>
      </div>

      {/* Terminal Content */}
      <div
        ref={terminalRef}
        className="terminal-content h-[500px] overflow-y-auto"
        onClick={() => inputRef.current?.focus()}
      >
        {/* Command History */}
        {history.map((cmd, idx) => (
          <div key={idx} className="mb-4">
            {cmd.input !== 'welcome' && (
              <div className="terminal-line">
                <span className="terminal-prompt">$</span>
                <span className="text-terminal-text">{cmd.input}</span>
              </div>
            )}
            <div className="terminal-output whitespace-pre-wrap pl-4">
              {cmd.output}
            </div>
          </div>
        ))}

        {/* Current Input */}
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-terminal-text caret-terminal-accent"
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}

// Skills visualization component
function SkillsOutput() {
  const skills = [
    { name: 'Lua/Neovim', level: 95 },
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Astro', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'C++/WASM', level: 70 },
    { name: 'Tailwind CSS', level: 90 },
  ];

  return (
    <div className="space-y-3 animate-fade-in">
      <div className="text-terminal-accent mb-4">╔════════════════════════════════╗</div>
      <div className="text-terminal-accent mb-2">║ SYSTEM DIAGNOSTICS             ║</div>
      <div className="text-terminal-accent mb-4">╠════════════════════════════════╣</div>

      {skills.map((skill, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <span className="text-terminal-accent">║</span>
          <span className="w-32 text-terminal-text">{skill.name}</span>
          <div className="flex-1 h-4 bg-terminal-accent/20 rounded">
            <div
              className="h-full bg-terminal-accent rounded transition-all duration-1000"
              style={{
                width: `${skill.level}%`,
                animation: 'slideIn 1s ease-out'
              }}
            />
          </div>
          <span className="text-terminal-accent w-12 text-right">{skill.level}%</span>
          <span className="text-terminal-accent">║</span>
        </div>
      ))}

      <div className="text-terminal-accent mt-4">╚════════════════════════════════╝</div>
    </div>
  );
}

// Projects list component
function ProjectsOutput() {
  const projects = [
    { name: 'reposcope.nvim', desc: 'GitHub repository viewer for Neovim', stars: '⭐ 120' },
    { name: 'live-grep-memory.nvim', desc: 'Smart grep with history', stars: '⭐ 85' },
    { name: 'statusline.nvim', desc: 'Minimal statusline plugin', stars: '⭐ 230' },
    { name: 'fighting-game-wasm', desc: 'Browser game built with C++/WASM', stars: '⭐ 45' },
  ];

  return (
    <div className="space-y-2 animate-fade-in">
      {projects.map((project, idx) => (
        <div key={idx} className="border-l-2 border-terminal-accent/50 pl-3 py-2">
          <div className="flex items-center gap-3">
            <span className="text-terminal-accent font-bold">{project.name}</span>
            <span className="text-terminal-text/60 text-sm">{project.stars}</span>
          </div>
          <div className="text-terminal-text/70 text-sm mt-1">{project.desc}</div>
        </div>
      ))}
    </div>
  );
}

// Neofetch-style system info
function NeofetchOutput() {
  return (
    <div className="flex gap-8 animate-fade-in">
      <div className="text-terminal-accent text-4xl font-bold whitespace-pre">
{`    ___
   (.. |
   (<> |
  / __  \\
 ( /  \\ /|
_/\\ __)/_)
\\/-____\\/`}
      </div>

      <div className="space-y-1 text-sm flex-1">
        <div><span className="text-terminal-accent">User:</span> developer@portfolio</div>
        <div><span className="text-terminal-accent">OS:</span> Neovim/Linux</div>
        <div><span className="text-terminal-accent">Shell:</span> bash 5.2.15</div>
        <div><span className="text-terminal-accent">Languages:</span> JS, TS, Lua, C++</div>
        <div><span className="text-terminal-accent">Frameworks:</span> React, Astro, Node.js</div>
        <div><span className="text-terminal-accent">Tools:</span> Neovim, Git, Docker</div>
        <div><span className="text-terminal-accent">Uptime:</span> ∞ (coffee-driven)</div>
      </div>
    </div>
  );
}
