import './Statement.css'

interface StatementProps {
  number: string
  opening: string
  body: string[]
}

export default function Statement({ number, opening, body }: StatementProps) {
  return (
    <div className="statement">
      <div className="statement__opening">
        <span className="statement__number">{number}</span>
        <p className="statement__heading">{opening}</p>
      </div>
      <p className="statement__body">
        {body.map((line, index) => (
          <span key={index}>
            {line}
            {index < body.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    </div>
  )
}
