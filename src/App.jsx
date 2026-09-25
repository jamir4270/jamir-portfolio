import AmbientBackground from './components/AmbientBackground'
import TopBar from './components/MobileHeader'
import HeroSection from './components/HeroSection'
import ExperienceSection, { ExperienceHighlight } from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import TechStack from './components/TechStack'
import { EducationSection, CertificationsSection, LeadershipSection, AchievementsSection } from './components/EducationLeadership'
import { ThesisSection, RecommendationsSection, SocialLinksSection, GallerySection } from './components/ExtraSections'
import ContactSection from './components/ContactSection'
import { ScrollProgress, BackToTop } from './components/Chrome'
import { useActiveSection } from './components/Navigation'

export default function App() {
  const activeId = useActiveSection()

  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <TopBar activeId={activeId} />
      <main className="mx-auto w-full max-w-[720px] px-5 sm:px-8">
        <HeroSection />
        <div className="h-px bg-slate-200/70" />
        <TechStack />
        <div className="h-px bg-slate-200/70" />
        <ProjectsSection />
        <div className="h-px bg-slate-200/70" />
        <EducationSection />
        <ExperienceHighlight />
        <ExperienceSection />
        <div className="h-px bg-slate-200/70" />
        <ThesisSection />
        <div className="h-px bg-slate-200/70" />
        <LeadershipSection />
        <div className="h-px bg-slate-200/70" />
        <RecommendationsSection />
        <div className="h-px bg-slate-200/70" />
        <CertificationsSection />
        <SocialLinksSection />
        <AchievementsSection />
        <GallerySection />
        <div className="h-px bg-slate-200/70" />
        <ContactSection />
        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 py-8 text-[0.8rem] text-slate-500">
          <span>© 2026 Jamir Oasis M. Andrade</span>
          <span>Built with React · Tailwind · Framer Motion</span>
        </footer>
      </main>
      <BackToTop />
    </>
  )
}
