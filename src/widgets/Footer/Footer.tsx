import SectionLabel from '../../shared/ui/SectionLabel/SectionLabel'
import LetterHover from '../../shared/ui/LetterHover/LetterHover'
import Reveal from '../../shared/ui/Reveal/Reveal'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <Reveal>
        <span className="footer__year">2026</span>
      </Reveal>
      <div className="footer__info">
        <Reveal className="footer__column footer__column--availability" delay={80}>
          <SectionLabel>[ Открыта ]</SectionLabel>
          <p className="footer__invitation">
            Всегда рада новым
            <br />
            людям, интересным задачам
            <br />
            и совместным проектам.
            <br />
            Напишите мне — обсудим.
          </p>
        </Reveal>
        <Reveal className="footer__column footer__column--contacts" delay={160}>
          <SectionLabel>[ Контакты ]</SectionLabel>
          <div className="footer__details">
            <p className="footer__item">
              Email :
              <br />
              <a
                className="footer__link"
                href="mailto:savelievalisa@gmail.com"
                aria-label="savelievalisa@gmail.com"
              >
                <LetterHover text="savelievalisa@gmail.com" />
              </a>
            </p>
            <p className="footer__item">
              Telegram :
              <br />
              <a
                className="footer__link"
                href="https://t.me/LisaSavelieva"
                target="_blank"
                rel="noreferrer"
                aria-label="@LisaSavelieva"
              >
                <LetterHover text="@LisaSavelieva" />
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
