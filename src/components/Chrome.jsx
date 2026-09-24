import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const scroller = document.querySelector('.right-scroll')
    const onScroll = () => {
      if (scroller && window.innerWidth >= 1024) {
        const max = scroller.scrollHeight - scroller.clientHeight
        setProgress(max > 0 ? scroller.scrollTop / max : 0)
      } else {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? window.scrollY / max : 0)
      }
    }
    scroller?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      scroller?.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-[#48cae4] via-[#0096c7] to-[#03045e] transition-[width] duration-150"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  )
}

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const scroller = document.querySelector('.right-scroll')
    const onScroll = () => {
      const y = scroller && window.innerWidth >= 1024 ? scroller.scrollTop : window.scrollY
      setVisible(y > 600)
    }
    scroller?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      scroller?.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const goTop = () => {
    const scroller = document.querySelector('.right-scroll')
    if (scroller && window.innerWidth >= 1024) scroller.scrollTo({ top: 0, behavior: 'smooth' })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={goTop}
      aria-label="Back to top"
      className={`focus-ring fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full border border-white/80 bg-white/70 text-navy shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-navy hover:text-white ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp size={18} />
    </button>
  )
}
