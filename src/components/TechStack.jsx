import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import { DUR, EASE } from './motion'
import { Expand, GlassPill, ViewAll } from './UI'

export default function TechStack() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="stack" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Tech Stack</h2>
        <ViewAll expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => {
          const base = items.slice(0, 6)
          const rest = items.slice(6)
          return (
            <div key={group}>
              <div className="mb-2 text-xs font-semibold text-cardInk">{group}</div>
              <div className="flex flex-wrap gap-2">
                {base.map((item) => (
                  <GlassPill key={item}>{item}</GlassPill>
                ))}
              </div>
              {rest.length > 0 && (
                <Expand open={expanded}>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <AnimatePresence initial={false}>
                      {expanded && rest.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: DUR.short, ease: EASE, delay: i * 0.04 }}
                        >
                          <GlassPill>{item}</GlassPill>
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </div>
                </Expand>
              )}
            </div>
          )
        })}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
