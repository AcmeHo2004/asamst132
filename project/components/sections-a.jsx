/* Main sections — Hero, Country Profile, Mechanism, Surveillance */

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-title">
          <div>
            <div style={{fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--oxblood)', marginBottom: 20}}>
              A Case Study in Institutional Islamophobia
            </div>
            <h1>
              State-Led<br/>
              Islamophobia<br/>
              in <em>China</em>.
            </h1>
          </div>
          <div className="hero-thesis">
            <span className="label">Thesis</span>
            The treatment of Uyghur Muslims in the Xinjiang Uyghur Autonomous
            Region reveals a form of Islamophobia that does not work mainly
            through elections, campaign rhetoric, or mass political theater.
            It works through the state, and more specifically through a
            bureaucratic system that turns Muslim identity into a category of
            risk and then manages that risk through law, surveillance, policy,
            and institutional control.
          </div>
        </div>

        <div className="hero-foot">
          <div className="authors">
            Group 01
            <div className="author-list">
              <span>Chi-Feng (Acme) Ho</span>
              <span className="author-sep">·</span>
              <span>Chi-Hong (Horace) Ho</span>
              <span className="author-sep">·</span>
              <span>Raul Orozco</span>
            </div>
          </div>
          <div>ASAMST 132 &nbsp;·&nbsp; UC Berkeley &nbsp;·&nbsp; April 2026</div>
          <div className="scrollcue">
            <span>Begin</span>
            <span className="bar" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Preface() {
  return (
    <section className="sect" id="preface">
      <div className="container">
        <div className="grid-12">
          <div className="span-4">
            <div className="label" style={{borderTop: '2px solid var(--ink)', paddingTop: 12}}>
              § 00 &nbsp;·&nbsp; <span style={{color: 'var(--oxblood)'}}>PREFACE</span>
            </div>
          </div>
          <div className="span-8">
            <p className="lede" style={{marginBottom: 32}}>
              Islamophobia is often studied through elections, media
              stereotypes, and bottom-up prejudice. Such a framework still
              matters, but it does not fully explain what is happening in
              China.
            </p>
            <p className="drop-cap">
              In Xinjiang, anti-Muslim repression is not driven by campaign
              speeches or partisan backlash. It is produced through the
              ordinary machinery of the party-state: legal classifications,
              administrative routines, security discourse, surveillance
              technologies, labor governance, and cultural remaking. Once
              Muslim identity is framed as a threat, the state gains both the
              language and the authority to intervene across nearly every part
              of life.
            </p>
            <p>
              The project follows the process step by step, looking at
              narrative, law, surveillance, detention, economic control,
              media, and international response. The central argument is
              straightforward: anti-Muslim exclusion in China is not
              incidental or improvised. It is organized, and it is built into
              modern state power.
            </p>
          </div>
        </div>

        <PullQuote cite="UN Office of the High Commissioner for Human Rights, Xinjiang Assessment, 2022">
          The extent of arbitrary and discriminatory detention of members of
          Uyghur and other predominantly Muslim groups… may constitute
          international crimes, in particular crimes against humanity.
        </PullQuote>
      </div>
    </section>
  );
}

function CountryProfile() {
  return (
    <section className="sect" id="profile">
      <div className="container">
        <SectionHead
          num="01"
          label="Country Profile"
          title="A strategic frontier, a Muslim region, a governance laboratory."
          deck="Xinjiang is China's largest provincial-level region by area. It is home to a large concentration of Turkic-speaking Muslim communities. It is also the place where the Chinese state has carried out its most intensive contemporary program of religious and ethnic control."
        />

        <div className="grid-12" style={{marginBottom: 56}}>
          <div className="span-7">
            <Figure
              note="01 · TERRITORIAL CONTEXT"
              label="XINJIANG UYGHUR AUTONOMOUS REGION, PRC"
              source="SIMPLIFIED · NOT TO SCALE"
              aspect="wide"
            >
              <div style={{position:'absolute', inset: 0, padding: 16}}>
                <ChinaMap />
              </div>
            </Figure>
            <Caption source="Population figures: NBS of China, Seventh National Census (2021); PRC total: World Bank (2024).">
              The combination of size, demography, and geography matters.
              Xinjiang is not just a peripheral region. It is a frontier space
              where security, sovereignty, development, and minority
              governance have been tightly fused.
            </Caption>
          </div>

          <div className="span-5">
            <div style={{display:'grid', gap: 28}}>
              <Stat value="1.409" unit="BILLION" label="China · total population, 2024" source="WORLD BANK (2024)" />
              <Stat value="25.85" unit="MILLION" label="Xinjiang · population, 2020" source="NBS CENSUS (2021)" />
              <Stat value="~18" unit="MILLION" label="Muslim adults in China, 2020 est." source="PEW RESEARCH CENTER (2023)" />
              <Stat value="~11" unit="MILLION" label="Uyghurs · predominantly Muslim, Turkic-speaking" source="OHCHR ASSESSMENT (2022)" />
            </div>
          </div>
        </div>

        <div className="grid-12" style={{marginBottom: 72}}>
          <div className="span-12">
            <p style={{maxWidth: '72ch'}}>
              The figures do more than provide demographic background. They
              help explain why Xinjiang occupies such a central place in the
              story. It is a strategically important border region, and also
              one of the most significant Muslim-majority spaces within China.
              The combination makes it especially important to the state's
              effort to define, classify, and regulate Muslim life.
            </p>
          </div>
        </div>

        {/* Historical timeline */}
        <div style={{marginTop: 72}}>
          <div className="label" style={{marginBottom: 24}}>
            FIG. 04 &nbsp;·&nbsp; CHRONOLOGY OF STATE POLICY IN XINJIANG
          </div>
          <div className="timeline">
            <div className="timeline-rule" />
            <div className="timeline-items">
              {[
                { y: "1949", t: "PRC founded", b: "Xinjiang is incorporated into the People's Republic; Han settlement and the Production and Construction Corps begin to reshape the region." },
                { y: "1990s", t: "Reframing begins", b: "Post-Soviet unrest in Central Asia and internal tensions are increasingly reframed as a question of national security." },
                { y: "2001", t: "Post-9/11 pivot", b: "After 9/11, Beijing adopts the language of the global war on terror to recast local unrest as Islamist extremism." },
                { y: "2014", t: "'Strike Hard' campaign", b: "The 'People's War on Terror' expands the scale and intensity of repression, broadening what counts as suspicious." },
                { y: "2017", t: "Mass detention expands", b: "Large-scale internment facilities grow rapidly; leaked directives instruct officials to show no mercy." },
                { y: "2022", t: "UN assessment", b: "The UN Xinjiang assessment is released, concluding that violations may amount to crimes against humanity." },
                { y: "2024", t: "Sinicization formalized", b: "Policies tied to the Sinicization of religion are reinforced through revised regulations on worship, education, and public practice." },
              ].map((e, i) => (
                <div className="tl-item" key={i}>
                  <span className="tick" />
                  <span className="node" />
                  <div className="year">{e.y}</div>
                  <div className="title">{e.t}</div>
                  <div className="body">{e.b}</div>
                </div>
              ))}
            </div>
          </div>
          <p style={{marginTop: 40, maxWidth: '68ch'}}>
            Taken together, the shifts show that what happened in Xinjiang did
            not appear overnight. It developed over time, but with a clear
            direction. A region marked by ethnic and religious difference was
            gradually turned into a laboratory of securitized governance.
          </p>
        </div>

        {/* Immigration / refugee aside — defining the site of Islamophobia */}
        <div className="grid-12" style={{marginTop: 88, paddingTop: 40, borderTop: '1px solid var(--rule)'}}>
          <div className="span-4">
            <Eyebrow>A note on scope</Eyebrow>
            <h3 style={{marginTop: 14, marginBottom: 8, fontSize: 24, lineHeight: 1.2}}>
              Not a border story.
            </h3>
            <div className="label" style={{color: 'var(--muted)'}}>
              Immigration · Refugee context
            </div>
          </div>
          <div className="span-8">
            <p>
              Islamophobia in China does not primarily operate through
              immigration or refugee policy, unlike many Western contexts.
              Large-scale refugee intake systems comparable to those in Europe
              or North America do not exist, and public debate over Muslim
              immigration is not a central feature of domestic politics. As a
              result, Islamophobia is not expressed through border control or
              asylum policy in the same way.
            </p>
            <p>
              Attention shifts inward. Governance in Xinjiang focuses on
              populations already within the state, particularly Uyghur and
              other Muslim minority communities. The site of Islamophobia
              moves away from entry and exclusion at borders and toward
              classification, control, and transformation within national
              boundaries. The distinction clarifies how Islamophobia can take
              distinct institutional forms depending on political context.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PoliticalFraming() {
  return (
    <section className="sect" id="framing">
      <div className="container">
        <SectionHead
          num="02"
          label="Political Framing"
          title="Leadership discourse as an instrument of classification."
          deck="China does not operate through electoral campaigns, yet political leadership remains central in shaping how Islam is framed as a problem to be governed. Top-down articulation, not voter mobilization, sets the boundaries of intervention."
        />

        <div className="grid-12" style={{marginBottom: 56}}>
          <div className="span-7">
            <p className="drop-cap">
              Official discourse links terrorism, extremism, and instability
              in a consistent and repeated pattern. The ideas are reinforced
              through speeches, policy directives, and regional governance
              practices. Senior officials responsible for Xinjiang frequently
              emphasize the need to guide religion and align it with
              state-defined norms.
            </p>
            <p>
              The notion of the Sinicization of Islam reflects this approach.
              Rather than focusing on specific acts, it redefines Islam itself
              as something that must be reshaped to fit within a national
              cultural and political framework. Voter mobilization is not
              required, yet the effect is comparable. The framing provides
              justification for intervention by treating Muslim identity as a
              category requiring transformation.
            </p>
            <p>
              Political Islamophobia in China therefore operates through
              top-down articulation. Leadership discourse defines the
              boundaries, and administrative systems carry them into practice.
            </p>
          </div>
          <div className="span-5">
            <div style={{display:'grid', gap: 20, marginTop: 4}}>
              <Callout label="Vocabulary of rule">
                <p>
                  <em>Terrorism · Extremism · Separatism · Sinicization · Guidance ·
                  National unity.</em> A chain of terms, not a single
                  charge — broad enough to admit ordinary practice into the
                  field of intervention.
                </p>
              </Callout>
              <Callout label="Directive, not campaign">
                <p>
                  Speeches by senior officials function as policy signals
                  inside the bureaucracy. The audience is cadres, not
                  voters. The output is compliance, not consent.
                </p>
              </Callout>
            </div>
          </div>
        </div>

        <PullQuote cite="Xinjiang Party Secretary Ma Xingrui, remarks reported by Reuters, 2024">
          The Sinicization of Islam is inevitable.
        </PullQuote>
      </div>
    </section>
  );
}

function Mechanism() {
  return (
    <section className="sect" id="mechanism">
      <div className="container">
        <SectionHead
          num="03"
          label="Mechanism"
          title="How anti-Muslim governance operates as a system."
          deck="What is happening in Xinjiang is not a loose collection of isolated policies. It works as a connected system. Five components sit at the center: narrative, law, surveillance, detention, and economic control. Each one supports the next. Each one makes the next easier to justify."
        />

        <div style={{margin: '32px 0 64px'}}>
          <MechanismDiagram />
        </div>

        <div className="callout-grid">
          <Callout label="I · Narrative">
            <p>
              Official discourse links terrorism, separatism, extremism, and
              instability into a single chain. The chain is intentionally
              broad. It allows ordinary religious practice, family ties,
              dress, education, and even a "strong religious atmosphere" to be
              read not as private or cultural life, but as signs of possible
              danger. The point is not just to describe risk. It is to expand
              what counts as risk.
            </p>
          </Callout>
          <Callout label="II · Law">
            <p>
              Counterterrorism and anti-extremism regulations make the
              narrative actionable. Legal terms are vague, and the vagueness
              matters. It gives authorities room to classify naming practices,
              dress, halal expansion, religious weddings, and unauthorized
              teaching as signs of extremification. Law does not simply
              respond to threat here. It helps define it.
            </p>
          </Callout>
          <Callout label="III · Surveillance">
            <p>
              Once the category exists, surveillance turns it into practice.
              Biometric collection, device registration, location tracking,
              and relational mapping feed systems that identify people for
              intervention. Suspicion becomes data. Data becomes
              administrative action.
            </p>
          </Callout>
          <Callout label="IV · Detention & Transformation">
            <p>
              Internment facilities and so-called transformation-through-education
              programs are not separate from the process. They are its
              continuation. Detention isolates people, disciplines them, and
              tries to reshape belief, conduct, and identity under state
              supervision.
            </p>
          </Callout>
        </div>

        <PullQuote cite="Leaked internal Party documents, reported by The New York Times & The Guardian, 2019">
          Show absolutely no mercy.
        </PullQuote>

        <div className="grid-12" style={{marginTop: 24}}>
          <div className="span-5">
            <Eyebrow>Analytical Distinction</Eyebrow>
            <h3 style={{marginTop: 16, marginBottom: 16}}>Electoral vs. bureaucratic Islamophobia.</h3>
            <p>
              In many democratic settings, Islamophobia is mobilized through
              campaigns, debate, and public persuasion. China works
              differently. The state does not need to win votes through
              anti-Muslim rhetoric. Instead, it embeds anti-Muslim suspicion
              into institutions and turns it into administrative practice.
            </p>
            <p>
              The difference matters. In this case, Islamophobia is not mainly
              electoral. It is bureaucratic. It does not depend on persuading
              voters. It depends on disciplining officials, organizing policy,
              and normalizing intervention through the state itself.
            </p>
          </div>
          <div className="span-7">
            <div className="compare">
              <div className="left">
                <div className="head">Electoral Islamophobia</div>
                <h4>Market of voters</h4>
                <p>Anti-Muslim sentiment is mobilized for differentiation, turnout, and legislative coalitions. It is produced through campaign speech, debate, and party platforms.</p>
                <p style={{marginTop: 16}}>Audience: voters, donors, media.</p>
              </div>
              <div className="right">
                <div className="head">Bureaucratic Islamophobia</div>
                <h4>Hierarchy of cadres</h4>
                <p>Anti-Muslim securitization is distributed through party directives, risk flags, cadre evaluation systems, and administrative regulation.</p>
                <p style={{marginTop: 16}}>Audience: the bureaucracy itself.</p>
              </div>
            </div>
            <Caption>
              The Chinese case therefore expands the conceptual field.
              Islamophobia can be institutionalized through state hierarchy,
              not only marketized through electoral competition.
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
}

function Surveillance() {
  return (
    <section className="sect" id="surveillance">
      <div className="container">
        <SectionHead
          num="04"
          label="Surveillance & Control"
          title="Turning suspicion into data; turning data into enforcement."
          deck="If law defines what counts as risk, surveillance is what makes the risk operational. Xinjiang offers one of the clearest examples of how a state can integrate digital monitoring, territorial presence, and intimate observation into a single apparatus of control."
        />

        <div style={{margin: '16px 0 56px'}}>
          <SurveillanceDiagram />
        </div>

        <div className="grid-12" style={{marginBottom: 56}}>
          <div className="span-7">
            <p style={{maxWidth: '72ch'}}>
              The inputs show how wide the system has become. It isn't just
              about crime. Everyday behavior, movement, contact, and routine
              all get pulled in, collected, sorted, and interpreted. The
              Integrated Joint Operations Platform sits at the center,
              aggregating data, assigning risk categories, and generating
              lists for intervention. In that sense, it does more than store
              information. It helps decide who becomes visible to the state as
              a problem.
            </p>
          </div>
          <div className="span-5">
            <div className="figure surveillance-photo">
              <img
                src="uploads/checkpoint-xinjiang.webp"
                alt="A police checkpoint in Xinjiang with vehicles passing through."
              />
            </div>
            <Caption>
              Surveillance infrastructure embedded in everyday urban space.
              Biometric and behavioral data collection feeds into
              classification systems that shape intervention.
            </Caption>
          </div>
        </div>

        <div className="callout-grid">
          <Callout label="Predictive policing">
            <p>
              Aggregated identifiers, patterns of movement, and behavioral
              indicators are used to produce lists of people marked for
              questioning, monitoring, or detention. Reported indicators
              include mosque attendance, VPN use, contact with people
              abroad, and unusual consumption patterns. What matters is not
              only the content of the list, but the logic behind it. The
              system doesn't just track risk. It expands it.
            </p>
          </Callout>
          <Callout label="Intimate monitoring">
            <p>
              Surveillance in Xinjiang does not stop at the street, the
              checkpoint, or the screen. It enters the home. Cadre homestay
              programs place officials inside private households, where
              prayer, language, dress, and emotional conduct can all be
              observed and interpreted. The result is that private life is
              no longer fully private. It becomes another site of political
              inspection.
            </p>
          </Callout>
          <Callout label="Spatial saturation">
            <p>
              Checkpoints, police substations, and neighborhood grids turn
              movement into a visible, auditable act. Surveillance is not
              only digital. It is built into the physical environment of
              cities, roads, and village entrances.
            </p>
          </Callout>
          <Callout label="Detention as continuation">
            <p>
              Detention should not be understood as a separate stage that
              begins after surveillance ends. It is part of the same
              continuum. Monitoring identifies people. Detention punishes,
              disciplines, and transforms them. Post-release monitoring
              extends the same logic even further. In that sense,
              confinement is not a break in the system. It is one of the
              system's most intensive expressions.
            </p>
          </Callout>
        </div>

        <div className="grid-12" style={{marginTop: 80}}>
          <div className="span-7">
            <Eyebrow>Economic Governance</Eyebrow>
            <h3 style={{marginTop: 16, marginBottom: 20}}>Labor transfers, mobility restrictions, and supply-chain integration.</h3>
            <p>
              Economic policy in Xinjiang cannot be separated from security
              policy. The two are deeply entangled. Labor transfer programs
              move Uyghurs into factories and work sites under conditions
              widely described as coercive. The coercion does not always take
              the same form, but the broader structure is clear: work is tied
              to political discipline, refusal carries consequences, and
              economic life becomes harder to separate from administrative
              control.
            </p>
            <p>
              Mobility restrictions reinforce the dependence. Passports are
              confiscated or difficult to obtain. Movement is constrained.
              Travel becomes conditional. The result is not just limited
              freedom, but a narrower set of choices about work, family, and
              everyday life. Xinjiang's repression is also tied to larger
              production systems, connecting to national industry and, through
              supply chains, to global markets.
            </p>
            <div style={{marginTop: 24}}>
              <Callout label="A note on evidence">
                <p>
                  The strongest evidence concerns labor transfers,
                  restrictions on travel, and surveillance-linked
                  classification systems. Claims about broad financial
                  exclusion, such as blanket denial of banking access, are
                  less firmly documented in open high-quality evidence and
                  should be treated more cautiously.
                </p>
              </Callout>
            </div>
          </div>
          <div className="span-5">
            <div className="figure economy-photo">
              <img
                src="uploads/cotton-xinjiang-page-6.webp"
                alt="Cotton harvesting in a field in Xinjiang."
              />
            </div>
            <Caption source="Agricultural production · Xinjiang cotton sector">
              Cotton harvesting in Xinjiang. Investigations by international
              organizations and media have linked parts of the region’s
              agricultural and textile production to state-directed labor
              transfer programs.
            </Caption>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Preface, CountryProfile, PoliticalFraming, Mechanism, Surveillance });
