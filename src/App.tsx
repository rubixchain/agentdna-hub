import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import logo from "./assets/a4d2293fc03eb10393506a75b7c4bd9ad839d7ba-efzz4AxP.png";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github-dark.css";
import "highlight.js/styles/atom-one-dark.css";
import { GithubAgentPage } from "./agents/github.agent";
import { JiraPage } from "./agents/Jira.agent";
import { MultiAgentSystemPage } from "./agents/multi.agent";
import { HubPage } from "./components/hubpage";
import { InstallPage } from "./components/installpage";
import { TutorialsPage } from "./components/tutorialspage";
import { AgentsPage } from "./components/agentspage";
import Footer from "./components/Footer";
import { MCPGoogleSheetsPage } from "./agents/gsheet.agent";
import { MCPYahooFinancePage } from "./agents/yahoo.agent";

hljs.registerLanguage("python", python);

const NAV_LINKS = [
  { name: "Hub", to: "/" },
  { name: "Installation", to: "/install" },
  { name: "Agents", to: "/agents" },
  { name: "Tutorials", to: "/tutorials" },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-2xl border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AgentDNA Logo" className="h-10 w-auto object-contain" />
        </div>

        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.name}
                to={link.to}
                className={`font-label uppercase tracking-[0.1em] text-xs transition-all duration-300 ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant opacity-60 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <Link
          to="https://agentdna.io/beta"
          className="bg-primary text-[#00201b] font-label font-bold py-2 px-6 rounded-full text-sm hover:shadow-[0_0_20px_rgba(68,252,221,0.4)] transition-all active:scale-95"
        >
          Beta Access
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="page" style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<HubPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/agents/jira" element={<JiraPage />} />
          <Route path="/agents/multi-agent-system" element={<MultiAgentSystemPage />} />
          <Route path="/agents/github" element={<GithubAgentPage />} />
          <Route path="/agents/gsheet" element={<MCPGoogleSheetsPage />} />
          <Route path="/agents/yfinance" element={<MCPYahooFinancePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
