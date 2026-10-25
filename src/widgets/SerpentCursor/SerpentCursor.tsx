'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import './SerpentCursor.css'

// Universal pointer tracker — attach to each .cur box. Writes --x/--y/--angle/
// --speed and toggles .is-active (pointer inside) and .is-near (near centre,
// used by the magnetic cursor). Everything else is pure CSS.
function bindCursor(box: HTMLElement) {
  let lx = 0,
    ly = 0,
    has = false,
    idle: ReturnType<typeof setTimeout> | undefined
  const set = (p: string, v: string) => box.style.setProperty(p, v)

  const onMove = (e: PointerEvent) => {
    const r = box.getBoundingClientRect()
    const x = e.clientX - r.left,
      y = e.clientY - r.top

    // First position: snap to real cursor, don't animate from screen center
    if (!has) {
      box.classList.add('is-warping')
      set('--x', x.toFixed(1) + 'px')
      set('--y', y.toFixed(1) + 'px')
      box.classList.add('is-active')
      requestAnimationFrame(() => {
        box.classList.remove('is-warping')
      })
    } else {
      const dx = x - lx,
        dy = y - ly,
        d = Math.hypot(dx, dy)
      if (d > 0.5) set('--angle', Math.atan2(dy, dx).toFixed(3) + 'rad')
      set('--speed', Math.min(1, d / 32).toFixed(3))
      set('--x', x.toFixed(1) + 'px')
      set('--y', y.toFixed(1) + 'px')
    }

    box.classList.toggle('is-near', Math.hypot(x - r.width / 2, y - r.height / 2) < 60)
    box.classList.add('is-active')
    lx = x
    ly = y
    has = true
    clearTimeout(idle)
    idle = setTimeout(() => set('--speed', '0'), 120) // relax when the pointer stops

    // Tagalong VIEW label over project cards
    const under = document.elementFromPoint(e.clientX, e.clientY)
    const overCard = Boolean(under?.closest('.project-card'))
    box.classList.toggle('is-label', overCard)
    box.classList.toggle('cur-label', overCard)
  }

  const onLeave = () => {
    box.classList.remove('is-active', 'is-near', 'is-label', 'cur-label')
    set('--speed', '0')
    has = false
  }

  // Site overlay uses pointer-events: none, so track on the document.
  document.addEventListener('pointermove', onMove)
  document.documentElement.addEventListener('pointerleave', onLeave)

  return () => {
    document.removeEventListener('pointermove', onMove)
    document.documentElement.removeEventListener('pointerleave', onLeave)
    clearTimeout(idle)
  }
}

function shouldEnableCursor() {
  if (typeof window === 'undefined') return false
  const coarse = window.matchMedia('(pointer: coarse)').matches
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  return !coarse && !reduced
}

export default function SerpentCursor() {
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const box = boxRef.current
    if (!box || !shouldEnableCursor()) return

    document.documentElement.classList.add('has-serpent-cursor')
    const unbind = bindCursor(box)

    return () => {
      unbind()
      document.documentElement.classList.remove('has-serpent-cursor')
    }
  }, [])

  return (
    <div
      ref={boxRef}
      className="cur cur-snake cur--site"
      data-cursor="snake"
      role="img"
      aria-label="Serpent cursor demo"
    >
      <span className="cur-hint mono" aria-hidden="true">
        hover
      </span>
      <span className="cur-word" aria-hidden="true"></span>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <i key={i} className="cursor" style={{ '--i': i } as CSSProperties} />
      ))}
      <span className="cursor flag mono" aria-hidden="true">
        VIEW ↗
      </span>
    </div>
  )
}
