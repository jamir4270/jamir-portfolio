import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight, ImagePlus } from 'lucide-react'
import { DUR, EASE, SNAP, SPRING } from './motion'

export function Section({ id, eyebrow, title, action, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -8% 0px' }}
      transition={{ duration: DUR.base, ease: EASE }}
      className={`scroll-mt-24 ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-navy">{eyebrow || title}</h2>
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
      aria-expanded={!!expanded}
      className="focus-ring group inline-flex items-center gap-0.5 text-xs font-bold uppercase tracking-[0.08em] text-aquaDark transition hover:text-navy"
    >
      <span className="relative">
        {expanded ? 'Show less' : `View All${count ? ` (${count})` : ''}`}
        <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover:scale-x-100" aria-hidden="true" />
      </span>
      <ChevronRight
        size={12}
        aria-hidden="true"
        className={`transition-transform duration-300 ${expanded ? 'rotate-90' : 'group-hover:translate-x-0.5'}`}
      />
    </button>
  )
}

export function GlassCard({ children, className = '' }) {
  return <div className={`glass rounded-md ${className}`}>{children}</div>
}

export function GlassRow({ children, className = '' }) {
  return <div className={`glass rounded-sm px-4 py-2.5 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-[0_14px_34px_rgba(72,202,228,0.22)] active:translate-y-0 active:scale-[0.98] active:duration-100 ${className}`}>{children}</div>
}

export function GlassPill({ children, className = '' }) {
  return (
    <span className={`inline-flex items-center rounded border border-white/80 bg-white/60 px-2 py-1 text-[13px] font-medium text-[#254c63] shadow-sm backdrop-blur-xl transition-colors duration-300 hover:border-[#48cae4]/50 hover:bg-white/90 hover:shadow-[0_8px_20px_rgba(72,202,228,0.22)] ${className}`}>
      {children}
    </span>
  )
}

export function GlassButton({ href, target, rel, icon: Icon, children, primary = false, type, onClick, disabled }) {
  const base =
    'focus-ring group relative inline-flex items-center justify-center gap-1.5 overflow-hidden whitespace-nowrap rounded-sm border px-2.5 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-[2px] active:translate-y-0 active:scale-[0.96] active:duration-100 disabled:pointer-events-none disabled:opacity-70'
  const skin = primary
    ? 'btn-primary-glass border-white/90 text-[#03045e]'
    : 'border-white/70 bg-white/45 text-[#17304f] backdrop-blur-xl hover:border-white/90 hover:bg-white/65 shadow-[0_8px_24px_rgba(72,202,228,0.14)] hover:shadow-[0_14px_34px_rgba(0,150,199,0.22)]'
  const cls = `${base} ${skin}`
  const inner = (
    <>
      <span className="btn-shine" aria-hidden="true" />
      {Icon && <Icon size={13} aria-hidden="true" className={`relative z-10 shrink-0 transition-transform duration-300 ${Icon.displayName?.includes('Loader') || Icon.name?.includes('Loader') ? 'animate-spin' : 'group-hover:-rotate-6 group-hover:scale-110'}`} />}
      <span className="relative z-10 inline-flex items-center gap-1 whitespace-nowrap [&>svg]:shrink-0">{children}</span>
    </>
  )
  if (href) return <a href={href} target={target} rel={rel} className={cls}>{inner}</a>
  return <button type={type || 'button'} onClick={onClick} disabled={disabled} className={cls}>{inner}</button>
}

export function Reveal({ children, className = '', delay = 0, y = 14 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -6% 0px' }}
      transition={{ ...SPRING, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className = '', delay = 0, gap = 0.1 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -6% 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 14 }) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: SPRING },
      }}
    >
      {children}
    </motion.div>
  )
}

export function Magnetic({ children, strength = 18, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const x = useSpring(0, { stiffness: 250, damping: 20 })
  const y = useSpring(0, { stiffness: 250, damping: 20 })
  const [coarse] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches)

  if (reduce || coarse) return <div className={`inline-block ${className}`}>{children}</div>

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x, y }}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        x.set(((e.clientX - r.left) / r.width - 0.5) * strength)
        y.set(((e.clientY - r.top) / r.height - 0.5) * strength)
      }}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.div>
  )
}

export function Spotlight({ children, className = '' }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: -400, y: -400 })

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current
        if (!el) return
        const r = el.getBoundingClientRect()
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top })
      }}
      onMouseLeave={() => setPos({ x: -400, y: -400 })}
      className={`relative ${className}`}
      style={{ '--mx': `${pos.x}px`, '--my': `${pos.y}px` }}
    >
      {children}
      <span
        aria-hidden="true"
        className="spotlight-sheen pointer-events-none absolute inset-0 rounded-[inherit]"
      />
    </div>
  )
}

export function Expand({ open, children, className = '' }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="expand"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1, transition: { height: SPRING, opacity: { duration: 0.25, delay: 0.05 } } }}
          exit={{ height: 0, opacity: 0, transition: { height: SNAP, opacity: { duration: 0.15 } } }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Full-screen photo viewer: grows out of the tapped thumbnail (shared layoutId), swipe sideways
// to step, swipe down to close (the black backdrop thins as you drag).
export function Lightbox({ src, alt, title, subtitle, children, onClose, onPrev, onNext, position, direction = 0, layoutId }) {
  const close = useCallback(() => onClose?.(), [onClose])
  const doneRef = useRef(null)
  const dragY = useMotionValue(0)
  const backdrop = useTransform(dragY, [-300, 0, 300], [0.35, 1, 0.35])

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    const prevFocus = document.activeElement
    document.body.style.overflow = 'hidden'
    window.__lenis?.stop()
    doneRef.current?.focus({ preventScroll: true })
    return () => {
      document.body.style.overflow = prevOverflow
      window.__lenis?.start()
      prevFocus?.focus?.({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') onPrev?.()
      if (e.key === 'ArrowRight') onNext?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [close, onPrev, onNext])

  const shared = direction === 0 ? layoutId : undefined
  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.15 } } }
  const navBtn = 'focus-ring absolute top-1/2 hidden size-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 active:scale-90 active:duration-100 sm:grid'

  // Portal to <body>: a transformed ancestor (the reveal wrappers) would otherwise trap position: fixed.
  return createPortal(
    <motion.div className="fixed inset-0 z-[70] flex flex-col text-white" role="dialog" aria-modal="true" aria-label={title || alt || 'Photo'}>
      <motion.div {...fade} transition={{ duration: 0.25 }} style={{ opacity: backdrop }} className="absolute inset-0 -z-10 bg-black" />

      <motion.div {...fade} className="flex min-h-14 shrink-0 items-center justify-between px-4 pt-[env(safe-area-inset-top)]">
        <span className="text-[15px] tabular-nums text-white/60">{position}</span>
        <button ref={doneRef} onClick={close} className="focus-ring min-h-11 rounded-full px-3 text-[17px] font-semibold transition hover:bg-white/10 active:scale-95">
          Done
        </button>
      </motion.div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20" onClick={close}>
        <motion.img
          key={src}
          layoutId={shared}
          src={src}
          alt={alt || title || ''}
          draggable={false}
          initial={shared ? false : { opacity: 0, x: direction * 48 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shared ? undefined : { opacity: 0 }}
          transition={SPRING}
          drag
          dragSnapToOrigin
          dragElastic={0.6}
          style={{ y: dragY }}
          onDragEnd={(_, { offset, velocity }) => {
            const flickY = Math.abs(offset.y) > 110 || Math.abs(velocity.y) > 600
            if (flickY && Math.abs(offset.y) > Math.abs(offset.x)) close()
            else if (offset.x < -70 || velocity.x < -600) onNext?.()
            else if (offset.x > 70 || velocity.x > 600) onPrev?.()
          }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-full max-w-full touch-none select-none rounded-lg object-contain"
        />
        {onPrev && (
          <motion.button {...fade} onClick={(e) => { e.stopPropagation(); onPrev() }} aria-label="Previous photo" className={`${navBtn} left-4`}>
            <ChevronLeft size={22} />
          </motion.button>
        )}
        {onNext && (
          <motion.button {...fade} onClick={(e) => { e.stopPropagation(); onNext() }} aria-label="Next photo" className={`${navBtn} right-4`}>
            <ChevronRight size={22} />
          </motion.button>
        )}
      </div>

      {(title || subtitle || children) && (
        <motion.div {...fade} transition={{ duration: 0.25, delay: 0.08 }} className="scrollbar-hide mx-auto max-h-[62vh] w-full max-w-xl shrink-0 overflow-y-auto px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 text-center">
          {title && <div className="text-[17px] font-semibold">{title}</div>}
          {subtitle && <div className="mt-0.5 text-[15px] text-white/60">{subtitle}</div>}
          {children && <div className="mt-3">{children}</div>}
        </motion.div>
      )}
    </motion.div>,
    document.body,
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
          <div className="text-sm font-semibold text-cardInk">{title}</div>
          {hint && <div className="mt-0.5 max-w-[26ch] text-[13px] leading-5 text-slate-500">{hint}</div>}
        </div>
      </div>
    </div>
  )
}
