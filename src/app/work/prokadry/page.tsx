import type { Metadata } from 'next'
import CaseProkadry from '@/screens/CaseProkadry/CaseProkadry'

export const metadata: Metadata = {
  title: 'ProКадры (MagnitTech) — Lisa Savelieva',
  description:
    'Кейс: внутренний портал для сотрудников Магнита. Структура, главная, навигация и дизайн-система ANT.',
}

export default function ProkadryCasePage() {
  return <CaseProkadry />
}
