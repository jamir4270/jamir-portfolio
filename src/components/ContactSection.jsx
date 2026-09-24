import { useState } from 'react'
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Section, GlassCard, GlassButton } from './UI'

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

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something useful." lede="Email is fastest — I reply within a day. Or send the form and I'll get back to you.">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <div className="space-y-2">
          <a href={`mailto:${EMAIL}`} className="focus-ring group flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/60">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-navy text-white shadow-md transition group-hover:scale-105"><Mail size={18} /></span>
            <span>
              <span className="block text-sm font-semibold text-cardInk">Email</span>
              <span className="mt-0.5 block text-sm text-slate-600 underline-offset-4 group-hover:underline">{EMAIL}</span>
            </span>
          </a>
          <a href="tel:+639510351575" className="focus-ring group flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/60">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/80 text-[#0077b6] shadow-sm ring-1 ring-white transition group-hover:scale-105"><Phone size={18} /></span>
            <span>
              <span className="block text-sm font-semibold text-cardInk">Phone</span>
              <span className="mt-0.5 block text-sm text-slate-600">0951-035-1575</span>
            </span>
          </a>
          <div className="flex items-start gap-4 p-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white/80 text-[#0077b6] shadow-sm ring-1 ring-white"><MapPin size={18} /></span>
            <span>
              <span className="block text-sm font-semibold text-cardInk">Location</span>
              <span className="mt-0.5 block text-sm text-slate-600">Brgy. Naungan, Ormoc City, Leyte</span>
            </span>
          </div>
          <button
            onClick={copyEmail}
            className="focus-ring ml-3 mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-[0.8rem] font-semibold text-[#17304f] transition hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-md"
          >
            {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
            {copied ? 'Copied to clipboard' : 'Copy email'}
          </button>
        </div>

        <GlassCard className="p-6 sm:p-7">
          {status === 'sent' ? (
            <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
              <span className="grid size-12 place-items-center rounded-full bg-emerald-500/15 text-emerald-600"><Check size={22} /></span>
              <h3 className="mt-4 text-lg font-semibold text-navy">Message ready to send</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">This demo form doesn&rsquo;t deliver yet — email me directly at {EMAIL} and I&rsquo;ll reply quickly.</p>
              <button onClick={() => setStatus('idle')} className="focus-ring mt-5 text-sm font-semibold text-aquaDark hover:text-navy">Write another →</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4" aria-label="Contact form">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[0.8rem] font-semibold text-[#24364f]">Name</span>
                  <input className="focus-ring w-full rounded-xl border border-white/90 bg-white/75 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#48cae4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(72,202,228,0.24)] placeholder:text-slate-400" placeholder="Your name" name="name" required />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[0.8rem] font-semibold text-[#24364f]">Email</span>
                  <input type="email" className="focus-ring w-full rounded-xl border border-white/90 bg-white/75 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#48cae4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(72,202,228,0.24)] placeholder:text-slate-400" placeholder="you@example.com" name="email" required />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-[0.8rem] font-semibold text-[#24364f]">Message</span>
                <textarea rows="5" className="focus-ring w-full resize-y rounded-xl border border-white/90 bg-white/75 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#48cae4] focus:bg-white focus:shadow-[0_0_0_3px_rgba(72,202,228,0.24)] placeholder:text-slate-400" placeholder="Tell me about the project or opportunity." name="message" required />
              </label>
              <div className="pt-1">
                <GlassButton type="submit" icon={Send} primary>{status === 'sending' ? 'Sending…' : 'Send Message'}</GlassButton>
              </div>
            </form>
          )}
        </GlassCard>
      </div>
    </Section>
  )
}
