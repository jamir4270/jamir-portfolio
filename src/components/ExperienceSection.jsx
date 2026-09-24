import { CheckCircle2 } from 'lucide-react'
import { Section, GlassCard, ImagePlaceholder } from './UI'

const points = [
  'Server-side development with ASP.NET Core MVC',
  'Technical leadership across a small team',
  'End-to-end workflow design and delegation',
  'CI pipeline, QA testing, and performance metrics',
  'Enterprise SDLC practices at Alliance Software Inc.',
  'Professional team-based engineering habits',
]
const tech = ['ASP.NET Core MVC', 'CI Pipeline', 'QA Testing', 'SDLC', 'Technical Leadership']

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
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
