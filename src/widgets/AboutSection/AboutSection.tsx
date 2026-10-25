import type { ReactNode } from 'react'
import Reveal from '../../shared/ui/Reveal/Reveal'
import './AboutSection.css'

interface AboutSectionProps {
  title: string
  children: ReactNode
}

export default function AboutSection({ title, children }: AboutSectionProps) {
  return (
    <section className="about-section">
      <Reveal className="about-section__inner">
        <h2 className="about-section__title">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}
