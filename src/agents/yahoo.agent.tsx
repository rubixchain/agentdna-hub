export function MCPYahooFinancePage() {
  return (
    <div className="page">
      <main className="content">
        {/* Hero */}
        <section className="section-card highlight">
          <div className="agent-header">
            <div className="agent-icon">📈</div>
            <div className="agent-info">
              <h1 className="agent-title">Yahoo Finance MCP Demo</h1>
              <p className="agent-desc">
                This demo represents the use of the agentdna package for a simple
                Agent to Yahoo MCP Architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-card">
          <h2 className="section-title">What This Demo Does</h2>
          <p className="hero-sub">
            A Streamlit-based demo showcasing an Agent to Yahoo MCP architecture
            built using the agentdna package.
          </p>
        </section>

        {/* Install Dependencies */}
        <section className="section-card highlight">
          <h2 className="section-title">Install Dependencies</h2>

          <div className="usage-section">
            <h3>Setup a Python Virtual Environment</h3>
            <div className="code-block">
              <code># Use python3 if python points to Python2</code>
              <code>python -m venv venv</code>
            </div>
          </div>

          <div className="usage-section">
            <h3>Activate the Virtual Environment</h3>
            <div className="code-block">
              <code># Windows (Powershell)</code>
              <code>.\venv\Scripts\Activate.ps1</code>
              <code></code>
              <code># Unix (Ubuntu / Mac OS)</code>
              <code>chmod +x ./venv/bin/activate</code>
              <code>./venv/bin/activate</code>
            </div>
          </div>

          <div className="usage-section">
            <h3>Install Required Packages</h3>
            <div className="code-block">
              <code>pip install -r requirements.txt</code>
            </div>
            <p style={{ marginTop: "12px" }}>
              If <code className="code-inline">pip</code> points to Python2, use{" "}
              <code className="code-inline">pip3</code> instead after verifying
              with <code className="code-inline">pip --version</code>.
            </p>
          </div>
        </section>

        {/* Environment Setup */}
        <section className="section-card">
          <h2 className="section-title">Environment Setup</h2>
          <p className="hero-sub">
            Create the environment file and configure the required variables.
          </p>
          <div className="code-block">
            <code>cp .env.sample .env</code>
          </div>
        </section>

        {/* Running the Demo */}
        <section className="section-card highlight">
          <h2 className="section-title">Start the Demo</h2>
          <div className="code-block">
            <code>python -m streamlit run app.py</code>
          </div>
        </section>
      </main>
    </div>
  );
}
