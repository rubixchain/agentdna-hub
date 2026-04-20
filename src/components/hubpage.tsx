import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Terminal,
  LineChart,
  Dna,
  GraduationCap,
  Beaker,
  Blocks,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const CARDS = [
  {
    title: "Installation & Usage",
    description: "Start integrating AgentDNA in minutes with our quickstart guide.",
    label: "Protocol Setup",
    icon: Terminal,
    type: "standard" as const,
    href: "/install",
    external: false,
  },
  {
    title: "AgentDNA Dashboard",
    description: "Manage agents, policies, and contexts from a unified control plane.",
    label: "Live Monitoring",
    icon: LineChart,
    type: "standard" as const,
    href: "https://dashboard.agentdna.io/",
    external: true,
  },
  {
    title: "Agent Registry",
    description: "Browse working samples, starter kits, and pre-built agent blueprints.",
    label: "Blueprints",
    icon: Dna,
    type: "standard" as const,
    href: "/agents",
    external: false,
  },
  {
    title: "Tutorials",
    description: "Step-by-step guides for every use case and integration pattern.",
    label: "Knowledge Base",
    icon: GraduationCap,
    type: "standard" as const,
    href: "/tutorials",
    external: false,
  },
  {
    title: "Join the BETA",
    description: "Apply for early access to the protocol and prototype layers.",
    label: "Limited Nodes",
    icon: Beaker,
    type: "primary" as const,
    href: "https://agentdna.io/beta",
    external: true,
  },
  {
    title: "Integration Guides",
    description: "Connect AgentDNA to your existing stack with MCP and REST APIs.",
    label: "Coming Soon",
    icon: Blocks,
    type: "standard" as const,
    href: "#integrations",
    external: false,
  },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is AgentDNA?",
    a: "AgentDNA is a developer platform for building, deploying, and managing production-ready AI agents. It provides a registry of pre-built agents, an SDK for custom agent development, and a dashboard for monitoring and policy control.",
  },
  {
    q: "How do I get started?",
    a: "Install the AgentDNA SDK via pip (pip install agentdna), grab your API key from the dashboard, and follow the quickstart guide on the Installation page. Most agents are running in under 5 minutes.",
  },
  {
    q: "What agents are available out of the box?",
    a: "The registry includes agents for GitHub (PR reviews, issue triage), Jira (ticket management, sprint planning), Google Sheets (data analysis, automation), Yahoo Finance (market data), and multi-agent orchestration systems — with more added regularly.",
  },
  {
    q: "Is AgentDNA free to use?",
    a: "AgentDNA is currently in open beta. Core SDK features and the public registry are free. Advanced dashboard features and enterprise policies are part of the paid tier. Join the BETA to get early access.",
  },
  {
    q: "How does AgentDNA integrate with my existing tools?",
    a: "AgentDNA uses the Model Context Protocol (MCP) and standard REST APIs to connect with your tools. Agents run locally or in your cloud environment, so your data never leaves your infrastructure unless you explicitly configure it to.",
  },
];

function FAQItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${open ? "border-primary/30" : "border-white/5"} bg-surface-container/50`}>
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left font-label font-semibold text-on-surface hover:text-primary transition-colors cursor-pointer bg-transparent"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <svg
          className={`shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-on-surface-variant text-sm leading-relaxed">{a}</div>
        </div>
      </div>
    </div>
  );
}

function CardWrapper({
  card,
  idx,
}: {
  card: typeof CARDS[number];
  idx: number;
}) {
  const isPrimary = card.type === "primary";

  const inner = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      className={`group relative p-5 rounded-2xl overflow-hidden transition-all duration-500 min-h-[190px] flex flex-col justify-between border cursor-pointer ${
        isPrimary
          ? "bg-primary border-transparent"
          : "bg-surface-container/50 backdrop-blur-md border-white/5 hover:bg-surface-container-high hover:border-primary/20"
      }`}
    >
      <div className="space-y-3 relative z-10">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isPrimary
            ? "bg-[#00201b] text-primary shadow-lg"
            : "bg-surface-container-high text-primary shadow-[inset_0_0_15px_rgba(68,252,221,0.1)] group-hover:bg-primary group-hover:text-[#00201b]"
        }`}>
          <card.icon size={18} />
        </div>

        <div>
          <h3 className={`font-headline text-lg font-bold mb-1 tracking-tight ${isPrimary ? "text-[#00201b]" : "text-on-surface"}`}>
            {card.title}
          </h3>
          <p className={`font-body text-sm leading-relaxed ${isPrimary ? "text-[#00201b]/80" : "text-on-surface-variant opacity-70 group-hover:opacity-100"}`}>
            {card.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mt-4">
        <span className={`font-label text-[10px] tracking-widest uppercase font-bold ${isPrimary ? "text-[#00201b]" : "text-primary"}`}>
          {card.label}
        </span>
        {isPrimary ? (
          <ArrowUpRight size={20} className="text-[#00201b]" />
        ) : (
          <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
        )}
      </div>

      {isPrimary && (
        <div className="absolute top-4 right-4">
          <div className="w-2 h-2 rounded-full bg-[#00201b] animate-pulse" />
        </div>
      )}

      {!isPrimary && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
      )}
    </motion.div>
  );

  if (card.external) {
    return (
      <a href={card.href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }
  if (!card.external && card.href.startsWith("/")) {
    return <Link to={card.href}>{inner}</Link>;
  }
  return <a href={card.href}>{inner}</a>;
}

export function HubPage() {
  return (
    <main className="min-h-screen pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none dna-bg opacity-40" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto relative z-10 pt-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 space-y-6"
        >
        

          <h1 className="font-headline text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] max-w-4xl">
            AgentDNA{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-primary/50">
              HUB
            </span>
          </h1>

          <p className="font-body text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed opacity-80">
            Explore everything you need to launch with confidence — agents, docs, tutorials, and the beta programme.
          </p>
        </motion.div>

            <div className="mt-20 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent relative">
          <motion.div
            animate={{ left: ["10%", "90%", "10%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[2px] shadow-[0_0_12px_#44fcdd]"
          />
        </div>

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, idx) => (
            <CardWrapper key={card.title} card={card} idx={idx} />
          ))}
        </div>

        {/* System Integrity Pulse */}
        <div className="mt-10 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent relative">
          <motion.div
            animate={{ left: ["10%", "90%", "10%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full blur-[2px] shadow-[0_0_12px_#44fcdd]"
          />
        </div>

        {/* FAQ */}
        <section className="mt-32 max-w-4xl mx-auto" id="faq" aria-label="Frequently Asked Questions">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 space-y-3"
          >
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim">
                Questions
              </span>
            </h2>
            <p className="font-body text-on-surface-variant opacity-70 text-lg">
              Everything you need to know about AgentDNA.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3">
            {faqs.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
