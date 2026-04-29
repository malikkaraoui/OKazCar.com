import { useState, useEffect, useRef } from 'react'

export default function Counter({ to, duration = 1600, suffix = '', format = (v) => v.toLocaleString('fr-FR') }) {
  const [val, setVal] = useState(0)
  const ref = useRef()

  useEffect(() => {
    let started = false
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        started = true
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setVal(Math.round(to * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) io.observe(ref.current)
    return () => { io.disconnect(); cancelAnimationFrame(raf) }
  }, [to, duration])

  return <span ref={ref}>{format(val)}{suffix}</span>
}
