import { useState } from 'react'
import { ArrowUpRight, FlaskConical, ImagePlus, Quote } from 'lucide-react'
import { thesis, recommendations, socials, gallery } from '../data/portfolio'
import { Section, GlassCard, ImagePlaceholder } from './UI'

export function ThesisSection() {
  return (
    <Section id="thesis" eyebrow="Thesis" title="Current research.">
      <GlassCard className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-navy text-white shadow-md">
            <FlaskConical size={20} aria-hidden="true" />
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#48cae4]/40 bg-[#caf0f8]/50 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0096c7] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0096c7]" />
            </span>
            {thesis.status}
          </span>
        </div>
        <h3 className="mt-5 text-lg font-semibold leading-snug tracking-tight text-cardInk sm:text-xl">{thesis.title}</h3>
        <p className="mt-3 text-[0.9rem] leading-7 text-slate-600">{thesis.description}</p>
      </GlassCard>
    </Section>
  )
}

export function RecommendationsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? recommendations : recommendations.slice(0, 1)
  return (
    <Section
      id="recommendations"
      eyebrow="Recommendations"
      title="What others say."
      action={
        recommendations.length > 1 ? (
          <button onClick={() => setExpanded((v) => !v)} className="focus-ring text-sm font-semibold text-aquaDark transition hover:text-navy">
            {expanded ? 'Show less' : 'View All'}
          </button>
        ) : null
      }
    >
      <div className="grid gap-4">
        {visible.map((r) => (
          <GlassCard key={r.name} className="p-6 sm:p-7">
            <Quote size={22} className="text-[#0096c7]" aria-hidden="true" />
            <blockquote className="mt-4 text-[0.9rem] leading-7 text-slate-600">“{r.quote}”</blockquote>
            <div className="mt-5 flex items-center gap-3 border-t border-white/70 pt-5">
              <span className="grid size-10 place-items-center rounded-full bg-navy text-xs font-bold text-white">{r.initials}</span>
              <div>
                <div className="text-sm font-semibold text-cardInk">{r.name}</div>
                <div className="text-xs text-slate-500">{r.title}</div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export function SocialLinksSection() {
  return (
    <Section eyebrow="Social Links" title="Find me elsewhere.">
      <ul className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} className="focus-ring group flex items-center justify-between py-3.5 transition hover:bg-white/50">
              <span className="text-[0.88rem] font-medium text-[#334155] transition group-hover:text-navy">{s.label}</span>
              <ArrowUpRight size={17} className="text-slate-400 transition group-hover:rotate-45 group-hover:text-navy" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export function GallerySection() {
  return (
    <Section eyebrow="Gallery" title="Snapshots." lede="Placeholders for now — swap with real project, team, and event photos.">
      <div className="grid gap-4 sm:grid-cols-2">
        {gallery.map((g) => (
          <ImagePlaceholder key={g.title} title={g.title} hint={g.hint} aspect="aspect-[4/3]" icon={ImagePlus} />
        ))}
      </div>
    </Section>
  )
}
