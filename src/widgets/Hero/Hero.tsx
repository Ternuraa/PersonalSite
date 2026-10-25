'use client'

import { useEffect, useState } from 'react'
import heroPhoto from '../../assets/hero-photo.webp'
import './Hero.css'

const leftLetters = ['L', 'i']
const rightLetters = ['s', 'a']

export default function Hero() {
  const [waving, setWaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const start = window.setTimeout(() => setWaving(true), 1000)
    const end = window.setTimeout(() => setWaving(false), 1000 + 1200)

    return () => {
      window.clearTimeout(start)
      window.clearTimeout(end)
    }
  }, [])

  return (
    <section className="hero">
      <div
        className={waving ? 'hero__name is-waving' : 'hero__name'}
        aria-label="Lisa"
      >
        <span className="hero__part" aria-hidden="true">
          {leftLetters.map((letter, index) => (
            <span
              key={`l-${letter}`}
              className="hero__letter-enter"
              style={{ ['--i' as string]: index }}
            >
              <span
                className="hero__letter"
                style={{ ['--letter-i' as string]: index }}
              >
                {letter}
              </span>
            </span>
          ))}
        </span>
        <span className="hero__photo-enter" style={{ ['--i' as string]: 2 }}>
          <img
            className="hero__photo"
            src={typeof heroPhoto === 'string' ? heroPhoto : heroPhoto.src}
            alt="Обложка проекта «Возьму»"
            width={202}
            height={144}
          />
        </span>
        <span className="hero__part" aria-hidden="true">
          {rightLetters.map((letter, index) => (
            <span
              key={`r-${letter}`}
              className="hero__letter-enter"
              style={{ ['--i' as string]: index + 3 }}
            >
              <span
                className="hero__letter"
                style={{ ['--letter-i' as string]: index + 2 }}
              >
                {letter}
              </span>
            </span>
          ))}
        </span>
      </div>
      <div className="hero__intro">
        <p className="hero__line" style={{ ['--i' as string]: 0 }}>
          Продуктовый дизайнер
        </p>
        <p className="hero__line" style={{ ['--i' as string]: 1 }}>
          и фронтенд-разработчик
        </p>
        <p className="hero__line" style={{ ['--i' as string]: 2 }}>
          [ открыта к предложениям ]
        </p>
      </div>
    </section>
  )
}
