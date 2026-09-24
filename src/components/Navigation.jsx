import { useEffect, useState } from 'react'
import { navItems } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const ids = navItems.map(([, href]) => href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    // Observe inside window AND nested scroll container: elements are the same nodes.
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    // Fallback for nested <main> scroller on desktop: also listen to its scroll
    // so hash links inside the right pane update even when window doesn't scroll.
    const scroller = document.querySelector('.right-scroll')
    const onScroll = () => {
      let current = ids[0] ? `#${ids[0]}` : '#about'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        const base = scroller ? scroller.getBoundingClientRect().top : 0
        if (rect.top - base < window.innerHeight * 0.4) current = `#${id}`
      }
      setActive(current)
    }
    scroller?.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      scroller?.removeEventListener('scroll', onScroll)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}

export default function Navigation({ mobile = false, activeId }) {
  return (
    <nav aria-label="Portfolio sections" className={mobile ? 'flex gap-2 overflow-x-auto py-1' : 'space-y-1.5'}>
      {navItems.map(([label, href]) => {
        const isActive = activeId === href
        if (mobile) {
          return (
            <a
              key={href}
              href={href}
              aria-current={isActive ? 'true' : undefined}
              className={`focus-ring whitespace-nowrap rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                isActive
                  ? 'border-white/90 bg-white/80 text-navy shadow-sm'
                  : 'border-white/50 bg-white/30 text-[#17304f] hover:bg-white/60'
              }`}
            >
              {label}
            </a>
          )
        }
        return (
          <a
            key={href}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={`focus-ring group flex items-center gap-3 rounded-xl px-4 py-2.5 text-[0.9rem] font-medium transition-all duration-300 ${
              isActive
                ? 'translate-x-1 bg-white/80 font-semibold text-navy shadow-[0_8px_24px_rgba(72,202,228,0.18)]'
                : 'text-[#3d5470] hover:translate-x-1 hover:bg-white/60 hover:text-navy'
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ? 'scale-125 bg-[#0096c7]' : 'bg-slate-300 group-hover:bg-[#48cae4]'
              }`}
            />
            {label}
          </a>
        )
      })}
    </nav>
  )
}
