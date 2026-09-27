import { useEffect, useState } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { scrollToTop } from './SmoothScroll'

export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })
  const [fallback, setFallback] = useState(0)

  useEffect(() => {
    if (reduce) {
      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setFallback(max > 0 ? window.scrollY / max : 0)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => window.removeEventListener('scroll', onScroll)
    }
  }, [reduce])

  if (reduce) {
    return (
      <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-[#48cae4] via-[#0096c7] to-[#03045e]"
          style={{ width: `${fallback * 100}%` }}
        />
      </div>
    )
  }

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#48cae4] via-[#0096c7] to-[#03045e] shadow-[0_0_12px_rgba(72,202,228,0.6)]"
        style={{ scaleX }}
      />
    </div>
  )
}

export function BackToTop() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.button
      onClick={scrollToTop}
      aria-label="Back to top"
      initial={false}
      animate={visible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.9 }}
      transition={reduce ? { duration: 0.01 } : { type: 'spring', stiffness: 260, damping: 24 }}
      className={`focus-ring fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full border border-white/80 bg-white/70 text-navy shadow-lg backdrop-blur-xl transition-colors duration-300 hover:bg-navy hover:text-white ${
        visible ? '' : 'pointer-events-none'
      }`}
    >
      <ArrowUp size={18} />
    </motion.button>
  )
}
