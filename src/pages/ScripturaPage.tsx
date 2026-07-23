import { Link } from "react-router-dom";
import Header from "../components/Header";
import ScripturaFeatures from "../components/ScripturaFeatures";
import iconPencil from "../images/figma/scriptura/icon_pencil.svg";
import iconCheck from "../images/figma/scriptura/icon_check.svg";
import iconBookAlt from "../images/figma/scriptura/icon_book_alt.svg";
import roadmapDot from "../images/figma/scriptura/roadmap_dot.svg";
import roadmapLine from "../images/figma/scriptura/roadmap_line.svg";
import "../App.css";
import "./ScripturaPage.css";

const IMPACT_COLUMNS = [
  {
    icon: iconPencil,
    title: "For authors",
    body: "Get reviews and replications that genuinely strengthen your paper — and pay in shares of credit, not the $2,000–$10,000 fees legacy open access charges. Keep your copyright, publish openly, and build a real track record instead of borrowing a journal's prestige.",
  },
  {
    icon: iconCheck,
    title: "For reviewers",
    body: "Checking and reproducing research finally earns durable, citable credit. Where review today is unpaid and invisible and replication competes with the original for citations, here both earn a verified stake in the work they make better.",
  },
  {
    icon: iconBookAlt,
    title: "For readers and industry",
    body: "Judge work by whether it holds up — replication counts, review status, and real usage — rather than the logo on the journal. Search 250M+ works at fine-grained precision and read any of them free, no account required.",
  },
];

const ROADMAP = [
  { date: "June 2026", milestone: "Alpha version & testing with early users" },
  { date: "Dec 2026", milestone: "Beta open trials" },
  { date: "June 2027", milestone: "Full rollout" },
  { date: "Dec 2027", milestone: "AI based premium features" },
];

function ScripturaPage() {
  return (
    <div className="App">
      {/* id="intro" drives the Header's transparent-over-hero scroll behavior */}
      <div className="ScripturaHero" id="intro">
        <Header />
        <h1 className="ScripturaHero-title">Scriptura.</h1>
        <p className="ScripturaHero-subtitle">The open publishing platform for academic research.</p>
        <p className="ScripturaHero-description">
          Publish preprints, trade peer review for credit, commission replications, and verify scholarly contribution,
          all on one open record. No paywalls. No article fees. The credit goes to the people who do the work.
        </p>
      </div>

      <div className="ScripturaBody">
        <div className="ScripturaSection">
          <div className="section-heading">/Features</div>
          <h2 className="ScripturaSection-title">The new standard for publishing</h2>
          <ScripturaFeatures />
        </div>

        <div className="ScripturaSection">
          <div className="section-heading">/Impact</div>
          <h2 className="ScripturaSection-title">A fairer deal for everyone who does the work</h2>
          <p className="ScripturaSection-subtitle">
            Legacy publishing rewards prestige and captures the value. Scriptura rewards the work itself — writing,
            reviewing, replicating, and building on research — and keeps every paper open to anyone.
          </p>
          <div className="ScripturaImpact-columns">
            {IMPACT_COLUMNS.map((column) => (
              <div className="ScripturaImpact-column" key={column.title}>
                <div className="ScripturaImpact-icon">
                  <img src={column.icon} alt="" />
                </div>
                <p className="ScripturaImpact-title">{column.title}</p>
                <p className="ScripturaImpact-body">{column.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ScripturaSection">
          <div className="section-heading">/Roadmap</div>
          <div className="ScripturaRoadmap">
            {ROADMAP.map((entry) => (
              <div className="ScripturaRoadmap-step" key={entry.date}>
                <p className="ScripturaRoadmap-date">{entry.date}</p>
                <div className="ScripturaRoadmap-line">
                  <img className="ScripturaRoadmap-dot" src={roadmapDot} alt="" />
                  <img className="ScripturaRoadmap-rule" src={roadmapLine} alt="" />
                </div>
                <p className="ScripturaRoadmap-milestone">{entry.milestone}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ScripturaCta">
          <h2 className="ScripturaCta-title">Ready to reshape academic publishing?</h2>
          <p className="ScripturaCta-subtitle">Join researchers, labs, and institutions already building on Scriptura.</p>
          <div className="ScripturaCta-actions">
            <Link to="/beta-signup" className="ScripturaCta-primary">Start publishing →</Link>
            {/* TODO: wire up a demo-request destination */}
            <button type="button" className="ScripturaCta-secondary">Request a demo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScripturaPage;
