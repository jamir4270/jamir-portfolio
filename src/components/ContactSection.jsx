import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { GlassButton, GlassRow } from './UI'

const EMAIL = 'jamirandrade4270@gmail.com'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = EMAIL
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      ta.remove()
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const submit = (e) => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  const inputCls =
    'focus-ring w-full rounded-sm border border-white/90 bg-white/75 px-3 py-2.5 text-xs text-slate-900 outline-none transition focus:border-[#48cae4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(72,202,228,0.24)] placeholder:text-slate-400'

  return (
    <section id="contact" className="mb-10 scroll-mt-8">
      <h2 className="mb-4 text-[10px] font-bold uppercase tracking-[0.12em] text-navy">Contact</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-1.5">
          <GlassRow className="flex items-center gap-3">
            <Mail size={14} className="shrink-0 text-[#0096c7]" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold text-cardInk">Email</span>
              <a href={`mailto:${EMAIL}`} className="text-xs text-slate-500 hover:text-navy hover:underline">{EMAIL}</a>
            </span>
          </GlassRow>
          <GlassRow className="flex items-center gap-3">
            <Phone size={14} className="shrink-0 text-[#0096c7]" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold text-cardInk">Phone</span>
              <span className="text-xs text-slate-500">0951-035-1575</span>
            </span>
          </GlassRow>
          <GlassRow className="flex items-center gap-3">
            <MapPin size={14} className="shrink-0 text-[#0096c7]" aria-hidden="true" />
            <span>
              <span className="block text-xs font-semibold text-cardInk">Location</span>
              <span className="text-xs text-slate-500">Brgy. Naungan, Ormoc City, Leyte</span>
            </span>
          </GlassRow>
          <button
            onClick={copyEmail}
            className="focus-ring glass mt-2 inline-flex items-center gap-2 rounded-sm border border-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-[#17304f] transition hover:-translate-y-px hover:bg-white/90"
          >
            {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
            {copied ? 'Copied to clipboard' : 'Copy email'}
          </button>
        </div>

        <div className="glass rounded-sm p-5">
          {status === 'sent' ? (
            <div className="flex min-h-[260px] flex-col items-center justify-center text-center">
              <span className="grid size-10 place-items-center rounded-full bg-emerald-500/15 text-emerald-600"><Check size={20} /></span>
              <h3 className="mt-3 text-sm font-semibold text-navy">Message ready to send</h3>
              <p className="mt-2 max-w-sm text-xs leading-6 text-slate-600">This demo form doesn&rsquo;t deliver yet — email me directly at {EMAIL} and I&rsquo;ll reply quickly.</p>
              <button onClick={() => setStatus('idle')} className="focus-ring mt-4 text-xs font-semibold text-aquaDark hover:text-navy">Write another →</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3" aria-label="Contact form">
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-[#24364f]">Name</span>
                  <input className={inputCls} placeholder="Your name" name="name" required />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-[11px] font-semibold text-[#24364f]">Email</span>
                  <input type="email" className={inputCls} placeholder="you@example.com" name="email" required />
                </label>
              </div>
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold text-[#24364f]">Message</span>
                <textarea rows="4" className={`${inputCls} resize-y`} placeholder="Tell me about the project or opportunity." name="message" required />
              </label>
              <div className="pt-1">
                <GlassButton type="submit" icon={Send} primary>{status === 'sending' ? 'Sending…' : 'Send Message'}</GlassButton>
              </div>
            </form>
          )}
        </div>
      </div>
      <hr className="my-6 border-slate-200/80" />
    </section>
  )
}
