export default function OKCLogo({ size = 22 }) {
  return (
    <span className="okc-logo" style={{ fontSize: size * 0.78 }}>
      <svg viewBox="0 0 128 128" style={{ width: size, height: size }} fill="none">
        <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="12"/>
        <circle cx="64" cy="64" r="12" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <line x1="64" y1="22" x2="64" y2="52"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(72 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(144 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(216 64 64)"/>
          <line x1="64" y1="22" x2="64" y2="52" transform="rotate(288 64 64)"/>
        </g>
      </svg>
      <span>OKaz<span className="car">Car</span></span>
    </span>
  )
}
