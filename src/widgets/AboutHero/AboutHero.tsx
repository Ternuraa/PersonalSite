import Reveal from '../../shared/ui/Reveal/Reveal'
import './AboutHero.css'

const paragraphs: string[][] = [
  [
    'Я — продуктовый дизайнер',
    'и фронтенд-разработчик. Соединяю',
    'дизайн и код: проектирую интерфейсы',
    'и сама собираю их в продукты,',
    'которыми удобно пользоваться.',
  ],
  [
    'Люблю продуманные сценарии,',
    'понятную логику и внимание к деталям,',
    'которые делают сложный процесс',
    'простым, а интерфейс — живым',
    'и удобным каждый день.',
  ],
]

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero__intro">
        {paragraphs.map((lines, paragraphIndex) => (
          <Reveal key={paragraphIndex} delay={paragraphIndex * 120}>
            <p className="about-hero__paragraph">
              {lines.map((line, lineIndex) => (
                <span
                  className={
                    lineIndex === 0
                      ? 'about-hero__line about-hero__line--indent'
                      : 'about-hero__line'
                  }
                  key={lineIndex}
                >
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
