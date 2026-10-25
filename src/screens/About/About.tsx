import AboutHero from '@/widgets/AboutHero/AboutHero'
import AboutSection from '@/widgets/AboutSection/AboutSection'
import Statement from '@/shared/ui/Statement/Statement'
import Reveal from '@/shared/ui/Reveal/Reveal'
import LetterHover from '@/shared/ui/LetterHover/LetterHover'
import portrait from '@/assets/portrait.webp'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <Reveal className="about__photo-wrap" fadeOnly>
        <img
          className="about__photo"
          src={typeof portrait === 'string' ? portrait : portrait.src}
          alt="Портрет Лизы Савельевой"
          width={322}
          height={396}
        />
      </Reveal>
      <div className="about__content">
        <AboutHero />
        <AboutSection title="Дизайн">
          <Statement
            number="01"
            opening="Проектирую интерфейсы"
            body={['и дизайн-системы: от первого', 'сценария до аккуратной передачи', 'в разработку.']}
          />
        </AboutSection>
        <AboutSection title="Разработка">
          <Statement
            number="02"
            opening="Собираю интерфейсы на React:"
            body={[
              'оживляю макеты анимацией',
              'и вниманием к состояниям, довожу',
              'проект до публикации и слежу',
              'за качеством в проде.',
            ]}
          />
        </AboutSection>
        <AboutSection title="Локация">
          <p className="about-section__details">
            Работаю удалённо и в Санкт-Петербурге
            <br />[ открыта к предложениям ]
          </p>
        </AboutSection>
        <AboutSection title="Соцсети">
          <div className="about-section__social">
            <a
              className="about-section__social-link"
              href="https://t.me/LisaSavelieva"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
            >
              <LetterHover text="Telegram" />
            </a>
            <span className="about-section__social-link" aria-label="LinkedIn">
              <LetterHover text="LinkedIn" />
            </span>
          </div>
        </AboutSection>
      </div>
    </div>
  )
}
