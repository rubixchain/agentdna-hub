import { Link } from "react-router-dom";



const cards = [
  {
    title: "Installation and Usage",
    description: "Start integrating AgentDNA quickly.",
    href: "/install",
  },
  {
    title: "AgentDNA Dashboard",
    description: "Manage agents, policies, and contexts.",
    href: "https://dashboard.agentdna.io/",
  },
  {
    title: "Registry",
    description: "See working samples and starter kits.",
    href: "/agents",
  },
  {
    title: "Tutorials",
    description: " A Complete Step-by-Step Guide",
    href: "/tutorials",
  },
  {
    title: "Join the BETA",
    href: "https://agentdna.io/beta",
  },
  {
    title: "Integration Guides",
    description: "Coming Soon",
    href: "#integrations",
  },
];

export function HubPage() {
  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">AgentDNA Hub</h1>
        <p className="hero-sub">
          Explore everything you need to launch with confidence.
        </p>
      </section>

      <section className="hub">
        <div className="hub-grid">
          <Link className="card card-link" to={cards[0].href}>
            <div className="card-body">
              <h3>{cards[0].title}</h3>
              <p>{cards[0].description}</p>
            </div>
          </Link>

          <a className="card card-link" href={cards[1].href}>
            <div className="card-body">
              <h3>{cards[1].title}</h3>
              <p>{cards[1].description}</p>
            </div>
          </a>

           <a className="card card-link" href={cards[2].href}>
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

          {/* <a className="card tall card-link" href={cards[2].href}>
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
          </a> */}

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
  );
}
