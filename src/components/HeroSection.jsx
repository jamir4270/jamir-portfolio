import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowRight, BadgeCheck, Download, Expand, Mail, MapPin } from 'lucide-react'
import { GlassButton, Lightbox, Magnetic } from './UI'
import { EASE } from './motion'
import { profile, aboutLong } from '../data/portfolio'

function TiltPhoto({ onZoom }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const rx = useSpring(0, { stiffness: 220, damping: 20 })
  const ry = useSpring(0, { stiffness: 220, damping: 20 })
  const [glare, setGlare] = useState({ x: 50, y: 50, o: 0 })
  const [coarse] = useState(() => typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches)

  const disabled = reduce || coarse

  return (
    <motion.button
      ref={ref}
      onClick={onZoom}
      initial={reduce ? false : { opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.7, ease: EASE }}
      style={disabled ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 700 }}
      onMouseMove={(e) => {
        if (disabled || !ref.current) return
        const r = ref.current.getBoundingClientRect()
        const px = (e.clientX - r.left) / r.width - 0.5
        const py = (e.clientY - r.top) / r.height - 0.5
        ry.set(px * 12)
        rx.set(-py * 12)
        setGlare({ x: (px + 0.5) * 100, y: (py + 0.5) * 100, o: 1 })
      }}
      onMouseLeave={() => {
        if (disabled) return
        rx.set(0)
        ry.set(0)
        setGlare((g) => ({ ...g, o: 0 }))
      }}
      className="focus-ring glass group relative aspect-[4/5] w-28 shrink-0 overflow-hidden rounded-sm shadow-sm transition-shadow duration-500 hover:shadow-[0_18px_44px_rgba(0,150,199,0.28)] sm:w-32 md:w-36"
      aria-label={`Enlarge photo of ${profile.name}`}
    >
      <img
        src={profile.photo}
        alt={`${profile.name} portrait`}
        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glare.o,
          background: `radial-gradient(220px circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35), transparent 65%)`,
        }}
      />
      <span className="absolute inset-x-0 bottom-0 flex translate-y-1 items-center justify-center gap-1 bg-gradient-to-t from-navy/70 to-transparent pb-1.5 pt-5 text-[10px] font-semibold text-white opacity-0 backdrop-blur-[2px] transition-all delay-150 duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Expand size={11} aria-hidden="true" />
        Enlarge
      </span>
    </motion.button>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: EASE } },
}

export function HeroBlock() {
  const [zoomed, setZoomed] = useState(false)
  const reduce = useReducedMotion()
  return (
    <section id="about" className="mb-10 scroll-mt-8 pt-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <TiltPhoto onZoom={() => setZoomed(true)} />
        <motion.div
          className="min-w-0 flex-1"
          variants={container}
          initial={reduce ? false : 'hidden'}
          animate="show"
        >
          <motion.div variants={item} className="mb-1 flex items-start justify-between gap-3">
            <h1 className="hero-title flex items-center gap-1.5 text-xl font-bold leading-tight tracking-tight text-navy sm:text-2xl">
              {profile.name}
              <BadgeCheck size={18} className="shrink-0 text-[#0096c7]" aria-label="Verified" />
            </h1>
          </motion.div>
          <motion.p variants={item} className="mb-3 flex items-center gap-1.5 text-[11px] text-slate-500 sm:text-xs">
            <MapPin size={12} className="text-slate-400" aria-hidden="true" />
            {profile.location}
          </motion.p>
          <motion.p variants={item} className="mb-3 text-xs text-slate-600 sm:text-sm">{profile.roles.split(' / ').join('  /  ')}</motion.p>
          <motion.div variants={item} className="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div className="flex flex-wrap gap-2">
              <Magnetic strength={16}>
                <GlassButton href={profile.cvUrl} target="_blank" rel="noreferrer" icon={Download} primary>Download CV <ArrowRight size={13} aria-hidden="true" className="relative z-10" /></GlassButton>
              </Magnetic>
              <GlassButton href={`mailto:${profile.email}`} icon={Mail}>Send Email</GlassButton>
            </div>
          </motion.div>
        </motion.div>
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
