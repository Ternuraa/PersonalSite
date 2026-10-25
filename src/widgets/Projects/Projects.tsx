import ProjectCard from './ProjectCard'
import Reveal from '../../shared/ui/Reveal/Reveal'
import prokadryCover from '../../assets/case-prokadry-1.webp'
import bookingCover from '../../assets/project-booking.webp'
import './Projects.css'

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

export default function Projects() {
  return (
    <section className="projects" id="works">
      <Reveal>
        <h2 className="projects__heading">Избранные работы</h2>
      </Reveal>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 100}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
