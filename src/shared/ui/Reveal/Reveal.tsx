'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import './Reveal.css'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  /** Fade only (no translate) — use with sticky elements */
  fadeOnly?: boolean
}

export default function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  fadeOnly = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          if (once) observer.unobserve(el)
        } else if (!once) {
          el.classList.remove('is-visible')
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const style = delay ? ({ ['--reveal-delay']: `${delay}ms` } as CSSProperties) : undefined
  const classes = ['reveal', fadeOnly ? 'reveal--fade' : null, className].filter(Boolean).join(' ')

  return (
    <div ref={ref} className={classes} style={style}>
      {children}
    </div>
  )
}
