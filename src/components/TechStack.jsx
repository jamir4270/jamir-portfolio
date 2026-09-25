import { useState } from 'react'
import { skills } from '../data/portfolio'
import { Section } from './UI'

const PREVIEW_COUNT = 4

export default function TechStack() {
  const [expanded, setExpanded] = useState(false)

  return (
    <Section
      id="stack"
      eyebrow="Tech Stack"
      title="What I build with."
      action={
        <button
          onClick={() => setExpanded((v) => !v)}
          className="focus-ring text-sm font-semibold text-aquaDark transition hover:text-navy"
        >
          {expanded ? 'Show less' : 'View All'}
        </button>
      }
    >
      <div className="grid gap-x-10 gap-y-8 border-t border-slate-200/70 pt-8 md:grid-cols-3">
        {Object.entries(skills).map(([group, items]) => {
          const visible = expanded ? items : items.slice(0, PREVIEW_COUNT)
          return (
            <div key={group}>
              <div className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-aquaDark">{group}</div>
              <div className="flex flex-wrap gap-2">
                {visible.map((item) => (
                  <span
                    key={item}
                    className="cursor-default rounded-full border border-slate-200/80 bg-white/60 px-3.5 py-1.5 text-[0.8rem] font-medium text-[#254c63] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#48cae4]/60 hover:bg-white/95 hover:shadow-[0_10px_24px_rgba(72,202,228,0.2)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
