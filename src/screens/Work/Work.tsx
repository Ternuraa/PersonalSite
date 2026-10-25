import WorkIntro from '@/widgets/WorkIntro/WorkIntro'
import ProjectCard from '@/widgets/Projects/ProjectCard'
import Reveal from '@/shared/ui/Reveal/Reveal'
import prokadryCover from '@/assets/case-prokadry-1.webp'
import bookingCover from '@/assets/project-booking.webp'
import './Work.css'

const projects = [
  {
    number: '01',
    title: 'ProКадры (MagnitTech)',
    image: prokadryCover,
    imageAlt: 'Главный экран портала ProКадры',
    href: '/work/prokadry',
  },
  {
    number: '02',
    title: 'Сервер бронирования краткосрочного жилья',
    image: bookingCover,
    imageAlt: 'Экран сервиса бронирования краткосрочного жилья',
    dimmed: true,
    note: 'в разработке',
  },
]

export default function Work() {
  return (
    <>
      <WorkIntro />
      <section className="work-projects" aria-label="Все работы">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={(index % 2) * 100}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </section>
    </>
  )
}
