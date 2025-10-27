import React, { useState } from 'react';
import ExhibitDemo from './ExhibitDemo';

function App() {
  const [showFooterAbout, setShowFooterAbout] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div style={styles.centerBox}>
        <header style={styles.header}>
          <h1 style={styles.title}>AI-Powered Virtual Museum Guide</h1>
          <p style={styles.subtitle}>
            Your personal guide to culture, art &amp; history.<br />
            Explore exhibits, ask questions, and get instant answers—powered by multimodal AI.
          </p>
        </header>
        <ExhibitDemo styles={styles} />
        <button
          onClick={() => window.location.reload()}
          style={{
            margin: '28px auto 0 auto',
            background: '#23273a',
            color: '#ffd47e',
            border: "1.5px solid #95a1c2",
            borderRadius: 11,
            padding: "9px 32px",
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "1.05rem",
            display: "block"
          }}
        >
          ⬅️ Reset & Return to Home
        </button>
      </div>
      <footer style={styles.footer}>
        <div style={{marginBottom: 5}}>
          <b>Have feedback?</b>
          <a href="mailto:your@email.com" style={styles.footerLink}>Email us</a>
          &nbsp;|&nbsp;
          <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20AI%20Museum%20Guide!" target="_blank" rel="noopener noreferrer" style={styles.footerLink}>
            Share on X/Twitter
          </a>
          &nbsp;|&nbsp;
          <button
            style={{...styles.footerLink, background:"none", border:"none", cursor:"pointer", padding:0, display:"inline"}}
            onClick={() => setShowFooterAbout(v => !v)}
          >About</button>
        </div>
        {showFooterAbout && (
          <div style={{marginTop: 5, color: "#aaa", fontSize: "14px"}}>
            <b>About:</b> This AI-Powered Virtual Museum Guide helps you explore exhibits and get instant answers.  
          </div>
        )}
        <p style={{marginTop: 12}}>
          © 2025 — Created by HARSHITHA MV
        </p>
        <p>
          Made for the Multi Modal AI Hackathon | Indian Institute of Technology (IIT) Mandi
        </p>
      </footer>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    minWidth: '100vw',
    background: 'linear-gradient(120deg, #26293b 0%, #141a24 100%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  centerBox: {
    width: '98vw',
    maxWidth: '580px',
    margin: '7vh auto 0 auto',
    padding: '40px 32px 28px 32px',
    borderRadius: '20px',
    boxShadow: '0 8px 36px rgba(18,24,58,0.11)',
    background: 'rgba(22, 27, 39, 0.98)',
    minHeight: '370px'
  },
  header: {
    marginBottom: '2vh',
    textAlign: 'center'
  },
  title: {
    color: '#f5d373',
    fontSize: '2.35rem',
    fontWeight: 900,
    textAlign: "center",
    letterSpacing: "1px",
    margin: '22px 0 11px 0'
  },
  subtitle: {
    color: '#d9d9d9',
    fontSize: '1.18rem',
    fontWeight: 400,
    marginBottom: 18
  },
  footer: {
    color: "#868994",
    fontSize: "0.98rem",
    marginTop: "auto",
    marginBottom: '18px',
    textAlign: "center"
  },
  footerLink: {
    color: "#61dafb",
    fontWeight: 600,
    textDecoration: "underline",
    margin: "0 5px"
  }
};

export default App;
