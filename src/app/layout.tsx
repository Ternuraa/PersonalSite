import type { Metadata, Viewport } from 'next'
import Providers from './providers'
import Header from '@/widgets/Header/Header'
import Footer from '@/widgets/Footer/Footer'
import SerpentCursor from '@/widgets/SerpentCursor/SerpentCursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lisa Savelieva — продуктовый дизайнер и фронтенд-разработчик',
  description:
    'Портфолио Лизы Савельевой: продуктовый дизайн и фронтенд-разработка на React.',
  icons: {
    icon: '/favicon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <div className="layout">
            <SerpentCursor />
            <Header />
            <main className="layout__main">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
