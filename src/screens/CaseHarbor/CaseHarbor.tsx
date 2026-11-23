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
              MVP платформы краткосрочной аренды: исследование, структура и экраны
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
              Harbor это MVP сервиса краткосрочной аренды. Нужно было собрать путь гостя от поиска
              до брони и проверить гипотезы до монетизации.
            </p>
            <p className="case-harbor__text">
              Гости уже ходят в Airbnb, Суточно.ру, Booking и Авито. Везде по-разному устроен поиск,
              часто всплывают скрытые сборы, к хозяевам доверие тоже разное.
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
              Сделать сервис, где гость в одном месте ищет жильё под даты, смотрит объект и условия
              и бронирует без сюрпризов в конце.
            </p>
          </div>
          <TextBlock label="Сервис должен">
            <ul className="case-harbor__list">
              <li>
                упростить поиск и выбор: фильтры, карточка с реальными фото и итоговая цена без
                скрытых сборов;
              </li>
              <li>показать условия брони, статус заявки и что делать дальше;</li>
              <li>собрать поездки, сообщения и уведомления в одном профиле.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Продуктовые цели">
            <ul className="case-harbor__list">
              <li>провести 2 глубинных интервью и понять, что важнее гостю;</li>
              <li>собрать экраны: главная, поиск, карточка, бронь, профиль;</li>
              <li>пройти процесс: исследование, CJM, JTBD и первая версия.</li>
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
            Шла по шагам: сначала кому нужен сервис и зачем, потом структура, потом интерфейс.
          </p>
          <TextBlock label="Бизнес-анализ">
            <ul className="case-harbor__list">
              <li>анализ конкурентов;</li>
              <li>разбор сценариев поиска и бронирования;</li>
              <li>ценность для гостя и хоста;</li>
              <li>бизнес-требования.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Исследование пользователей">
            <ul className="case-harbor__list">
              <li>целевая аудитория и сегменты;</li>
              <li>гипотезы и гайд интервью;</li>
              <li>глубинные интервью;</li>
              <li>персоны;</li>
              <li>JTBD;</li>
              <li>основные сегменты.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Разработка информационной архитектуры">
            <ul className="case-harbor__list">
              <li>структура разделов;</li>
              <li>карта путей по основным сценариям.</li>
            </ul>
          </TextBlock>
          <TextBlock label="User stories и первая версия">
            <ul className="case-harbor__list">
              <li>user stories;</li>
              <li>что входит в первую версию.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Проектирование интерфейсов">
            <ul className="case-harbor__list">
              <li>экраны под основные сценарии;</li>
              <li>desktop и mobile.</li>
            </ul>
          </TextBlock>
          <TextBlock label="Разработка дизайна">
            <ul className="case-harbor__list">
              <li>интерфейс сервиса;</li>
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
            Перед интерфейсом разобрала рынок: кто пользователь, как у конкурентов устроены поиск
            и бронь, что должно войти в первую версию.
          </p>
          <TextBlock label="Разбор сценариев поиска и бронирования">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">
                Разобрала путь гостя: город и даты, фильтры, карточка, бронь, поездка в личном
                кабинете.
              </p>
              <p className="case-harbor__text">
                Отдельно задачи хоста: разместить объект и получать заявки. От этого собрала состав
                первой версии и структуру сервиса.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Ценность для гостя и хоста">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">
                Гость: найти жильё, увидеть итоговую цену и понять, можно ли доверять объекту.
              </p>
              <p className="case-harbor__text">
                Хост: подать заявку на размещение и получать брони без админки.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Что вошло в первую версию">
            <p className="case-harbor__text">
              Поиск и фильтры, карточка объекта, бронь без реального платежа, избранное, личный
              кабинет гостя, заявка «Сдать жильё» и адаптив.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={mvpImg}
        imageAlt="Что входит в первую версию сервиса"
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
            Сформулировала гипотезы, провела 2 глубинных интервью, свела выводы в отчёт, собрала
            персоны, CJM, JTBD и user stories.
          </p>
          <TextBlock label="Как исследовала">
            <p className="case-harbor__text">
              Написала гипотезы о болях при поиске и бронировании, подготовила гайд и провела 2
              интервью с потенциальными гостями.
            </p>
          </TextBlock>
          <TextBlock label="Что узнала">
            <p className="case-harbor__text">
              Нужны реальные фото всех комнат: кровать, кухня, санузел, вид из окна. Нужна итоговая
              цена без скрытых сборов, условия отмены и отзывы с рейтингом хозяина. Лишние функции
              на первом шаге мешают.
            </p>
          </TextBlock>
          <TextBlock label="Персона и путь пользователя">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                Собрала персоны под отдых и командировку. Мотивы разные, страх один: ошибиться с
                объектом и переплатить.
              </p>
              <p className="case-harbor__text">
                В CJM разобрала путь от идеи поездки до брони и проживания: где человек сомневается
                и что сервис должен показывать на каждом шаге.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Вывод для продукта">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                В первую версию вошли поиск и фильтры, карточка объекта, итоговая цена, избранное и
                короткий сценарий брони.
              </p>
              <p className="case-harbor__text">
                Чат, полный кабинет хоста, реальные платежи и верификацию оставила на потом.
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
            Интервью подтвердили гипотезы о болях при бронировании жилья.
          </p>
          <p className="case-harbor__text">Гостю нужен короткий путь к брони:</p>
          <ul className="case-harbor__list">
            <li>при поиске: фильтры, реальные фото всех комнат, отзывы и карта;</li>
            <li>при выборе: рейтинг хоста, условия отмены, отзывы;</li>
            <li>при бронировании: итоговая цена без сюрпризов и статус заявки.</li>
          </ul>
          <p className="case-harbor__text">
            От этого собрала первую версию: поиск, карточка, итоговая цена и короткий сценарий
            брони.
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
            Структуру собрала вокруг задач гостя. Не копировала разделы конкурентов. Сначала карта
            экранов, потом пользовательские пути.
          </p>
          <TextBlock label="Логика структуры">
            <div className="case-harbor__copy case-harbor__copy--loose">
              <p className="case-harbor__text">
                Есть гостевые экраны и служебные. Гостевые: поиск и бронь. Служебные: вход, профиль
                и короткая заявка на сдачу жилья.
              </p>
              <p className="case-harbor__text">
                Первую версию держу узкой: сначала путь гостя, хост заходит через заявку без
                админки.
              </p>
            </div>
          </TextBlock>
          <TextBlock label="Разделы первой версии">
            <div className="case-harbor__copy">
              <p className="case-harbor__text">Главная: вход в поиск по городу и датам.</p>
              <p className="case-harbor__text">
                Поиск: фильтры, список и карта до открытия карточки.
              </p>
              <p className="case-harbor__text">
                Карточка объекта: фото всех комнат, удобства, итоговая цена, условия отмены, отзывы
                и расположение.
              </p>
              <p className="case-harbor__text">Бронирование: даты, сумма и статус заявки.</p>
              <p className="case-harbor__text">Профиль: поездки и данные пользователя.</p>
              <p className="case-harbor__text">Авторизация и заявка «Сдать жилье».</p>
            </div>
          </TextBlock>
          <TextBlock label="Карта разделов">
            <p className="case-harbor__text">
              Зафиксировала дерево экранов: поиск, карточка, бронь, профиль и заявка хоста. Так
              проще не раздувать функционал.
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
            Собрала основные пути гостя и хоста в первой версии.
          </p>
          <TextBlock label="Главный сценарий">
            <p className="case-harbor__text">
              Город и даты, поиск, карточка, бронь. На этом пути закрываю то, о чём говорили в
              интервью: скрытая цена, плохие фото, неясные условия и недоверие к объекту.
            </p>
          </TextBlock>
          <TextBlock label="Сценарии гостя">
            <p className="case-harbor__text">
              Рядом: избранное, поездки в кабинете и вход в профиль. Помогают сравнить варианты и
              вернуться после брони.
            </p>
          </TextBlock>
          <TextBlock label="Сценарий хоста">
            <p className="case-harbor__text">
              Хосту в первой версии хватает заявки «Сдать жилье»: форма, отправка, статус. Без
              кабинета арендодателя.
            </p>
          </TextBlock>
          <TextBlock label="Что остается на потом">
            <p className="case-harbor__text">
              Полный кабинет хоста, календарь, статистика, FAQ и сообщения оставила на потом.
              Сначала путь к брони.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={scenariosImg}
        imageAlt="Пользовательские пути гостя и хоста"
        width={1360}
        height={743}
      />

      <section className="case-harbor__section" id="stories" aria-labelledby="harbor-stories">
        <Reveal className="case-harbor__stack">
          <h2 id="harbor-stories" className="case-harbor__heading">
            User stories
          </h2>
          <p className="case-harbor__text">
            По интервью и сценариям написала user stories: что нужно гостю и что должно быть на
            экранах.
          </p>
          <TextBlock label="Зачем">
            <p className="case-harbor__text">
              В каждой истории: кто пользователь, чего хочет и зачем. Так проще не потерять смысл
              интервью при переходе к макетам.
            </p>
          </TextBlock>
          <TextBlock label="На чем сфокусировалась">
            <p className="case-harbor__text">
              Сначала поиск, карта, карточка объекта, условия, избранное и бронь. Об этом говорили
              гости в интервью.
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
            После исследования и user stories перешла к экранам. Нужен путь от поиска до брони без
            лишних шагов.
          </p>
          <TextBlock label="От чего отталкивалась">
            <p className="case-harbor__text">
              Опиралась на персоны, CJM и пути. Рисовала только экраны, без которых гость не выберет
              объект и не отправит бронь.
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
              Сначала desktop, потом mobile. На телефоне тот же смысл: найти, понять объект,
              забронировать.
            </p>
          </TextBlock>
        </Reveal>
      </section>

      <CaseMedia
        image={wireframesImg}
        imageAlt="Вайрфреймы экранов Harbor"
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
              Дизайн начала после вайрфреймов. Гость должен быстро найти жилье, увидеть цену и
              условия и дойти до брони.
            </p>
            <p className="case-harbor__text">
              Собрала дизайн-систему с нуля: цвет, типографика, отступы и компоненты.
            </p>
            <p className="case-harbor__text">
              Учла то, о чём говорили в интервью. Цену показала за ночь и итогом за поездку, плюс
              что входит в сумму. Фото: галерея и карусель. Рядом с кнопкой брони: рейтинг,
              проверка Harbor, отзывы и блок хозяина.
            </p>
            <p className="case-harbor__text">
              Получился один гостевой сценарий на общей системе. Дальше можно добавить кабинет
              хоста и сервисные функции.
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
            Собрала кейс от интервью до рабочих гостевых экранов и своей дизайн-системы.
          </p>
          <ul className="case-harbor__list">
            <li>
              Путь к брони: главная, поиск, карточка, заявка и профиль в одном сценарии.
            </li>
            <li>
              Цена за ночь и итог, условия, реальные фото и отзывы видны до финального шага.
            </li>
            <li>Своя дизайн-система: цвет, типографика, отступы и компоненты.</li>
            <li>
              Две роли в первой версии: гость бронирует, хост заходит через заявку без админки.
            </li>
            <li>
              В интерфейсе сразу видны итоговая цена, фото всех комнат, правила и отзывы.
            </li>
            <li>
              К этим экранам можно добавить кабинет хоста, чат и другие сервисы без пересборки.
            </li>
          </ul>
        </Reveal>
      </section>
    </article>
  )
}
