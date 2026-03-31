const nodes = [
  { x: 168, y: 110 },
  { x: 448, y: 100 },
  { x: 110, y: 246 },
  { x: 506, y: 236 },
  { x: 188, y: 394 },
  { x: 430, y: 402 },
];

function NodeCube({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} className="landing-home-visual-node">
      <polygon points="0,-22 22,-11 0,0 -22,-11" className="landing-home-node-top" />
      <polygon points="-22,-11 0,0 0,24 -22,13" className="landing-home-node-left" />
      <polygon points="22,-11 0,0 0,24 22,13" className="landing-home-node-right" />
    </g>
  );
}

export function GovernanceHeroVisual() {
  return (
    <div className="landing-home-visual-scene animate-rise-in" aria-hidden="true">
      <div className="landing-home-visual-shell">
        <div className="landing-home-visual-grid" />
        <div className="landing-home-visual-focus-plane" />
        <div className="landing-home-visual-backdrop" />
        <div className="landing-home-visual-aura landing-home-visual-aura-primary animate-pulse-ring" />
        <div className="landing-home-visual-aura landing-home-visual-aura-secondary animate-drift" />
        <div className="landing-home-visual-ring landing-home-visual-ring-one animate-float-slow" />
        <div className="landing-home-visual-ring landing-home-visual-ring-two animate-float-delay" />
        <div className="landing-home-visual-ring landing-home-visual-ring-three animate-drift" />
        <div className="landing-home-visual-orbit landing-home-visual-orbit-one" />
        <div className="landing-home-visual-orbit landing-home-visual-orbit-two" />
        <div className="landing-home-visual-crystal landing-home-visual-crystal-one animate-float-slow" />
        <div className="landing-home-visual-crystal landing-home-visual-crystal-two animate-float-delay" />
        <div className="landing-home-visual-crystal landing-home-visual-crystal-three animate-float-medium" />
        <div className="landing-home-visual-spark landing-home-visual-spark-one animate-float-delay" />
        <div className="landing-home-visual-spark landing-home-visual-spark-two animate-float-slow" />
        <div className="landing-home-visual-spark landing-home-visual-spark-three animate-drift" />
        <div className="landing-home-visual-spark landing-home-visual-spark-four animate-float-medium" />

        <div className="landing-home-visual-assembly">
          <svg viewBox="0 0 620 520" className="landing-home-visual-svg" role="presentation">
            <defs>
              <linearGradient id="landingLine" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(134, 244, 255, 0.2)" />
                <stop offset="50%" stopColor="rgba(108, 231, 255, 0.95)" />
                <stop offset="100%" stopColor="rgba(91, 196, 255, 0.22)" />
              </linearGradient>

              <linearGradient id="landingNodeTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d9f8ff" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#6edcf2" stopOpacity="0.34" />
              </linearGradient>

              <linearGradient id="landingNodeLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#81d8f6" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#2d5d81" stopOpacity="0.16" />
              </linearGradient>

              <linearGradient id="landingNodeRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9de9ff" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#4d7bb4" stopOpacity="0.12" />
              </linearGradient>

              <linearGradient id="landingCoreTop" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d2fbff" stopOpacity="0.96" />
                <stop offset="60%" stopColor="#69f6ff" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#62a8ff" stopOpacity="0.46" />
              </linearGradient>

              <linearGradient id="landingCoreLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#59ebff" stopOpacity="0.64" />
                <stop offset="100%" stopColor="#224b75" stopOpacity="0.28" />
              </linearGradient>

              <linearGradient id="landingCoreRight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8edfff" stopOpacity="0.56" />
                <stop offset="100%" stopColor="#1f4263" stopOpacity="0.24" />
              </linearGradient>

              <radialGradient id="landingCoreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7dffff" stopOpacity="0.9" />
                <stop offset="45%" stopColor="#47dfff" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#47dfff" stopOpacity="0" />
              </radialGradient>

              <filter id="landingGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <pattern id="landingCoreGrid" width="18" height="18" patternUnits="userSpaceOnUse">
                <path d="M18 0H0V18" fill="none" stroke="rgba(182,246,255,0.18)" strokeWidth="1" />
              </pattern>
            </defs>

            <ellipse cx="310" cy="352" rx="164" ry="42" fill="rgba(79, 211, 255, 0.08)" />
            <ellipse cx="310" cy="352" rx="118" ry="20" fill="rgba(126, 242, 255, 0.1)" />

            <g className="landing-home-visual-wireframe" filter="url(#landingGlow)">
              {nodes.map((node) => (
                <line key={`${node.x}-${node.y}`} x1="310" y1="220" x2={node.x} y2={node.y} stroke="url(#landingLine)" strokeWidth="2.4" strokeLinecap="round" />
              ))}
              <path
                d="M168 110 448 100 506 236 430 402 188 394 110 246Z"
                fill="none"
                stroke="rgba(116,232,255,0.38)"
                strokeWidth="1.8"
              />
              <path
                d="M168 110 310 220 448 100M110 246 310 220 506 236M188 394 310 220 430 402"
                fill="none"
                stroke="rgba(124,239,255,0.18)"
                strokeWidth="1.2"
              />
            </g>

            {nodes.map((node) => (
              <NodeCube key={`cube-${node.x}-${node.y}`} x={node.x} y={node.y} />
            ))}

            <g className="landing-home-electric-arcs">
              <path
                d="M205 176 190 204 208 212 182 244 199 253"
                className="landing-home-electric-arc landing-home-electric-arc-a"
              />
              <path
                d="M392 156 414 176 400 197 430 214 412 236"
                className="landing-home-electric-arc landing-home-electric-arc-b"
              />
              <path
                d="M338 304 352 324 336 338 356 360 340 381"
                className="landing-home-electric-arc landing-home-electric-arc-c"
              />
            </g>

            <g className="landing-home-core-group animate-float-medium">
              <circle cx="310" cy="220" r="118" fill="url(#landingCoreGlow)" />
              <polygon points="310,114 398,164 310,214 222,164" fill="url(#landingCoreTop)" stroke="rgba(181,247,255,0.46)" strokeWidth="1.5" />
              <polygon points="222,164 310,214 310,318 222,268" fill="url(#landingCoreLeft)" stroke="rgba(131,235,255,0.34)" strokeWidth="1.5" />
              <polygon points="398,164 310,214 310,318 398,268" fill="url(#landingCoreRight)" stroke="rgba(131,235,255,0.34)" strokeWidth="1.5" />
              <polygon points="310,130 383,171 310,212 237,171" fill="url(#landingCoreGrid)" opacity="0.7" />
              <path d="M310 150v130" stroke="rgba(195,250,255,0.28)" strokeWidth="1.4" />
              <path d="M278 175h64M262 198h96M248 222h124" stroke="rgba(187,247,255,0.18)" strokeWidth="1.1" />
              <circle cx="310" cy="218" r="10" fill="rgba(188,255,255,0.88)" />
            </g>

            <g transform="translate(152 216) scale(1.04)" className="animate-float-delay">
              <path
                d="M42 8 74 22v36c0 25-14 48-39 64C10 106-4 83-4 58V22L28 8c4-2 10-2 14 0Z"
                fill="rgba(126, 243, 255, 0.08)"
                stroke="rgba(137, 248, 255, 0.7)"
                strokeWidth="2"
              />
              <path d="m19 60 12 12 21-28" fill="none" stroke="rgba(115, 246, 255, 0.92)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>

            <g transform="translate(426 220) scale(1.02)" className="animate-float-slow">
              <path
                d="M42 8 74 22v36c0 25-14 48-39 64C10 106-4 83-4 58V22L28 8c4-2 10-2 14 0Z"
                fill="rgba(126, 243, 255, 0.06)"
                stroke="rgba(196, 244, 255, 0.46)"
                strokeWidth="2"
              />
              <rect x="22" y="49" width="22" height="19" rx="5" fill="none" stroke="rgba(126, 246, 255, 0.82)" strokeWidth="3" />
              <path d="M27 48v-7c0-8 5-13 11-13s11 5 11 13v7" fill="none" stroke="rgba(126, 246, 255, 0.82)" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
        </div>

        <div className="landing-home-visual-foreground-haze" />
      </div>
    </div>
  );
}
