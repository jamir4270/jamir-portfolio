import { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ImagePlus, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import { thesis, recommendations, socials, gallery } from '../data/portfolio'
import { ImagePlaceholder, ViewAll } from './UI'

export function ThesisSection() {
  return (
    <section id="thesis" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Thesis</h2>
      <div className="rounded-sm border border-navy/40 bg-gradient-to-b from-[#0a1a6b] to-navy p-6 shadow-[0_18px_55px_rgba(3,4,94,0.3),inset_0_1px_0_rgba(255,255,255,0.25)] backdrop-blur-xl">
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
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function RecommendationsSection() {
  const [index, setIndex] = useState(0)
  const total = recommendations.length
  const r = recommendations[index]
  return (
    <section id="recommendations" className="mb-10 scroll-mt-8">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Recommendations</h2>
        {total > 1 && <ViewAll expanded={false} onToggle={() => setIndex(0)} />}
      </div>
      <div className="py-1">
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3 }}
            >
              <blockquote className="mb-4 mt-1 line-clamp-8 text-xs italic leading-relaxed text-slate-400">“{r.quote}”</blockquote>
              <hr className="border-slate-200/70" />
              <figcaption className="mt-3 flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-sm bg-slate-400 text-[10px] font-bold text-white">{r.initials}</span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500">{r.name}</span>
                  <span className="block text-xs text-slate-400">{r.title}</span>
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            {recommendations.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to recommendation ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-[18px] bg-navy' : 'w-2 bg-slate-300 hover:bg-[#48cae4]'}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={() => setIndex((index - 1 + total) % total)} aria-label="Previous recommendation" className="focus-ring grid size-7 place-items-center rounded-sm border border-slate-200 bg-white/60 text-navy transition hover:bg-navy hover:text-white">
              <ArrowLeft size={14} />
            </button>
            <button onClick={() => setIndex((index + 1) % total)} aria-label="Next recommendation" className="focus-ring grid size-7 place-items-center rounded-sm border border-slate-200 bg-white/60 text-navy transition hover:bg-navy hover:text-white">
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
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
              <a href={s.href} className="focus-ring group flex items-center gap-2 text-xs text-[#334155] transition-transform duration-300 hover:translate-x-1 hover:text-navy">
                <Icon size={16} aria-hidden="true" className="text-slate-500 transition group-hover:text-navy" />
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
  const scrollBy = (dir) => trackRef.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Gallery</h2>
      <div className="group relative">
        <div ref={trackRef} className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1">
          {gallery.map((g) => (
            <div key={g.title} className="h-[150px] w-[240px] shrink-0 snap-start overflow-hidden rounded-sm">
              <ImagePlaceholder title={g.title} hint={g.hint} aspect="h-full" icon={ImagePlus} className="h-full grayscale-[0.2] transition hover:grayscale-0" />
            </div>
          ))}
        </div>
        <button onClick={() => scrollBy(-1)} aria-label="Scroll gallery left" className="absolute left-2 top-1/2 -translate-y-1/2 border border-white/80 bg-white/80 p-1 text-navy opacity-70 shadow-md backdrop-blur-xl transition hover:opacity-100">
          <ChevronLeft size={16} />
        </button>
        <button onClick={() => scrollBy(1)} aria-label="Scroll gallery right" className="absolute right-2 top-1/2 -translate-y-1/2 border border-white/80 bg-white/80 p-1 text-navy opacity-70 shadow-md backdrop-blur-xl transition hover:opacity-100">
          <ChevronRight size={16} />
        </button>
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
