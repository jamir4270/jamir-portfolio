import { Award, BookOpenCheck, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { leadership, achievements, certifications, education } from '../data/portfolio'
import { Section, GlassCard } from './UI'

export function EducationSection() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation, applied fast."
    >
      <GlassCard className="p-6 sm:p-8">
        <div className="flex gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white shadow-md">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{education.period}</div>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-cardInk">{education.degree}</h3>
            <p className="mt-1 text-sm text-slate-600">{education.school} — {education.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.highlights.map((h) => (
                <span key={h} className="rounded-full bg-[#caf0f8]/60 px-3 py-1 text-xs font-semibold text-navy">{h}</span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </Section>
  )
}

export function CertificationsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? certifications : certifications.slice(0, 3)
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Credentials."
      action={
        certifications.length > 3 ? (
          <button onClick={() => setExpanded((v) => !v)} className="focus-ring text-sm font-semibold text-aquaDark transition hover:text-navy">
            {expanded ? 'Show less' : 'View All'}
          </button>
        ) : null
      }
    >
      <ul className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {visible.map((c) => (
          <li key={c.title} className="group flex items-center gap-3.5 py-3.5 transition hover:bg-white/50">
            <BookOpenCheck size={17} className="shrink-0 text-[#0077b6] transition group-hover:scale-110" aria-hidden="true" />
            <span>
              <span className="block text-[0.88rem] font-medium text-[#334155]">{c.title}</span>
              <span className="mt-0.5 block text-xs text-slate-500">{c.org}</span>
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function LeadershipSection() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title="Leading through shared ownership."
      lede="Mentorship, study groups, and department events — structure over titles."
    >
      <ol className="relative ml-2 space-y-0 border-l-2 border-[#caf0f8] pl-0">
        {leadership.map((item) => (
          <li key={item.role} className="group relative py-5 pl-8 first:pt-1 last:pb-1">
            <span aria-hidden="true" className="absolute -left-[7px] top-6 size-3 rounded-full border-2 border-white bg-[#0096c7] shadow transition group-hover:scale-125" />
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{item.year}</div>
            <h3 className="mt-1 font-semibold tracking-tight text-cardInk transition group-hover:text-navy">{item.role}</h3>
            <p className="mt-1.5 text-[0.87rem] leading-6 text-slate-600">{item.points.join(' · ')}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}

export function AchievementsSection() {
  return (
    <Section
      eyebrow="Achievements"
      title="Proof in competition and craft."
    >
      <ul className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {achievements.map((item) => (
          <li key={item.title} className="group flex items-center justify-between gap-4 py-3.5 transition hover:bg-white/50">
            <span className="flex items-center gap-3.5">
              <Award size={17} className="shrink-0 text-[#0077b6] transition group-hover:scale-110" aria-hidden="true" />
              <span className="text-[0.88rem] font-medium text-[#334155]">{item.title}</span>
            </span>
            <span className="shrink-0 text-xs font-semibold text-slate-400">{item.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
