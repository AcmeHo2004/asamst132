/* SVG visuals: map, mechanism diagram, surveillance flow */

function ChinaMap() {
  return (
    <img
      src="uploads/xinjiang-map-upload.png?v=20260421-2"
      alt="Map of Xinjiang and surrounding region highlighting strategic borders, Muslim population concentration, and key cities."
      style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
    />
  );
}

function MechanismDiagram() {
  // Horizontal flow: narrative → law → surveillance → detention → economic control
  const nodes = [
    { k: "I", t: "Narrative", s: "Terrorism · Extremism · Separatism" },
    { k: "II", t: "Law", s: "Vague categories · discretionary power" },
    { k: "III", t: "Surveillance", s: "Biometrics · predictive policing" },
    { k: "IV", t: "Detention", s: "Internment · re-education" },
    { k: "V", t: "Economic Control", s: "Labor transfers · mobility" },
  ];
  return (
    <svg viewBox="0 0 1200 380" style={{width: '100%', height: 'auto', display: 'block'}}>
      <text x="20" y="28" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="2">FIG. 05  ·  OPERATIONAL MECHANISM OF STATE-LED ISLAMOPHOBIA</text>
      <line x1="20" y1="50" x2="1180" y2="50" stroke="#0A0A0A" strokeWidth="1.5" />

      {/* Top labels */}
      <text x="20" y="78" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="1.5">DISCURSIVE LAYER</text>
      <text x="480" y="78" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="1.5">INSTITUTIONAL LAYER</text>
      <text x="960" y="78" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="1.5">MATERIAL LAYER</text>

      {/* Layer brackets */}
      <line x1="20" y1="88" x2="440" y2="88" stroke="#8B1A1A" strokeWidth="0.8" />
      <line x1="480" y1="88" x2="920" y2="88" stroke="#8B1A1A" strokeWidth="0.8" />
      <line x1="960" y1="88" x2="1180" y2="88" stroke="#8B1A1A" strokeWidth="0.8" />

      {/* Nodes */}
      {nodes.map((n, i) => {
        const x = 60 + i * 230;
        return (
          <g key={i}>
            <rect x={x} y={130} width="190" height="110" fill="#F5F2EA" stroke="#0A0A0A" strokeWidth="1.2" />
            <text x={x + 14} y={152} fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="1.5">{n.k}</text>
            <text x={x + 14} y={185} fontFamily="Source Serif 4, Georgia, serif" fontSize="22" fill="#0A0A0A" fontStyle="italic">{n.t}</text>
            <text x={x + 14} y={212} fontFamily="Inter, sans-serif" fontSize="11" fill="#4A4A46">
              {n.s}
            </text>
            {/* Arrow to next */}
            {i < nodes.length - 1 && (
              <g>
                <line x1={x + 190} y1={185} x2={x + 230} y2={185} stroke="#0A0A0A" strokeWidth="1.2" />
                <polygon points={`${x + 230},185 ${x + 222},181 ${x + 222},189`} fill="#0A0A0A" />
              </g>
            )}
          </g>
        );
      })}

      {/* Feedback loop */}
      <path
        d="M 1150 240 Q 1170 300 1100 330 Q 600 360 150 330 Q 80 320 70 240"
        fill="none"
        stroke="#8B1A1A"
        strokeWidth="1"
        strokeDasharray="3 4"
      />
      <polygon points="70,240 66,252 74,252" fill="#8B1A1A" />
      <text x="580" y="355" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="1.5" textAnchor="middle">
        FEEDBACK: DATA FROM ENFORCEMENT RECONFIGURES NARRATIVE & LAW
      </text>
    </svg>
  );
}

function SurveillanceDiagram() {
  // Three-tier: Data → Flagging → Enforcement
  return (
    <svg viewBox="0 0 1200 520" style={{width: '100%', height: 'auto', display: 'block'}}>
      <text x="20" y="28" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="2">FIG. 06  ·  SURVEILLANCE PIPELINE  ·  DATA, CLASSIFICATION, ENFORCEMENT</text>
      <line x1="20" y1="50" x2="1180" y2="50" stroke="#0A0A0A" strokeWidth="1.5" />

      {/* Column headers */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="2" fill="#0A0A0A">
        <text x="80" y="90">01  INPUTS</text>
        <text x="500" y="90">02  CLASSIFICATION</text>
        <text x="920" y="90">03  ENFORCEMENT</text>
      </g>
      <line x1="80" y1="100" x2="380" y2="100" stroke="#0A0A0A" strokeWidth="0.8" />
      <line x1="500" y1="100" x2="820" y2="100" stroke="#0A0A0A" strokeWidth="0.8" />
      <line x1="920" y1="100" x2="1160" y2="100" stroke="#0A0A0A" strokeWidth="0.8" />

      {/* Inputs column */}
      {[
        "Facial imagery · iris",
        "Voice samples",
        "Device / SIM identifiers",
        "Location history",
        "Communication metadata",
        "Relationship graph",
        "Religious practice",
        "Travel abroad",
        "Electricity usage",
      ].map((t, i) => (
        <g key={i}>
          <circle cx="90" cy={140 + i * 36} r="3" fill="#8B1A1A" />
          <text x="104" y={144 + i * 36} fontFamily="Source Serif 4, Georgia, serif" fontSize="14" fill="#1C1B18">{t}</text>
          <line x1="360" y1={140 + i * 36} x2="500" y2={260} stroke="#C9C2B0" strokeWidth="0.5" />
        </g>
      ))}

      {/* Classification core */}
      <g>
        <rect x="500" y="200" width="320" height="160" fill="#F5F2EA" stroke="#0A0A0A" strokeWidth="1.5" />
        <text x="520" y="228" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#8B1A1A" letterSpacing="2">RISK PLATFORM</text>
        <text x="520" y="262" fontFamily="Source Serif 4, Georgia, serif" fontSize="24" fontStyle="italic" fill="#0A0A0A">Integrated Joint</text>
        <text x="520" y="290" fontFamily="Source Serif 4, Georgia, serif" fontSize="24" fontStyle="italic" fill="#0A0A0A">Operations Platform</text>
        <line x1="520" y1="306" x2="800" y2="306" stroke="#C9C2B0" strokeWidth="0.8" />
        <text x="520" y="328" fontFamily="Inter, sans-serif" fontSize="12" fill="#4A4A46">Assigns risk categories,</text>
        <text x="520" y="346" fontFamily="Inter, sans-serif" fontSize="12" fill="#4A4A46">produces intervention lists.</text>
      </g>

      {/* Connection to enforcement */}
      <line x1="820" y1="280" x2="920" y2={140} stroke="#0A0A0A" strokeWidth="1" />
      <line x1="820" y1="280" x2="920" y2={220} stroke="#0A0A0A" strokeWidth="1" />
      <line x1="820" y1="280" x2="920" y2={300} stroke="#0A0A0A" strokeWidth="1" />
      <line x1="820" y1="280" x2="920" y2={380} stroke="#0A0A0A" strokeWidth="1" />

      {/* Enforcement column */}
      {[
        { t: "Checkpoint stop", s: "Physical interdiction" },
        { t: "Home visit", s: "Cadre homestay program" },
        { t: "Detention", s: "Transformation-through-education" },
        { t: "Labor transfer", s: "Assigned industrial placement" },
      ].map((e, i) => (
        <g key={i}>
          <rect x="920" y={120 + i * 80} width="240" height="60" fill="#F5F2EA" stroke="#0A0A0A" strokeWidth="1" />
          <text x="938" y={145 + i * 80} fontFamily="Source Serif 4, Georgia, serif" fontSize="16" fill="#0A0A0A">{e.t}</text>
          <text x="938" y={165 + i * 80} fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="1">{e.s}</text>
        </g>
      ))}

      {/* Footnote */}
      <line x1="20" y1="470" x2="1180" y2="470" stroke="#C9C2B0" strokeWidth="0.5" />
      <text x="20" y="492" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="1.2">
        DIAGRAM ADAPTED FROM HUMAN RIGHTS WATCH, “CHINA’S ALGORITHMS OF REPRESSION” (2019); OHCHR XINJIANG ASSESSMENT (2022).
      </text>
    </svg>
  );
}

function ArchivalPlaceholder({ label, detail, aspect = "wide" }) {
  return (
    <div className={`figure ${aspect}`}>
      <div className="stripes" />
      <div style={{position:'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: 32}}>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: 10, letterSpacing: '0.2em', color: '#6B675E',
          padding: '6px 10px', border: '1px solid #C9C2B0', background: 'rgba(245,242,234,0.8)',
          textTransform: 'uppercase'
        }}>
          ARCHIVAL IMAGE · PLACEHOLDER
        </div>
        <div style={{fontFamily: 'Source Serif 4, Georgia, serif', fontSize: 18, fontStyle: 'italic', color: '#4A4A46', marginTop: 14, maxWidth: 360}}>
          {label}
        </div>
        {detail && <div style={{fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: '#8a8577', marginTop: 8, letterSpacing: '0.08em'}}>{detail}</div>}
      </div>
      <div className="label-strip">
        <span>{label}</span>
        <span>PLACEHOLDER</span>
      </div>
    </div>
  );
}

Object.assign(window, { ChinaMap, MechanismDiagram, SurveillanceDiagram, ArchivalPlaceholder });
