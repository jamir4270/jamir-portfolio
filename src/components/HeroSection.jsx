import { ArrowRight, ArrowDownRight, Mail, ImagePlus } from 'lucide-react'
import { GlassButton, ImagePlaceholder } from './UI'

export default function HeroSection() {
  return (
    <section id="about" className="scroll-mt-24 pb-10 pt-12 sm:pt-16 lg:min-h-[82vh] lg:pt-20">
      <div className="grid items-center gap-10 xl:grid-cols-[1.05fr_.95fr] xl:gap-14">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3.5 py-1.5 text-xs font-semibold text-[#23506a] shadow-sm backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#48cae4] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0096c7]" />
            </span>
            Available for internships · Class of 2027
          </div>
          <h1 className="hero-title mt-5 max-w-2xl text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-navy">Engineering useful software with clarity.</h1>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-slate-600">I&rsquo;m Jamir — full-stack developer, DOST Scholar, and CS student. I build web and mobile systems, lead teams through reliable workflows, and use AI to ship faster without cutting quality.</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <GlassButton href="#experience" icon={ArrowRight} primary>View Experience</GlassButton>
            <GlassButton href="#contact" icon={Mail}>Get in Touch</GlassButton>
            <a href="#projects" className="focus-ring group ml-1 inline-flex items-center gap-1.5 px-2 py-3 text-sm font-semibold text-aquaDark transition hover:text-navy">
              Explore Projects
              <ArrowDownRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-200/70 pt-6">
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
        </div>
        <div className="mx-auto w-full max-w-[440px] xl:max-w-none">
          <ImagePlaceholder title="Workspace or portrait" hint="Replace with a real photo — you at work" aspect="aspect-[4/5]" icon={ImagePlus} />
        </div>
      </div>
    </section>
  )
}
