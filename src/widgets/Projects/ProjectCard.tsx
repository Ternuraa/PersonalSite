import Link from 'next/link'
import './ProjectCard.css'

type ImageSrc = string | { src: string }

interface ProjectCardProps {
  number: string
  title: string
  image: ImageSrc
  imageAlt: string
  href?: string
  dimmed?: boolean
  note?: string
}

export default function ProjectCard({
  number,
  title,
  image,
  imageAlt,
  href,
  dimmed = false,
  note,
}: ProjectCardProps) {
  const src = typeof image === 'string' ? image : image.src
  const className = `project-card${dimmed ? ' project-card--dimmed' : ''}`

  const inner = (
    <>
      <div className="project-card__media">
        <img className="project-card__cover" src={src} alt={imageAlt} width={668} height={475} />
      </div>
      <div className="project-card__meta">
        <span className="project-card__number">{number}</span>
        <h3 className="project-card__title">
          {title}
          {note ? <span className="project-card__note"> ({note})</span> : null}
        </h3>
      </div>
    </>
  )

  if (href) {
    return (
      <Link className={className} href={href} aria-label={`${title}, открыть кейс`}>
        {inner}
      </Link>
    )
  }

  return <article className={className}>{inner}</article>
}
