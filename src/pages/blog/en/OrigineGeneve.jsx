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

export default function OrigineGeneve() {
  return (
    <>
      <P>
        The idea behind OKazCar was not born at a hackathon or inside an incubator. It was born on a weekday evening, in a Geneva apartment, in front of a terminal open on a LeBonCoin listing.
      </P>
      <P>
        At the time, I was taking an intensive Python course at Nüsanes Technologie, Geneva. The goal was to get to grips with the Python ecosystem for web development and automation. We had the basics — Flask, HTTP requests, BeautifulSoup for parsing. And like everyone at the end of a module, we were looking for a concrete project to practise on.
      </P>
      <P>
        The problem I wanted to solve was personal, mundane, and at that point without a satisfying solution: how do you look at a used-car listing and know whether the price is justified, whether the mileage makes sense, whether the vehicle is subject to a manufacturer recall? I had just missed a purchase — a car listed at a good price that turned out to be a German import with a patchy service history. The visit had cost me time, and the lack of information had cost me an opportunity.
      </P>
      <P>
        The first script was called, with no great originality, <code style={{ fontFamily: 'var(--okc-font-mono)', fontSize: 15, background: 'var(--okc-bg-light)', padding: '1px 6px', borderRadius: 2 }}>leboncoin_scraper.py</code>. It retrieved listings from a given search, extracted prices, mileages, and years, and calculated a median from the sample. Nothing extraordinary. But it was enough to realise that the price dispersion on LeBonCoin was enormous — sometimes a 40% gap between two identical vehicles on the same date, in the same city. The information existed, it was accessible, but it was not being processed.
      </P>

      <H2>From script to filter</H2>
      <P>
        The next step was to add mileage-to-age consistency checking. A 2015 model at 12,000 km deserves a closer look. A 2010 model at 400,000 km deserves another kind of look. The 13,000 km per year rule is an approximation, but it is a statistically solid one for the French vehicle fleet. We are not inventing anything — we are flagging an anomaly.
      </P>
      <P>
        Then came the Takata recalls. The Takata airbag crisis is one of the largest recalls in global automotive history: over 100 million vehicles affected, documented fatalities caused by airbags that fragmented instead of inflating. In France, hundreds of thousands of vehicles are affected, yet listings never mention it. Adding an automatic VIN check was a logical step — and the official NHTSA/RAPEX recall list is publicly available.
      </P>

      <H2>The question that changed everything</H2>
      <P>
        At some point during this amateur development, I asked myself a question: how many people do exactly the same thing manually before every purchase? Check the pricing guide, look through forums, search for recalls, compare prices — spending 2 to 3 hours on every serious listing?
      </P>
      <P>
        The obvious answer was: a lot. And the complementary answer was: most of them do not have the technical skills to automate this work. They rely on gut feeling, on the seller, sometimes on a mechanic friend. But they have no structured tool.
      </P>

      <H2>From Geneva to production</H2>
      <P>
        Today OKazCar runs on Google Cloud Run, with a Neon PostgreSQL database, a 12-filter weighted analysis engine, and a Chrome extension that integrates directly into LeBonCoin, LaCentrale, and AutoScout24 (France, Germany, Switzerland, Italy, Belgium, the Netherlands, Austria, Spain, Poland, Luxembourg, and Sweden). The evening training-session script has become something usable by anyone — without technical knowledge, without a subscription.
      </P>
      <P>
        But the original intuition has not changed: the information that prevents you from being misled is available. It is scattered, noisy, and difficult to interpret alone. The tool centralises it and translates it into a score. That is all — and that is enough.
      </P>

      <Callout>
        The next version will add detection of cross-platform duplicate listings (the same vehicle sold simultaneously on several platforms at different prices), price history tracking for a single listing, and an argued negotiation module based on detected faults.
      </Callout>

      <P>
        For now: install the extension, open a listing, and let the tool do the thankless work. The rest is your judgement.
      </P>
    </>
  )
}
