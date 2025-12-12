import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import logo from './assets/a4d2293fc03eb10393506a75b7c4bd9ad839d7ba-efzz4AxP.png'
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/github-dark.css';
import { useEffect, useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("python", python);

function CodeSnippet({ code }: { code: string }) {
  const codeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, []);

  return (
    <pre className="code-body">
      <code ref={codeRef} className="language-python">
        {code}
      </code>
    </pre>
  );
}



const cards = [
  {
    title: 'Installation and Usage',
    description: 'Start integrating AgentDNA quickly.',
    href: '/install',
  },
  {
    title: 'AgentDNA Dashboard',
    description: 'Manage agents, policies, and contexts.',
    href: 'https://dashboard.agentdna.io/',
  },
  {
    title: 'Examples',
    description: 'See working samples and starter kits.',
    href: '/agents',
  },
  {
    title: 'Tutorials',
    description: ' A Complete Step-by-Step Guide',
    href: '/tutorials',
  },
  {
    title: 'Access the BETA',
    href: 'https://agentdna.io/beta',
  },
  {
    title: 'Integration Guides',
    description: 'Coming Soon',
    href: '#integrations',
  },
]

const agents = [
  { name: "PickleBall Agent", path: "/agents/pickleball" },
  { name: "Jira Agent", path: "/agents/jira" },
];

// function SecureCard3() {
//   const snippet = `outbound = dna.build(
//     original_message="Are you free tomorrow?",
//     state={"task_id": tid, "context_id": cid}
// )

// result = await self.dna.handle(
//     resp_parts=resp_parts,
//     original_task=task,
//     remote_name=agent_name,
// )`

//   const handleCopy = () => {
//     navigator.clipboard?.writeText(snippet)
//   }

//   return (
//     <section className="section-card secure-block">
//       <div className="secure-code">
//         <div className="code-window">
//           <div className="code-dot-row">
//             <span className="dot red" />
//             <span className="dot yellow" />
//             <span className="dot green" />
//           </div>
//           <div className="code-body">
//             {snippet.split('\n').map((line, idx) => (
//               <code key={idx}>{line || ' '}</code>
//             ))}
//           </div>
//           <button className="copy-btn" onClick={handleCopy} type="button">
//             Copy
//           </button>
//         </div>
//       </div>
//       <div className="secure-text">
//         <div className="icon-circle">🔒</div>
//         <p className="mini-heading">Secure</p>
//         <h3 className="secure-title">Enforce identity, integrity, and governance.</h3>
//         <p className="hero-sub">
//           Secure every outbound and inbound behavior by signing, verifying, and logging critical
//           agent interactions.
//         </p>
//       </div>
//     </section>
//   )
// }

function SecureCard1() {
  const snippet =

    `pip install agent-dna
   uv add agent-dna`

  {/* <code># Installation via pip</code>
<code># Installation via uv</code>
<code>uv add agent-dna</code> */}

  const handleCopy = () => {
    navigator.clipboard?.writeText(snippet)
  }

  return (
    <section className="section-card secure-block">
      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="code-body">
            {snippet.split('\n').map((line, idx) => (
              <code key={idx}>{line || ' '}</code>
            ))}
          </div>
          <button className="copy-btn" onClick={handleCopy} type="button">
            Copy
          </button>
        </div>
      </div>
      <div className="secure-text">
        <div className="icon-circle">🔒</div>

        <h3 className="secure-title">Install via pip</h3>
        <p className="hero-sub">
          Add AgentDNA to your environment
        </p>
      </div>

    </section>
  )
}


function TutorialCard1() {
  const snippet = `pip install agent-dna
uv add agent-dna`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">
      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">1. Install AgentDNA</h3>
        <p className="hero-sub">Before initializing agents, install the AgentDNA package </p>
        <p className="hero-sub">Install via pip or UV to start using AgentDNA.</p>
      </div>
    </section>
  )
}

function TutorialCard2() {
  const snippet = `from agentdna import AgentDNA`;

  const handleCopy = () => navigator.clipboard.writeText(snippet);

  return (
    <section className="section-card secure-block">
      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">2. Import the SDK</h3>
        <p className="hero-sub">Import AgentDNA into your Python environment.</p>
        <p className="hero-sub">
          Once installed and imported, you are ready to initialize Host and Remote agents.
        </p>
      </div>
    </section>
  );
}

function TutorialCard3() {
  const snippet = `host = AgentDNA(
  alias="Host Name",
  role="host",
  api_key="YOUR_API_KEY"
)`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />


          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">3. Initialize Host Agent</h3>
        <p className="hero-sub">You can have only one Host agent per agentDNA flow.</p>
      </div>
    </section>
  )
}

function TutorialCard4() {
  const snippet = `remote = AgentDNA(
  alias="Remote Name",
  role="remote",
  api_key="YOUR_API_KEY"
)`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">4. Initialize Remote Agent</h3>
        <p className="hero-sub">You can have multiple remotes, each with its own identity and role.</p>
      </div>
    </section>
  )
}

function TutorialCard5() {
  const snippet = `hostEnvelope = host.build(
  original_message="Query from host"
)`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">

        <h3 className="secure-title">5. Building Outbound Messages as the Host</h3>
        <p className="hero-sub">Before sending anything to a remote, the host wraps it using build().</p>
        <p className="hero-sub">What build() does</p>
        <ul className="list loud">
          <li>Binds this message to the host’s identity.</li>
          <li>Attaches state and workflow context.</li>
          <li>Produces a tamper-evident, verifiable payload.</li>
        </ul>
      </div>
    </section>
  )
}

function TutorialCard6() {
  const snippet = `host_query_verification_info = remote.handle(
  raw_text=<Message payload from host>,
  remote_name="Remote"
)

original_message = host_query_verification_info["original_message"]
host_block =  host_query_verification_info["host_block"]
is_host_block_valid =  host_query_verification_info["host_ok"]
`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">6. Handling Messages as a Remote</h3>
        <p className="hero-sub">What handle() does for remotes</p>
        <ul className="list loud">
          <li>Confirms message authenticity</li>
          <li>Extracts identity and integrity metadata</li>
          <li>Ensures state continuity</li>
          <li>Protects against spoofed or modified host messages</li>
        </ul>
      </div>
    </section>
  )
}

function TutorialCard7() {

  const snippet = `
original_message = host_query_verification_info["original_message"]
host_block =  host_query_verification_info["host_block"]
is_host_block_valid =  host_query_verification_info["host_ok"]

reply = "Response from the AI model"

  remote_agent_response = remote.build(
  original_message=original_message,
  response=reply,
  host_block=host_block
)`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">7. Build() Messages as Remote</h3>
        <p className="hero-sub">What Build does for remotes</p>
        <ul className="list loud">
          <li>Sign on message envelope that is verified at step 6</li>
          <li>Bind remote agent identity to trace</li>
        </ul>
      </div>
    </section>
  )
}

function TutorialCard8() {

  const snippet = `
  response_from_remote_agent = {...}

  verification_info = host.handle(
  resp_parts=response_from_remote_agent,
  original_task=<Query from host>,
  remote_name=<Counter party Agent Info>
)`

  const handleCopy = () => navigator.clipboard.writeText(snippet)

  return (
    <section className="section-card secure-block">

      <div className="secure-code">
        <div className="code-window">
          <div className="code-dot-row">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>

          <CodeSnippet code={snippet} />

          <button className="copy-btn" onClick={handleCopy}>Copy</button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">8. Host Handle() Remote Response</h3>
        <p className="hero-sub">Host Handle ensures:</p>
        <ul className="list loud">
          <li>The response truly came from the expected remote agent</li>
          <li>It ties back to the correct task and context</li>
          <li>A complete provenance chain is established end-to-end</li>
        </ul>
      </div>
    </section>
  )
}




// function SecureCard2() {
//   const snippet = `dna = AgentDNA(
//     alias="<agent alias>",
//     role="<host/remote>"
//     )`


//   const handleCopy = () => {
//     navigator.clipboard?.writeText(snippet)
//   }

//   return (
//     <section className="section-card secure-block">
//       <div className="secure-code">
//         <div className="code-window">
//           <div className="code-dot-row">
//             <span className="dot red" />
//             <span className="dot yellow" />
//             <span className="dot green" />
//           </div>
//           <div className="code-body">
//             {snippet.split('\n').map((line, idx) => (
//               <code key={idx}>{line || ' '}</code>
//             ))}
//           </div>
//           <button className="copy-btn" onClick={handleCopy} type="button">
//             Copy
//           </button>
//         </div>
//       </div>
//       <div className="secure-text">
//         <div className="icon-circle">🔒</div>
//         <p className="mini-heading">Secure</p>
//         <h3 className="secure-title">Initialize
//         </h3>
//         <p className="hero-sub">
//         Instantiate your agent’s DNA - bootstrap identity and context. /n
//        Import agentdna from AgentDNA
//         </p>
//       </div>
//     </section>
//   )
// }

function JiraPage() {
  return (
    <div className="page">
      <main className="content">
        {/* Hero Section */}
        <section className="section-card highlight">
          <div className="agent-header">
            <div className="agent-icon">🔧</div>
            <div className="agent-info">
              <h1 className="agent-title">Jira MCP Agent</h1>
              <p className="agent-desc">
                A fully integrated Model Context Protocol (MCP) server and client for Jira Cloud,
                enhanced by AgentDNA for end-to-end trust and identity verification.
              </p>
            </div>
          </div>
        </section>

      
        {/* Components Section */}
        <section className="section-card">
          <h2 className="section-title">Architecture Components</h2>
          <div className="two-col">
            <div className="usage-section">
              <h3>1. MCP Server (server.py)</h3>
              <p>Provides comprehensive Jira tool integration with AgentDNA signing:</p>
              <ul>
                <li>Receives signed <code className="code-inline">dna_envelope</code> from host</li>
                <li>Executes Jira API calls securely</li>
                <li>Returns signed agent responses</li>
              </ul>
            </div>
            <div className="usage-section">
              <h3>2. MCP Client / UI (app.py)</h3>
              <p>Intelligent client interface with verification:</p>
              <ul>
                <li>Wraps tool calls in AgentDNA host envelopes</li>
                <li>Verifies all server responses</li>
                <li>Writes results to Rubix NFT for immutable logs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools Table */}
        <section className="section-card highlight">
          <h2 className="section-title">Available Jira Tools</h2>
          <div className="table-container">
            <table className="agent-table">
              <thead>
                <tr>
                  <th>Tool</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code className="code-inline">search_issues</code></td>
                  <td>JQL search via Jira v3 /search/jql endpoint</td>
                </tr>
                <tr>
                  <td><code className="code-inline">get_issue</code></td>
                  <td>Retrieve detailed issue information</td>
                </tr>
                <tr>
                  <td><code className="code-inline">create_issue</code></td>
                  <td>Create a new issue with ADF description support</td>
                </tr>
                <tr>
                  <td><code className="code-inline">add_comment</code></td>
                  <td>Add comments to existing issues</td>
                </tr>
                <tr>
                  <td><code className="code-inline">transition_issue</code></td>
                  <td>Move issues across workflow states</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Setup Section */}
        <section className="section-card">
          <h2 className="section-title">Environment Setup</h2>
          <p className="hero-sub" style={{ marginBottom: '20px' }}>
            Configure the following environment variables to get started:
          </p>
          <div className="code-block">
            <code>GEMINI_API_KEY=your_gemini_key</code>
            <code>AGENTDNA_API_KEY=your_agentdna_key</code>
            <code>JIRA_BASE_URL=https://your-domain.atlassian.net</code>
            <code>JIRA_EMAIL=your-email@example.com</code>
            <code>JIRA_API_TOKEN=your_jira_token</code>
          </div>
        </section>

        {/* Running Instructions */}
        <section className="section-card highlight">
          <h2 className="section-title">Running the Agent</h2>
          <p className="hero-sub" style={{ marginBottom: '20px' }}>
            Launch the Streamlit UI with a single command. The MCP server is automatically started per request via Python stdio.
          </p>
          <div className="code-block">
            <code>streamlit run app.py</code>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="section-card">
          <h2 className="section-title">Examples & Usage</h2>
          <div className="usage-section">
            <p>Ask your AI assistant to perform common Jira operations using natural language:</p>

            <h4>📋 Listing Issues</h4>
            <p className="code-inline">"List my open issues"</p>

            <h4>➕ Creating Issues</h4>
            <p>
              <span className="code-inline">"Create a new task in KAN. Summary: Add login button. Description: Implement UI button for login"</span>
            </p>

            <h4>💬 Adding Comments</h4>
            <p className="code-inline">"Add a comment to KAN-12 saying 'Reviewed and approved'"</p>

            <h4>🔄 Transitioning Issues</h4>
            <p className="code-inline">"Move KAN-12 to In Progress"</p>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-container">
          <a href="https://github.com/rubixchain/agentdna/tree/main/examples/JIRA" className="cta">
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}

function PickleballAgentPage() {
  return (
    <div className="page">
      <main className="content">
        {/* Hero Section */}
        <section className="section-card highlight">
          <div className="agent-header">
            <div className="agent-icon">🏓</div>
            <div className="agent-info">
              <h1 className="agent-title">A2A Friend Scheduling</h1>
              <p className="agent-desc">
                A multi-agent application demonstrating how to orchestrate conversations between different agents to schedule pickleball games with friends.
              </p>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-card">
          <h2 className="section-title">Agent Ecosystem</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Host Agent</h3>
              <p>Primary orchestrator that coordinates the scheduling task across all participant agents</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Kaitlynn Agent</h3>
              <p>Manages Kaitlynn's calendar and scheduling preferences using LangGraph</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Nate Agent</h3>
              <p>Represents Nate's availability and preferences built with CrewAI</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Karley Agent</h3>
              <p>Handles Karley's calendar integration using ADK framework</p>
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="section-card highlight">
          <h2 className="section-title">Multi-Agent Architecture</h2>
          <p className="hero-sub" style={{ marginBottom: '24px' }}>
            This application showcases agent-to-agent (A2A) communication where the Host Agent orchestrates conversations with three participant agents, each representing a friend's calendar and preferences. The agents communicate asynchronously to find the optimal meeting time.
          </p>
          <div className="two-col">
            <div className="usage-section">
              <h3>Framework Diversity</h3>
              <ul>
                <li><strong>LangGraph:</strong> Kaitlynn Agent - Graph-based agent workflow</li>
                <li><strong>CrewAI:</strong> Nate Agent - Role-based AI agent system</li>
                <li><strong>ADK:</strong> Karley & Host Agents - Google's Agent Development Kit</li>
              </ul>
            </div>
            <div className="usage-section">
              <h3>Communication Pattern</h3>
              <ul>
                <li>Asynchronous agent-to-agent messaging</li>
                <li>Coordinated calendar conflict resolution</li>
                <li>Preference negotiation and consensus building</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="section-card">
          <h2 className="section-title">Prerequisites</h2>
          <p className="hero-sub" style={{ marginBottom: '20px' }}>
            Before running the application locally, ensure you have the following installed:
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>uv Package Manager</h3>
              <p>Python package management tool. Install from <a href="https://docs.astral.sh/uv/getting-started/installation/" className="mini-link" target="_blank" rel="noopener noreferrer">docs.astral.sh</a></p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🐍</div>
              <h3>Python 3.13</h3>
              <p>Required version to run a2a-sdk and all agent frameworks</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔑</div>
              <h3>Google API Key</h3>
              <p>Create a <code className="code-inline">.env</code> file with your API key in the project root</p>
            </div>
          </div>
        </section>

        {/* Environment Setup */}
        <section className="section-card highlight">
          <h2 className="section-title">Environment Configuration</h2>
          <p className="hero-sub" style={{ marginBottom: '20px' }}>
            Create a <code className="code-inline">.env</code> file in the root of the project directory:
          </p>
          <div className="code-block">
            <code>GOOGLE_API_KEY="your_api_key_here"</code>
          </div>
        </section>

        {/* Running Agents */}
        <section className="section-card">
          <h2 className="section-title">Running the Agents</h2>
          <p className="hero-sub" style={{ marginBottom: '24px' }}>
            Each agent must be run in a separate terminal window. The first time you run these commands, uv will create a virtual environment and install all necessary dependencies.
          </p>

          <div className="two-col" style={{ gap: '24px' }}>
            {/* Kaitlynn Agent */}
            <div className="usage-section">
              <h3>Terminal 1: Kaitlynn Agent</h3>
              <div className="code-block" style={{ marginTop: '12px' }}>
                <code>cd kaitlynn_agent_langgraph</code>
                <code>uv venv</code>
                <code>source .venv/bin/activate</code>
                <code>uv sync</code>
                <code>uv run --no-sync --active -m app.__main__</code>
              </div>
            </div>

            {/* Nate Agent */}
            <div className="usage-section">
              <h3>Terminal 2: Nate Agent</h3>
              <div className="code-block" style={{ marginTop: '12px' }}>
                <code>cd nate_agent_crewai</code>
                <code>uv venv</code>
                <code>source .venv/bin/activate</code>
                <code>uv sync</code>
                <code>uv run --no-sync --active .</code>
              </div>
            </div>

            {/* Karley Agent */}
            <div className="usage-section">
              <h3>Terminal 3: Karley Agent</h3>
              <div className="code-block" style={{ marginTop: '12px' }}>
                <code>cd karley_agent_adk</code>
                <code>uv venv</code>
                <code>source .venv/bin/activate</code>
                <code>uv sync</code>
                <code>uv run --no-sync --active .</code>
              </div>
            </div>

            {/* Host Agent */}
            <div className="usage-section">
              <h3>Terminal 4: Host Agent</h3>
              <div className="code-block" style={{ marginTop: '12px' }}>
                <code>cd host_agent_adk</code>
                <code>uv venv</code>
                <code>source .venv/bin/activate</code>
                <code>uv sync</code>
                <code>uv run --no-sync streamlit run webui_app.py</code>
              </div>
            </div>
          </div>
        </section>

        {/* Interaction */}
        <section className="section-card highlight">
          <h2 className="section-title">Interacting with the System</h2>
          <div className="usage-section">
            <p>
              Once all four agents are running, the Host Agent will launch a Streamlit web interface where you can:
            </p>
            <ul>
              <li>Initiate scheduling requests for pickleball games</li>
              <li>View real-time agent-to-agent communication</li>
              <li>Monitor the negotiation process across all participant calendars</li>
              <li>See the final scheduled time that works for everyone</li>
            </ul>
            <p style={{ marginTop: '16px' }}>
              The terminal outputs will show detailed logs of the orchestration process and inter-agent messages.
            </p>
          </div>
        </section>

        {/* References */}
        {/* <section className="section-card">
          <h2 className="section-title">Resources & References</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>A2A Python SDK</h3>
              <p>
                <a href="https://github.com/google/a2a-python" className="mini-link" target="_blank" rel="noopener noreferrer">
                  github.com/google/a2a-python
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>A2A Codelab</h3>
              <p>
                <a href="https://codelabs.developers.google.com/intro-a2a-purchasing-concierge#1" className="mini-link" target="_blank" rel="noopener noreferrer">
                  Purchasing Concierge Tutorial
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Framework Docs</h3>
              <p>LangGraph, CrewAI, and Google ADK documentation for building multi-agent systems</p>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <div className="cta-container">
          <a href="https://github.com/rubixchain/agentdna/tree/main/examples/pickleball-multi-agent-system" className="cta">
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}


function TutorialsPage() {
  return (
    <main className="content">
      <section className="section-card install-header">
        <h1 className="hero-title"> Tutorials & Guide </h1>
        <p className="hero-sub">
          AgentDNA - A Complete Step-by-Step Guide
        </p>
      </section>

  <section className="section-card highlight video-section">
    <h2>LifeCycle Of Agents</h2>
  <div className="video-wrapper">
    <iframe
  src="https://www.youtube.com/embed/Tud9HLTk8hg"
      title="Introduction to AgentDNA"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>



      <section className="section-card highlight">
        <h2 className="section-title">Choose your Agent</h2>

        {/* Full-width paragraph */}
        <p className="tutorial-intro">
          AgentDNA adds continuous identity, trust, governance, and context assurance to
          every agent interaction. This tutorial walks you through the full lifecycle:
        </p>

        {/* Two-column numbered steps */}
        <div className="tutorial-grid">
          <ul className="list loud">
            <li>1. Initializing the Host</li>
            <li>2. Initializing a Remote</li>
            <li>3. Building Signed Outbound Message (Host)</li>
          </ul>

          <ul className="list loud">
            <li>4. Verifying Message (Remote)</li>
            <li>5. Building Message (Remote)</li>
            <li>6. Verifying Message (Host)</li>
          </ul>
        </div>
      </section>



      <section className="section-card highlight">
        <h2 className="section-title">Before You Begin </h2>
        <div className="two-col roles-grid">
          <div>
            <h3>Setup API Key</h3>
            <p>When you sign up for the AgentDNA Beta program, you receive your API key via email.
              If you have not yet signed up, you can request beta access here :
              <Link to="https://agentdna.io/beta"> Beta .</Link>
            </p>
            <p>Store Your API Key as an Environment Variable.
              You will reference this env variable when initializing your Host and Remote agents.</p>
          </div>
        </div>
      </section>

      <section className="section-card highlight">
        <h2 className="section-title">Agents</h2>
        <div className="two-col roles-grid">
          <div>
            <h3> What is Host Agent ?</h3>
            <p>The Host is the orchestrator of a workflow. Only host create Agent Object & is the owner
              of workflow.</p>
            <ul className="list loud">
              <li>It initiates tasks.</li>
              <li>It coordinates calls between tools, LLMs or other agents.</li>
              <li>It is responsible for generating verifiable outbound messages using AgentDNA.</li>
              <li>It verifies incoming remote responses.</li>
            </ul>
            <p>Typical example of Host</p>
            <ul className="list loud">
              <li>A user using LLM/tool calls</li>
              <li>A custom orchestrator that delegates work to several worker agents</li>
            </ul>
          </div>
          <div>
            <h3>What is Remote Agent ? </h3>
            <p>A Remote is a worker tool that receives requests from the host or agent.</p>
            <ul className="list loud">
              <li>It receives AgentDNA-wrapped messages.</li>
              <li>It verifies authenticity using handle().</li>
              <li>It performs work (LLM call, tool call, computation).</li>
              <li>It returns or forwards a signed, provenance-valid response back to the Host or
                other remote agent.</li>
            </ul>
            <p>Typical Example of Remote:</p>
            <ul className="list loud">
              <li>A Jira agent</li>
              <li>A calendar tool executor</li>
              <li>An LLM wrapper producing text</li>

            </ul>
          </div>
        </div>
      </section>

      <TutorialCard1 />
      <TutorialCard2 />
      <TutorialCard3 />
      <TutorialCard4 />
      <TutorialCard5 />
      <TutorialCard6 />
      <TutorialCard7 />
      <TutorialCard8 />

      <div className="install-link-center">
        <Link className="cta" to="https://github.com/rubixchain/agentdna/tree/main">
          View on Github
        </Link>
      </div>
    </main>
  )
}

function HubPage() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">AgentDNA Hub</h1>
        <p className="hero-sub">Explore everything you need to launch with confidence.</p>
      </section>

      <section className="hub">
        <div className="hub-grid">
          <Link className="card tall card-link" to={cards[0].href}>
            <div className="card-body">
              <h3>{cards[0].title}</h3>
              <p>{cards[0].description}</p>
            </div>
          </Link>

          <a className="card center card-link" href={cards[1].href}>
            <div className="card-body">
              <h3>{cards[1].title}</h3>
              <p>{cards[1].description}</p>
            </div>
          </a>

          <a className="card tall card-link" href={cards[2].href}>
            <div className="card-body">
              <h3>{cards[2].title}</h3>
              <p>{cards[2].description}</p>
            </div>
          </a>

          <a className="card card-link" href={cards[3].href}>
            <div className="card-body">
              <h3>{cards[3].title}</h3>
              <p>{cards[3].description}</p>
            </div>
          </a>

          <a className="card card-link" href={cards[4].href}>
            <div className="card-body">
              <h3>{cards[4].title}</h3>
              <p>{cards[4].description}</p>
            </div>
          </a>

          <a className="card card-link" href={cards[5].href}>
            <div className="card-body">
              <h3>{cards[5].title}</h3>
              <p>{cards[5].description}</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}

function InstallPage() {
  return (
    <main className="content">
      <section className="section-card install-header">
        <h1 className="hero-title">Installation & Usage</h1>
        <p className="hero-sub">
          AgentDNA is a package that helps in auditing and verifiability of agents within a
          multi-agent communication system.
        </p>
      </section>


      <section className="install-grid">

      </section>
      <SecureCard1 />
      {/* <SecureCard2 />
      <SecureCard3/> */}
      <section className="section-card two-col highlight">
        <div>
          <h2 className="section-title">Secure, verifiable agents out of the box</h2>
          <ul className="list loud">
            <li>Unified trust layer for multi-agent systems</li>
            <li>DID setup, signed conversation traces, and verification handled for you</li>
            <li>Immutable audit logging</li>
            <li>Compatible with Google A2A, ADK, Crew, and LangGraph</li>
          </ul>
        </div>
        {/* <div>
          <h2 className="section-title">Get started fast</h2>
          <div className="code-block elevated">
            <code># Installation via pip</code>
            <code>pip install agent-dna</code>
            <code />
            <code># Installation via uv</code>
            <code>uv add agent-dna</code>
          </div>
        </div> */}
      </section>

      <section className="section-card highlight">
        <h2 className="section-title">Choose your Agent</h2>
        <div className="two-col roles-grid">
          <div>
            <h3>Host Agent</h3>
            <ul className="list loud">
              <li>Sign and send outgoing host_request</li>
              <li>Verify inbound agent_response</li>
              <li>Optional NFT execution for audit logging</li>
            </ul>
          </div>
          <div>
            <h3>Remote Agent</h3>
            <ul className="list loud">
              <li>Verify inbound host_request</li>
              <li>Sign outbound agent_response</li>
            </ul>
          </div>
        </div>
      </section>
      <div className="install-link-center">
        <Link className="cta" to="https://github.com/rubixchain/agentdna/tree/main">
          View on Github
        </Link>
      </div>
    </main>
  )
}

function AgentsPage() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Agent Example</h1>
        <p className="hero-sub">Browse example agents and pick a starting point.</p>
      </section>

      <section className="section-card highlight">
        <div className="agent-grid">
          {agents.map((agent) => (
            <Link
              key={agent.name}
              to={agent.path}
              className="card card-link agent-card"
            >
              <div className="card-body">
                <h3>{agent.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="nav">
          <div className="brand">
            <img
              src={logo}
              alt="AgentDNA Logo"
              className="brand-logo"
            />
          </div>
          {/* <div className="nav-actions">
            <Link className="nav-link" to="/">
              Hub
            </Link>
            <Link className="nav-link" to="/install">
              Installation
            </Link>
            <Link className="nav-link" to="/agents">
              Agents
            </Link>
            <Link className="outline" to="/install">
              Get Started
            </Link>
          </div> */}
        </header>

        <Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/jira" element={<JiraPage />} />
          <Route path="/agents/pickleball" element={<PickleballAgentPage />} />
          <Route path='/tutorials' element={<TutorialsPage />} />
        </Routes>
      </div>
      <footer className="footer">© 2025 AgentDNA. All rights reserved.</footer>

    </BrowserRouter>
  )
}




export default App
