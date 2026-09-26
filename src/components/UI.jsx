import { useCallback, useEffect } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImagePlus, X } from 'lucide-react'

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

export function GlassButton({ href, target, rel, icon: Icon, children, primary = false, type, onClick }) {
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
  if (href) return <a href={href} target={target} rel={rel} className={cls}>{inner}</a>
  return <button type={type || 'button'} onClick={onClick} className={cls}>{inner}</button>
}

export function Reveal({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Lightbox({ src, alt, title, subtitle, children, onClose, onPrev, onNext, position }) {
  const close = useCallback(() => onClose?.(), [onClose])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [close, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy/70 p-4 backdrop-blur-md"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label={title || alt || 'Enlarged image'}
    >
      {(onPrev || onNext) && (
        <div className="pointer-events-none absolute inset-x-4 top-1/2 z-10 flex -translate-y-1/2 justify-between sm:inset-x-8">
          {onPrev ? (
            <button onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous image" className="focus-ring pointer-events-auto grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/25">
              <ChevronLeft size={20} />
            </button>
          ) : <span />}
          {onNext ? (
            <button onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next image" className="focus-ring pointer-events-auto grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/25">
              <ChevronRight size={20} />
            </button>
          ) : <span />}
        </div>
      )}
      <button onClick={close} aria-label="Close enlarged image" className="focus-ring absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-xl transition hover:bg-white/25">
        <X size={20} />
      </button>
      <motion.figure
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="glass-strong max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-md p-4 sm:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={src} alt={alt || title || 'Enlarged image'} className="max-h-[62vh] w-full rounded-sm object-contain" />
        {(title || subtitle) && (
          <figcaption className="mt-3 text-center">
            {title && <div className="text-sm font-semibold text-navy">{title}</div>}
            {subtitle && <div className="mt-0.5 text-xs text-slate-500">{subtitle}</div>}
            {position && <div className="mt-1 text-[11px] font-medium text-slate-400">{position}</div>}
          </figcaption>
        )}
        {children && <div className="mt-3">{children}</div>}
      </motion.figure>
    </motion.div>
  )
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
