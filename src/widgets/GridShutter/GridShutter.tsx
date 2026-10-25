import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import gsap from 'gsap'
import './GridShutter.css'

const ROWS = 7
const COLS = 11

export interface GridShutterHandle {
  play: (onCovered: () => void) => Promise<void>
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

const GridShutter = forwardRef<GridShutterHandle>(function GridShutter(_, ref) {
  const rootRef = useRef<HTMLDivElement>(null)
  const busyRef = useRef(false)

  const rows = useMemo(
    () =>
      Array.from({ length: ROWS }, (_, row) =>
        Array.from({ length: COLS }, (_, col) => `${row}-${col}`),
      ),
    [],
  )

  useImperativeHandle(ref, () => ({
    play(onCovered: () => void) {
      const root = rootRef.current
      if (!root) return Promise.resolve()
      if (busyRef.current) return Promise.resolve()

      if (prefersReducedMotion()) {
        onCovered()
        return Promise.resolve()
      }

      busyRef.current = true

      return new Promise<void>((resolve) => {
        root.classList.add('is-active')

        const tl = gsap.timeline({
          onComplete: () => {
            root.classList.remove('is-active')
            busyRef.current = false
            resolve()
          },
        })

        // Cover — odd rows L→R, even rows R→L (shutter close)
        for (let row = 0; row < ROWS; row++) {
          const rowBlocks = root.querySelectorAll<HTMLElement>(
            `.grid-shutter__row:nth-child(${row + 1}) .grid-shutter__block`,
          )
          const odd = row % 2 === 0
          gsap.set(rowBlocks, { scaleX: 0 })
          tl.to(
            rowBlocks,
            {
              scaleX: 1,
              duration: 0.5,
              ease: 'power3.inOut',
              stagger: {
                each: 0.028,
                from: odd ? 'start' : 'end',
              },
            },
            row * 0.045,
          )
        }

        tl.add(() => {
          onCovered()
        })
        tl.addLabel('reveal')

        // Reveal — reverse directions (shutter open)
        for (let row = 0; row < ROWS; row++) {
          const rowBlocks = root.querySelectorAll<HTMLElement>(
            `.grid-shutter__row:nth-child(${row + 1}) .grid-shutter__block`,
          )
          const odd = row % 2 === 0
          tl.to(
            rowBlocks,
            {
              scaleX: 0,
              duration: 0.5,
              ease: 'power3.inOut',
              stagger: {
                each: 0.028,
                from: odd ? 'end' : 'start',
              },
            },
            `reveal+=${row * 0.045}`,
          )
        }
      })
    },
  }))

  return (
    <div className="grid-shutter" ref={rootRef} aria-hidden="true">
      {rows.map((cols, rowIndex) => (
        <div className="grid-shutter__row" key={rowIndex}>
          {cols.map((id) => (
            <div className="grid-shutter__block" key={id} />
          ))}
        </div>
      ))}
    </div>
  )
})

export default GridShutter
