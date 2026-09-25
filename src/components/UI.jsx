import { motion } from 'framer-motion'
import { ImagePlus } from 'lucide-react'

export function Section({ id, eyebrow, title, lede, action, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`scroll-mt-24 py-10 sm:py-14 ${className}`}
    >
      <div className="mb-7 flex flex-wrap items-end justify-between gap-3 sm:mb-8">
        <div className="min-w-0">
          {eyebrow && (
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-aquaDark">{eyebrow}</div>
          )}
          <h2 className="max-w-2xl text-[clamp(1.65rem,3vw,2.5rem)] font-semibold leading-tight tracking-[-0.03em] text-ink">{title}</h2>
          {lede && <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 text-slate-600">{lede}</p>}
        </div>
        {action && <div className="shrink-0 pb-1">{action}</div>}
      </div>
      {children}
    </motion.section>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass rounded-3xl ${className}`}>{children}</div>
}

export function GlassButton({ href, icon: Icon, children, primary = false, type, onClick }) {
  const base =
    'focus-ring group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl border px-5 py-3 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 active:translate-y-0'
  const skin = primary
    ? 'btn-primary-glass border-white/90 text-[#03045e]'
    : 'border-white/70 bg-white/45 text-[#17304f] backdrop-blur-xl hover:border-white/90 hover:bg-white/65 shadow-[0_8px_24px_rgba(72,202,228,0.14)] hover:shadow-[0_14px_34px_rgba(0,150,199,0.22)]'
  const cls = `${base} ${skin}`
  const inner = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      {Icon && <Icon size={17} aria-hidden="true" className="relative z-10 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
    </>
  )
  if (href) return <a href={href} className={cls}>{inner}</a>
  return <button type={type || 'button'} onClick={onClick} className={cls}>{inner}</button>
}

export function ImagePlaceholder({ title, hint, aspect = 'aspect-video', icon: Icon = ImagePlus }) {
  return (
    <div className={`${aspect} flex w-full items-center justify-center rounded-[1.4rem] border border-dashed border-[#48cae4]/60 bg-gradient-to-b from-white/70 to-[#e0f2fe]/40 p-5 shadow-inner`}>
      <div className="flex items-center gap-4 text-left">
        <div className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/90 bg-white/80 text-[#0077b6] shadow-sm">
          <Icon size={20} aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-semibold text-cardInk">{title}</div>
          {hint && <div className="mt-1 max-w-[26ch] text-xs leading-5 text-slate-500">{hint}</div>}
        </div>
      </div>
    </div>
  )
}
