import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion'

/**
 * Abstract, seamlessly-looping brand motion used as the hero backdrop.
 * Deterministic (frame-driven sines) so frame 0 === frame N — perfect for
 * an HTML <video loop>. Indigo/violet palette matches the site identity.
 */
type Orb = { x: number, y: number, r: number, color: string, phase: number, drift: number }

const ORBS: Orb[] = [
  { x: 22, y: 28, r: 560, color: '#6366f1', phase: 0.0, drift: 70 },
  { x: 78, y: 22, r: 480, color: '#4f46e5', phase: 1.2, drift: 90 },
  { x: 64, y: 74, r: 640, color: '#7c3aed', phase: 2.4, drift: 80 },
  { x: 28, y: 82, r: 440, color: '#3b82f6', phase: 3.6, drift: 100 },
  { x: 50, y: 50, r: 520, color: '#818cf8', phase: 5.0, drift: 60 },
]

export const BrandLoop: React.FC = () => {
  const frame = useCurrentFrame()
  const { durationInFrames } = useVideoConfig()
  const t = (frame / durationInFrames) * Math.PI * 2 // 0..2π — loops cleanly

  return (
    <AbsoluteFill style={{ background: 'linear-gradient(135deg, #0b1020 0%, #1e1b4b 100%)' }}>
      {ORBS.map((o, i) => {
        const dx = Math.sin(t + o.phase) * o.drift
        const dy = Math.cos(t + o.phase * 1.3) * o.drift
        const scale = 1 + Math.sin(t + o.phase) * 0.08
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${o.x}%`,
              top: `${o.y}%`,
              width: o.r,
              height: o.r,
              transform: `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(${scale})`,
              borderRadius: '50%',
              background: `radial-gradient(circle, ${o.color}cc 0%, ${o.color}00 70%)`,
              filter: 'blur(70px)',
              opacity: 0.7,
            }}
          />
        )
      })}

      {/* Subtle technical grid, faded toward the edges */}
      <AbsoluteFill
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          WebkitMaskImage: 'radial-gradient(circle at 50% 42%, black 0%, transparent 72%)',
          maskImage: 'radial-gradient(circle at 50% 42%, black 0%, transparent 72%)',
        }}
      />

      {/* Vignette for depth */}
      <AbsoluteFill style={{ boxShadow: 'inset 0 0 320px 90px rgba(0,0,0,0.65)' }} />
    </AbsoluteFill>
  )
}
