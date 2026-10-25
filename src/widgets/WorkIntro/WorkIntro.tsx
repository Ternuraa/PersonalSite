import SectionLabel from '../../shared/ui/SectionLabel/SectionLabel'
import Statement from '../../shared/ui/Statement/Statement'
import Reveal from '../../shared/ui/Reveal/Reveal'
import './WorkIntro.css'

export default function WorkIntro() {
  return (
    <section className="work-intro">
      <Reveal>
        <SectionLabel>[ Работы ]</SectionLabel>
      </Reveal>
      <div className="work-intro__content">
        <Reveal delay={80}>
          <Statement
            number="01"
            opening="Подборка работ, где дизайн"
            body={['соединяется с кодом,', 'а сложные процессы —', 'в понятный опыт.']}
          />
        </Reveal>
        <Reveal delay={160}>
          <span className="work-intro__tags">UX · UI · Код</span>
        </Reveal>
      </div>
    </section>
  )
}
