import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  FileCheck,
  Terminal,
  Table,
  Activity,
  Signal,
  ShieldCheck,
  Lock,
  CirclePlus,
  MoveUpRight,
} from "lucide-react";

interface Agent {
  id: string;
  name: string;
  icon: string;
  path: string;
  github: string;
}

const agents: Agent[] = [
  {
    id: "AT-0199-X",
    name: "Jira Agent",
    icon: "assignment_turned_in",
    path: "/agents/jira",
    github: "https://github.com/rubixchain/agentdna/tree/main",
  },
  {
    id: "GH-8821-K",
    name: "Github Agent",
    icon: "terminal",
    path: "/agents/github",
    github: "https://github.com/rubixchain/agentdna/tree/main",
  },
  {
    id: "GS-4402-Q",
    name: "Google Sheets Agent",
    icon: "table_rows",
    path: "/agents/gsheet",
    github: "https://github.com/rubixchain/agentdna/tree/main",
  },
  {
    id: "YF-9128-B",
    name: "Yahoo Finance Agent",
    icon: "monitoring",
    path: "/agents/yfinance",
    github: "https://github.com/rubixchain/agentdna/tree/main",
  },
  {
    id: "MA-3301-Z",
    name: "Multi Agent System",
    icon: "monitoring",
    path: "/agents/multi-agent-system",
    github: "https://github.com/rubixchain/agentdna/tree/main",
  },
];

const AgentIcon = ({ icon }: { icon: string }) => {
  const cls = "text-primary w-5 h-5";
  switch (icon) {
    case "assignment_turned_in": return <FileCheck className={cls} />;
    case "terminal": return <Terminal className={cls} />;
    case "table_rows": return <Table className={cls} />;
    default: return <Activity className={cls} />;
  }
};

export function AgentsPage() {
  const navigate = useNavigate();

  return (
    <main className="pb-24">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pt-10 pb-12 flex flex-col md:flex-row justify-between items-end gap-8"
      >
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-10 bg-gradient-to-r from-primary to-transparent" />
            <span className="font-label text-primary tracking-[0.3em] text-xs font-medium uppercase">
              System Registry v4.0
            </span>
          </div>
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
            Agent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-primary/50">
              Registry
            </span>
          </h1>
          {/* <p className="font-label text-on-surface-variant tracking-widest text-xs opacity-60 uppercase">
            Agents : {agents.length}
          </p> */}
          <div className="w-full relative mt-2 h-px bg-white/5">
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_#44FCDD]"
              animate={{ left: ["-2%", "102%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Stat cards */}
        {/* <div className="flex gap-4 flex-wrap">
          <div className="bg-surface-container rounded-xl border border-white/5 p-6 min-w-[200px] relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-label tracking-[0.2em] text-primary uppercase">Global Uptime</span>
              <div className="text-3xl font-bold font-headline mt-1 tracking-tight">99.998%</div>
              <div className="flex items-center gap-2 mt-2 text-[10px] font-label text-on-surface-variant">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                STABLE_CONNECTION
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 opacity-5 group-hover:opacity-10 transition-opacity">
              <Signal className="w-20 h-20" />
            </div>
          </div>

          <div className="bg-surface-container rounded-xl border border-white/5 p-6 min-w-[200px] relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-label tracking-[0.2em] text-primary uppercase">Encryption</span>
              <div className="text-3xl font-bold font-headline mt-1 tracking-tight">AES-2048</div>
              <div className="flex items-center gap-2 mt-2 text-[10px] font-label text-on-surface-variant">
                <ShieldCheck className="w-3 h-3" />
                END_TO_END_SECURED
              </div>
            </div>
            <div className="absolute -right-3 -bottom-3 opacity-5 group-hover:opacity-10 transition-opacity">
              <Lock className="w-20 h-20" />
            </div>
          </div>
        </div> */}
      </motion.section>

      {/* Agent Table */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="space-y-3 mb-12"
      >
        {/* Table header */}
        <div className="grid grid-cols-12 px-6 py-2 text-[10px] font-label tracking-[0.2em] text-on-surface-variant uppercase opacity-50">
          <div className="col-span-9">Identifier & Origin</div>
          <div className="col-span-3 text-right">Repository</div>
        </div>

        {agents.map((agent, i) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
            onClick={() => navigate(agent.path)}
            className="grid grid-cols-12 items-center px-6 py-4 bg-surface-container/50 backdrop-blur-2xl rounded-xl border border-white/5 hover:bg-surface-container-high hover:border-primary/20 transition-all duration-300 group cursor-pointer"
          >
            <div className="col-span-9 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <AgentIcon icon={agent.icon} />
              </div>
              <div>
                <div className="font-headline font-bold text-base tracking-tight text-on-surface">{agent.name}</div>
                <div className="text-[10px] font-label text-on-surface-variant opacity-50 tracking-widest">ID: {agent.id}</div>
              </div>
            </div>

            <div className="col-span-3 flex justify-end">
              <a
                href={agent.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-[10px] font-label font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-white/10 text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Visualizations */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* View Dashboard */}
        <a
          href="https://dashboard.agentdna.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 bg-surface-container rounded-xl border border-white/5 p-8 relative overflow-hidden group hover:border-primary/20 transition-all duration-300 cursor-pointer"
        >
          {/* Background atmosphere */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/5" />
          </div>
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(rgba(68,252,221,1) 1px, transparent 1px), linear-gradient(90deg, rgba(68,252,221,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} />

          <div className="relative z-10 flex flex-col justify-between h-full gap-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-headline font-bold text-xl uppercase tracking-tighter">View Dashboard</h3>
                <p className="text-on-surface-variant font-label text-[10px] tracking-widest uppercase opacity-50 mt-1">
                  AgentDNA Control Plane // Live
                </p>
              </div>
              <MoveUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-y-1 group-hover:translate-y-0" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: ShieldCheck, label: "Secured Agents", delay: 0 },
                { icon: Activity, label: "Total Interactions", delay: 0.75 },
                { icon: Lock, label: "Intrusions Detected", delay: 1.5 },
                { icon: Signal, label: "Reliability Score", delay: 2.25 },
              ].map(({ icon: Icon, label, delay }) => (
                <div key={label} className="relative p-[1px] rounded-xl overflow-hidden">
                  <motion.div
                    className="absolute inset-[-100%] opacity-60"
                    style={{
                      background: "conic-gradient(from 0deg, transparent 0deg, rgba(68,252,221,0.9) 60deg, transparent 120deg)",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay }}
                  />
                  <div className="relative bg-[#111111] rounded-xl p-3 flex flex-col gap-2">
                    <Icon className="w-4 h-4 text-primary opacity-70" />
                    <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-wider opacity-60 leading-tight">{label}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-body text-xs text-on-surface-variant opacity-50 leading-relaxed">
              Track secured agents, total interactions, intrusions detected with full reasons, and per-agent reliability scores — all in one control plane.
            </p>
          </div>
        </a>

        {/* Deploy Card */}
        <a
          href="https://agentdna.io/beta"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-8 rounded-xl flex flex-col justify-between group cursor-pointer transition-all hover:shadow-[0_0_28px_rgba(68,252,221,0.35)] active:scale-[0.98]"
        >
          <div className="text-[#00201b]">
            <CirclePlus className="w-10 h-10 mb-4" />
            <h3 className="font-headline font-bold text-2xl leading-none uppercase tracking-tighter">Deploy New Agent</h3>
            <p className="mt-2 text-[#00201b]/70 text-sm font-body">
              Instantiate and secure your agent with agentDNA . 
            </p>
          </div>
          <div className="flex items-center gap-2 text-[#00201b] font-label font-bold text-xs tracking-widest uppercase mt-4">
            Get you key from the beta program
            <MoveUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </a>
      </motion.section>
    </main>
  );
}
