/* Sections B — Media, Response, Conclusion, Footer */

function MediaCulture() {
  return (
    <section className="sect" id="media">
      <div className="container">
        <SectionHead
          num="05"
          label="Media & Cultural Erasure"
          title="Two registers: how Muslims are narrated, and how Muslim presence is remade."
          deck="This works on two levels. First, Muslims are represented through a political narrative shaped by suspicion, hierarchy, and security discourse. Second, Muslim visibility is physically reduced through policy. The two registers support each other."
        />

        <div className="grid-12" style={{marginBottom: 64}}>
          <div className="span-6">
            <p>
              Inside China, Muslims are often framed through the language of
              danger, instability, backwardness, or civilizational difference.
              In the framework, Muslim identity is not treated as one form of
              legitimate diversity. It is treated as something that must be
              managed, corrected, or made less visible.
            </p>
            <p>
              Policy carries the logic into public space. Mosques are altered.
              Arabic script is removed. These changes are not uniform, but
              they consistently shift visible markers of Islam toward forms
              aligned with state aesthetics and messaging. Religious
              architecture is reshaped. Cultural forms that once signaled
              visible Islamic presence are reduced, replaced, or reclassified
              under the language of order, modernization, and national unity.
            </p>
            <Caption
              className="media-mosque-caption"
              source="Upper image: earlier mosque architecture · Lower image: renovated mosque under state guidelines"
            >
              Contrasting mosque architecture in China. The upper image shows
              earlier Islamic-style design, while the lower image reflects
              more recent renovations in which domes are reduced and Chinese
              architectural forms and state symbols are introduced into the
              space.
            </Caption>
          </div>
          <div className="span-6">
            <div className="figure mosque-photo">
              <div className="fig-note">FIG. 09 · CONTRASTING MOSQUE ARCHITECTURE</div>
              <img
                src="uploads/mosques.webp"
                alt="Comparison of earlier mosque architecture and a renovated mosque under state guidelines."
              />
            </div>
          </div>
        </div>

        {/* State narrative vs investigative reality */}
        <div className="label" style={{marginBottom: 20}}>
          FIG. 10 &nbsp;·&nbsp; STATE NARRATIVE vs. INVESTIGATIVE RECORD
        </div>

        <div style={{display:'grid', gap: 0}}>
          {[
            {
              frame: "Counter-extremism",
              state: "Vocational education centers combat terrorism and offer skills training, lifting residents out of poverty.",
              real: "Leaked directives, former-detainee testimony, and satellite imagery document coercive internment, ideological instruction, and credible reports of torture.",
              src: "OHCHR (2022); HRW (2021); Amnesty International (2021)"
            },
            {
              frame: "Sinicization of Islam",
              state: "Religion is protected, provided it aligns with Chinese culture, national unity, and socialist values.",
              real: "Mosques altered or demolished; Arabic script removed; religious education restricted to state-approved curricula; clerics monitored.",
              src: "HRW (2023, 2024a); Financial Times (2023); Reuters (2024a)"
            },
            {
              frame: "Labor & development",
              state: "Poverty-alleviation programs relocate workers to higher-wage industrial jobs across China.",
              real: "Transfers operate under political-study requirements and threat of administrative consequences; linked to supply chains in cotton, solar, seafood, aluminum, and autos.",
              src: "The New Yorker (2023); HRW (2024c); Reuters (2024b–d); The Guardian (2024a)"
            },
            {
              frame: "Memory & place",
              state: "Local names and heritage are updated to reflect national unity, modernization, and social harmony.",
              real: "Hundreds of Uyghur village names replaced with Party-ideological terms; cemeteries and shrines demolished.",
              src: "The Guardian (2024b); HRW (2024b)"
            },
          ].map((row, i) => (
            <div key={i} className="compare" style={{borderTop: i === 0 ? '2px solid var(--ink)' : 0, borderBottom: 0, borderLeft: 0, borderRight: 0}}>
              <div className="left" style={{borderTop: i > 0 ? '1px solid var(--rule)' : 0}}>
                <div className="head">State Narrative · {row.frame}</div>
                <p style={{fontStyle: 'italic'}}>"{row.state}"</p>
              </div>
              <div className="right" style={{borderTop: i > 0 ? '1px solid var(--rule)' : 0}}>
                <div className="head">Investigative Record</div>
                <p>{row.real}</p>
                <div style={{fontFamily:'var(--mono)', fontSize: 10, color: 'var(--muted)', marginTop: 16, letterSpacing: '0.08em'}}>
                  SOURCES · {row.src}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-12" style={{marginTop: 56}}>
          <div className="span-12">
            <p style={{maxWidth: '72ch'}}>
              The contrast matters. The state presents the policies as
              stabilization and development. Investigative reporting and human
              rights documentation present them as repression, forced
              transformation, and cultural erasure. The gap is central.
              Representation is not just descriptive. It helps justify what
              the state then does in material form.
            </p>
          </div>
        </div>

        <div className="grid-12" style={{marginTop: 64}}>
          <div className="span-7">
            <Eyebrow>Continued remaking</Eyebrow>
            <h3 style={{marginTop: 14, marginBottom: 20}}>Public space is being remade.</h3>
            <p style={{maxWidth: '72ch'}}>
              Labor transfers do not operate in a vacuum. They are sustained
              by political pressure, close monitoring, and the threat of
              administrative consequences. In that sense, labor policy is not
              simply about employment. It is part of a broader effort to
              reorganize Muslim life under conditions set by the state.
            </p>
            <p style={{maxWidth: '72ch'}}>
              At the same time, public space is being remade. Uyghur village
              names are replaced with ideological terms. Mosques are altered
              or demolished. Arabic is removed from signs and other visible
              markers of religious and cultural identity. The changes matter
              not only because they erase heritage, but because they change
              what kinds of Muslim presence remain publicly legible.
            </p>
            <p style={{maxWidth: '72ch'}}>
              The result is not just repression in the narrow sense. It is a
              broader process of remaking. Muslim life is narrated
              differently, regulated differently, and made to appear
              differently in everyday space.
            </p>
          </div>
          <div className="span-5">
            <div className="figure religion-change-photo">
              <div className="fig-note">FIG. 11 · STATE MESSAGING & BILINGUAL SIGNAGE</div>
              <img
                src="uploads/religion-change.jpg"
                alt="Public signage in Mandarin and Uyghur paired with ideological messaging in Xinjiang."
              />
            </div>
            <Caption className="religion-change-caption">
              State messaging and bilingual signage in public space. Mandarin
              and Uyghur text appear alongside ideological slogans,
              illustrating how cultural and religious expression is
              restructured within everyday environments.
            </Caption>
          </div>
        </div>

        <div className="grid-12" style={{marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--rule)'}}>
          <div className="span-4">
            <Eyebrow>Regulation, not elimination</Eyebrow>
            <h3 style={{marginTop: 14, marginBottom: 10, fontSize: 28, lineHeight: 1.15}}>
              Religious life<br/>is reshaped,<br/>not ended.
            </h3>
            <div className="label" style={{color: 'var(--muted)'}}>
              Religious status · A distinction
            </div>
          </div>
          <div className="span-8">
            <p>
              Religious life in Xinjiang is not eliminated, but it is tightly
              regulated, monitored, and reshaped through state policy.
              Practices such as mosque attendance, religious education, dress,
              and the use of Islamic language are subject to varying degrees
              of oversight. In many cases, religious activity is permitted
              only within state-approved structures, where content,
              leadership, and expression can be supervised.
            </p>
            <p>
              Complete disappearance of religion does not occur. Instead, a
              controlled environment emerges in which religious practice is
              reorganized to align with political expectations. The
              distinction matters. The issue extends beyond suppression. A
              transformation takes place, shifting religious life from
              autonomous practice toward state-managed expression.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function Response() {
  return (
    <section className="sect" id="response">
      <div className="container">
        <SectionHead
          num="06"
          label="Global Response & Resistance"
          title="Meaningful but limited disruption."
          deck="Multilateral institutions, NGOs, journalists, diaspora organizations, and some governments have documented abuses and imposed costs. The work has had real impact, but it has not dismantled the governing system itself."
        />

        <div className="mb-md">
          {[
            {
              idx: "A · 2022",
              name: "UN Office of the High Commissioner for Human Rights",
              tag: "Multilateral · Assessment",
              body: "The UN assessment marked a major moment of international recognition. It concluded that serious human rights violations had occurred and stated that the abuses may amount to crimes against humanity. The finding gave the issue broader institutional weight and made it harder to dismiss the evidence as isolated reporting."
            },
            {
              idx: "B · 2021",
              name: "Human Rights Watch · Amnesty International",
              tag: "NGO · Documentation",
              body: "Human Rights Watch and Amnesty International have played a central role in documenting detention, torture, coercive policy, and the legal structure surrounding repression. Their reporting helped assemble a body of evidence that is cumulative rather than episodic."
            },
            {
              idx: "C · ongoing",
              name: "Uyghur diaspora organizations",
              tag: "Civil society",
              body: "Uyghur diaspora groups have preserved testimony, organized advocacy, and sustained international attention even under intense transnational pressure. Their role has been especially important because access to Xinjiang itself remains highly restricted."
            },
            {
              idx: "D · 2021–present",
              name: "Import restrictions & entity-list designations",
              tag: "Trade policy",
              body: "Import restrictions and forced-labor measures have imposed real costs on firms linked to Xinjiang-based production systems. Such actions have changed the commercial environment around supply chains tied to coercive labor. Even so, the disruptions remain partial."
            },
            {
              idx: "E · 2024",
              name: "World Uyghur Congress, UK legal victory",
              tag: "Litigation",
              body: "A UK appeals ruling required reconsideration of an investigation into Xinjiang-linked cotton imports. It was a notable demonstration that litigation can pry open supply-chain enforcement."
            },
            {
              idx: "F · 2024",
              name: "Volkswagen · Xinjiang exit",
              tag: "Corporate",
              body: "After sustained reputational pressure and independent audits, Volkswagen confirmed plans to exit its Xinjiang operations. It was a rare concrete corporate decoupling from the region."
            },
            {
              idx: "G · 2025",
              name: "Transnational repression, deportations",
              tag: "Limits · caution",
              body: "Thailand's 2025 repatriation of Uyghurs to China underscored that diaspora communities remain vulnerable abroad. Freedom House has documented that China's pressure campaign extends well beyond its borders."
            },
          ].map((e, i) => (
            <EntryRow key={i} idx={e.idx} tag={e.tag} name={e.name}>
              {e.body}
            </EntryRow>
          ))}
        </div>

        <div className="grid-12" style={{marginTop: 56}}>
          <div className="span-12">
            <p style={{maxWidth: '72ch'}}>
              The picture is mixed. International response has made
              repression more visible, more contested, and in some cases more
              costly. But the underlying architecture of control remains in
              place. The disruption is real. It is just limited.
            </p>
          </div>
        </div>

        {/* Limited successes / points of disruption */}
        <div className="grid-12" style={{marginTop: 80, paddingTop: 40, borderTop: '1px solid var(--rule)'}}>
          <div className="span-4">
            <Eyebrow>Where pressure has landed</Eyebrow>
            <h3 style={{marginTop: 14, marginBottom: 12, fontSize: 28, lineHeight: 1.15}}>
              Limited successes,<br/>points of disruption.
            </h3>
            <div className="label" style={{color: 'var(--muted)'}}>
              The system is not dismantled — but it is not unreachable.
            </div>
          </div>
          <div className="span-8">
            <div style={{display:'grid', gap: 0}}>
              {[
                {
                  k: "Legal & regulatory pressure",
                  b: "Litigation and regulatory scrutiny in Europe and the United Kingdom have forced investigations into cotton imports and their links to forced labor. External scrutiny can influence corporate behavior and enforcement practices."
                },
                {
                  k: "Corporate decoupling",
                  b: "Some multinational firms have reduced or exited their presence in Xinjiang after sustained reputational and regulatory pressure. Conditions on the ground do not change directly, yet economic signals indicate that international attention carries consequences."
                },
                {
                  k: "Institutional reporting",
                  b: "Publications by the United Nations, Human Rights Watch, and Amnesty International have expanded global awareness and contributed to policy responses, including import restrictions and entity listings tied to forced labor concerns."
                },
              ].map((row, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '220px 1fr',
                  gap: 32,
                  padding: '22px 0',
                  borderTop: i === 0 ? '2px solid var(--ink)' : '1px solid var(--rule)',
                }}>
                  <div className="label" style={{paddingTop: 4}}>{row.k}</div>
                  <p style={{margin: 0}}>{row.b}</p>
                </div>
              ))}
            </div>
            <p style={{marginTop: 28, fontStyle: 'italic', color: 'var(--muted)', maxWidth: '60ch'}}>
              These developments remain limited. The underlying governance
              structure is not dismantled. Even so, they demonstrate that
              disruption can occur — unevenly, and within clear constraints.
            </p>
          </div>
        </div>

        <div className="grid-12" style={{marginTop: 72}}>
          <div className="span-4">
            <Eyebrow>Counter-organizations</Eyebrow>
            <h3 style={{marginTop: 16, marginBottom: 16}}>Who is doing the work.</h3>
          </div>
          <div className="span-8">
            <div className="three-col">
              <div>
                <div className="label" style={{marginBottom: 6}}>Multilateral</div>
                <div style={{fontSize: 15, lineHeight: 1.55}}>
                  UN OHCHR · UN Special Procedures · ILO Committee of Experts
                </div>
              </div>
              <div>
                <div className="label" style={{marginBottom: 6}}>NGO & Research</div>
                <div style={{fontSize: 15, lineHeight: 1.55}}>
                  Human Rights Watch · Amnesty International · Freedom House · Australian Strategic Policy Institute · Uyghur Human Rights Project
                </div>
              </div>
              <div>
                <div className="label" style={{marginBottom: 6}}>Diaspora & legal</div>
                <div style={{fontSize: 15, lineHeight: 1.55}}>
                  World Uyghur Congress · Campaign for Uyghurs · Uyghur Tribunal · Global Legal Action Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scope() {
  return (
    <section className="sect" id="scope" style={{background: 'var(--paper-warm, #EFEADE)'}}>
      <div className="container">
        <SectionHead
          num="07"
          label="Scope & Interpretation"
          title="What this case shows — and what it deliberately sets aside."
          deck=""
        />
        <div className="grid-12">
          <div className="span-7">
            <p className="lede" style={{marginBottom: 28}}>
              The analysis centers on state-led Islamophobia within China's
              political and institutional framework.
            </p>
            <p>
              Dimensions emphasized in other contexts — electoral
              mobilization, hostile campaign rhetoric, immigration politics —
              play a limited role here. Their absence is not a gap in the
              account. It is part of the argument. Islamophobia can be
              structured differently across political systems, and the
              variables that matter most in one setting may be largely
              inactive in another.
            </p>
            <p>
              The case of Xinjiang demonstrates that Islamophobia is not
              confined to public discourse or social prejudice. It can be
              embedded directly in governance — distributed across law,
              administration, surveillance, labor, and the remaking of
              everyday space.
            </p>
          </div>
          <div className="span-5">
            <div style={{
              borderTop: '2px solid var(--ink)',
              paddingTop: 18,
              marginTop: 4,
              display: 'grid',
              gap: 22,
            }}>
              <div>
                <div className="label" style={{marginBottom: 8, color: 'var(--oxblood)'}}>In focus</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.45}}>
                  Narrative · Law · Surveillance · Detention · Labor ·
                  Cultural remaking · Institutional response.
                </div>
              </div>
              <div style={{borderTop: '1px solid var(--rule)', paddingTop: 18}}>
                <div className="label" style={{marginBottom: 8, color: 'var(--muted)'}}>Set aside</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.45, color: 'var(--muted)'}}>
                  Electoral campaigning · Partisan media markets · Asylum and
                  border politics · Populist mobilization.
                </div>
              </div>
              <div style={{borderTop: '1px solid var(--rule)', paddingTop: 18}}>
                <div className="label" style={{marginBottom: 8}}>The claim</div>
                <div style={{fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.45, fontStyle: 'italic'}}>
                  The absence of the familiar variables is itself the finding.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="sect conclusion-atmosphere" id="conclusion">
      <div className="conclusion-bg" aria-hidden="true">
        <img
          src="uploads/conclusion-control-atmosphere.png"
          alt=""
        />
      </div>
      <div className="container conclusion-atmosphere-content">
        <SectionHead
          num="08"
          label="Conclusion"
          title="Islamophobia as a mode of rule."
          deck=""
        />
        <div className="grid-12">
          <div className="span-8">
            <p className="lede" style={{marginBottom: 32}}>
              Xinjiang shows something important. Islamophobia does not have
              to take the form most familiar in democratic settings.
            </p>
            <p>
              It does not need to center on elections, populist parties, or
              public hate speech to become politically powerful. It can also
              be built through institutions.
            </p>
            <p>
              In China, anti-Muslim governance is produced through a chain.
              Narrative defines threat. Law broadens intervention.
              Surveillance identifies targets. Detention enforces
              transformation. Economic and cultural policies extend control
              into everyday life. What emerges is not an accidental excess of
              security policy. It is a structured system.
            </p>
            <p>
              Such is the broader claim of the project. Islamophobia in China
              is not just prejudice directed at Muslims. It is a <em>form of
              rule</em>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const biblio = [
    { author: "Amnesty International", year: "2021", title: "Like We Were Enemies in a War: China's Mass Internment, Torture and Persecution of Muslims in Xinjiang", url: "https://www.amnesty.org/en/documents/asa17/4137/2021/en/" },
    { author: "China Law Translate", year: "2017", title: "Xinjiang Uyghur Autonomous Region Regulation on De-Extremification", url: "https://www.chinalawtranslate.com/en/xinjiang-de-extremification-regulation/" },
    { author: "China Law Translate", year: "2024", title: "Xinjiang Uyghur Autonomous Region Religious Affairs Regulations", url: "https://www.chinalawtranslate.com/en/xinjiang-religious-affairs-regulations-2024/" },
    { author: "Financial Times", year: "2023", title: "How China Is Tearing Down Islam", url: "https://www.ft.com/content/7b7c3c1a-6a63-4c4b-9f2f-9c1c3c7c6b3b" },
    { author: "Freedom House", year: "2026", title: "Collaboration and Resistance: Tracking Transnational Repression 2025", url: "https://freedomhouse.org/report/transnational-repression/collaboration-and-resistance-2025" },
    { author: "Human Rights Watch", year: "2018", title: "China: Big Data Fuels Crackdown in Minority Region", url: "https://www.hrw.org/news/2018/02/27/china-big-data-fuels-crackdown-minority-region" },
    { author: "Human Rights Watch", year: "2019", title: "China's Algorithms of Repression: Reverse Engineering a Xinjiang Police Mass Surveillance App", url: "https://www.hrw.org/report/2019/05/01/chinas-algorithms-repression/reverse-engineering-xinjiang-police-mass" },
    { author: "Human Rights Watch", year: "2021", title: "Break Their Lineage, Break Their Roots", url: "https://www.hrw.org/report/2021/04/19/break-their-lineage-break-their-roots" },
    { author: "Human Rights Watch", year: "2023", title: "China: Mosques Shuttered, Razed, Altered in Muslim Areas", url: "https://www.hrw.org/news/2023/11/22/china-mosques-shuttered-razed-altered-muslim-areas" },
    { author: "Human Rights Watch", year: "2024a", title: "China: Religious Regulations Tighten for Uyghurs", url: "https://www.hrw.org/news/2024/01/31/china-religious-regulations-tighten-uyghurs" },
    { author: "Human Rights Watch", year: "2024b", title: "China: Hundreds of Uyghur Village Names Change", url: "https://www.hrw.org/news/2024/06/18/china-hundreds-uyghur-village-names-change" },
    { author: "Human Rights Watch", year: "2024c", title: "Asleep at the Wheel: Car Companies' Complicity in Forced Labor in China", url: "https://www.hrw.org/report/2024/02/01/asleep-wheel/car-companies-complicity-forced-labor-china" },
    { author: "Human Rights Watch", year: "2025", title: "China: Travel for Uyghurs Heavily Restricted", url: "https://www.hrw.org/news/2025/02/03/china-travel-uyghurs-heavily-restricted" },
    { author: "Miao, Y.", year: "2024", title: "Privilege and Prejudice: Han Victimhood and Legitimizing Islamophobia in China", journal: "The China Quarterly" },
    { author: "National Bureau of Statistics of China", year: "2021", title: "Communiqué of the Seventh National Population Census", url: "http://www.stats.gov.cn/english/PressRelease/202105/t20210510_1817185.html" },
    { author: "OHCHR", year: "2022", title: "Assessment of Human Rights Concerns in the Xinjiang Uyghur Autonomous Region", url: "https://www.ohchr.org/en/documents/reports/ohchr-assessment-human-rights-concerns-xinjiang" },
    { author: "Pew Research Center", year: "2023", title: "Islam in China", url: "https://www.pewresearch.org/religion/2023/08/30/islam-in-china/" },
    { author: "Reuters", year: "2021a", title: "China Found Using Surveillance Firms to Help Write Ethnic-Tracking Specs", url: "https://www.reuters.com/world/china-found-using-surveillance-firms-help-write-ethnic-tracking-specs--trfn-2021-03-30/" },
    { author: "Reuters", year: "2021b", title: "Chinese Tech Patents Tools That Can Detect, Track Uighurs", url: "https://www.reuters.com/world/chinese-tech-patents-tools-that-can-detect-track-uighurs-2021-01-14/" },
    { author: "Reuters", year: "2024a", title: "Top Official from China's Xinjiang Says Sinicisation of Islam Inevitable", url: "https://www.reuters.com/world/china/top-official-chinas-xinjiang-says-sinicisation-islam-inevitable-2024-03-07/" },
    { author: "Reuters", year: "2024b", title: "Human Rights Watch Warns Carmakers Over China Forced Labour Risk", url: "https://www.reuters.com/business/autos-transportation/human-rights-watch-warns-carmakers-over-china-forced-labour-risk-2024-02-01/" },
    { author: "Reuters", year: "2024c", title: "US Bars Imports from China Footwear, Seafood, Aluminum Firms Over Uyghur Labor", url: "https://www.reuters.com/business/us-bars-imports-footwear-seafood-aluminum-firms-over-uyghur-labor-2024-06-11/" },
    { author: "Reuters", year: "2024d", title: "VW Buckles After Years of Pressure to Sell Up in Xinjiang", url: "https://www.reuters.com/business/autos-transportation/vw-exit-xinjiang-operation-with-sales-local-plant-test-track-sources-say-2024-11-27/" },
    { author: "Reuters", year: "2024e", title: "Uyghur Group Wins Appeal Over UK Probe into 'Slave Labour' Cotton", url: "https://www.reuters.com/world/uk/uyghur-group-wins-appeal-over-uk-probe-into-slave-labour-cotton-2024-06-27/" },
    { author: "Shibli, N.", year: "2021", title: "Political Geographies of Islamophobia: Chinese Ethno-Religious Racism and Structural Violence in East Turkestan", journal: "Islamophobia Studies Journal" },
    { author: "Skenderovic, D.", year: "2019", title: "From Orientalism to Islamophobia", journal: "ReOrient" },
    { author: "Stroup, D. R.", year: "2021", title: "Good Minzu and Bad Muslims: Islamophobia in China's State and Public Discourses", journal: "Nations and Nationalism" },
    { author: "The Guardian", year: "2019", title: "\"Show No Mercy\": Leaked Documents Reveal China's Mass Xinjiang Detentions", url: "https://www.theguardian.com/world/2019/nov/24/china-cables-revealed-international-consortium-investigative-journalists" },
    { author: "The Guardian", year: "2024a", title: "Carmakers May Be Using Aluminium Made by Uyghur Forced Labour", url: "https://www.theguardian.com/world/2024/feb/01/carmakers-may-be-using-aluminium-made-by-uyghur-forced-labour" },
    { author: "The Guardian", year: "2024b", title: "China Has Renamed Hundreds of Uyghur Villages and Towns", url: "https://www.theguardian.com/world/2024/jun/18/china-renamed-uyghur-villages-towns-xinjiang" },
    { author: "The New Yorker", year: "2023", title: "The Uyghurs Forced to Process the World's Fish", url: "https://www.newyorker.com/magazine/2023/10/30/the-uyghurs-forced-to-process-the-worlds-fish" },
    { author: "Trédaniel, M.", year: "2018", title: "Explaining the Chinese Framing of Terrorist Violence in Xinjiang", journal: "Nationalities Papers" },
    { author: "Washington Post", year: "2025", title: "Thailand Repatriates 40 Uyghurs to China", url: "https://www.washingtonpost.com/world/2025/02/27/thailand-uyghurs-deportation-china/" },
    { author: "World Bank", year: "2024", title: "Population, Total: China", url: "https://data.worldbank.org/indicator/SP.POP.TOTL?locations=CN" },
  ];

  return (
    <footer className="foot">
      <div className="container">
        <div className="grid-12" style={{marginBottom: 64}}>
          <div className="span-5">
            <div className="label">Colophon</div>
            <h3 style={{marginTop: 14, fontSize: 32, lineHeight: 1.15}}>
              State-Led Islamophobia in China.
            </h3>
            <p style={{marginTop: 20}}>
              A research publication produced for ASAMST 132, Group 01. The
              site transforms an academic essay into a web-native editorial
              artifact. It does not reproduce copyrighted imagery; all visuals
              are original abstractions or labeled placeholders awaiting
              licensed documentary photography.
            </p>
          </div>
          <div className="span-7">
            <div className="label" style={{marginBottom: 16}}>Selected Bibliography</div>
            <ol className="biblio-list">
              {biblio.map((b, i) => (
                <li key={i}>
                  <span className="b-auth">{b.author}.</span>{' '}
                  <span className="b-year">({b.year}).</span>{' '}
                  {b.url
                    ? <a className="b-title" href={b.url} target="_blank" rel="noopener noreferrer"><em>{b.title}</em></a>
                    : <span className="b-title"><em>{b.title}</em></span>
                  }
                  {b.journal && <span className="b-jour">. {b.journal}</span>}
                  <span>.</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <hr style={{border: 0, borderTop: '1px solid #2a2925', margin: '32px 0'}} />

        <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 16, fontFamily:'var(--mono)', fontSize:11, letterSpacing:'0.14em', textTransform:'uppercase', color:'#8a8577'}}>
          <span>© 2026 · Group 01 · ASAMST 132</span>
          <span>Editorial Research Publication</span>
          <span>All sources cited in-line</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { MediaCulture, Response, Scope, Conclusion, Footer });
