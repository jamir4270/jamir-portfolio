import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Section } from './UI'

const PREVIEW_COUNT = 4

function ProjectRow({ project }) {
  return (
    <a
      href="#projects"
      className="focus-ring group grid gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/55 hover:shadow-[0_16px_40px_rgba(72,202,228,0.16)] sm:grid-cols-[140px_1fr_auto] sm:items-center sm:gap-6 sm:p-5"
    >
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-[#48cae4]/50 bg-gradient-to-b from-white/80 to-[#e0f2fe]/40 p-3 text-center text-xs font-semibold text-[#23506a] sm:aspect-[4/3]">
        {project.placeholderTitle}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold tracking-tight text-cardInk transition group-hover:text-navy">{project.title}</h3>
        </div>
        <p className="mt-1.5 max-w-xl text-[0.87rem] leading-6 text-slate-600">{project.description}</p>
        <p className="mt-2 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-slate-400">
          {project.role} · {project.stack} · {project.year}
        </p>
      </div>
      <span className="hidden size-10 place-items-center rounded-full border border-white/80 bg-white/60 text-[#17304f] transition-all duration-300 group-hover:border-[#0096c7]/30 group-hover:bg-navy group-hover:text-white sm:grid" aria-hidden="true">
        <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </a>
  )
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, PREVIEW_COUNT)

  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Systems built around real workflows."
      lede="Election platforms, POS, campus tools, and mobile apps. Screenshots to be added."
      action={
        <button
          onClick={() => setExpanded((v) => !v)}
          className="focus-ring text-sm font-semibold text-aquaDark transition hover:text-navy"
        >
          {expanded ? 'Show less' : `View All (${projects.length})`}
        </button>
      }
    >
      <div className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {visible.map((project) => <ProjectRow key={project.title} project={project} />)}
      </div>
    </Section>
  )
}
