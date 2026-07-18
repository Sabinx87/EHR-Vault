import './PulseLine.css'

export default function PulseLine() {
  return (
    <svg
      className="pulse-line"
      viewBox="0 0 300 60"
      preserveAspectRatio="none"
      role="presentation"
      aria-hidden="true"
    >
      <path
        className="pulse-line-path"
        d="M0 30 H60 L75 10 L90 50 L105 30 H140 L150 15 L160 45 L170 30 H300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}