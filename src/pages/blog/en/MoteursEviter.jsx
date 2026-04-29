function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Callout({ children }) {
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: '3px solid var(--okc-primary)', borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}
function Engine({ n, name, score, children }) {
  const s = parseFloat(score)
  const color = s <= 2 ? 'var(--okc-fail)' : s <= 3.5 ? 'var(--okc-warning)' : 'var(--okc-pass)'
  const bg = s <= 2 ? 'var(--okc-fail-bg)' : s <= 3.5 ? 'var(--okc-warning-bg)' : 'var(--okc-pass-bg)'
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 28, marginTop: 28 }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'baseline', flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{n}.</span>
        <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: '-0.4px', margin: 0, flex: 1 }}>{name}</h3>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 12, fontWeight: 700, color, background: bg, padding: '3px 10px', borderRadius: 2, flexShrink: 0 }}>
          {score}/5
        </span>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function MoteursEviter() {
  return (
    <>
      <P>
        Not all engines age the same way. Between a Volkswagen 1.9 TDI that comfortably exceeds 500,000 km and a PSA 1.2 PureTech that gives up the ghost at 80,000 km with a timing belt eaten by engine oil, the difference can cost an uninformed buyer several thousand euros.
      </P>
      <P>
        OKazCar's L11 filter analyses the engine of each listing and cross-references it against our reliability database, built by aggregating 12 independent sources (specialist forums, vehicle inspection reports, repairer databases, and consumer organisation statistics). Here are the engines that score lowest — and, more importantly, why.
      </P>

      <H2>Diesel engines to avoid</H2>

      <Engine n="1" name="BMW 2.0d N47 (2006–2014)" score="1.5">
        This is probably the most well-documented design flaw in European automotive history of the 2000s. The N47's timing chain is positioned on the gearbox side (rather than the belt side as on most engines), making it inaccessible without removing the engine. It stretches between 100,000 and 150,000 km, and when it fails it does so suddenly — without sufficient audible warning — causing complete engine destruction. Repair costs regularly exceed €3,000 to €4,000. BMW acknowledged the fault but never issued an official recall. Avoid at all costs, unless you can prove the chain has already been replaced. Affected models: BMW 1 Series, 3 Series, 5 Series, X1, X3 with 2.0d engine between 2006 and 2014.
      </Engine>

      <Engine n="2" name="Volkswagen 2.0 TDI EA189 (2008–2015)" score="1.5">
        The Dieselgate engine. In September 2015, Volkswagen admitted to equipping 11 million vehicles worldwide with software that detected emissions test cycles and temporarily activated pollution filters — in real-world conditions, NOx emissions were up to 40 times higher. The mandatory manufacturer recall in France weakened the EGR valve on many units. Resale values for these vehicles remain permanently depressed. Affected engine codes: CJAA, CBAB, CBDA, CFGB, CLCA. Found in Golf VI, Jetta, Passat B7, Tiguan, Seat Leon/Ibiza, and Skoda Octavia/Yeti between 2008 and 2015.
      </Engine>

      <Engine n="3" name="Fiat Multijet / JTD (2005–2012)" score="3.0">
        The common-rail injectors are the historically weak point of this engine family. Replacing a full set of injectors frequently costs €1,500 to €2,000. The timing belt schedule must be followed strictly — a belt failure at 90,000 km on a Multijet typically generates a bill that exceeds the vehicle's value. Consider only with a complete service history.
      </Engine>

      <H2>Petrol engines to avoid</H2>

      <Engine n="4" name="BMW 2.0 N20 (2011–2016)" score="2.0">
        Two problems: the timing chain and the electric water pump. This pump typically fails around 100,000 km, sometimes earlier. An undetected overheating event can cause cylinder head failure. The pump alone costs €400 to €800 as a BMW part. The B48 that replaced it from 2016 onwards addresses both issues — if you want a four-cylinder BMW petrol, go post-2016. Affected models: BMW 320i, 328i, 420i, 520i, 528i, X1, X3 with N20 engine between 2011 and 2016.
      </Engine>

      <Engine n="5" name="PSA 1.2 PureTech 3-cylinder (2012–2019)" score="1.5">
        The problem is structural: the timing belt runs in engine oil, a design that accelerates its wear. Failures have been reported well before the manufacturer's recommended replacement interval (140,000 km), sometimes as early as 50,000–60,000 km. Peugeot and Citroën extended warranties on more recent vehicles, but first-generation examples remain risky. Affected models: Peugeot 208, 308, 2008, 3008, Citroën C3, C4, DS3, DS5, Opel Crossland.
      </Engine>

      <Engine n="6" name="Renault 0.9 TCe 3-cylinder" score="3.5">
        Acceptable reliability overall, but one recurring weak point: coolant leaks at the thermostat housing. Not a catastrophic failure in itself, but a systematic intervention at higher mileages that can mask other issues if left unattended too long. Check the coolant level and its colour before any purchase.
      </Engine>

      <Engine n="7" name="Ford 1.0 EcoBoost 100–125hp (pre-2018)" score="4.0">
        Rated 4/5 overall, but the problem is real on early versions: frequent coolant leaks, particularly at the cylinder head gasket. Ford revised the head gasket on post-2018 versions. If you are looking at a pre-2018 EcoBoost, insist on proof that the gasket has been replaced, or check the coolant colour (black discolouration = oil contamination — red alert).
      </Engine>

      <Engine n="8" name="Volkswagen 1.4 TSI EA111 (pre-2012)" score="4.5">
        The EA211 (2012 onward) is excellent. The EA111 (pre-2012) suffers from a fragile timing chain and a failing water pump. If you are buying a Golf VI, Polo, or Seat Ibiza with a 1.4 TSI and a build date before 2012, check the engine code on the registration document.
      </Engine>

      <Engine n="9" name="Honda 1.6 iDTEC (diesel)" score="3.0">
        The timing chain requires regular monitoring, and the EGR valve clogs in urban use as with most diesels. Not a bad engine, but it demands rigorous maintenance and predominantly motorway driving to stay in good shape.
      </Engine>

      <Engine n="10" name="Opel 1.7 CDTI Z17DTH" score="3.0">
        The gearbox is the weak point of this combination, not the engine itself. Test the gear changes during the test drive — difficulty engaging 1st or reverse when cold is a warning sign. The timing belt must be replaced at 120,000 km.
      </Engine>

      <Engine n="11" name="Hyundai-Kia CRDi (pre-2010)" score="3.5">
        Generations before 2010 are significantly less reliable than recent versions. Hyundai's move into premium quality dates from around 2012–2014. If you are targeting a CRDi, aim for post-2012 vehicles — the reliability difference compared to earlier generations is substantial.
      </Engine>

      <Engine n="12" name="Mazda SkyActiv-D (urban use)" score="3.0">
        Technically well-designed, but the FAP (DPF — diesel particulate filter) clogs quickly in 100% urban use. This engine needs regular regeneration cycles — at least one 30-minute run at sustained revs every two weeks. If you drive exclusively in the city, avoid it. It is built for the open road.
      </Engine>

      <H2>What OKazCar does with this data</H2>
      <P>
        The L11 filter automatically compares each listing's engine against this database. When an N47, an EA189, or a 1.2 PureTech is detected, the listing's overall score is adjusted and the alert is explicitly noted in the report. This is not a block — it is information. Some of these vehicles sell at very low prices that already factor in the risk. You just need to know what you are buying.
      </P>
    </>
  )
}
