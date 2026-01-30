export function MCPGoogleSheetsPage() {
  return (
    <div className="page">
      <main className="content">
        {/* Hero */}
        <section className="section-card highlight">
          <div className="agent-header">
            <div className="agent-icon">📊</div>
            <div className="agent-info">
              <h1 className="agent-title">MCP for Google Sheets</h1>
              <p className="agent-desc">
                A Streamlit demo that runs a local MCP server for Google Sheets and invokes its tools directly from the UI using stdio-based
                communication.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-card">
          <h2 className="section-title">What This Demo Does</h2>
          <p className="hero-sub">
            This project demonstrates how to spin up a local MCP server that
            interfaces with Google Sheets and expose its tools to a Streamlit UI.
            The server process is managed automatically and communicates via
            standard input and output.
          </p>
        </section>

        {/* Repo Structure */}
        <section className="section-card highlight">
          <h2 className="section-title">Repository Structure</h2>
          <div className="code-block">
            <code>mcp-gsheets/</code>
            <code>├─ credentials/</code>
            <code>│  └─ service_account.json</code>
            <code>├─ app.py</code>
            <code>├─ server.py</code>
            <code>├─ requirements.txt</code>
            <code>├─ .env.example</code>
          </div>
        </section>

        {/* Prerequisites */}
        <section className="section-card">
          <h2 className="section-title">Prerequisites</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🐍</div>
              <h3>Python 3.9+</h3>
              <p>Required to run the Streamlit app and MCP server</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Service Account</h3>
              <p>
                Google Cloud service account JSON with access to Google Sheets
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🧩</div>
              <h3>Sheets API Enabled</h3>
              <p>
                Google Sheets API must be enabled in the GCP project tied to the
                service account
              </p>
            </div>
          </div>
        </section>

        {/* Setup */}
        <section className="section-card highlight">
          <h2 className="section-title">Environment Setup</h2>

          <div className="usage-section">
            <h3>Create a Virtual Environment</h3>
            <div className="code-block">
              <code>python -m venv .venv</code>
              <code>source .venv/bin/activate</code>
              <code># .venv\Scripts\activate (Windows)</code>
            </div>
          </div>

          <div className="usage-section">
            <h3>Install Dependencies</h3>
            <div className="code-block">
              <code>pip install -r requirements.txt</code>
            </div>
          </div>
        </section>

        {/* Environment Variables */}
        <section className="section-card">
          <h2 className="section-title">Environment Configuration</h2>
          <p className="hero-sub">
            Copy the example environment file and populate it with valid values.
          </p>
          <div className="code-block">
            <code>cp .env.example .env</code>
          </div>
        </section>

        {/* Google Sheets Access */}
        <section className="section-card highlight">
          <h2 className="section-title">Google Sheets Access</h2>
          <ul>
            <li>
              Place your service account key at{" "}
              <code className="code-inline">
                credentials/service_account.json
              </code>
            </li>
            <li>
              Share the target Google Sheet with the service account email found
              under <code className="code-inline">client_email</code>
            </li>
            <li>
              Ensure the sheet has the expected header row or start with an empty
              tab
            </li>
          </ul>
        </section>

        {/* Running */}
        <section className="section-card">
          <h2 className="section-title">Running the Demo</h2>
          <p className="hero-sub">
            This is the primary and intended way to run the application.
          </p>
          <div className="code-block">
            <code>streamlit run app.py</code>
          </div>
          <p style={{ marginTop: "12px" }}>
            The Streamlit app will automatically spawn the MCP server process
            defined in <code className="code-inline">server.py</code>.
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="section-card highlight">
          <h2 className="section-title">Troubleshooting</h2>

          <div className="usage-section">
            <h3>Missing AGENTDNA_API_KEY</h3>
            <p>
              Set <code className="code-inline">AGENTDNA_API_KEY</code> in your{" "}
              <code className="code-inline">.env</code> file. You must sign up to
              acquire a valid key.
            </p>
          </div>

          <div className="usage-section">
            <h3>Google Authentication Errors</h3>
            <ul>
              <li>
                Confirm{" "}
                <code className="code-inline">
                  GOOGLE_APPLICATION_CREDENTIALS=credentials/service_account.json
                </code>
              </li>
              <li>Ensure the sheet is shared with the service account</li>
              <li>Verify Google Sheets API is enabled</li>
            </ul>
          </div>

          <div className="usage-section">
            <h3>Header Row Mismatch</h3>
            <p>
              Use a fresh sheet tab to allow the server to initialize the
              expected schema automatically.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="cta-container">
          <a
            href="https://github.com/rubixchain/agentdna/tree/main/examples/google_sheets"
            className="cta"
          >
            View on GitHub
          </a>
        </div>
      </main>
    </div>
  );
}
