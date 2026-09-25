import AmbientBackground from './components/AmbientBackground'
import { HeroBlock, AboutProse } from './components/HeroSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import TechStack from './components/TechStack'
import { EducationSection, CertificationsSection, LeadershipSection, AchievementsSection } from './components/EducationLeadership'
import { ThesisSection, RecommendationsSection, SocialLinksSection, GallerySection } from './components/ExtraSections'
import ContactSection from './components/ContactSection'
import { ScrollProgress, BackToTop } from './components/Chrome'

function Pair({ left, right }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      <div className="md:col-span-2">{left}</div>
      <div>{right}</div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <AmbientBackground />
      <ScrollProgress />
      <main className="mx-auto w-full max-w-[900px] px-4 py-10">
        <HeroBlock />
        <Pair left={<AboutProse />} right={<EducationSection />} />
        <Pair left={<TechStack />} right={<ExperienceSection />} />
        <Pair left={<ProjectsSection />} right={<ThesisSection />} />
        <Pair left={<LeadershipSection />} right={<RecommendationsSection />} />
        <Pair
          left={
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <CertificationsSection />
              <SocialLinksSection />
            </div>
          }
          right={<AchievementsSection />}
        />
        <GallerySection />
        <ContactSection />
        <footer className="mt-24 border-t border-slate-200/80 pt-8 text-center text-xs font-medium text-slate-500">
          © 2026 Jamir Oasis M. Andrade. All rights reserved.
        </footer>
      </main>
      <BackToTop />
    </>
  )
}
