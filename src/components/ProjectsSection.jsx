import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'
import { GlassPill, ViewAll } from './UI'

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const visible = expanded ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Selected Work</h2>
        <ViewAll expanded={expanded} onToggle={() => setExpanded((v) => !v)} count={projects.length} />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <a key={project.title} href="#projects" className="focus-ring group block transition-transform duration-300 hover:translate-x-1">
            <span className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-cardInk transition group-hover:text-navy">{project.title}</h3>
              <span className="grid size-6 shrink-0 place-items-center rounded-sm border border-white/80 bg-white/60 text-[#17304f] shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-[#0096c7]/40 group-hover:bg-navy group-hover:text-white" aria-hidden="true">
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </span>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-slate-500">{project.description}</p>
            <div className="flex flex-col items-start gap-1.5">
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{project.role}</GlassPill>
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{project.stack}</GlassPill>
            </div>
          </a>
        ))}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
