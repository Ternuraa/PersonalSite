'use client'

import { useEffect, useState } from 'react'
import { Link } from 'next-transition-router'
import { usePathname } from 'next/navigation'
import LetterHover from '../../shared/ui/LetterHover/LetterHover'
import './Header.css'

interface NavLinkProps {
  label: string
  href: string
  count?: string
  isActive?: boolean
  onNavigate?: () => void
}

function NavLink({ label, href, count, isActive, onNavigate }: NavLinkProps) {
  return (
    <Link
      className={isActive ? 'header__link header__link--active' : 'header__link'}
      href={href}
      aria-label={count ? `${label} ${count}` : label}
      aria-current={isActive ? 'page' : undefined}
      onClick={onNavigate}
    >
      <LetterHover text={label} />
      {count ? <span className="header__count">{count}</span> : null}
    </Link>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={menuOpen ? 'header header--menu-open' : 'header'}>
      <Link className="header__signature" href="/" aria-label="LisaSavelieva" onClick={closeMenu}>
        <LetterHover text="LisaSavelieva" />
      </Link>

      <nav className="header__nav header__nav--desktop" aria-label="Основная навигация">
        <NavLink
          label="Работы"
          href="/work"
          count="(2)"
          isActive={pathname === '/work' || pathname.startsWith('/work/')}
        />
        <NavLink label="Обо мне" href="/about" isActive={pathname === '/about'} />
      </nav>

      <a
        className="header__contact header__contact--desktop"
        href="mailto:savelievalisa@gmail.com"
        aria-label="Связаться"
      >
        <LetterHover text="Связаться" />
      </a>

      <button
        type="button"
        className="header__menu-button"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="header__menu-label">{menuOpen ? 'Close' : 'Menu'}</span>
      </button>

      <div
        id="mobile-navigation"
        className={menuOpen ? 'header__panel is-open' : 'header__panel'}
        aria-hidden={!menuOpen}
      >
        <div className="header__panel-inner">
          <p className="header__panel-label">[ Навигация ]</p>
          <nav className="header__panel-nav" aria-label="Мобильная навигация">
            <NavLink
              label="Работы"
              href="/work"
              count="(2)"
              isActive={pathname === '/work' || pathname.startsWith('/work/')}
              onNavigate={closeMenu}
            />
            <NavLink
              label="Обо мне"
              href="/about"
              isActive={pathname === '/about'}
              onNavigate={closeMenu}
            />
            <a
              className="header__panel-contact"
              href="mailto:savelievalisa@gmail.com"
              onClick={closeMenu}
            >
              <LetterHover text="Связаться" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
