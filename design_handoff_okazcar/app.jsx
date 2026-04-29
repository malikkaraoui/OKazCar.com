/* ===== OKazCar — App root ===== */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "swiss",
  "showMarquee": true,
  "accentColor": "#fbbf24"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme === 'swiss' ? '' : tweaks.theme;
    document.documentElement.style.setProperty('--okc-accent', tweaks.accentColor);
  }, [tweaks.theme, tweaks.accentColor]);

  window.OKCUseReveal([tweaks.theme]);

  return (
    <>
      <window.Nav/>
      <main>
        <window.Hero/>
        {tweaks.showMarquee && <window.Marquee/>}
        <window.Showcase/>
        <window.FiltersGrid/>
        <window.LiveDemo/>
        <window.HowItWorks/>
        <window.Audience/>
        <window.Coverage/>
        <window.Numbers/>
        <window.Comparison/>
        <window.Blog/>
        <window.FAQ/>
        <window.CTA/>
      </main>
      <window.Footer/>

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Direction visuelle">
          <window.TweakRadio
            label="Thème"
            value={tweaks.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
              { value: 'swiss', label: 'Swiss' },
              { value: 'premium', label: 'Premium' },
              { value: 'editorial', label: 'Editorial' },
            ]}
          />
          <window.TweakColor
            label="Couleur accent"
            value={tweaks.accentColor}
            onChange={(v) => setTweak('accentColor', v)}
          />
        </window.TweakSection>
        <window.TweakSection title="Sections">
          <window.TweakToggle
            label="Bandeau défilant (plateformes)"
            value={tweaks.showMarquee}
            onChange={(v) => setTweak('showMarquee', v)}
          />
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
