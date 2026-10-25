import type { MouseEventHandler } from 'react'
import './TextLink.css'

interface TextLinkProps {
  label: string
  href?: string
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

function ArrowIcon() {
  return (
    <svg
      className="text-link__icon"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 12h16m0 0-5.2-5M20 12l-5.2 5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  )
}

export default function TextLink({ label, href = '#', onClick }: TextLinkProps) {
  return (
    <a className="text-link" href={href} onClick={onClick}>
      <ArrowIcon />
      <span className="text-link__label">{label}</span>
    </a>
  )
}
