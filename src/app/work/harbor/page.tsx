import type { Metadata } from 'next'
import CaseHarbor from '@/screens/CaseHarbor/CaseHarbor'

export const metadata: Metadata = {
  title: 'Сервис бронирования краткосрочного жилья — Lisa Savelieva',
  description:
    'Кейс: MVP платформы краткосрочной аренды. Исследование, CJM, информационная архитектура и гостевой интерфейс.',
}

export default function HarborCasePage() {
  return <CaseHarbor />
}
