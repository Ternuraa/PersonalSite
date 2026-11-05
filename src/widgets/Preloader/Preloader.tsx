'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { PreloaderContext } from './PreloaderContext'
import './Preloader.css'

const CIRCUMFERENCE = 880
const EXIT_DELAY_MS = 500
const MIN_DURATION_MS = 2000

const INTRO_LINES = [
  'Привет, я Лиза! Продуктовый',
  'дизайнер и фронтенд-',
  'разработчик.',
]

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function collectImages() {
  return Array.from(document.images).filter((img) => {
    if (!img.src || img.src.startsWith('data:')) return false
    const rect = img.getBoundingClientRect()
    return rect.width > 0 || img.width > 0 || img.hasAttribute('width')
  })
}

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false)
  const [percent, setPercent] = useState(0)
  const [visible, setVisible] = useState(true)

  const rootRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<SVGSVGElement>(null)
  const percentRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const loadedRef = useRef(0)
  const totalRef = useRef(0)
  const assetsDoneRef = useRef(false)
  const timeDoneRef = useRef(false)
  const finishingRef = useRef(false)

  useEffect(() => {
    if (prefersReducedMotion()) {
      setPercent(100)
      setReady(true)
      setVisible(false)
      document.documentElement.classList.add('is-app-ready')
      return
    }

    document.documentElement.classList.remove('is-app-ready')
    document.documentElement.classList.add('is-preloading')

    const circle = circleRef.current
    if (circle) {
      gsap.set(circle, { '--dashOffset': CIRCUMFERENCE })
    }

    let cancelled = false
    const progressProxy = { value: 0 }

    const updateRing = (value: number) => {
      if (!circle) return
      const offset = CIRCUMFERENCE * (1 - value / 100)
      gsap.set(circle, { '--dashOffset': offset })
    }

    const setDisplay = (value: number) => {
      const next = Math.min(100, Math.round(value))
      setPercent(next)
      updateRing(next)
    }

    // Smooth 0→100 over at least 2s
    const progressTween = gsap.to(progressProxy, {
      value: 100,
      duration: MIN_DURATION_MS / 1000,
      ease: 'power1.inOut',
      onUpdate: () => setDisplay(progressProxy.value),
      onComplete: () => {
        timeDoneRef.current = true
        tryFinish()
      },
    })

    const runExit = () => {
      const root = rootRef.current
      const percentEl = percentRef.current
      const textEl = textRef.current
      const tl = gsap.timeline({
        onComplete: () => {
          document.documentElement.classList.remove('is-preloading')
          document.documentElement.classList.add('is-app-ready')
          setReady(true)
          setVisible(false)
        },
      })

      if (textEl) {
        tl.to(
          textEl.querySelectorAll('.preloader__text-line > span'),
          {
            yPercent: -100,
            clipPath: 'inset(0% 0 120% 0)',
            ease: 'power3.out',
            stagger: 0.08,
            duration: 0.7,
          },
          0,
        )
      }

      if (percentEl) {
        tl.to(percentEl, { opacity: 0, ease: 'sine.out', duration: 0.3 }, 0.15)
      }

      if (circle) {
        tl.to(circle, { opacity: 0, ease: 'sine.out', duration: 0.35 }, 0.2)
      }

      if (root) {
        tl.to(root, { opacity: 0, ease: 'power2.out', duration: 0.45 }, 0.35)
      }
    }

    const tryFinish = () => {
      if (cancelled || finishingRef.current) return
      if (!assetsDoneRef.current || !timeDoneRef.current) return

      finishingRef.current = true
      setDisplay(100)
      window.setTimeout(runExit, EXIT_DELAY_MS)
    }

    const markLoaded = (total: number) => {
      totalRef.current = Math.max(total, 1)
      loadedRef.current = Math.min(loadedRef.current + 1, totalRef.current)
      if (loadedRef.current >= totalRef.current) {
        assetsDoneRef.current = true
        tryFinish()
      }
    }

    const safety = window.setTimeout(() => {
      assetsDoneRef.current = true
      timeDoneRef.current = true
      progressTween.progress(1)
      tryFinish()
    }, 8000)

    const boot = async () => {
      try {
        if (document.fonts?.ready) await document.fonts.ready
      } catch {
        /* ignore font readiness errors */
      }

      if (cancelled) return

      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      })

      if (cancelled) return

      const images = collectImages()
      const total = Math.max(images.length, 1)
      totalRef.current = total

      if (images.length === 0) {
        markLoaded(1)
        return
      }

      images.forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
          markLoaded(total)
          return
        }

        const onDone = () => {
          img.removeEventListener('load', onDone)
          img.removeEventListener('error', onDone)
          markLoaded(total)
        }

        img.addEventListener('load', onDone)
        img.addEventListener('error', onDone)
      })
    }

    void boot()

    return () => {
      cancelled = true
      progressTween.kill()
      window.clearTimeout(safety)
      document.documentElement.classList.remove('is-preloading')
    }
  }, [])

  return (
    <PreloaderContext.Provider value={ready}>
      {children}
      {visible ? (
        <div
          className="preloader"
          ref={rootRef}
          aria-busy={!ready}
          aria-live="polite"
          aria-label={`Загрузка ${percent}%`}
        >
          <div className="preloader__circle-wrap">
            <svg
              ref={circleRef}
              className="preloader__circle"
              width="280"
              height="280"
              viewBox="0 0 280 280"
              fill="none"
              aria-hidden="true"
            >
              <circle
                className="preloader__circle-bg"
                cx="140"
                cy="140"
                r="139.5"
              />
              <circle
                className="preloader__circle-progress"
                cx="140"
                cy="140"
                r="139.5"
              />
            </svg>
            <span className="preloader__percent" ref={percentRef}>
              <span className="preloader__percent-value">{percent}</span>
              <span className="preloader__percent-sign">%</span>
            </span>
          </div>
          <p className="preloader__text" ref={textRef} data-preloader-text="">
            {INTRO_LINES.map((line) => (
              <span className="preloader__text-line" key={line}>
                <span>{line}</span>
              </span>
            ))}
          </p>
        </div>
      ) : null}
    </PreloaderContext.Provider>
  )
}
