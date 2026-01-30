import { Link } from "react-router-dom";

function SecureCard1() {
  const snippet = `pip install agent-dna
   uv add agent-dna`;

  {
    /* <code># Installation via pip</code>
<code># Installation via uv</code>
<code>uv add agent-dna</code> */
  }

  const handleCopy = () => {
    navigator.clipboard?.writeText(snippet);
  };

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
            {snippet.split("\n").map((line, idx) => (
              <code key={idx}>{line || " "}</code>
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
        <p className="hero-sub">Add AgentDNA to your environment</p>
      </div>
    </section>
  );
}


export function InstallPage() {
  return (
    <main className="content">
      <section className="section-card install-header">
        <h1 className="hero-title">Installation & Usage</h1>
        <p className="hero-sub">
          AgentDNA is a package that helps in auditing and verifiability of
          agents within a multi-agent communication system.
        </p>
      </section>

      <section className="install-grid"></section>
      <SecureCard1 />
      {/* <SecureCard2 />
      <SecureCard3/> */}
      <section className="section-card two-col highlight">
        <div>
          <h2 className="section-title">
            Secure, verifiable agents out of the box
          </h2>
          <ul className="list loud">
            <li>Unified trust layer for multi-agent systems</li>
            <li>
              DID setup, signed conversation traces, and verification handled
              for you
            </li>
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
        <Link
          className="cta"
          to="https://github.com/rubixchain/agentdna/tree/main"
        >
          View on Github
        </Link>
      </div>
    </main>
  );
}
