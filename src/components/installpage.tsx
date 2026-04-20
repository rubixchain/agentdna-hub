import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Copy,
  Check,
  ShieldCheck,
  GitBranch,
  Cpu,
  FileCheck,
  ArrowUpRight,
  Terminal,
} from "lucide-react";

function CodeBlock({ code, label }: { code: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl border border-white/8 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
            <span className="w-3 h-3 rounded-full bg-[#f7c948]" />
            <span className="w-3 h-3 rounded-full bg-primary" />
          </div>
          <span className="font-label text-[11px] tracking-widest uppercase text-on-surface-variant opacity-40 ml-2">
            {label}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary transition-all text-xs font-label cursor-pointer"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="px-5 py-4 font-mono text-sm leading-7 text-on-surface">
        {code.split("\n").map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="select-none text-on-surface-variant opacity-20 w-4 text-right shrink-0">
              {i + 1}
            </span>
            <span>
              {line.startsWith("#") ? (
                <span className="text-on-surface-variant opacity-40">{line}</span>
              ) : line.includes("install") || line.includes("add") ? (
                <>
                  <span className="text-primary/70">{line.split(" ")[0]}</span>
                  <span className="text-on-surface"> {line.split(" ").slice(1).join(" ")}</span>
                </>
              ) : (
                <span className="text-on-surface">{line}</span>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Unified Trust Layer",
    description: "A single trust layer for all agents in your multi-agent system.",
  },
  {
    icon: FileCheck,
    title: "Immutable Audit Logging",
    description: "Every agent action and message is logged with tamper-evident trails.",
  },
  {
    icon: GitBranch,
    title: "DID & Signed Traces",
    description: "DID setup, signed conversation traces, and verification handled automatically.",
  },
  {
    icon: Cpu,
    title: "Framework Compatible",
    description: "Works with Google A2A, ADK, CrewAI, and LangGraph out of the box.",
  },
];

const AGENT_ROLES = [
  {
    role: "Host Agent",
    color: "from-primary/20 to-primary/5",
    border: "border-primary/20",
    steps: [
      "Sign and send outgoing host_request",
      "Verify inbound agent_response",
      "Optional NFT execution for audit logging",
    ],
  },
  {
    role: "Remote Agent",
    color: "from-white/5 to-white/[0.02]",
    border: "border-white/8",
    steps: [
      "Verify inbound host_request",
      "Sign outbound agent_response",
    ],
  },
];

export function InstallPage() {
  return (
    <main className="pb-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-10 pb-14 space-y-5"
      >
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-10 bg-gradient-to-r from-primary to-transparent" />
          <span className="font-label text-primary tracking-[0.3em] text-xs font-medium uppercase">
            Get Started
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
          Installation{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-primary/50">
            & Usage
          </span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed opacity-80">
          AgentDNA is a package that helps in auditing and verifiability of agents within a multi-agent communication system.
        </p>
      </motion.section>

      {/* Install commands */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10"
      >
        <h2 className="font-headline text-xl font-bold mb-5 text-on-surface">
          Install the package
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <CodeBlock label="pip" code={`# Install via pip\npip install agent-dna`} />
          <CodeBlock label="uv" code={`# Install via uv\nuv add agent-dna`} />
        </div>
      </motion.section>

      {/* Features grid */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="font-headline text-xl font-bold mb-5 text-on-surface">
          What you get out of the box
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              className="group p-5 rounded-2xl border border-white/5 bg-surface-container/50 hover:border-primary/20 hover:bg-surface-container-high transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-surface-container-high flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-[#00201b] transition-all duration-300">
                <f.icon size={18} />
              </div>
              <h3 className="font-headline font-bold text-on-surface mb-1 text-sm">{f.title}</h3>
              <p className="font-body text-on-surface-variant opacity-60 text-xs leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Agent roles */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-12"
      >
        <h2 className="font-headline text-xl font-bold mb-5 text-on-surface">
          Choose your agent role
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {AGENT_ROLES.map((role) => (
            <div
              key={role.role}
              className={`rounded-2xl border ${role.border} bg-gradient-to-br ${role.color} p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Terminal size={15} className="text-primary" />
                </div>
                <h3 className="font-headline font-bold text-on-surface text-lg">{role.role}</h3>
              </div>
              <ul className="space-y-2.5">
                {role.steps.map((step) => (
                  <li key={step} className="flex items-start gap-2.5 text-sm font-body text-on-surface-variant">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex gap-4"
      >
        <Link
          to="https://github.com/rubixchain/agentdna/tree/main"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-[#00201b] font-label font-bold py-3 px-7 rounded-full text-sm hover:shadow-[0_0_24px_rgba(68,252,221,0.4)] transition-all active:scale-95"
        >
          View on GitHub <ArrowUpRight size={16} />
        </Link>
        <Link
          to="/tutorials"
          className="inline-flex items-center gap-2 border border-white/10 text-on-surface-variant font-label font-bold py-3 px-7 rounded-full text-sm hover:border-primary/40 hover:text-primary transition-all"
        >
          Explore Tutorials
        </Link>
      </motion.div>
    </main>
  );
}
