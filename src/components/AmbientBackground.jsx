import { useEffect } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

const nodes = [
  ['-left-24 -top-24', '#caf0f8', 560, 60],
  ['right-[-140px] top-[8%]', '#ade8f4', 500, -50],
  ['left-[28%] top-[38%]', '#E0F8F5', 460, 80],
  ['right-[5%] bottom-[-120px]', '#E0F2FE', 520, -80],
  ['left-[-100px] bottom-[5%]', '#ECFDF5', 420, 40],
]

export default function AmbientBackground() {
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, { stiffness: 90, damping: 28 })
  const mx = useSpring(0, { stiffness: 60, damping: 20 })
  const my = useSpring(0, { stiffness: 60, damping: 20 })

  const y0 = useTransform(smoothY, [0, 2000], [0, -nodes[0][3]])
  const y1 = useTransform(smoothY, [0, 2000], [0, -nodes[1][3]])
  const y2 = useTransform(smoothY, [0, 2000], [0, -nodes[2][3]])
  const scrollYs = [y0, y1, y0, y1, y2]

  useEffect(() => {
    if (reduce) return
    const onMove = (e) => {
      mx.set((e.clientX / window.innerWidth - 0.5) * 28)
      my.set((e.clientY / window.innerHeight - 0.5) * 28)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [reduce, mx, my])

  if (reduce) {
    return (
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
        {nodes.map(([pos, color, size], i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-30 ${pos}`}
            style={{ width: size, height: size, background: color, filter: 'blur(90px)' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
      {nodes.map(([pos, color, size], i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-30 ${pos}`}
          style={{
            width: size,
            height: size,
            background: color,
            filter: 'blur(90px)',
            y: scrollYs[i % scrollYs.length],
            x: mx,
          }}
        >
          <motion.div
            className="h-full w-full rounded-full"
            style={{ y: my }}
            animate={{ x: [0, 18, -10, 0], y: [0, -14, 12, 0], scale: [1, 1.04, 0.98, 1] }}
            transition={{ duration: 28 + i * 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      ))}
    </div>
  )
}
