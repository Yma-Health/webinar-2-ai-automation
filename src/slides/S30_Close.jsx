import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const lines = [
  { text: 'Thank you for your attention', delay: 0, cls: 'typewriter-line-close-1' },
  { text: 'www.yma.health', delay: 2000, cls: 'typewriter-line-close-2' },
]

export default function S30Close() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.5 })
  const [activeLines, setActiveLines] = useState(0)

  useEffect(() => {
    if (!inView) {
      setActiveLines(0)
      return
    }
    const timers = lines.map((l, i) =>
      setTimeout(() => setActiveLines(i + 1), l.delay + 500)
    )
    return () => timers.forEach(clearTimeout)
  }, [inView])

  return (
    <section
      className="slide slide-bg-image"
      style={{ backgroundImage: `url(${import.meta.env.BASE_URL}bg-warm-gradient.png)` }}
      ref={ref}
    >
      <div className="slide-inner closing-content">
        {lines.map((line, i) =>
          i < activeLines ? (
            <div key={i} className={`typewriter-line ${line.cls}`} style={{ color: '#1A1A1A' }}>
              {line.text.split(' ').map((word, j) => (
                <motion.span
                  key={j}
                  className="typewriter-word"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: j * 0.1,
                    duration: 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
          ) : null
        )}

        {activeLines >= lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            style={{ marginTop: 48 }}
          >
            <img
              src={`${import.meta.env.BASE_URL}yma_logo.svg`}
              alt="Yma"
              style={{ height: 48 }}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
