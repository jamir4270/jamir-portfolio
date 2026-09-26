import { ArrowRight, BadgeCheck, ChevronDown, Download, Mail, MapPin, Trophy } from 'lucide-react'
import { GlassButton } from './UI'
import { profile, aboutLong } from '../data/portfolio'

export function HeroBlock() {
  return (
    <section id="about" className="mb-10 scroll-mt-8 pt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <div className="glass aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-sm shadow-sm sm:w-32 md:w-36">
          <img src={profile.photo} alt={`${profile.name} portrait`} className="h-full w-full object-cover" />
        </div>
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
              <GlassButton href={profile.cvUrl} icon={Download} primary>Download CV <ArrowRight size={13} aria-hidden="true" className="relative z-10" /></GlassButton>
              <GlassButton href={`mailto:${profile.email}`} icon={Mail}>Send Email</GlassButton>
            </div>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-sm border border-white/60 bg-gradient-to-b from-[#0096c7] to-[#00689d] px-2 py-1.5 text-[10px] font-semibold text-white shadow-[0_8px_24px_rgba(0,150,199,0.3)] backdrop-blur-xl">
              <Trophy size={12} aria-hidden="true" />
              <span className="truncate">{profile.badge}</span>
              <ChevronDown size={12} aria-hidden="true" className="opacity-80" />
            </span>
          </div>
        </div>
      </div>
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
