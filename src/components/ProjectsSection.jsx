import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Expand as ExpandIcon } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import { projects } from '../data/portfolio'
import { DUR, EASE } from './motion'
import { Expand, GlassPill, Lightbox, ViewAll } from './UI'

function ProjectCard({ project, index, onZoom, animateIn = false }) {
  const card = (
    <article className="group">
      {project.image && (
        <button
          onClick={() => onZoom(project)}
          className="focus-ring glass group/img relative mb-3 block w-full overflow-hidden rounded-sm transition-shadow duration-500 hover:shadow-[0_18px_44px_rgba(0,150,199,0.25)]"
          aria-label={`Enlarge ${project.title} screenshot`}
        >
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover transition-all duration-500 ease-out group-hover/img:scale-[1.045] group-hover/img:brightness-[1.02]"
          />
          <span className="absolute inset-x-0 bottom-0 flex translate-y-1 items-center justify-center gap-1 bg-gradient-to-t from-navy/70 to-transparent pb-1.5 pt-5 text-[10px] font-semibold text-white opacity-0 transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100">
            <ExpandIcon size={11} aria-hidden="true" />
            Enlarge
          </span>
        </button>
      )}
      <span className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-cardInk transition-colors duration-300 group-hover:text-navy">
          {project.title}
          <span className="ml-2 text-[11px] font-normal text-slate-400">{project.year}</span>
        </h3>
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} live link`} className="focus-ring grid size-6 shrink-0 place-items-center rounded-sm border border-white/80 bg-white/60 text-[#17304f] shadow-sm backdrop-blur-xl transition-all duration-300 ease-out group-hover:border-[#0096c7]/40 group-hover:bg-navy group-hover:text-white">
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:rotate-45" />
          </a>
        ) : project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} repo link`} className="focus-ring grid size-6 shrink-0 place-items-center rounded-sm border border-white/80 bg-white/60 text-[#17304f] shadow-sm backdrop-blur-xl transition-all duration-300 ease-out group-hover:border-[#0096c7]/40 group-hover:bg-navy group-hover:text-white">
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-[1px] group-hover:rotate-45" />
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
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-navy hover:text-white active:translate-y-0">
              <GithubIcon size={12} aria-hidden="true" />
              GitHub
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-navy hover:text-white active:translate-y-0">
              {project.demoLabel || 'Live Demo'}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  )

  if (!animateIn) return card
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: DUR.base, ease: EASE, delay: Math.min(index * 0.06, 0.3) }}
    >
      {card}
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState(false)
  const [zoomed, setZoomed] = useState(null)
  const base = projects.slice(0, 4)
  const rest = projects.slice(4)

  return (
    <section id="projects" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Selected Work</h2>
        <ViewAll expanded={expanded} onToggle={() => setExpanded((v) => !v)} count={projects.length} />
      </div>
      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {base.map((project) => (
          <ProjectCard key={project.title} project={project} onZoom={setZoomed} />
        ))}
      </motion.div>
      <Expand open={expanded}>
        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
          {expanded && rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} onZoom={setZoomed} animateIn />
          ))}
        </div>
      </Expand>
      <AnimatePresence>
        {zoomed && (
          <Lightbox
            src={zoomed.image}
            alt={`${zoomed.title} screenshot`}
            title={`${zoomed.title} · ${zoomed.year}`}
            onClose={() => setZoomed(null)}
          >
            <p className="text-center text-xs leading-relaxed text-slate-600">{zoomed.description}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-1.5">
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{zoomed.role}</GlassPill>
              <GlassPill className="!px-2 !py-0.5 !text-[10px] font-bold uppercase tracking-wide">{zoomed.stack}</GlassPill>
            </div>
            {(zoomed.githubUrl || zoomed.demoUrl) && (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {zoomed.githubUrl && (
                  <a href={zoomed.githubUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1.5 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition hover:bg-navy hover:text-white">
                    <GithubIcon size={12} aria-hidden="true" />
                    GitHub
                  </a>
                )}
                {zoomed.demoUrl && (
                  <a href={zoomed.demoUrl} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-1 rounded-sm border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-semibold text-[#17304f] transition hover:bg-navy hover:text-white">
                    {zoomed.demoLabel || 'Live Demo'}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </Lightbox>
        )}
      </AnimatePresence>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
