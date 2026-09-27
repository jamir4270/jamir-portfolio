import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { thesis, recommendations, socials, gallery } from '../data/portfolio'
import { DUR, EASE } from './motion'
import { Lightbox, Magnetic, Spotlight, ViewAll } from './UI'

export function ThesisSection() {
  const reduce = useReducedMotion()
  return (
    <section id="thesis" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Thesis</h2>
      <Spotlight className="overflow-hidden rounded-sm border border-navy/40 bg-gradient-to-b from-[#0a1a6b] to-navy shadow-[0_18px_55px_rgba(3,4,94,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_24px_70px_rgba(3,4,94,0.42),inset_0_1px_0_rgba(255,255,255,0.3)]">
        <div className="relative p-6">
          <span aria-hidden="true" className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {!reduce && <span aria-hidden="true" className="thesis-sheen" />}
          <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">Thesis</span>
          <h3 className="mb-2 mt-3 text-sm font-semibold leading-snug text-white">{thesis.title}</h3>
          <p className="mb-4 text-xs leading-relaxed text-slate-300">{thesis.description}</p>
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-white/25 bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48cae4] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#48cae4]" />
            </span>
            {thesis.status}
          </span>
        </div>
        <span aria-hidden="true" className="spotlight-sheen spotlight-dark" />
      </Spotlight>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function RecommendationsSection() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [dir, setDir] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const total = recommendations.length
  const r = recommendations[index]
  const clampAt = 280
  const isLong = r.quote.length > clampAt
  const shown = expanded || !isLong ? r.quote : `${r.quote.slice(0, clampAt).trimEnd()}…`
  const select = (i, d = 0) => {
    setDir(d)
    setIndex((i + total) % total)
    setExpanded(false)
  }
  return (
    <section id="recommendations" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Recommendations</h2>
        {total > 1 && <ViewAll expanded={false} onToggle={() => select(0, -1)} />}
      </div>
      <div className="py-1">
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.figure
              key={index}
              custom={dir}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir >= 0 ? 24 : -24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir >= 0 ? -24 : 24 }}
              transition={{ duration: DUR.short, ease: EASE }}
              drag={reduce || total < 2 ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) select(index + 1, 1)
                else if (info.offset.x > 50) select(index - 1, -1)
              }}
            >
              <blockquote className="mb-2 mt-1 text-xs italic leading-relaxed text-slate-400">“{shown}”</blockquote>
              {isLong && (
                <button onClick={() => setExpanded((v) => !v)} className="focus-ring mb-4 text-[11px] font-semibold text-aquaDark transition hover:text-navy">
                  {expanded ? 'See less' : 'See more…'}
                </button>
              )}
              <hr className="border-slate-200/70" />
              <figcaption className="mt-3 flex items-center gap-3">
                {r.image ? (
                  <a href={r.linkedin} target="_blank" rel="noreferrer" className="focus-ring shrink-0 rounded-sm" aria-label={`${r.name} on LinkedIn`}>
                    <img src={r.image} alt={`${r.name} photo`} className="size-8 rounded-sm object-cover transition duration-300 hover:opacity-85" loading="lazy" />
                  </a>
                ) : (
                  <span className="grid size-8 place-items-center rounded-sm bg-slate-400 text-[10px] font-bold text-white">{r.initials}</span>
                )}
                <span>
                  {r.linkedin ? (
                    <a href={r.linkedin} target="_blank" rel="noreferrer" className="focus-ring block rounded-sm text-sm font-semibold text-slate-500 transition hover:text-navy hover:underline">{r.name}</a>
                  ) : (
                    <span className="block text-sm font-semibold text-slate-500">{r.name}</span>
                  )}
                  <span className="block text-xs text-slate-400">{r.title}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        {total > 1 && (
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => select(i, i > index ? 1 : -1)}
                aria-label={`Go to recommendation ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ease-out ${i === index ? 'w-[18px] bg-navy' : 'w-2 bg-slate-300 hover:bg-[#48cae4]'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => select(index - 1, -1)} aria-label="Previous recommendation" className="focus-ring grid size-7 place-items-center rounded-sm border border-slate-200 bg-white/60 text-navy transition-all duration-300 ease-out hover:bg-navy hover:text-white active:scale-95">
              <ArrowLeft size={14} />
            </button>
            <button onClick={() => select(index + 1, 1)} aria-label="Next recommendation" className="focus-ring grid size-7 place-items-center rounded-sm border border-slate-200 bg-white/60 text-navy transition-all duration-300 ease-out hover:bg-navy hover:text-white active:scale-95">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
        )}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function SocialLinksSection() {
  const icons = { LinkedIn: LinkedinIcon, GitHub: GithubIcon, Email: Mail }
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Social Links</h2>
      <ul className="space-y-2">
        {socials.map((s) => {
          const Icon = icons[s.label] || Mail
          return (
            <li key={s.label}>
              <a href={s.href} className="focus-ring group flex items-center gap-2 text-xs text-[#334155] transition-all duration-300 ease-out hover:translate-x-1 hover:text-navy">
                <Icon size={16} aria-hidden="true" className="text-slate-500 transition-colors duration-300 group-hover:text-navy" />
                {s.label}
              </a>
              <hr className="my-2 border-slate-200/70" />
            </li>
          )
        })}
      </ul>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function GallerySection() {
  const trackRef = useRef(null)
  const [zoomed, setZoomed] = useState(null)
  const [dir, setDir] = useState(0)
  const [progress, setProgress] = useState(0)
  const scrollBy = (d) => trackRef.current?.scrollBy({ left: d * 320, behavior: 'smooth' })

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth
      setProgress(max > 0 ? el.scrollLeft / max : 0)
    }
    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const step = (d) => {
    setDir(d)
    setZoomed((i) => (i === null ? i : (i + d + gallery.length) % gallery.length))
  }
  const current = zoomed === null ? null : gallery[zoomed]
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Gallery</h2>
      <div className="group relative">
        <div ref={trackRef} className="scrollbar-hide gallery-mask flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
          {gallery.map((g, i) => (
            <button
              key={g.title}
              onClick={() => { setDir(0); setZoomed(i) }}
              className="focus-ring group/card relative h-[150px] w-[240px] shrink-0 snap-start overflow-hidden rounded-sm border border-white/60 bg-white/50 transition-all duration-500 ease-out hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(0,150,199,0.25)]"
              aria-label={`Enlarge ${g.title}`}
            >
              <img src={g.image} alt={g.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.05]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-2.5 pb-1.5 pt-6 text-left">
                <span className="block text-[11px] font-semibold text-white">{g.title}</span>
                {g.hint && <span className="block text-[10px] text-slate-200">{g.hint}</span>}
              </span>
            </button>
          ))}
        </div>
        <Magnetic strength={10} className="absolute left-2 top-1/2 -translate-y-1/2">
          <button onClick={() => scrollBy(-1)} aria-label="Scroll gallery left" className="border border-white/80 bg-white/80 p-1 text-navy opacity-0 shadow-md backdrop-blur-xl transition-all duration-300 hover:bg-navy hover:text-white group-hover:opacity-70 hover:!opacity-100 max-sm:opacity-70">
            <ChevronLeft size={16} />
          </button>
        </Magnetic>
        <Magnetic strength={10} className="absolute right-2 top-1/2 -translate-y-1/2">
          <button onClick={() => scrollBy(1)} aria-label="Scroll gallery right" className="border border-white/80 bg-white/80 p-1 text-navy opacity-0 shadow-md backdrop-blur-xl transition-all duration-300 hover:bg-navy hover:text-white group-hover:opacity-70 hover:!opacity-100 max-sm:opacity-70">
            <ChevronRight size={16} />
          </button>
        </Magnetic>
      </div>
      <div className="mt-3 h-[3px] overflow-hidden rounded-full bg-slate-200/70" aria-hidden="true">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#48cae4] to-navy transition-[width] duration-150"
          style={{ width: `${Math.max(progress * 100, gallery.length > 1 ? 12 : 100)}%`, marginLeft: `${progress * (100 - Math.max(progress * 100, 12))}%` }}
        />
      </div>
      <AnimatePresence>
        {current && (
          <Lightbox
            src={current.image}
            alt={current.title}
            title={current.title}
            subtitle={current.hint}
            position={gallery.length > 1 ? `${zoomed + 1} / ${gallery.length}` : undefined}
            direction={dir}
            onClose={() => setZoomed(null)}
            onPrev={gallery.length > 1 ? () => step(-1) : undefined}
            onNext={gallery.length > 1 ? () => step(1) : undefined}
          />
        )}
      </AnimatePresence>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

