export function MultiAgentSystemPage() {
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
                A multi-agent application demonstrating how to orchestrate
                conversations between different agents to schedule pickleball
                games with friends.
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
              <p>
                Primary orchestrator that coordinates the scheduling task across
                all participant agents
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Kaitlynn Agent</h3>
              <p>
                Manages Kaitlynn's calendar and scheduling preferences using
                LangGraph
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👤</div>
              <h3>Nate Agent</h3>
              <p>
                Represents Nate's availability and preferences built with CrewAI
              </p>
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
          <p className="hero-sub" style={{ marginBottom: "24px" }}>
            This application showcases agent-to-agent (A2A) communication where
            the Host Agent orchestrates conversations with three participant
            agents, each representing a friend's calendar and preferences. The
            agents communicate asynchronously to find the optimal meeting time.
          </p>
          <div className="two-col">
            <div className="usage-section">
              <h3>Framework Diversity</h3>
              <ul>
                <li>
                  <strong>LangGraph:</strong> Kaitlynn Agent - Graph-based agent
                  workflow
                </li>
                <li>
                  <strong>CrewAI:</strong> Nate Agent - Role-based AI agent
                  system
                </li>
                <li>
                  <strong>ADK:</strong> Karley & Host Agents - Google's Agent
                  Development Kit
                </li>
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
          <p className="hero-sub" style={{ marginBottom: "20px" }}>
            Before running the application locally, ensure you have the
            following installed:
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3>uv Package Manager</h3>
              <p>
                Python package management tool. Install from{" "}
                <a
                  href="https://docs.astral.sh/uv/getting-started/installation/"
                  className="mini-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs.astral.sh
                </a>
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🐍</div>
              <h3>Python 3.13</h3>
              <p>Required version to run a2a-sdk and all agent frameworks</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔑</div>
              <h3>Google API Key</h3>
              <p>
                Create a <code className="code-inline">.env</code> file with
                your API key in the project root
              </p>
            </div>
          </div>
        </section>

        {/* Environment Setup */}
        <section className="section-card highlight">
          <h2 className="section-title">Environment Configuration</h2>
          <p className="hero-sub" style={{ marginBottom: "20px" }}>
            Create a <code className="code-inline">.env</code> file in the root
            of the project directory:
          </p>
          <div className="code-block">
            <code>GOOGLE_API_KEY="your_api_key_here"</code>
          </div>
        </section>

        {/* Running Agents */}
        <section className="section-card">
          <h2 className="section-title">Running the Agents</h2>
          <p className="hero-sub" style={{ marginBottom: "24px" }}>
            Each agent must be run in a separate terminal window. The first time
            you run these commands, uv will create a virtual environment and
            install all necessary dependencies.
          </p>

          <div className="two-col" style={{ gap: "24px" }}>
            {/* Kaitlynn Agent */}
            <div className="usage-section">
              <h3>Terminal 1: Kaitlynn Agent</h3>
              <div className="code-block" style={{ marginTop: "12px" }}>
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
              <div className="code-block" style={{ marginTop: "12px" }}>
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
              <div className="code-block" style={{ marginTop: "12px" }}>
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
              <div className="code-block" style={{ marginTop: "12px" }}>
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
              Once all four agents are running, the Host Agent will launch a
              Streamlit web interface where you can:
            </p>
            <ul>
              <li>Initiate scheduling requests for pickleball games</li>
              <li>View real-time agent-to-agent communication</li>
              <li>
                Monitor the negotiation process across all participant calendars
              </li>
              <li>See the final scheduled time that works for everyone</li>
            </ul>
            <p style={{ marginTop: "16px" }}>
              The terminal outputs will show detailed logs of the orchestration
              process and inter-agent messages.
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
          <a
            href="https://github.com/rubixchain/agentdna/tree/main/examples/multi_agent_system"
            className="cta"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
