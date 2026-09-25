import { ArrowRight, Download, Mail } from 'lucide-react'
import { GlassButton, ImagePlaceholder } from './UI'
import { profile } from '../data/portfolio'
import { UserRound } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pb-4 pt-12 text-center sm:pt-16">
      <div className="mx-auto w-fit">
        <div className="mx-auto grid size-28 place-items-center overflow-hidden rounded-full border border-white/90 bg-gradient-to-b from-white/80 to-[#e0f2fe]/60 shadow-[0_16px_40px_rgba(72,202,228,0.22)] sm:size-32">
          <UserRound size={40} className="text-[#0077b6]" aria-hidden="true" />
        </div>
      </div>
      <h1 className="hero-title mx-auto mt-6 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-navy">{profile.name}</h1>
      <p className="mt-3 text-sm font-medium text-slate-500">{profile.location}</p>
      <p className="mt-1.5 text-[0.95rem] font-semibold text-[#17304f]">{profile.roles}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <GlassButton href={profile.cvUrl} icon={Download} primary>Download CV</GlassButton>
        <GlassButton href={`mailto:${profile.email}`} icon={Mail}>Send Email</GlassButton>
      </div>
      <div className="mt-5 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-[#23506a] shadow-sm backdrop-blur-xl">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48cae4] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0096c7]" />
          </span>
          {profile.badge}
        </span>
      </div>
      <dl className="mx-auto mt-8 flex max-w-md flex-wrap justify-center gap-x-10 gap-y-4 border-t border-slate-200/70 pt-6">
        {[
          ['6+', 'shipped projects'],
          ['40+', 'app downloads'],
          ['3', 'teams led'],
        ].map(([stat, label]) => (
          <div key={label}>
            <dt className="sr-only">{label}</dt>
            <dd className="text-2xl font-semibold tracking-tight text-navy">{stat}</dd>
            <dd className="mt-0.5 text-[0.8rem] text-slate-500">{label}</dd>
          </div>
        ))}
      </dl>
      <div className="mx-auto mt-8 w-full max-w-[560px]">
        <ImagePlaceholder title="Workspace or portrait" hint="Replace with a real photo — you at work" aspect="aspect-[16/9]" icon={UserRound} />
      </div>
    </section>
  )
}

export function AboutProse() {
  return (
    <section aria-label="About" className="scroll-mt-24 py-10 sm:py-14">
      <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-aquaDark">About</div>
      <div className="space-y-5 text-[0.95rem] leading-8 text-slate-600">
        <p>I am a Computer Science student at Visayas State University and a DOST Undergraduate Scholar. My work centers on a simple idea: build systems that create lasting impact, and build teams that can sustain them.</p>
        <p>As a full-stack developer and technical lead, I build web and mobile applications across election platforms, POS and inventory systems, campus tools, and mobile utilities. My recent professional experience includes backend development with ASP.NET Core MVC and technical leadership in the Alliance Summer Bridge Training Program — covering CI pipelines, QA testing, and enterprise SDLC practices.</p>
        <p>Beyond shipping, I lead as President of the Computer Science Students’ Society, mentor juniors in programming fundamentals, and use AI-assisted workflows to deliver faster without cutting quality.</p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a href="#experience" className="focus-ring group inline-flex items-center gap-1.5 text-sm font-semibold text-aquaDark transition hover:text-navy">
          View Experience
          <ArrowRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  )
}

export default function HeroSection() {
  return (
    <>
      <AboutSection />
      <AboutProse />
    </>
  )
}
