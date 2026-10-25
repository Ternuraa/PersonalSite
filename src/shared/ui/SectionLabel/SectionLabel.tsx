import './SectionLabel.css'

interface SectionLabelProps {
  children: string
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return <span className="section-label">{children}</span>
}
