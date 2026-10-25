'use client'

import { Link } from 'next-transition-router'
import SectionLabel from '../../shared/ui/SectionLabel/SectionLabel'
import Statement from '../../shared/ui/Statement/Statement'
import LetterHover from '../../shared/ui/LetterHover/LetterHover'
import Reveal from '../../shared/ui/Reveal/Reveal'
import '../../shared/ui/TextLink/TextLink.css'
import './Approach.css'

function ArrowIcon() {
  return (
    <svg
      className="text-link__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h16m0 0-5.2-5M20 12l-5.2 5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export default function Approach() {
  return (
    <section className="approach">
      <Reveal>
        <SectionLabel>[ Подход ]</SectionLabel>
      </Reveal>
      <div className="approach__content">
        <Reveal delay={80}>
          <Statement
            number="01"
            opening="Превращаю сложные процессы"
            body={[
              'в понятные интерфейсы —',
              'от исследования',
              'и дизайн-системы до живого',
              'фронтенда на React.',
            ]}
          />
        </Reveal>
        <Reveal delay={160}>
          <Link className="text-link" href="/about" aria-label="Подробнее обо мне">
            <ArrowIcon />
            <LetterHover text="Подробнее обо мне" className="text-link__label" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
