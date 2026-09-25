import { experience } from '../data/portfolio'

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Experience</h2>
      <ol className="space-y-5">
        {experience.map((item, i) => (
          <li key={`${item.role}-${item.year}`} className="group relative pl-4">
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 size-2.5 rounded-[2px] shadow-sm transition group-hover:scale-125 ${
                i === 0 ? 'bg-navy' : 'border border-[#0096c7]/50 bg-white/70'
              }`}
            />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-cardInk transition group-hover:text-navy">{item.role}</h3>
                <p className="mt-0.5 text-xs text-slate-500">{item.org}</p>
              </div>
              <span className="glass shrink-0 rounded border border-white/80 px-2 py-1 text-[10px] font-semibold text-[#23506a]">{item.year}</span>
            </div>
          </li>
        ))}
      </ol>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
