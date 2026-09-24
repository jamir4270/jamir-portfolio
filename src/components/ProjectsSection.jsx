import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { Section } from './UI'

function ProjectRow({ project }) {
  return (
    <a
      href="#projects"
      className="focus-ring group grid gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/55 hover:shadow-[0_16px_40px_rgba(72,202,228,0.16)] sm:grid-cols-[180px_1fr_auto] sm:items-center sm:gap-6 sm:p-5"
    >
      <div className="flex aspect-[16/10] w-full items-center justify-center rounded-xl border border-dashed border-[#48cae4]/50 bg-gradient-to-b from-white/80 to-[#e0f2fe]/40 text-xs font-semibold text-[#23506a] sm:aspect-[4/3]">
        {project.placeholderTitle}
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h3 className="text-base font-semibold tracking-tight text-cardInk transition group-hover:text-navy">{project.title}</h3>
          <span className="text-xs font-medium text-slate-400">· {project.year}</span>
        </div>
        <p className="mt-1.5 max-w-xl text-[0.87rem] leading-6 text-slate-600">{project.description}</p>
      </div>
      <span className="hidden size-10 place-items-center rounded-full border border-white/80 bg-white/60 text-[#17304f] transition-all duration-300 group-hover:border-[#0096c7]/30 group-hover:bg-navy group-hover:text-white sm:grid" aria-hidden="true">
        <ArrowUpRight size={17} className="transition-transform duration-300 group-hover:rotate-45" />
      </span>
    </a>
  )
}

export default function ProjectsSection() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Systems built around real workflows."
      lede="Six shipped builds — election platforms, POS, campus tools, and mobile apps. Screenshots to be added."
    >
      <div className="divide-y divide-slate-200/70 border-y border-slate-200/70">
        {projects.map((project) => <ProjectRow key={project.title} project={project} />)}
      </div>
    </Section>
  )
}
