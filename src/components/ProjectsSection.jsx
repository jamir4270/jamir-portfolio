import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
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
          <article key={project.title} className="group">
            {project.image && (
              <div className="glass mb-3 overflow-hidden rounded-sm">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            )}
            <span className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-cardInk transition group-hover:text-navy">
                {project.title}
                <span className="ml-2 text-[11px] font-normal text-slate-400">{project.year}</span>
              </h3>
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live link`} className="focus-ring grid size-6 shrink-0 place-items-center rounded-sm border border-white/80 bg-white/60 text-[#17304f] shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-[#0096c7]/40 group-hover:bg-navy group-hover:text-white">
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ) : project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} repo link`} className="focus-ring grid size-6 shrink-0 place-items-center rounded-sm border border-white/80 bg-white/60 text-[#17304f] shadow-sm backdrop-blur-xl transition-all duration-300 group-hover:border-[#0096c7]/40 group-hover:bg-navy group-hover:text-white">
                  <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:rotate-45" />
                </a>
              ) : null}
            </span>
            <p className="mb-3 mt-1 text-xs leading-relaxed text-slate-500">{project.description}</p>
            <div className="mb-3 flex flex-col items-start gap-1.5">
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{project.role}</GlassPill>
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{project.stack}</GlassPill>
            </div>
            {(project.githubUrl || project.demoUrl) && (
              <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition hover:-translate-y-px hover:bg-navy hover:text-white">
                    <GithubIcon size={12} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition hover:-translate-y-px hover:bg-navy hover:text-white">
                    {project.demoLabel || 'Live Demo'}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
