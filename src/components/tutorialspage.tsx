import hljs from "highlight.js";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";



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


function TutorialCard1() {
  const snippet = `pip install agent-dna
uv add agent-dna`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">1. Install AgentDNA</h3>
        <p className="hero-sub">
          Before initializing agents, install the AgentDNA package{" "}
        </p>
        <p className="hero-sub">
          Install via pip or UV to start using AgentDNA.
        </p>
      </div>
    </section>
  );
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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">2. Import the SDK</h3>
        <p className="hero-sub">
          Import AgentDNA into your Python environment.
        </p>
        <p className="hero-sub">
          Once installed and imported, you are ready to initialize Host and
          Remote agents.
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
)`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">3. Initialize Host Agent</h3>
        <p className="hero-sub">
          You can have only one Host agent per agentDNA flow.
        </p>
      </div>
    </section>
  );
}

function TutorialCard4() {
  const snippet = `remote = AgentDNA(
  alias="Remote Name",
  role="remote",
  api_key="YOUR_API_KEY"
)`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">4. Initialize Remote Agent</h3>
        <p className="hero-sub">
          You can have multiple remotes, each with its own identity and role.
        </p>
      </div>
    </section>
  );
}

function TutorialCard5() {
  const snippet = `hostEnvelope = host.build(
  original_message="Query from host"
)`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
        </div>
      </div>

      <div className="secure-text">
        <h3 className="secure-title">
          5. Building Outbound Messages as the Host
        </h3>
        <p className="hero-sub">
          Before sending anything to a remote, the host wraps it using build().
        </p>
        <p className="hero-sub">What build() does</p>
        <ul className="list loud">
          <li>Binds this message to the host’s identity.</li>
          <li>Attaches state and workflow context.</li>
          <li>Produces a tamper-evident, verifiable payload.</li>
        </ul>
      </div>
    </section>
  );
}

function TutorialCard6() {
  const snippet = `host_query_verification_info = remote.handle(
  raw_text=<Message payload from host>,
  remote_name="Remote"
)

original_message = host_query_verification_info["original_message"]
host_block =  host_query_verification_info["host_block"]
is_host_block_valid =  host_query_verification_info["host_ok"]
`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
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
  );
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
)`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
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
  );
}

function TutorialCard8() {
  const snippet = `
  response_from_remote_agent = {...}

  verification_info = host.handle(
  resp_parts=response_from_remote_agent,
  original_task=<Query from host>,
  remote_name=<Counter party Agent Info>
)`;

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

          <button className="copy-btn" onClick={handleCopy}>
            Copy
          </button>
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
  );
}


export function TutorialsPage() {
  return (
    <main className="content">
      <section className="section-card install-header">
        <h1 className="hero-title"> Tutorials & Guide </h1>
        <p className="hero-sub">AgentDNA - A Complete Step-by-Step Guide</p>
      </section>

      <section className="section-card highlight">
        <h2 className="section-title">Choose your Agent</h2>

        {/* Full-width paragraph */}
        <p className="tutorial-intro">
          AgentDNA adds continuous identity, trust, governance, and context
          assurance to every agent interaction. This tutorial walks you through
          the full lifecycle:
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
            <p>
              When you sign up for the AgentDNA Beta program, you receive your
              API key via email. If you have not yet signed up, you can request
              beta access here :
              <Link to="https://agentdna.io/beta"> Beta .</Link>
            </p>
            <p>
              Store Your API Key as an Environment Variable. You will reference
              this env variable when initializing your Host and Remote agents.
            </p>
          </div>
        </div>
      </section>

      <section className="section-card highlight">
        <h2 className="section-title">Agents</h2>
        <div className="two-col roles-grid">
          <div>
            <h3> What is Host Agent ?</h3>
            <p>
              The Host is the orchestrator of a workflow. Only host create Agent
              Object & is the owner of workflow.
            </p>
            <ul className="list loud">
              <li>It initiates tasks.</li>
              <li>It coordinates calls between tools, LLMs or other agents.</li>
              <li>
                It is responsible for generating verifiable outbound messages
                using AgentDNA.
              </li>
              <li>It verifies incoming remote responses.</li>
            </ul>
            <p>Typical example of Host</p>
            <ul className="list loud">
              <li>A user using LLM/tool calls</li>
              <li>
                A custom orchestrator that delegates work to several worker
                agents
              </li>
            </ul>
          </div>
          <div>
            <h3>What is Remote Agent ? </h3>
            <p>
              A Remote is a worker tool that receives requests from the host or
              agent.
            </p>
            <ul className="list loud">
              <li>It receives AgentDNA-wrapped messages.</li>
              <li>It verifies authenticity using handle().</li>
              <li>It performs work (LLM call, tool call, computation).</li>
              <li>
                It returns or forwards a signed, provenance-valid response back
                to the Host or other remote agent.
              </li>
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