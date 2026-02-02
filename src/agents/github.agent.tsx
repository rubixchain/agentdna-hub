export function GithubAgentPage() {
  return (
    <div className="page">
      <main className="content">

        {/* Intro */}
       <section className="section-card highlight">
  <div className="agent-header">
    <div className="agent-icon">💻</div>
    <div className="agent-info">
      <h1 className="agent-title">GitHub MCP Agent</h1>
      <p className="agent-desc">
        A simple Agent to GitHub MCP demo showcasing secure repository
        interactions using AgentDNA, signed MCP envelopes, and a
        Streamlit-based client UI.
      </p>
    </div>
  </div>
</section>

            {/* Install Dependencies */}
        <section className="section-card">
          <h2 className="section-title">Install Dependencies</h2>

          <h4>Setup a Python virtual environment</h4>
          <p>
            Inside the Github MCP example directory, run the following to
            bootstrap virtual environment files under the directory <code>venv</code>:
          </p>

          <div className="code-block">
            <code># Use `python3`, if `python` is configured as Python2</code>
            <code>python -m venv venv</code>
          </div>

          <h4>Activate the virtual environment</h4>

          <p><strong>Windows (Powershell):</strong></p>
          <div className="code-block">
            <code>.\venv\Scripts\Activate.ps1</code>
          </div>

          <p><strong>Unix (Ubuntu/Mac OS):</strong></p>
          <div className="code-block">
            <code># Provide permission to the activate script</code>
            <code>chmod +x ./venv/bin/activate</code>
            <code>./venv/bin/activate</code>
          </div>

          <h4>Install dependencies</h4>
          <div className="code-block">
            <code>pip install -r requirements.txt</code>
          </div>

          <p className="hero-sub">
            Some systems have both <code>pip</code> and <code>pip3</code>
            representing Python2 and Python3 respectively. To verify, run{" "}
            <code>pip --version</code> and check the Python version. Since this
            project relies on Python3, if <code>pip --version</code> shows
            Python2, consider using <code>pip3</code>. In such instances,
            consider using <code>python3</code> CLI where <code>python</code> is mentioned.
          </p>
        </section>

        {/* Start the Demo */}
        <section className="section-card highlight">
          <h2 className="section-title">Start the Demo</h2>

          <h4>Create the <code>.env</code> file</h4>
          <div className="code-block">
            <code>cp .env.sample .env</code>
          </div>

          <p>Set the environment variables accordingly.</p>

          <h4>Run the following to start the demo</h4>
          <div className="code-block">
            <code>python -m streamlit run app.py</code>
          </div>
        </section>

          <div className="cta-container">
          <a
            href="https://github.com/rubixchain/agentdna/tree/main/examples/github"
            className="cta"
          >
            View on GitHub
          </a>
        </div>

      </main>
    </div>
  );
}