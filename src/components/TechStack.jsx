import { useState } from 'react'
import { skills } from '../data/portfolio'
import { GlassPill, ViewAll } from './UI'

export default function TechStack() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="stack" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Tech Stack</h2>
        <ViewAll expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group}>
            <div className="mb-2 text-xs font-semibold text-cardInk">{group}</div>
            <div className="flex flex-wrap gap-2">
              {(expanded ? items : items.slice(0, 6)).map((item) => (
                <GlassPill key={item}>{item}</GlassPill>
              ))}
            </div>
          </div>
        ))}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
