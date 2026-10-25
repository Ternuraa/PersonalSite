'use client'

import { useRef } from 'react'
import { TransitionRouter } from 'next-transition-router'
import gsap from 'gsap'
import '@/widgets/GridShutter/GridShutter.css'

const ROWS = 7
const COLS = 11

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null)

  const cover = () =>
    new Promise<void>((resolve) => {
      const root = rootRef.current
      if (!root) {
        resolve()
        return
      }

      root.classList.add('is-active')
      const tl = gsap.timeline({ onComplete: resolve })

      for (let row = 0; row < ROWS; row++) {
        const blocks = root.querySelectorAll<HTMLElement>(
          `.grid-shutter__row:nth-child(${row + 1}) .grid-shutter__block`,
        )
        const odd = row % 2 === 0
        gsap.set(blocks, { scaleX: 0 })
        tl.to(
          blocks,
          {
            scaleX: 1,
            duration: 0.5,
            ease: 'power3.inOut',
            stagger: {
              each: 0.028,
              from: odd ? 'start' : 'end',
            },
          },
          row * 0.045,
        )
      }
    })

  const reveal = () =>
    new Promise<void>((resolve) => {
      const root = rootRef.current
      if (!root) {
        resolve()
        return
      }

      const tl = gsap.timeline({
        onComplete: () => {
          root.classList.remove('is-active')
          resolve()
        },
      })

      for (let row = 0; row < ROWS; row++) {
        const blocks = root.querySelectorAll<HTMLElement>(
          `.grid-shutter__row:nth-child(${row + 1}) .grid-shutter__block`,
        )
        const odd = row % 2 === 0
        tl.to(
          blocks,
          {
            scaleX: 0,
            duration: 0.5,
            ease: 'power3.inOut',
            stagger: {
              each: 0.028,
              from: odd ? 'end' : 'start',
            },
          },
          row * 0.045,
        )
      }
    })

  return (
    <TransitionRouter
      auto
      leave={(next) => {
        const go = () => {
          window.scrollTo(0, 0)
          next()
        }
        if (prefersReducedMotion()) {
          go()
          return
        }
        cover().then(go)
      }}
      enter={(next) => {
        window.scrollTo(0, 0)
        if (prefersReducedMotion()) {
          next()
          return
        }
        reveal().then(next)
      }}
    >
      {children}
      <div className="grid-shutter" ref={rootRef} aria-hidden="true">
        {Array.from({ length: ROWS }, (_, row) => (
          <div className="grid-shutter__row" key={row}>
            {Array.from({ length: COLS }, (_, col) => (
              <div className="grid-shutter__block" key={`${row}-${col}`} />
            ))}
          </div>
        ))}
      </div>
    </TransitionRouter>
  )
}
