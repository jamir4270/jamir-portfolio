import Navigation, { useActiveSection } from './Navigation'

export default function TopBar({ activeId: activeProp }) {
  const activeHook = useActiveSection()
  const activeId = activeProp ?? activeHook

  return (
    <header className="glass-strong sticky top-0 z-50 border-x-0 border-t-0">
      <div className="isolate mx-auto flex max-w-[900px] items-center gap-4 px-4">
        <a href="#about" className="focus-ring hidden shrink-0 rounded-lg text-base font-semibold tracking-tight text-navy md:inline">Jamir Andrade</a>
        <div className="-mx-1 min-w-0 flex-1 md:flex md:justify-end"><Navigation activeId={activeId} /></div>
      </div>
    </header>
  )
}
