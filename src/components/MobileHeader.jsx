import Navigation, { useActiveSection } from './Navigation'

export default function TopBar({ activeId: activeProp }) {
  const activeHook = useActiveSection()
  const activeId = activeProp ?? activeHook

  return (
    <header className="glass-strong sticky top-0 z-50 border-x-0 border-t-0">
      <div className="mx-auto max-w-[720px] px-4 py-3 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#about" className="focus-ring rounded-lg text-sm font-semibold tracking-tight text-navy">Jamir Andrade</a>
          <span className="rounded-full bg-navy px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">Open to work</span>
        </div>
        <div className="mt-2.5 -mx-1 px-1"><Navigation activeId={activeId} /></div>
      </div>
    </header>
  )
}
