function H2({ children }) {
  return <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.8px', marginTop: 56, marginBottom: 16, lineHeight: 1.15 }}>{children}</h2>
}
function P({ children }) {
  return <p style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--okc-text-secondary)', margin: '0 0 20px' }}>{children}</p>
}
function Signal({ n, title, children }) {
  return (
    <div style={{ borderTop: '1px solid var(--okc-border)', paddingTop: 28, marginTop: 28 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'baseline', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 11, color: 'var(--okc-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>Signal 0{n}</span>
        <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: '-0.5px', margin: 0 }}>{title}</h3>
      </div>
      <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}
function Callout({ children }) {
  return (
    <div style={{ background: 'var(--okc-bg-light)', border: '1px solid var(--okc-border)', borderLeft: '3px solid var(--okc-primary)', borderRadius: 4, padding: '18px 24px', margin: '32px 0' }}>
      <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--okc-text-secondary)', margin: 0 }}>{children}</p>
    </div>
  )
}

export default function CompteurTrafique() {
  return (
    <>
      <P>
        In France, between 5 and 8% of used vehicles listed for sale have a falsified mileage. This is not forum rumor — it is an estimate drawn from vehicle inspections, the 2014 Colomer report, and cross-referencing carried out since by organisations such as UFC-Que Choisir. On a market of over 5 million transactions a year, that represents several hundred thousand cars whose odometers have been rolled back, sometimes by 50,000 km, sometimes by 200,000.
      </P>
      <P>
        The manipulation is trivially easy today. An OBD dongle plugged into the diagnostic port, a piece of software costing €30 online, and you can rewrite the odometer in under twenty minutes. Certain unregistered workshops still offer it as a service. And contrary to what many people think, modern cars are no better protected — they simply have digital dashboards that are easier to reconfigure than the old mechanical cables.
      </P>
      <P>
        That is why OKazCar does not merely display the stated mileage. The engine's L3 filter cross-references the mileage against the registration year to detect statistical inconsistencies. But beyond the tool, here are the 7 concrete signals to check yourself before you sign.
      </P>

      <Signal n={1} title="Mileage vs. age consistency">
        An average French car covers 13,000 to 15,000 km per year. A saloon that is 8 years old showing 45,000 km is a statistical anomaly — either it has barely been driven (a collector's car? a rarely used second vehicle?), or the odometer has been altered. Ask the seller about actual usage: daily commuting, city or highway? Does it tally with the wear on consumable parts?
      </Signal>

      <Signal n={2} title="Pedal and steering wheel wear">
        This is the hardest signal to fake. A vehicle with 40,000 km should have near-new brake and clutch pedals, a firm steering wheel, and a gear lever with no play. If you notice pronounced wear on these items for the stated low mileage, that is a red flag.
      </Signal>

      <Signal n={3} title="Door seals and cleaning marks">
        Rubber seals crack and dry out gradually. You cannot replace them without leaving traces. A genuinely low-mileage vehicle will have them in perfect condition. Also look at the overall condition of the driver's side floor: a worn carpet tells you more than an odometer.
      </Signal>

      <Signal n={4} title="Service history">
        A complete service book with dated stamps and consistent mileage entries is your best weapon. Every oil change recorded with its mileage is a milestone that is difficult to falsify retrospectively. Insist on the service book, and if possible the vehicle inspection certificates. In France, every technical inspection (CT) records the mileage at the date of the visit — it is a legal trace that a dishonest seller cannot erase.
      </Signal>

      <Signal n={5} title="Brake disc condition">
        Discs score and wear. A vehicle with 60,000 km will generally have had its brake pads replaced at least once, and the discs will show light central scoring. A vehicle listed at 30,000 km with discs scored 2–3 mm deep should raise the alarm.
      </Signal>

      <Signal n={6} title="VIN check on official databases">
        HistoVec (French government, free) lets you view a vehicle's inspection history along with the associated mileage readings. AutoDNA, Carfax Europe, or Cartell cover imported vehicles with additional data. OKazCar also integrates import detection via filter L8 — a vehicle imported from Germany or Belgium presents a different mileage profile and deserves extra scrutiny.
      </Signal>

      <Signal n={7} title="The cold-start test">
        Before the test drive, arrive early and ask to see the vehicle with the engine cold, before it is started. A warm engine always starts more easily — certain faults (blue smoke, timing chain noise, knocking) are far more audible when cold. It is a simple but effective tip that few buyers think to apply.
      </Signal>

      <Callout>
        Odometer fraud is a criminal offence (Article 313-1 of the French Penal Code, punishable by up to 5 years' imprisonment and a €375,000 fine). But the penalty does not undo the repair bills you will face. The best protection remains systematically cross-referencing these 7 signals — and running an OKazCar analysis before every visit.
      </Callout>
    </>
  )
}
