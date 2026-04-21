/* Primitive editorial building blocks */

const { useState, useEffect, useRef } = React;

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function Label({ children, style }) {
  return <div className="label" style={style}>{children}</div>;
}

function SectionHead({ num, label, title, deck }) {
  return (
    <div className="sect-head">
      <div className="meta">
        <div>§ {num}</div>
        <div style={{marginTop: 6, color: 'var(--oxblood)'}}>{label}</div>
      </div>
      <div className="title">
        <h2>{title}</h2>
        {deck && <div className="deck">{deck}</div>}
      </div>
    </div>
  );
}

function PullQuote({ children, cite }) {
  return (
    <div className="pullquote">
      <div className="mark">“</div>
      <div>
        <blockquote>{children}</blockquote>
        {cite && <cite>· {cite}</cite>}
      </div>
    </div>
  );
}

function Callout({ label, children }) {
  return (
    <div className="callout">
      <div className="key">{label}</div>
      <div className="body">{children}</div>
    </div>
  );
}

function Stat({ value, unit, label, source }) {
  return (
    <div className="stat">
      <div className="val">
        {value}
        {unit && <span className="unit">{unit}</span>}
      </div>
      <div className="k">{label}</div>
      {source && <div className="src">{source}</div>}
    </div>
  );
}

function Figure({ note, label, source, aspect = "wide", children, style }) {
  return (
    <figure style={{margin: 0, ...style}}>
      <div className={`figure ${aspect}`}>
        <div className="stripes" />
        {note && <div className="fig-note">{note}</div>}
        {children}
        <div className="label-strip">
          <span>{label}</span>
          <span>{source}</span>
        </div>
      </div>
    </figure>
  );
}

function Caption({ children, source }) {
  return (
    <div className="caption">
      {children}
      {source && <span className="src">{source}</span>}
    </div>
  );
}

function EntryRow({ idx, tag, name, children }) {
  return (
    <div className="entry-row">
      <div className="idx">{idx}</div>
      <div className="name">{name}</div>
      <div className="desc">
        {tag && <div className="tag">{tag}</div>}
        {children}
      </div>
    </div>
  );
}

// Expose globally for other Babel scripts
Object.assign(window, {
  Eyebrow, Label, SectionHead, PullQuote, Callout, Stat, Figure, Caption, EntryRow
});
