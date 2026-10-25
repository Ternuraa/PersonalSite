import Reveal from '@/shared/ui/Reveal/Reveal'
import SectionLabel from '@/shared/ui/SectionLabel/SectionLabel'
import cover1 from '@/assets/case-prokadry-1.webp'
import cover2 from '@/assets/case-prokadry-2.webp'
import cover3 from '@/assets/case-prokadry-3.webp'
import cover4 from '@/assets/case-prokadry-4.webp'
import './CaseProkadry.css'

type ImageSrc = string | { src: string }

interface CaseStatementProps {
  number: string
  opening: string
  body: string
}

function CaseStatement({ number, opening, body }: CaseStatementProps) {
  return (
    <div className="case-statement">
      <div className="case-statement__opening">
        <span className="case-statement__number">{number}</span>
        <p className="case-statement__heading">{opening}</p>
      </div>
      <p className="case-statement__body">{body}</p>
    </div>
  )
}

interface CaseBlockProps {
  label: string
  number: string
  opening: string
  body: string
}

function CaseBlock({ label, number, opening, body }: CaseBlockProps) {
  return (
    <div className="case-prokadry__block">
      <SectionLabel>{`[ ${label} ]`}</SectionLabel>
      <CaseStatement number={number} opening={opening} body={body} />
    </div>
  )
}

function imgSrc(image: ImageSrc) {
  return typeof image === 'string' ? image : image.src
}

interface CaseMediaProps {
  image: ImageSrc
  imageAlt: string
  wide?: boolean
}

function CaseMedia({ image, imageAlt, wide = false }: CaseMediaProps) {
  return (
    <Reveal className={`case-prokadry__media${wide ? ' case-prokadry__media--wide' : ''}`}>
      <img
        className={`case-prokadry__cover${wide ? ' case-prokadry__cover--wide' : ''}`}
        src={imgSrc(image)}
        alt={imageAlt}
        width={wide ? 1360 : 668}
        height={wide ? 1226 : 602}
      />
    </Reveal>
  )
}

export default function CaseProkadry() {
  return (
    <article className="case-prokadry">
      <Reveal className="case-prokadry__hero">
        <h1 className="case-prokadry__title">ProКадры (MagnitTech)</h1>
        <p className="case-prokadry__subtitle">
          Внутренний портал для сотрудников Магнита
        </p>
      </Reveal>

      <section className="case-prokadry__chapter case-prokadry__chapter--split">
        <Reveal className="case-prokadry__copy case-prokadry__copy--stack">
          <CaseBlock
            label="Ситуация"
            number="01"
            opening="ProКадры это портал для сотрудников Магнита"
            body="Раньше новости, награждения, дни рождения, документы и события лежали в разных местах. Людям было сложно найти нужное. Не было одного понятного входа."
          />
          <CaseBlock
            label="Задача"
            number="02"
            opening="Спроектировать дизайн портала с нуля"
            body="Нужно было продумать структуру, сценарии разделов и интерфейс. И сделать так, чтобы команда могла дальше собирать страницы без дизайнера на каждый экран. Поэтому за основу взяла дизайн-систему Ant Магнита."
          />
        </Reveal>
        <CaseMedia image={cover1} imageAlt="Главный экран портала ProКадры" />
      </section>

      <section className="case-prokadry__chapter case-prokadry__chapter--stack">
        <Reveal className="case-prokadry__copy case-prokadry__copy--pair">
          <CaseBlock
            label="Что сделано"
            number="03"
            opening="Что я сделала в проекте"
            body="Собрала структуру сайта вокруг задач сотрудника. Сделала главную как личную ленту дня. Нарисовала разделы: документы, календарь, новости, конкурсы, обратная связь и контакты. Разложила экраны на готовые компоненты Ant. Добавила простое скрытие дня рождения прямо в блоке."
          />
          <CaseBlock
            label="Главная"
            number="04"
            opening="Почему главная такая"
            body="Человек заходит на портал между рабочими делами. Если за несколько секунд не видит ничего полезного, он просто закрывает вкладку. Поэтому на первом экране сразу награждения, дни рождения, новости и назначения. Главная отвечает на вопрос: что важного сегодня."
          />
        </Reveal>
        <CaseMedia
          wide
          image={cover2}
          imageAlt="Главная ProКадры: награждения, дни рождения и календарь"
        />
      </section>

      <section className="case-prokadry__chapter case-prokadry__chapter--stack">
        <Reveal className="case-prokadry__copy case-prokadry__copy--pair">
          <CaseBlock
            label="Навигация по задачам"
            number="05"
            opening="Почему разделы названы так"
            body="Люди ищут действие: шаблон, календарь, обратную связь. Они не думают названиями отделов. Поэтому меню написано простыми словами сотрудника. Так быстрее найти нужное и меньше путаницы."
          />
          <CaseBlock
            label="Дизайн-система"
            number="06"
            opening="Использовала дизайн-систему Магнита"
            body="В большой компании свою систему кнопок и карточек потом тяжело поддерживать. Дизайн-система Ant уже знакома людям и разработке. Поэтому я не рисовала всё с нуля. Собрала из готовых компонентов экраны портала: какие блоки нужны, какие состояния бывают и как из этого быстро собирать новые страницы."
          />
        </Reveal>
        <CaseMedia wide image={cover3} imageAlt="Раздел новостей и конкурсов портала ProКадры" />
      </section>

      <section className="case-prokadry__chapter case-prokadry__chapter--stack">
        <Reveal className="case-prokadry__copy case-prokadry__copy--pair">
          <CaseBlock
            label="Работа с документами"
            number="07"
            opening="От раздела к нужному документу"
            body="В «Методологии» я организовала нормативные документы, инструкции и шаблоны по раскрывающимся категориям. Пользователь может последовательно перейти к нужному материалу или воспользоваться поиском. Рядом с документом доступны скачивание и копирование ссылки, чтобы сохранить его или поделиться с коллегой."
          />
          <CaseBlock
            label="Результат"
            number="08"
            opening="Что получилось"
            body="Я спроектировала единый портал с рабочими документами, контактами специалистов и корпоративными новостями. Проработала не только основные страницы, но и состояния интерфейса: раскрытие категорий, результаты поиска и управление видимостью дня рождения."
          />
        </Reveal>
        <CaseMedia
          wide
          image={cover4}
          imageAlt="Раздел методологии и документов портала ProКадры"
        />
      </section>
    </article>
  )
}
