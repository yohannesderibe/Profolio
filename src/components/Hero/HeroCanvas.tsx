import { Suspense, lazy } from 'react'
import { Canvas } from '@react-three/fiber'
import { useIsMobile } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const HeroScene = lazy(() =>
  import('./HeroScene').then((m) => ({ default: m.HeroScene }))
)

function SceneFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-32 w-32 animate-pulse rounded-full bg-accent/10 blur-2xl" />
    </div>
  )
}

function StaticFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative h-40 w-40 rounded-2xl border border-accent/30 bg-bg-elevated/50 rotate-12" />
      <div className="absolute h-24 w-24 rounded-full border border-accent-secondary/30 -rotate-6" />
    </div>
  )
}

export function HeroCanvas() {
  const isMobile = useIsMobile()
  const reduced = useReducedMotion()

  if (isMobile || reduced) {
    return <StaticFallback />
  }

  return (
    <Suspense fallback={<SceneFallback />}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <HeroScene />
      </Canvas>
    </Suspense>
  )
}
