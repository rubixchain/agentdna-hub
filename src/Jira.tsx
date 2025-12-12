function JiraPage() {
    return (
      <div className="page">
        <main className="content">
          {/* Hero Section */}
          <section className="section-card highlight">
            <div className="agent-header">
              <div className="agent-icon">🔧</div>
              <div className="agent-info">
                <span className="pill">MCP Agent</span>
                <h1 className="agent-title">Jira MCP Agent</h1>
                <p className="agent-desc">
                  A fully integrated Model Context Protocol (MCP) server and client for Jira Cloud, 
                  enhanced by AgentDNA for end-to-end trust and identity verification.
                </p>
              </div>
            </div>
          </section>
  
          {/* Features Grid */}
          <section className="section-card">
            <h2 className="section-title">Key Features</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔐</div>
                <h3>Secure Automation</h3>
                <p>Automated Jira workflows using MCP tools with built-in security</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✍️</div>
                <h3>Signed Messages</h3>
                <p>End-to-end signed messages via AgentDNA for complete authenticity</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">✅</div>
                <h3>Trust Verification</h3>
                <p>Automatic verification on every server to client round-trip</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">📜</div>
                <h3>Audit Trail</h3>
                <p>Complete audit logs for every Jira tool execution</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🖥️</div>
                <h3>Streamlit UI</h3>
                <p>Interactive interface with conversation history and one-click viewer</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🤖</div>
                <h3>AI-Powered</h3>
                <p>Uses Gemini 2.5 Flash for natural language interpretation</p>
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
            <a href="https://github.com/yourusername/jira-mcp-agent" className="cta">
              View on GitHub
            </a>
          </div>
        </main>
      </div>
    );
  }
export default JiraPage;