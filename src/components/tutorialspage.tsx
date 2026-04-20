import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import hljs from "highlight.js";
import { Copy, Check, ArrowUpRight, BookOpen, Key, Cpu } from "lucide-react";

// ── Syntax-highlighted code block ────────────────────────────────────────────

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current) hljs.highlightElement(codeRef.current);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-xl border border-white/8 bg-black/40 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-white/[0.02]">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff6b6b]" />
          <span className="w-3 h-3 rounded-full bg-[#f7c948]" />
          <span className="w-3 h-3 rounded-full bg-primary" />
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-on-surface-variant opacity-40 hover:opacity-100 hover:text-primary transition-all text-xs font-label cursor-pointer"
        >
          {copied ? <Check size={13} /> : <Copy size={13} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="m-0 bg-transparent p-0">
        <code ref={codeRef} className="language-python !bg-transparent !p-4 text-sm leading-relaxed">
          {code}
        </code>
      </pre>
    </div>
  );
}

// ── Step card ─────────────────────────────────────────────────────────────────

function StepCard({
  step,
  title,
  children,
  code,
  delay = 0,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
  code: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-6 p-6 rounded-2xl border border-white/5 bg-surface-container/50 hover:border-primary/15 transition-colors duration-300"
    >
      {/* Code side */}
      <CodeBlock code={code} />

      {/* Text side */}
      <div className="flex flex-col justify-center gap-3">
        <div className="flex items-center gap-3">
          <span className="w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-label font-bold text-xs shrink-0">
            {step}
          </span>
          <h3 className="font-headline font-bold text-lg text-on-surface tracking-tight">{title}</h3>
        </div>
        <div className="font-body text-sm text-on-surface-variant leading-relaxed space-y-2 pl-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ── Info card ─────────────────────────────────────────────────────────────────

function InfoCard({
  title,
  icon: Icon,
  children,
  delay = 0,
}: {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="p-6 rounded-2xl border border-white/5 bg-surface-container/50 space-y-4"
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Icon size={18} />
        </div>
        <h3 className="font-headline font-bold text-lg text-on-surface tracking-tight">{title}</h3>
      </div>
      <div className="font-body text-sm text-on-surface-variant leading-relaxed space-y-2">
        {children}
      </div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function TutorialsPage() {
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
            Step-by-Step Guide
          </span>
        </div>
        <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tighter leading-[0.95] max-w-3xl">
          Tutorials{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-primary-dim to-primary/50">
            & Guide
          </span>
        </h1>
        <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed opacity-80">
          AgentDNA — A Complete Step-by-Step Guide
        </p>
      </motion.section>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-10 p-6 rounded-2xl border border-primary/15 bg-primary/5"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <BookOpen size={18} />
          </div>
          <h2 className="font-headline font-bold text-xl text-on-surface tracking-tight">Choose your Agent</h2>
        </div>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">
          AgentDNA adds continuous identity, trust, governance, and context assurance to every agent interaction. This tutorial walks you through the full lifecycle:
        </p>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
          {[
            "1. Initializing the Host",
            "2. Initializing a Remote",
            "3. Building Signed Outbound Message (Host)",
            "4. Verifying Message (Remote)",
            "5. Building Message (Remote)",
            "6. Verifying Message (Host)",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 font-body text-sm text-on-surface-variant">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Before You Begin + Agents */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <InfoCard title="Setup API Key" icon={Key} delay={0.15}>
          <p>
            When you sign up for the AgentDNA Beta program, you receive your API key via email. If you have not yet signed up, you can request beta access{" "}
            <Link to="https://agentdna.io/beta" className="text-primary hover:underline">here</Link>.
          </p>
          <p>
            Store your API Key as an environment variable. You will reference this env variable when initializing your Host and Remote agents.
          </p>
        </InfoCard>

        <div className="grid gap-6">
          <InfoCard title="What is Host Agent?" icon={Cpu} delay={0.2}>
            <p>The Host is the orchestrator of a workflow. Only host creates the Agent Object and is the owner of the workflow.</p>
            <ul className="space-y-1 mt-1">
              {[
                "It initiates tasks.",
                "It coordinates calls between tools, LLMs or other agents.",
                "It generates verifiable outbound messages using AgentDNA.",
                "It verifies incoming remote responses.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-medium text-on-surface">Typical examples:</p>
            <ul className="space-y-1">
              {["A user using LLM/tool calls", "A custom orchestrator that delegates work to several worker agents"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />{t}
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </div>

      {/* Remote agent info — full width */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-10 p-6 rounded-2xl border border-white/5 bg-surface-container/50 space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            <Cpu size={18} />
          </div>
          <h3 className="font-headline font-bold text-lg text-on-surface tracking-tight">What is Remote Agent?</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6 font-body text-sm text-on-surface-variant leading-relaxed">
          <div className="space-y-2">
            <p>A Remote is a worker tool that receives requests from the host or agent.</p>
            <ul className="space-y-1.5">
              {[
                "It receives AgentDNA-wrapped messages.",
                "It verifies authenticity using handle().",
                "It performs work (LLM call, tool call, computation).",
                "It returns a signed, provenance-valid response back to the Host or other remote agent.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <p className="font-medium text-on-surface">Typical examples of Remote:</p>
            <ul className="space-y-1.5">
              {["A Jira agent", "A calendar tool executor", "An LLM wrapper producing text"].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative mb-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4 font-label text-[10px] tracking-[0.3em] uppercase text-primary/40">
          Tutorial Steps
        </span>
      </div>

      {/* Step cards */}
      <div className="space-y-5">
        <StepCard step={1} title="Install AgentDNA" code={`pip install agent-dna\nuv add agent-dna`} delay={0}>
          <p>Before initializing agents, install the AgentDNA package.</p>
          <p>Install via pip or UV to start using AgentDNA.</p>
        </StepCard>

        <StepCard step={2} title="Import the SDK" code={`from agentdna import AgentDNA`} delay={0.05}>
          <p>Import AgentDNA into your Python environment.</p>
          <p>Once installed and imported, you are ready to initialize Host and Remote agents.</p>
        </StepCard>

        <StepCard step={3} title="Initialize Host Agent" code={`host = AgentDNA(\n  alias="Host Name",\n  role="host",\n  api_key="YOUR_API_KEY"\n)`} delay={0.05}>
          <p>You can have only one Host agent per agentDNA flow.</p>
        </StepCard>

        <StepCard step={4} title="Initialize Remote Agent" code={`remote = AgentDNA(\n  alias="Remote Name",\n  role="remote",\n  api_key="YOUR_API_KEY"\n)`} delay={0.05}>
          <p>You can have multiple remotes, each with its own identity and role.</p>
        </StepCard>

        <StepCard
          step={5}
          title="Building Outbound Messages as the Host"
          code={`hostEnvelope = host.build(\n  original_message="Query from host"\n)`}
          delay={0.05}
        >
          <p>Before sending anything to a remote, the host wraps it using <code className="text-primary bg-primary/10 px-1 py-0.5 rounded text-xs">build()</code>.</p>
          <p className="font-medium text-on-surface mt-1">What build() does:</p>
          <ul className="space-y-1">
            {[
              "Binds this message to the host's identity.",
              "Attaches state and workflow context.",
              "Produces a tamper-evident, verifiable payload.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
              </li>
            ))}
          </ul>
        </StepCard>

        <StepCard
          step={6}
          title="Handling Messages as a Remote"
          code={`host_query_verification_info = remote.handle(\n  raw_text=<Message payload from host>,\n  remote_name="Remote"\n)\n\noriginal_message = host_query_verification_info["original_message"]\nhost_block =  host_query_verification_info["host_block"]\nis_host_block_valid =  host_query_verification_info["host_ok"]`}
          delay={0.05}
        >
          <p className="font-medium text-on-surface">What handle() does for remotes:</p>
          <ul className="space-y-1">
            {[
              "Confirms message authenticity",
              "Extracts identity and integrity metadata",
              "Ensures state continuity",
              "Protects against spoofed or modified host messages",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
              </li>
            ))}
          </ul>
        </StepCard>

        <StepCard
          step={7}
          title="Build() Messages as Remote"
          code={`original_message = host_query_verification_info["original_message"]\nhost_block =  host_query_verification_info["host_block"]\nis_host_block_valid =  host_query_verification_info["host_ok"]\n\nreply = "Response from the AI model"\n\nremote_agent_response = remote.build(\n  original_message=original_message,\n  response=reply,\n  host_block=host_block\n)`}
          delay={0.05}
        >
          <p className="font-medium text-on-surface">What Build does for remotes:</p>
          <ul className="space-y-1">
            {[
              "Sign on message envelope that is verified at step 6",
              "Bind remote agent identity to trace",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
              </li>
            ))}
          </ul>
        </StepCard>

        <StepCard
          step={8}
          title="Host Handle() Remote Response"
          code={`response_from_remote_agent = {...}\n\nverification_info = host.handle(\n  resp_parts=response_from_remote_agent,\n  original_task=<Query from host>,\n  remote_name=<Counter party Agent Info>\n)`}
          delay={0.05}
        >
          <p className="font-medium text-on-surface">Host Handle ensures:</p>
          <ul className="space-y-1">
            {[
              "The response truly came from the expected remote agent",
              "It ties back to the correct task and context",
              "A complete provenance chain is established end-to-end",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{t}
              </li>
            ))}
          </ul>
        </StepCard>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-4 mt-14"
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
          to="/install"
          className="inline-flex items-center gap-2 border border-white/10 text-on-surface-variant font-label font-bold py-3 px-7 rounded-full text-sm hover:border-primary/40 hover:text-primary transition-all"
        >
          Installation Guide
        </Link>
      </motion.div>
    </main>
  );
}
