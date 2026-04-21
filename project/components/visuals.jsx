/* SVG visuals: map, mechanism diagram, surveillance flow */

function ChinaMap() {
  // Stylized editorial map — simplified China outline with Xinjiang highlighted.
  // Hand-authored path set; no external data.
  return (
    <svg viewBox="0 0 800 520" style={{width: '100%', height: 'auto', display: 'block'}} aria-label="Map of China with Xinjiang region highlighted">
      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#8B1A1A" strokeWidth="1.2" opacity="0.55" />
        </pattern>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="8" height="8">
          <circle cx="1" cy="1" r="0.7" fill="#4A4A46" opacity="0.5" />
        </pattern>
      </defs>

      {/* Graticule */}
      <g stroke="#C9C2B0" strokeWidth="0.5" opacity="0.5">
        {Array.from({length: 10}).map((_, i) => (
          <line key={`v${i}`} x1={80 * i} y1="0" x2={80 * i} y2="520" />
        ))}
        {Array.from({length: 7}).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={80 * i} x2="800" y2={80 * i} />
        ))}
      </g>

      {/* China outline (simplified, stylized — not geographically precise) */}
      <path
        d="M 120 180 L 165 140 L 220 130 L 280 145 L 340 130 L 410 140 L 470 160 L 520 150 L 580 170 L 640 195 L 695 210 L 720 245 L 735 295 L 720 340 L 680 365 L 640 380 L 605 410 L 555 420 L 500 425 L 450 430 L 400 420 L 355 405 L 315 395 L 275 380 L 240 355 L 210 330 L 185 305 L 160 275 L 140 240 L 125 210 Z"
        fill="url(#dots)"
        stroke="#1C1B18"
        strokeWidth="1.2"
      />

      {/* Xinjiang — the highlighted region, roughly NW China */}
      <path
        d="M 130 185 L 170 148 L 225 138 L 290 152 L 330 175 L 335 215 L 320 250 L 290 270 L 240 275 L 200 265 L 165 250 L 138 220 Z"
        fill="url(#hatch)"
        stroke="#8B1A1A"
        strokeWidth="1.8"
      />

      {/* Capital dot — Ürümqi */}
      <g>
        <circle cx="245" cy="210" r="3.5" fill="#8B1A1A" />
        <line x1="245" y1="210" x2="245" y2="170" stroke="#8B1A1A" strokeWidth="0.8" />
        <text x="248" y="164" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#1C1B18" letterSpacing="1.5">ÜRÜMQI</text>
      </g>

      {/* Beijing reference */}
      <g>
        <circle cx="560" cy="220" r="2.5" fill="#1C1B18" />
        <line x1="560" y1="220" x2="560" y2="195" stroke="#1C1B18" strokeWidth="0.5" />
        <text x="564" y="190" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1.2">BEIJING</text>
      </g>

      {/* Region label */}
      <g>
        <line x1="230" y1="210" x2="230" y2="320" stroke="#8B1A1A" strokeWidth="0.6" strokeDasharray="2 3" />
        <text x="235" y="338" fontFamily="Source Serif 4, Georgia, serif" fontSize="20" fill="#8B1A1A" fontStyle="italic">Xinjiang</text>
        <text x="235" y="356" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1.5">UYGHUR AUTONOMOUS REGION</text>
        <text x="235" y="371" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1.5">1,664,897 KM²  ·  25.85M PEOPLE</text>
      </g>

      {/* Border labels */}
      <text x="90" y="200" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6B675E" letterSpacing="1" opacity="0.7">KAZ</text>
      <text x="100" y="260" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6B675E" letterSpacing="1" opacity="0.7">KGZ</text>
      <text x="130" y="305" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6B675E" letterSpacing="1" opacity="0.7">TJK</text>
      <text x="165" y="340" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#6B675E" letterSpacing="1" opacity="0.7">AFG · PAK</text>

      {/* Compass / scale */}
      <g transform="translate(700, 440)">
        <circle cx="0" cy="0" r="16" fill="none" stroke="#1C1B18" strokeWidth="0.7" />
        <line x1="0" y1="-16" x2="0" y2="16" stroke="#1C1B18" strokeWidth="0.7" />
        <line x1="-16" y1="0" x2="16" y2="0" stroke="#1C1B18" strokeWidth="0.7" />
        <text x="0" y="-20" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#1C1B18" textAnchor="middle">N</text>
      </g>

      {/* Legend */}
      <g transform="translate(40, 430)">
        <text fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#1C1B18" letterSpacing="1.5" y="0">LEGEND</text>
        <rect x="0" y="12" width="22" height="10" fill="url(#hatch)" stroke="#8B1A1A" strokeWidth="1" />
        <text x="30" y="21" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1">XINJIANG UYGHUR A.R.</text>
        <rect x="0" y="30" width="22" height="10" fill="url(#dots)" stroke="#1C1B18" strokeWidth="1" />
        <text x="30" y="39" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1">PEOPLE'S REPUBLIC OF CHINA</text>
        <circle cx="11" cy="52" r="3" fill="#8B1A1A" />
        <text x="30" y="55" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#4A4A46" letterSpacing="1">REGIONAL CAPITAL</text>
      </g>

      {/* Figure number */}
      <text x="40" y="30" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#6B675E" letterSpacing="2">FIG. 01  ·  TERRITORIAL CONTEXT</text>
    </svg>
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
      <text x="20" y="28" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="2">FIG. 02  ·  OPERATIONAL MECHANISM OF STATE-LED ISLAMOPHOBIA</text>
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
      <text x="20" y="28" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#6B675E" letterSpacing="2">FIG. 03  ·  SURVEILLANCE PIPELINE  ·  DATA, CLASSIFICATION, ENFORCEMENT</text>
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
