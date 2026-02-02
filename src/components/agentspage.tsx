const agents = [
  {
    title: "Multi Agent System",
    path: "/agents/multi-agent-system",
    description:
      "A multi-agent application demonstrating how to orchestrate conversations between different Agents",
  },
  {
    title: "Jira Agent",
    path: "/agents/jira",
    description:
      "An agent that integrates with Jira to manage tasks and projects.",
  },
  {
    title: "Github Agent",
    path: "/agents/github",
    description:
      "An agent that coordinates with Github MCP to create Issues and Pull Requests",
  },
  {
    title: "Google Sheets Agent",
    path: "/agents/gsheet",
    description:
      "An agent that coordinates with Github MCP to create Issues and Pull Requests",
  },
  {
    title: "Yahoo Finance Agent",
    path: "/agents/yfinance",
    description:
      " An agent that coordinates with Yahoo MCP using the agentdna package.",
  },

];

export function AgentsPage() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">Agent Registry</h1>
        <p className="hero-sub">Browse agents and pick a starting point.</p>
      </section>

      <section className="hub">
        <div className="hub-grid">
          {agents.map((agent) => (
            <a key={agent.path} className="card card-link" href={agent.path}>
              <div className="card-body">
                <h3>{agent.title}</h3>
                <p>{agent.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
