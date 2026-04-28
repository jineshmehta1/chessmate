import  HeroSection  from "@/components/hero-section"
import  CoursesSection  from "@/components/events-preview"
import  DemoBookingCTA  from "@/components/demo-booking-cta"
import  TestimonialsSection  from "@/components/testimonials-section"
import  FaqSection  from "@/components/stats-section"
import  FeaturesSection  from "@/components/features-section"
import AchievementsSection from "@/components/ui/AchievementsSection"
import WhyChooseUsSection from "@/components/why-choose"
import DifferenceSection from "@/components/ui/diff"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <section id="why-choose-us">
          <WhyChooseUsSection />
        </section>
        <CoursesSection />
        <TestimonialsSection />
        <DifferenceSection/>
        <section id="faq">
        <FaqSection />
        </section>
        <DemoBookingCTA />
      </main>
    </div>
  )
}
