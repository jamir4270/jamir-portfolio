import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import Navigation from './Navigation'
import { socials, profile } from '../data/portfolio'
import { useActiveSection } from './Navigation'

const socialIcons = { GitHub: GithubIcon, LinkedIn: LinkedinIcon, Email: Mail }

export default function Sidebar({ activeId: activeProp }) {
  const activeHook = useActiveSection()
  const activeId = activeProp ?? activeHook

  return (
    <aside className="glass hidden h-[calc(100vh-2rem)] w-[28vw] min-w-[300px] max-w-[400px] shrink-0 flex-col overflow-y-auto rounded-[1.75rem] px-7 pb-8 pt-8 lg:flex">
      <div className="w-full">
        <div className="glass aspect-[16/10] w-full overflow-hidden rounded-sm">
          <img src={profile.photo} alt="Jamir Andrade portrait" className="h-full w-full object-cover" />
        </div>
        <div className="mt-6">
          <div className="text-[1.5rem] font-semibold leading-tight tracking-[-0.03em] text-navy">Jamir Oasis<br />M. Andrade</div>
          <div className="mt-2 text-sm font-semibold text-[#17304f]">Full-Stack Developer · Technical Lead</div>
          <p className="mt-3 text-[0.86rem] leading-6 text-slate-600">DOST Scholar and CS student building scalable web and mobile software — backend engineering, team workflows, AI-assisted delivery.</p>
        </div>
      </div>

      <div className="my-6 h-px shrink-0 bg-white/80" />

      <div className="mb-8 py-1">
        <div className="mb-3 px-4 text-xs font-bold uppercase tracking-[0.18em] text-aquaDark">Explore</div>
        <Navigation activeId={activeId} />
      </div>

      <div className="mt-auto shrink-0 border-t border-white/70 pt-6">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-aquaDark">Connect</div>
        <div className="mt-3 flex gap-2">
          {socials.map((s) => {
            const Icon = socialIcons[s.label] || Mail
            return (
              <a
                key={s.label}
                className="focus-ring rounded-xl border border-transparent p-2.5 text-[#17304f] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/80 hover:bg-white/70 hover:text-navy hover:shadow-md"
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={s.label}
              >
                <Icon size={18} />
              </a>
            )
          })}
        </div>
      </div>
    </aside>
  )
}
