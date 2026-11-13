import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SNAP } from './motion'
import { navItems } from '../data/portfolio'

export function useActiveSection() {
  const [active, setActive] = useState('#about')

  useEffect(() => {
    const ids = navItems.map(([, href]) => href.slice(1))
    // The section whose top is closest above the 40% line wins; sections sharing a row
    // (the two-column pairs) resolve to whichever comes first in the nav.
    const onScroll = () => {
      let current = `#${ids[0]}`
      let best = -Infinity
      for (const id of ids) {
        const top = document.getElementById(id)?.getBoundingClientRect().top
        if (top === undefined || top >= window.innerHeight * 0.4) continue
        if (top > best + 1) {
          best = top
          current = `#${id}`
        }
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return active
}

export default function Navigation({ activeId }) {
  const navRef = useRef(null)

  // Keep the active link in view on narrow screens, scrolling only the nav row, never the page.
  useEffect(() => {
    const nav = navRef.current
    const link = nav?.querySelector('[aria-current="true"]')
    if (!nav || !link) return
    const target = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2
    nav.scrollTo({ left: target, behavior: 'smooth' })
  }, [activeId])

  return (
    <nav ref={navRef} aria-label="Portfolio sections" className="scrollbar-hide flex gap-1 overflow-x-auto py-1.5">
      {navItems.map(([label, href]) => {
        const isActive = activeId === href
        return (
          <a
            key={href}
            href={href}
            aria-current={isActive ? 'true' : undefined}
            className={`focus-ring relative inline-flex min-h-11 items-center whitespace-nowrap rounded-full px-3.5 text-sm font-semibold transition-colors duration-200 active:scale-95 ${
              isActive ? 'text-navy' : 'text-[#17304f]/70 hover:text-navy'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-active"
                transition={SNAP}
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full border border-white/90 bg-white/85 shadow-[0_4px_14px_rgba(72,202,228,0.22)]"
              />
            )}
            {label}
          </a>
        )
      })}
    </nav>
  )
}
