import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import logo from "./assets/a4d2293fc03eb10393506a75b7c4bd9ad839d7ba-efzz4AxP.png";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github-dark.css";
import { useEffect, useRef } from "react";
import "highlight.js/styles/atom-one-dark.css";
import { GithubAgentPage } from "./github.agent";
import { JiraPage } from "./Jira.agent";
import { MultiAgentSystemPage } from "./multi.agent";
import { HubPage } from "./components/hubpage";
import { InstallPage } from "./components/installpage";
import { TutorialsPage } from "./components/tutorialspage";
import { AgentsPage } from "./components/agentspage";





function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <header className="nav">
          <div className="brand">
            <img src={logo} alt="AgentDNA Logo" className="brand-logo" />
          </div>
          {/* <div className="nav-actions">
            <Link className="nav-link" to="/">
              Hub
            </Link>
            <Link className="nav-link" to="/install">
              Installation
            </Link>
            <Link className="nav-link" to="/agents">
              Agents
            </Link>
            <Link className="outline" to="/install">
              Get Started
            </Link>
          </div> */}
        </header>

        <Routes>
          <Route path="/" element={<HubPage/>} />
          <Route path="/install" element={<InstallPage/>} />
          <Route path="/agents" element={<AgentsPage/>} />
          <Route path="/agents/jira" element={<JiraPage/>} />
          <Route path="/agents/multi-agent-system" element={<MultiAgentSystemPage />} />
          <Route path="/agents/github" element={<GithubAgentPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
        </Routes>
      </div>
      <footer className="footer">© 2026 AgentDNA. All rights reserved.</footer>
    </BrowserRouter>
  );
}

export default App;
