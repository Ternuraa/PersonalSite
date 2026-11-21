import type { ReactNode } from 'react'
import Reveal from '@/shared/ui/Reveal/Reveal'
import SectionLabel from '@/shared/ui/SectionLabel/SectionLabel'
import heroCover from '@/assets/case-harbor/hero.webp'
import analyticsImg from '@/assets/analytics.webp'
import mvpImg from '@/assets/MVP.webp'
import peopleImg from '@/assets/people.webp'
import cjmImg from '@/assets/CJM.webp'
import personImg from '@/assets/Person.webp'
import architectureImg from '@/assets/architecture.webp'
import scenariosImg from '@/assets/User-scenarios.webp'
import storiesImg from '@/assets/User-stories.webp'
import wireframesImg from '@/assets/Wireframes.webp'
import designImg from '@/assets/Design.webp'
import './CaseHarbor.css'

type ImageSrc = string | { src: string }

function imgSrc(image: ImageSrc) {
  return typeof image === 'string' ? image : image.src
}

const BADGES = [
  'MVP',
  'UX-исследование',
  'UI-дизайн',
  'Продукт',
  'Desktop',
  'Mobile',
] as const

const TOC = [
  { id: 'about', label: 'О проекте' },
  { id: 'task', label: 'Задача' },
  { id: 'plan', label: 'План работ' },
  { id: 'business', label: 'Бизнес-анализ' },
  { id: 'research', label: 'Исследование пользователей' },
  { id: 'personas', label: 'Персоны' },
  { id: 'cjm', label: 'CJM' },
  { id: 'ia', label: 'Информационная архитектура' },
  { id: 'flows', label: 'Ключевые пути' },
  { id: 'stories', label: 'User stories' },
  { id: 'wireframes', label: 'Проектирование' },
  { id: 'design', label: 'Дизайн' },
  { id: 'result', label: 'Результат' },
] as const

interface TextBlockProps {
  label: string
  children: ReactNode
}

function TextBlock({ label, children }: TextBlockProps) {
  return (
    <div className="case-harbor__block">
      <SectionLabel>{`[ ${label} ]`}</SectionLabel>
      {children}
    </div>
  )
}

interface CaseMediaProps {
  image: ImageSrc
  imageAlt: string
  width: number
  height: number
}

function CaseMedia({ image, imageAlt, width, height }: CaseMediaProps) {
  return (
    <Reveal className="case-harbor__section case-harbor__section--full">
      <img
        className="case-harbor__media"
        src={imgSrc(image)}
        alt={imageAlt}
        width={width}
        height={height}
      />
    </Reveal>
  )
}

export default function CaseHarbor() {
  return (
    <article className="case-harbor">
      <div className="case-harbor__intro">
        <Reveal className="case-harbor__hero">
          <h1 className="case-harbor__title">Сервис бронирования краткосрочного жилья</h1>
          <div className="case-harbor__hero-meta">
            <p className="case-harbor__subtitle">
              MVP платформы краткосрочной аренды. Исследование и интерфейс от гипотез до рабочих
              экранов
            </p>
            <div className="case-harbor__badges">
              {BADGES.map((badge) => (
                <span key={badge} className="case-harbor__badge">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <img
            className="case-harbor__media"
            src={imgSrc(heroCover)}
            alt="Главный экран сервиса бронирования краткосрочного жилья"
            width={1360}
            height={967}
          />
        </Reveal>
      </div>

      <section className="case-harbor__section" aria-labelledby="harbor-toc">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-toc" className="case-harbor__heading">
            Содержание
          </h2>
          <nav className="case-harbor__toc" aria-label="Содержание кейса">
            {TOC.map((item, index) => (
              <a key={item.id} className="case-harbor__toc-item" href={`#${item.id}`}>
                <span className="case-harbor__toc-num">{String(index + 1).padStart(2, '0')}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </Reveal>
      </section>

      <section className="case-harbor__section" id="about" aria-labelledby="harbor-about">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-about" className="case-harbor__heading">
            О проекте
          </h2>
          <div className="case-harbor__copy">
            <p className="case-harbor__lead">
              Harbor это MVP платформы краткосрочной аренды жилья. Цель этапа: собрать понятный
              гостевой сценарий и проверить гипотезы до сложной монетизации.
            </p>
            <p className="case-harbor__text">
              На рынке гости уже привыкли к Airbnb, Суточно.ру, Booking и Авито, но опыт
              разрозненный: разная логика поиска, скрытые сборы и разный уровень доверия к хозяевам.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="case-harbor__section" id="task" aria-labelledby="harbor-task">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-task" className="case-harbor__heading">
            Задача
          </h2>
          <div className="case-harbor__copy case-harbor__copy--loose">
            <p className="case-harbor__text">
              Создать сервис, в котором гость проходит путь от поиска до брони в одном интерфейсе:
              быстро находит жильё под даты поездки, понимает объект и условия, и может спокойно
              забронировать без сюрпризов на последнем шаге.
            </p>
            <p className="case-harbor__text">
              На рынке гости уже привыкли к Airbnb, Суточно.ру, Booking и Авито, но опыт
              разрозненный: разная логика поиска, скрытые сборы и разный уровень доверия к хозяевам.
            </p>
          </div>
          <TextBlock label="Сервис должен">
            <ul className="case-harbor__list">
              <li>
                упростить поиск и выбор жилья: понятные фильтры, честная карточка объекта и
                прозрачная итоговая логика цены;
              </li>
              <li>
                снизить тревогу гостя за счёт ясных условий брони, статуса заявки и понятного
                следующего шага;
              </li>
              <li>
                отображать данные бронирования: поездки, сообщения и уведомления в одном профиле.
              </li>
            </ul>
          </TextBlock>
          <TextBlock label="Продуктовые цели">
            <ul className="case-harbor__list">
              <li>
                проверить гипотезы о болях гостя на 2 глубинных интервью и зафиксировать приоритеты;
              </li>
              <li>собрать ключевой сценарий: главная, поиск, карточка, бронь, профиль;</li>
              <li>получить сильный кейс процесса: исследование, CJM, JTBD и MVP.</li>
            </ul>
          </TextBlock>
        </Reveal>
      </section>

      <section className="case-harbor__section" id="plan" aria-labelledby="harbor-plan">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-plan" className="case-harbor__heading">
            План работ
          </h2>
          <p className="case-harbor__text">
            Процесс строился по шагам: сначала нужно было понять, кому нужен сервис и зачем, потом
            собрать структуру и уже после этого спроектировать интерфейс.
          </p>
          <TextBlock label="Бизнес-анализ">
            <ul className="case-harbor__list">
              <li>анализ конкурентов;</li>
              <li>разбор сценариев поиска и бронирования жилья;</li>
              <li>формулирование ценности сервиса для гостя и хоста;</li>
              <li>сбор бизнес-требований.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Исследование пользователей">
            <ul className="case-harbor__list">
              <li>определение целевой аудитории и основных сегментов;</li>
              <li>формулирование гипотез и сценария интервью;</li>
              <li>глубинные интервью с потенциальными пользователями;</li>
              <li>разработка ключевых персон;</li>
              <li>определение основных сегментов.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Разработка информационной архитектуры">
            <ul className="case-harbor__list">
              <li>структура разделов сервиса;</li>
              <li>карта пользовательских путей по ключевым сценариям.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Формирование user story и выделение MVP">
            <ul className="case-harbor__list">
              <li>описание ключевых пользовательских историй;</li>
              <li>приоритизация функций для первой версии продукта.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Проектирование интерфейсов">
            <ul className="case-harbor__list">
              <li>проектирование ключевых экранов под основные сценарии;</li>
              <li>проработка desktop и mobile-версий.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Разработка дизайна">
            <ul className="case-harbor__list">
              <li>сборка единого интерфейса сервиса;</li>
              <li>визуальный дизайн desktop и mobile.</li>
            </ul>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={analyticsImg}
        imageAlt="Аналитика рынка краткосрочной аренды"
        width={1360}
        height={640}
      />

      <section className="case-harbor__section" id="business" aria-labelledby="harbor-business">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-business" className="case-harbor__heading">
            Бизнес-анализ
          </h2>
          <p className="case-harbor__text">
            Перед проектированием интерфейса разобрала рынок краткосрочной аренды: кто целевой
            пользователь, как устроены сценарии поиска и бронирования у конкурентов, и какие
            требования должны войти в первую версию сервиса.
          </p>
          <TextBlock label="Разбор сценариев поиска и бронирования">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">
                Разобрала путь гостя: от поиска по городу и датам до фильтров, карточки объекта,
                бронирования и управления поездкой в личном кабинете.
              </p>
              <p className="case-harbor__text">
                Отдельно зафиксировала задачи хоста: разместить объект и получать заявки. Это стало
                основой функционала MVP и структуры сервиса.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Ценность для гостя и хоста">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">
                Гость: быстро найти подходящее жильё с прозрачной ценой и достаточным доверием к
                объекту.
              </p>
              <p className="case-harbor__text">
                Хост: просто подать заявку на размещение и начать получать бронирования без сложной
                админки в первой версии.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Бизнес-требования к MVP">
            <p className="case-harbor__text">
              В Must вошли поиск и фильтры, карточка объекта, бронирование без реального платежного
              шлюза, избранное, ЛК гостя, заявка «Сдать жильё», адаптив.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={mvpImg}
        imageAlt="Что входит в MVP: приоритизация функций"
        width={1360}
        height={687}
      />

      <CaseMedia
        image={peopleImg}
        imageAlt="Сравнение конкурентов: Airbnb, Суточно.ру, Booking, Авито"
        width={1360}
        height={734}
      />

      <section className="case-harbor__section" id="research" aria-labelledby="harbor-research">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-research" className="case-harbor__heading">
            Исследование пользователей
          </h2>
          <p className="case-harbor__text">
            Чтобы понять реальные страхи и ожидания гостей, сформулировала гипотезы и провела
            глубинные интервью. Затем собрала выводы в отчет, проверила гипотезы, оформила персоны,
            CJM и user stories.
          </p>
          <TextBlock label="Как исследовала">
            <p className="case-harbor__text">
              Собрала гипотезы о болях при поиске и бронировании, подготовила гайд и провела 2
              глубинных интервью с потенциальными гостями.
            </p>
          </TextBlock>
          <TextBlock label="Что узнала">
            <p className="case-harbor__text">
              Гостю важны честные фото, прозрачная итоговая цена, понятные условия отмены и сигналы
              доверия к объекту и хозяину. Лишние функции на первом шаге только мешают.
            </p>
          </TextBlock>
          <TextBlock label="Персона и путь пользователя">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                Оформила персоны под отдых и командировку: разные мотивы, но общий страх ошибиться с
                объектом и переплатить.
              </p>
              <p className="case-harbor__text">
                В CJM разобрала путь от потребности в поездке до бронирования и проживания: где
                возникают сомнения и что должен поддерживать сервис на каждом шаге.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Вывод для продукта">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                Исследование подтвердило приоритеты MVP: понятный поиск и фильтры, сильная карточка
                объекта, прозрачная цена, избранное и простой сценарий бронирования.
              </p>
              <p className="case-harbor__text">
                Сложное (чат, полный кабинет хоста, реальные платежи и верификацию) оставила на
                Later.
              </p>
            </div>
          </TextBlock>
        </Reveal>
      </section>

      <div id="cjm">
        <CaseMedia
          image={cjmImg}
          imageAlt="Customer Journey Map гостя сервиса краткосрочной аренды"
          width={1360}
          height={598}
        />
      </div>

      <section className="case-harbor__section">
        <Reveal className="case-harbor__stack">
          <p className="case-harbor__text">
            Важным результатом исследования стало подтверждение гипотез о ключевых болях гостя при
            бронировании жилья.
          </p>
          <p className="case-harbor__text">
            Оказалось, что пользователю важны не «лишние» функции, а спокойный и понятный путь к
            брони:
          </p>
          <ul className="case-harbor__list">
            <li>при поиске нужны фильтры, честные фото, отзывы и карта;</li>
            <li>
              при выборе критичны рейтинг хоста, прозрачные условия отмены и доверие к объекту;
            </li>
            <li>при бронировании важны итоговая цена без сюрпризов и понятный статус заявки.</li>
          </ul>
          <p className="case-harbor__text">
            Этот вывод стал ключевым: именно на нём строился MVP с фокусом на поиск, карточку
            объекта, прозрачную цену и простой сценарий бронирования.
          </p>
        </Reveal>
      </section>

      <div id="personas">
        <CaseMedia
          image={personImg}
          imageAlt="Персоны: гости на отдыхе и в командировке"
          width={1360}
          height={760}
        />
      </div>

      <section className="case-harbor__section" id="ia" aria-labelledby="harbor-ia">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-ia" className="case-harbor__heading">
            Информационная архитектура
          </h2>
          <p className="case-harbor__text">
            По результатам исследования собрала структуру сервиса вокруг задач гостя, а не вокруг
            разделов «как у конкурентов». Сначала понятная карта экранов, затем отдельно ключевые
            пользовательские пути.
          </p>
          <TextBlock label="Логика структуры">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                Сервис делится на гостевой и служебные экраны. Гостевой закрывает поиск и
                бронирование. Служебные экраны поддерживают вход, профиль и короткую заявку на сдачу
                жилья.
              </p>
              <p className="case-harbor__text">
                Так MVP остается узким: сначала спокойный путь гостя, хост появляется через простую
                заявку без сложной админки.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Разделы MVP">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">Главная: быстрый вход в поиск по городу и датам.</p>
              <p className="case-harbor__text">
                Поиск: фильтры, список и карта, чтобы отсеять лишнее до открытия карточки.
              </p>
              <p className="case-harbor__text">
                Карточка объекта: фото, удобства, итоговая цена, условия отмены, отзывы и
                расположение.
              </p>
              <p className="case-harbor__text">
                Бронирование: даты, прозрачная сумма и понятный статус заявки.
              </p>
              <p className="case-harbor__text">Профиль: поездки и базовые данные пользователя.</p>
              <p className="case-harbor__text">
                Авторизация и заявка «Сдать жилье» как поддержка полного контура продукта.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Карта разделов">
            <p className="case-harbor__text">
              Зафиксировала дерево экранов MVP: какие разделы есть, как связаны поиск, карточка,
              бронь, профиль и заявка хоста. Это помогает не расползтись функционалом и держать
              сервис вокруг задач гостя.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={architectureImg}
        imageAlt="Схема информационной архитектуры сервиса"
        width={1360}
        height={764}
      />

      <section className="case-harbor__section" id="flows" aria-labelledby="harbor-flows">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-flows" className="case-harbor__heading">
            Ключевые пути
          </h2>
          <p className="case-harbor__text">
            Собрала основные пути гостя и хоста в первой версии сервиса.
          </p>
          <TextBlock label="Главный сценарий">
            <p className="case-harbor__text">
              Главный путь простой: выбрать город и даты, найти жилье, проверить карточку и
              отправить бронь. На этом пути закрываются главные страхи из исследования: скрытая
              цена, слабые фото, непонятные условия и недоверие к объекту.
            </p>
          </TextBlock>
          <TextBlock label="Сценарии гостя">
            <p className="case-harbor__text">
              Рядом с бронью остаются три поддерживающих пути: сравнить и сохранить варианты в
              избранном, следить за поездками в кабинете, войти в профиль. Они не конкурируют с
              главным сценарием, а делают выбор спокойнее и возвращают пользователя в сервис после
              брони.
            </p>
          </TextBlock>
          <TextBlock label="Сценарий хоста">
            <p className="case-harbor__text">
              На MVP хост не получает тяжелую админку. Ему достаточно короткой заявки «Сдать жилье»:
              заполнить форму, отправить и увидеть статус. Так продукт закрывает обе роли, но не
              расползается в полноценный кабинет арендодателя.
            </p>
          </TextBlock>
          <TextBlock label="Что остается на потом">
            <p className="case-harbor__text">
              Полный кабинет хоста, календарь, статистика, FAQ и сообщения усиливают сервис позже.
              Сначала стабилизируем путь к брони, потом наращиваем сервисные и хостовые функции.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={scenariosImg}
        imageAlt="Ключевые пользовательские пути гостя и хоста"
        width={1360}
        height={743}
      />

      <section className="case-harbor__section" id="stories" aria-labelledby="harbor-stories">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-stories" className="case-harbor__heading">
            User stories
          </h2>
          <p className="case-harbor__text">
            По итогам интервью и сценариев сформулировала user stories. Они показывают, что важно
            гостю и что должно быть в интерфейсе.
          </p>
          <TextBlock label="Зачем stories">
            <p className="case-harbor__text">
              Каждая история отвечает на три вопроса: кто пользователь, чего он хочет и зачем ему
              это. Так проще не потерять смысл исследования при переходе к экранам.
            </p>
          </TextBlock>
          <TextBlock label="На чем сфокусировалась">
            <p className="case-harbor__text">
              В приоритете истории про поиск, карту, честную карточку объекта, прозрачные условия,
              избранное и понятную бронь. Они напрямую закрывают страхи гостя из исследования.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={storiesImg}
        imageAlt="User stories гостя по итогам исследования"
        width={1360}
        height={423}
      />

      <section className="case-harbor__section" id="wireframes" aria-labelledby="harbor-wireframes">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-wireframes" className="case-harbor__heading">
            Проектирование
          </h2>
          <p className="case-harbor__text">
            После исследования и user stories перешла к проектированию экранов. Задача была собрать
            понятный путь гостя: от поиска жилья до брони, без лишних шагов и путаницы.
          </p>
          <TextBlock label="От чего отталкивалась">
            <p className="case-harbor__text">
              В основу легли персоны, CJM и ключевые пути. Проектировала не все экраны сразу, а те,
              без которых гость не может спокойно выбрать объект и отправить бронь.
            </p>
          </TextBlock>
          <TextBlock label="Какие экраны собрала">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">Главная с быстрым входом в поиск.</p>
              <p className="case-harbor__text">Каталог: фильтры, список и карта.</p>
              <p className="case-harbor__text">
                Карточка объекта: фото, удобства, цена, условия и отзывы.
              </p>
              <p className="case-harbor__text">Оформление брони и статус заявки.</p>
              <p className="case-harbor__text">Профиль с поездками и избранным.</p>
              <p className="case-harbor__text">Вход и короткая заявка «Сдать жилье».</p>
            </div>
          </TextBlock>
          <TextBlock label="Desktop и mobile">
            <p className="case-harbor__text">
              Сначала собрала логику на desktop, затем адаптировала ключевые сценарии под mobile. На
              телефоне важно сохранить тот же смысл: быстро найти, понять объект и не потеряться при
              бронировании.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={wireframesImg}
        imageAlt="Вайрфреймы ключевых экранов Harbor"
        width={1360}
        height={760}
      />

      <section className="case-harbor__section" id="design" aria-labelledby="harbor-design">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-design" className="case-harbor__heading">
            Дизайн
          </h2>
          <div className="case-harbor__copy case-harbor__copy--loose">
            <p className="case-harbor__text">
              Работу над дизайном начала после вайрфреймов. Цель была простая: сделать гостевой путь
              спокойным и понятным. Гость должен быстро найти жилье, увидеть честную цену и условия
              и дойти до брони без лишних сомнений.
            </p>
            <p className="case-harbor__text">
              С нуля разработала дизайн-систему: подобрала цвет, типографику, отступы и набор
              компонентов, чтобы продукт выглядел цельно и быстро масштабировался.
            </p>
            <p className="case-harbor__text">
              В интерфейсе закрыла боли из исследования. Цену показала прозрачно: за ночь, итог за
              поездку и что входит в сумму. Фото усилила галереей и каруселью. Доверие собрала
              рейтингом, проверкой Harbor, отзывами и блоком хозяина рядом с решением о брони.
            </p>
            <p className="case-harbor__text">
              В итоге получила не набор макетов, а цельный продуктный интерфейс: единый язык,
              рабочий гостевой сценарий и основу, на которой дальше можно наращивать кабинет хоста и
              сервисные функции.
            </p>
          </div>
        </Reveal>
      </section>

      <CaseMedia
        image={designImg}
        imageAlt="Дизайн экранов Harbor: главная, поиск, карточка, профиль"
        width={1360}
        height={760}
      />

      <section className="case-harbor__section" id="result" aria-labelledby="harbor-result">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-result" className="case-harbor__heading">
            Результат
          </h2>
          <p className="case-harbor__text">
            В итоге я собрала продуктный кейс: от исследования болей до рабочего гостевого
            интерфейса и своей дизайн-системы.
          </p>
          <ul className="case-harbor__list">
            <li>
              Понятный путь к брони: главная, поиск, карточка, заявка и профиль собраны в один
              сценарий без лишних развилок.
            </li>
            <li>
              Понятное ценообразование: цена за ночь и итог, условия, фото и сигналы доверия видны
              до финального шага.
            </li>
            <li>
              Своя дизайн-система: цвет, типографика, отступы и компоненты разработаны для сервиса.
            </li>
            <li>Две роли в MVP: гость спокойно бронирует, хост заходит через заявку без админки.</li>
            <li>
              Опиралась на исследование: в интерфейсе сразу видно итоговую цену, нормальные фото,
              понятные правила и причины доверять объекту.
            </li>
            <li>
              К текущим экранам можно спокойно добавить кабинет хоста, чат и другие сервисы, не
              пересобирая продукт заново.
            </li>
          </ul>
        </Reveal>
      </section>
    </article>
  )
}
