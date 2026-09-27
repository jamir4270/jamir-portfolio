import { Landmark, Star, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { leadership, achievements, certifications, education } from '../data/portfolio'
import { DUR, EASE } from './motion'
import { Expand, GlassRow, ViewAll } from './UI'

const highlightIcons = [Star, Landmark, Trophy]

export function EducationSection() {
  return (
    <section id="education" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Education</h2>
      <div className="flex items-center gap-3">
        <img src="/assets/vsu-light.png" alt="Visayas State University logo" className="size-12 shrink-0 rounded-sm object-contain" loading="lazy" />
        <div>
          <h3 className="text-sm font-semibold text-cardInk">{education.school}</h3>
          <p className="text-xs text-slate-500">{education.degree}</p>
        </div>
      </div>
      <p className="mt-4 text-2xl font-bold tracking-tight text-navy">{education.headline}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-600">{education.subline}</p>
      <div className="mt-4 grid gap-2">
        {education.highlights.map((h, i) => {
          const Icon = highlightIcons[i % highlightIcons.length]
          return (
            <GlassRow key={h} className="flex items-center gap-2.5 !py-2.5 px-3">
              <Icon size={14} className="shrink-0 text-[#0096c7]" aria-hidden="true" />
              <span className="text-xs font-medium text-[#334155]">{h}</span>
            </GlassRow>
          )
        })}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function CertificationsSection() {
  const [expanded, setExpanded] = useState(false)
  const base = certifications.slice(0, 3)
  const rest = certifications.slice(3)
  const row = (c) => (
    <>
      {c.href ? (
        <a href={c.href} target="_blank" rel="noreferrer" className="focus-ring group flex items-center justify-between gap-3 text-xs text-[#334155] transition-all duration-300 ease-out hover:translate-x-1 hover:text-navy">
          <span>{c.title} <span className="text-slate-400">· {c.org}</span></span>
          <span className="text-xs text-slate-400 transition-all duration-300 group-hover:translate-x-[1px] group-hover:text-navy" aria-hidden="true">↗</span>
        </a>
      ) : (
        <span className="flex items-center justify-between gap-3 text-xs text-[#334155]">
          <span>{c.title} <span className="text-slate-400">· {c.org}</span></span>
        </span>
      )}
      <hr className="my-2 border-slate-200/70" />
    </>
  )
  return (
    <section id="certifications" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Certifications</h2>
        {certifications.length > 3 && <ViewAll expanded={expanded} onToggle={() => setExpanded((v) => !v)} />}
      </div>
      <ul className="space-y-2">
        {base.map((c) => (
          <li key={c.title}>{row(c)}</li>
        ))}
      </ul>
      <Expand open={expanded}>
        <ul className="space-y-2">
          {expanded && rest.map((c, i) => (
            <motion.li
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DUR.short, ease: EASE, delay: i * 0.05 }}
            >
              {row(c)}
            </motion.li>
          ))}
        </ul>
      </Expand>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function LeadershipSection() {
  return (
    <section id="leadership" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Leadership</h2>
      <div className="space-y-1.5">
        {leadership.map((item) => (
          <GlassRow key={item.role} className="px-4">
            <h3 className="text-sm font-semibold text-cardInk">{item.role}</h3>
            <p className="mt-0.5 text-xs text-slate-500">{item.org}</p>
          </GlassRow>
        ))}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function AchievementsSection() {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Achievements</h2>
      <ul className="space-y-1.5">
        {achievements.map((item) => (
          <li key={item.title} className="group flex items-center justify-between gap-3 border-b border-slate-200/70 pb-2 transition-transform duration-300 hover:translate-x-1">
            <span className="pr-3 text-sm font-semibold text-cardInk transition group-hover:text-navy">{item.title}</span>
            <span className="shrink-0 text-[11px] text-slate-400">{item.year}</span>
          </li>
        ))}
      </ul>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
