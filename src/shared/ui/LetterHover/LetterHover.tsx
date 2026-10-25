import './LetterHover.css'

interface LetterHoverProps {
  text: string
  className?: string
}

export default function LetterHover({ text, className }: LetterHoverProps) {
  return (
    <span className={className ? `letter-hover ${className}` : 'letter-hover'} aria-hidden="true">
      {Array.from(text).map((char, index) =>
        char === ' ' ? (
          <span key={`sp-${index}`} className="letter-hover__char letter-hover__char--space">
            {'\u00A0'}
          </span>
        ) : (
          <span key={`${char}-${index}`} className="letter-hover__char">
            {char}
          </span>
        ),
      )}
    </span>
  )
}
