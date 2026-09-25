import { CheckCircle2 } from 'lucide-react'
import { Section, GlassCard, ImagePlaceholder } from './UI'
import { experience } from '../data/portfolio'

const points = [
  'Server-side development with ASP.NET Core MVC',
  'Technical leadership across a small team',
  'End-to-end workflow design and delegation',
  'CI pipeline, QA testing, and performance metrics',
  'Enterprise SDLC practices at Alliance Software Inc.',
  'Professional team-based engineering habits',
]
const tech = ['ASP.NET Core MVC', 'CI Pipeline', 'QA Testing', 'SDLC', 'Technical Leadership']

export function ExperienceHighlight() {
  return (
    <Section
      id="experience-featured"
      eyebrow="Experience"
      title="Engineering in a professional team."
      lede="Summer Bridge program at Alliance Software Inc. — backend intern and technical lead in one rotation."
    >
      <GlassCard className="p-6 sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_.95fr] xl:items-start">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-cardInk">Technical Lead · Backend Developer Intern</h3>
                <p className="mt-1 text-sm text-slate-600">Alliance Summer Bridge Training Program</p>
              </div>
              <span className="rounded-full border border-white/80 bg-white/60 px-3 py-1 text-xs font-semibold text-[#23506a]">2026</span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <li key={point} className="flex gap-2.5 text-[0.87rem] leading-6 text-slate-600">
                  <CheckCircle2 className="mt-1 shrink-0 text-[#0096c7]" size={16} aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {tech.map((item) => (
                <span key={item} className="rounded-full border border-white/80 bg-white/60 px-3 py-1.5 text-xs font-semibold text-[#23506a] transition hover:bg-white/90 hover:shadow-sm">{item}</span>
              ))}
            </div>
          </div>
          <ImagePlaceholder title="Team project in action" hint="App screenshot, architecture, or team photo" />
        </div>
      </GlassCard>
    </Section>
  )
}

export default function ExperienceSection() {
  return (
    <section id="experience" aria-label="Experience timeline" className="scroll-mt-24 py-10 sm:py-14">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-aquaDark">Experience</div>
      <h2 className="max-w-2xl text-[clamp(1.4rem,2.5vw,1.9rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">All roles at a glance.</h2>
      <ol className="relative ml-2 mt-7 space-y-0 border-l-2 border-[#caf0f8] pl-0">
        {experience.map((item) => (
          <li key={`${item.role}-${item.year}`} className="group relative py-4 pl-8 first:pt-1 last:pb-1">
            <span aria-hidden="true" className="absolute -left-[7px] top-6 size-3 rounded-full border-2 border-white bg-[#0096c7] shadow transition group-hover:scale-125" />
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{item.year}</div>
            <h3 className="mt-1 font-semibold tracking-tight text-cardInk transition group-hover:text-navy">{item.role}</h3>
            <p className="mt-1 text-[0.87rem] leading-6 text-slate-600">{item.org}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
