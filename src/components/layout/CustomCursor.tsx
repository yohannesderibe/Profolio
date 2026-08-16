import { useEffect, useState } from 'react'
import { useIsDesktop } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const isDesktop = useIsDesktop()
  const reduced = useReducedMotion()
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!isDesktop || reduced) return

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const enter = () => setVisible(true)
    const leave = () => setVisible(false)

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const interactive = target.closest('a, button, [data-cursor="pointer"]')
      setHovering(!!interactive)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseenter', enter)
    window.addEventListener('mouseleave', leave)
    document.addEventListener('mouseover', handleOver)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseenter', enter)
      window.removeEventListener('mouseleave', leave)
      document.removeEventListener('mouseover', handleOver)
    }
  }, [isDesktop, reduced, visible])

  if (!isDesktop || reduced) return null

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] mix-blend-difference transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          opacity: visible ? 1 : 0,
          transform: 'translate(-50%, -50%)',
        }}
        aria-hidden="true"
      >
        <div
          className={`rounded-full border border-white transition-all duration-300 ease-out ${
            hovering ? 'h-12 w-12 bg-white/10' : 'h-6 w-6 bg-transparent'
          }`}
        />
      </div>
      <style>{`body { cursor: none; } a, button { cursor: none; }`}</style>
    </>
  )
}
