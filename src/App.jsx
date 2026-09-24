import AmbientBackground from './components/AmbientBackground'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import HeroSection from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import TechStack from './components/TechStack'
import { EducationSection, LeadershipSection, AchievementsSection } from './components/EducationLeadership'
import ContactSection from './components/ContactSection'
import { ScrollProgress, BackToTop } from './components/Chrome'
import { useActiveSection } from './components/Navigation'

export default function App() {
  const activeId = useActiveSection()

  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <MobileHeader activeId={activeId} />
      <div className="lg:flex lg:h-screen lg:overflow-hidden lg:gap-4 lg:p-4">
        <Sidebar activeId={activeId} />
        <main className="right-scroll min-w-0 flex-1 lg:h-[calc(100vh-2rem)] lg:overflow-y-auto lg:scroll-smooth lg:rounded-[1.75rem] lg:border lg:border-white/60 lg:bg-white/30 lg:backdrop-blur-sm">
          <div className="mx-auto w-full max-w-[1000px] px-5 sm:px-8 lg:px-12">
            <HeroSection />
            <ExperienceSection />
            <ProjectsSection />
            <TechStack />
            <EducationSection />
            <LeadershipSection />
            <AchievementsSection />
            <ContactSection />
            <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-8 text-[0.8rem] text-slate-500">
              <span>© 2026 Jamir Oasis M. Andrade</span>
              <span>Built with React · Tailwind · Framer Motion</span>
            </footer>
          </div>
        </main>
      </div>
      <BackToTop />
    </>
  )
}
