import { motion } from 'framer-motion'
import { ChevronRight, ImagePlus } from 'lucide-react'

export function Section({ id, eyebrow, title, action, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`scroll-mt-8 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.12em] text-navy">{eyebrow || title}</h2>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {children}
      <hr className="mt-6 border-slate-200/80" />
    </motion.section>
  )
}

export function ViewAll({ expanded, onToggle, count }) {
  return (
    <button
      onClick={onToggle}
      className="focus-ring inline-flex items-center gap-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-aquaDark transition hover:text-navy"
    >
      {expanded ? 'Show less' : `View All${count ? ` (${count})` : ''}`}
      {!expanded && <ChevronRight size={12} aria-hidden="true" />}
    </button>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass rounded-md ${className}`}>{children}</div>
}

export function GlassRow({ children, className = '' }) {
  return <div className={`glass rounded-sm px-4 py-2.5 transition-all duration-300 hover:-translate-y-px hover:shadow-[0_10px_28px_rgba(72,202,228,0.18)] ${className}`}>{children}</div>
}

export function GlassPill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded border border-white/80 bg-white/60 px-2 py-1 text-[11px] font-medium text-[#254c63] shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-px hover:bg-white/90 hover:shadow-[0_8px_20px_rgba(72,202,228,0.22)] ${className}`}>
      {children}
    </span>
  )
}

export function GlassButton({ href, icon: Icon, children, primary = false, type, onClick }) {
  const base =
    'focus-ring group relative inline-flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-sm border px-2.5 py-2 text-xs font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0'
  const skin = primary
    ? 'btn-primary-glass border-white/90 text-[#03045e]'
    : 'border-white/70 bg-white/45 text-[#17304f] backdrop-blur-xl hover:border-white/90 hover:bg-white/65 shadow-[0_8px_24px_rgba(72,202,228,0.14)] hover:shadow-[0_14px_34px_rgba(0,150,199,0.22)]'
  const cls = `${base} ${skin}`
  const inner = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      {Icon && <Icon size={13} aria-hidden="true" className="relative z-10 shrink-0 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />}
      <span className="relative z-10 inline-flex items-center gap-1 whitespace-nowrap [&>svg]:shrink-0">{children}</span>
    </>
  )
  if (href) return <a href={href} className={cls}>{inner}</a>
  return <button type={type || 'button'} onClick={onClick} className={cls}>{inner}</button>
}

export function ImagePlaceholder({ title, hint, aspect = 'aspect-video', icon: Icon = ImagePlus, className = '' }) {
  return (
    <div className={`${aspect} glass flex w-full items-center justify-center rounded-sm border border-dashed !border-[#48cae4]/60 p-4 shadow-inner ${className}`}>
      <div className="flex items-center gap-3 text-left">
        <div className="grid size-9 shrink-0 place-items-center rounded border border-white/90 bg-white/80 text-[#0077b6] shadow-sm">
          <Icon size={16} aria-hidden="true" />
        </div>
        <div>
          <div className="text-xs font-semibold text-cardInk">{title}</div>
          {hint && <div className="mt-0.5 max-w-[26ch] text-[11px] leading-5 text-slate-500">{hint}</div>}
        </div>
      </div>
    </div>
  )
}
