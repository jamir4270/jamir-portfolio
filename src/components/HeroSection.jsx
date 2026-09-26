import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ArrowRight, BadgeCheck, Download, Expand, Mail, MapPin } from 'lucide-react'
import { GlassButton, Lightbox } from './UI'
import { profile, aboutLong } from '../data/portfolio'

export function HeroBlock() {
  const [zoomed, setZoomed] = useState(false)
  return (
    <section id="about" className="mb-10 scroll-mt-8 pt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <button
          onClick={() => setZoomed(true)}
          className="focus-ring glass group relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-sm shadow-sm transition hover:shadow-md sm:w-32 md:w-36"
          aria-label={`Enlarge photo of ${profile.name}`}
        >
          <img src={profile.photo} alt={`${profile.name} portrait`} className="h-full w-full object-cover" />
          <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-1 bg-gradient-to-t from-navy/70 to-transparent pb-1.5 pt-5 text-[10px] font-semibold text-white opacity-0 transition group-hover:opacity-100">
            <Expand size={11} aria-hidden="true" />
            Enlarge
          </span>
        </button>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-start justify-between gap-3">
            <h1 className="hero-title flex items-center gap-1.5 text-xl font-bold leading-tight tracking-tight text-navy sm:text-2xl">
              {profile.name}
              <BadgeCheck size={18} className="shrink-0 text-[#0096c7]" aria-label="Verified" />
            </h1>
          </div>
          <p className="mb-3 flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
            <MapPin size={12} className="text-slate-400" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="mb-3 text-xs text-slate-600 sm:text-sm">{profile.roles.split(' / ').join('  /  ')}</p>
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div className="flex flex-wrap gap-2">
              <GlassButton href={profile.cvUrl} target="_blank" rel="noreferrer" icon={Download} primary>Download CV <ArrowRight size={13} aria-hidden="true" className="relative z-10" /></GlassButton>
              <GlassButton href={`mailto:${profile.email}`} icon={Mail}>Send Email</GlassButton>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {zoomed && (
          <Lightbox
            src={profile.photo}
            alt={`${profile.name} portrait`}
            title={profile.name}
            subtitle={profile.location}
            onClose={() => setZoomed(false)}
          />
        )}
      </AnimatePresence>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export function AboutProse() {
  return (
    <section aria-label="About">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">About</h2>
      <div className="space-y-3 text-sm leading-relaxed text-slate-600">
        {aboutLong.map((para, pi) => (
          <p key={pi}>
            {para.map(([text, style], si) => {
              if (style === 'b') return <strong key={si} className="font-semibold text-slate-800">{text}</strong>
              if (style === 'i') return <em key={si}>{text}</em>
              return <span key={si}>{text}</span>
            })}
          </p>
        ))}
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}

export default function HeroSection() {
  return (
    <>
      <HeroBlock />
      <AboutProse />
    </>
  )
}
