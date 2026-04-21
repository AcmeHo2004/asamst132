/* App shell: topbar, tweaks panel, compose sections */

function Topbar({ activeSection }) {
  const items = [
    { id: "preface", label: "Preface" },
    { id: "profile", label: "Country" },
    { id: "framing", label: "Framing" },
    { id: "mechanism", label: "Mechanism" },
    { id: "surveillance", label: "Surveillance" },
    { id: "media", label: "Media" },
    { id: "response", label: "Response" },
    { id: "scope", label: "Scope" },
    { id: "conclusion", label: "Conclusion" },
  ];
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="mast">
          <span className="dot" />
          <span>Group 01 · ASAMST 132</span>
          <span style={{color: 'var(--muted)'}}>· Editorial Research Site</span>
        </div>
        <nav className="topbar-nav">
          {items.map(it => (
            <a
              key={it.id}
              href={`#${it.id}`}
              className={activeSection === it.id ? "active" : ""}
            >
              {it.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function TweaksPanel({ visible, tweaks, setTweaks }) {
  if (!visible) return null;
  const accents = [
    { k: "oxblood", v: "#8B1A1A" },
    { k: "navy",    v: "#1E3A5F" },
    { k: "ochre",   v: "#A8611C" },
    { k: "forest",  v: "#2F4A33" },
  ];
  return (
    <div className="tweaks-panel">
      <h5>
        <span>Tweaks</span>
        <span className="dot" />
      </h5>

      <div className="row">
        <span>Accent</span>
        <div className="swatches">
          {accents.map(a => (
            <div
              key={a.k}
              className={`sw ${tweaks.accent === a.k ? 'active' : ''}`}
              style={{background: a.v}}
              onClick={() => setTweaks({ accent: a.k })}
            />
          ))}
        </div>
      </div>

      <div className="row">
        <span>Dark mode</span>
        <div
          className={`toggle ${tweaks.dark ? 'on' : ''}`}
          onClick={() => setTweaks({ dark: !tweaks.dark })}
        />
      </div>

      <div className="row">
        <span>Serif headings</span>
        <div
          className={`toggle ${tweaks.serif ? 'on' : ''}`}
          onClick={() => setTweaks({ serif: !tweaks.serif })}
        />
      </div>

      <div className="row">
        <span>Density</span>
        <div
          style={{fontFamily:'var(--mono)', fontSize: 10, cursor: 'pointer', color: 'var(--ink)'}}
          onClick={() => setTweaks({ density: tweaks.density === 'loose' ? 'tight' : 'loose' })}
        >
          {tweaks.density.toUpperCase()} ↔
        </div>
      </div>

      <div style={{marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--rule)', fontSize: 10, color: 'var(--muted)', letterSpacing: '0.1em'}}>
        TOGGLE TWEAKS TO HIDE
      </div>
    </div>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "oxblood",
  "dark": false,
  "serif": true,
  "density": "loose"
}/*EDITMODE-END*/;

const ACCENT_MAP = {
  oxblood: { base: "#8B1A1A", dark: "#6B1212" },
  navy:    { base: "#1E3A5F", dark: "#14283F" },
  ochre:   { base: "#A8611C", dark: "#7C4612" },
  forest:  { base: "#2F4A33", dark: "#1F3122" },
};

function App() {
  const [tweaks, _setTweaks] = useState(TWEAK_DEFAULTS);
  const [tweaksVisible, setTweaksVisible] = useState(false);
  const [active, setActive] = useState("preface");

  const setTweaks = (patch) => {
    const next = { ...tweaks, ...patch };
    _setTweaks(next);
    try {
      window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
    } catch (e) {}
  };

  // Edit mode listener
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data;
      if (!d) return;
      if (d.type === '__activate_edit_mode') setTweaksVisible(true);
      if (d.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', onMsg);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Apply tweaks
  useEffect(() => {
    const accent = ACCENT_MAP[tweaks.accent] || ACCENT_MAP.oxblood;
    document.documentElement.style.setProperty('--oxblood', accent.base);
    document.documentElement.style.setProperty('--oxblood-dark', accent.dark);
    document.body.classList.toggle('mode-dark', !!tweaks.dark);
    document.documentElement.style.setProperty(
      '--serif',
      tweaks.serif
        ? `"Source Serif 4","Source Serif Pro","Cormorant Garamond",Georgia,"Times New Roman",serif`
        : `"Inter","Helvetica Neue",Helvetica,Arial,sans-serif`
    );
    document.body.style.fontSize = tweaks.density === 'tight' ? '16px' : '18px';
  }, [tweaks]);

  // Scroll-spy
  useEffect(() => {
    const ids = ['preface','profile','framing','mechanism','surveillance','media','response','scope','conclusion'];
    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page">
      <Topbar activeSection={active} />
      <Hero />
      <Preface />
      <CountryProfile />
      <PoliticalFraming />
      <Mechanism />
      <Surveillance />
      <MediaCulture />
      <Response />
      <Scope />
      <Conclusion />
      <Footer />
      <TweaksPanel visible={tweaksVisible} tweaks={tweaks} setTweaks={setTweaks} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
