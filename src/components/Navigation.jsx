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
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    const onScroll = () => {
      let current = ids[0] ? `#${ids[0]}` : '#about'
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.4) current = `#${id}`
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return active
}

export default function Navigation({ activeId }) {
  return (
    <nav aria-label="Portfolio sections" className="flex gap-2 overflow-x-auto py-1">
      {navItems.map(([label, href]) => {
        const isActive = activeId === href
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
      })}
    </nav>
  )
}
