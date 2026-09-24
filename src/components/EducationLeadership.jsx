import { Award, BookOpenCheck, GraduationCap } from 'lucide-react'
import { leadership, achievements } from '../data/portfolio'
import { Section } from './UI'

export function EducationSection() {
  return (
    <Section
      eyebrow="Education"
      title="Academic foundation, applied fast."
    >
      <div className="grid gap-10 border-t border-slate-200/70 pt-8 md:grid-cols-2">
        <div className="flex gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy text-white shadow-md">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">2023 — Present</div>
            <h3 className="mt-1.5 text-lg font-semibold tracking-tight text-cardInk">BS in Computer Science</h3>
            <p className="mt-1 text-sm text-slate-600">Visayas State University — Baybay City</p>
            <p className="mt-3 inline-flex rounded-full bg-[#caf0f8]/60 px-3 py-1 text-xs font-semibold text-navy">DOST Undergraduate Scholar</p>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/80 text-[#0077b6] shadow-sm ring-1 ring-white">
            <BookOpenCheck size={20} aria-hidden="true" />
          </span>
          <div className="w-full">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">Certificates</div>
            <ul className="mt-3 divide-y divide-slate-200/70">
              <li className="py-3 first:pt-0">
                <div className="font-semibold text-cardInk">Introduction to Data Science</div>
                <div className="mt-0.5 text-sm text-slate-500">CISCO Networking Academy</div>
              </li>
              <li className="py-3 last:pb-0">
                <div className="font-semibold text-cardInk">Data Literacy</div>
                <div className="mt-0.5 text-sm text-slate-500">DataCamp</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
      eyebrow="Recognition"
      title="Proof in competition and craft."
    >
      <ul className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {achievements.map((item) => (
          <li key={item} className="group flex items-center gap-3.5 py-3.5 transition hover:bg-white/50">
            <Award size={17} className="shrink-0 text-[#0077b6] transition group-hover:scale-110" aria-hidden="true" />
            <span className="text-[0.88rem] font-medium text-[#334155]">{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
