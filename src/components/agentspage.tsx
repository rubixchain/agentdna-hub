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
          <a className="card card-link" href={agents[0].path}>
            <div className="card-body">
              <h3>{agents[0].title}</h3>
              <p>{agents[0].description}</p>
            </div>
          </a>

          <a className="card card-link" href={agents[1].path}>
            <div className="card-body">
              <h3>{agents[1].title}</h3>
              <p>{agents[1].description}</p>
            </div>
          </a>

              <a className="card card-link" href={agents[2].path}>
            <div className="card-body">
              <h3>{agents[2].title}</h3>
              <p>{agents[2].description}</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
