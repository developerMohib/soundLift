import ContactSection from "@/source/section/Contact";
import FinalCTA from "@/source/section/CTAsection";
import FAQSection from "@/source/section/Faq";
import HeroBanner from "@/source/section/HeroBanner";
import HowItWorks from "@/source/section/HowWorks";
import PlatformCards from "@/source/section/PlatformCards";
import PricingPlan from "@/source/section/PricingPlan";
import ResultsStats from "@/source/section/ResultStats";
import ServiceSection from "@/source/section/Services";
import TestimonialSlider from "@/source/section/Testominal";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <PlatformCards />
      <ServiceSection />
      <HowItWorks />
      <ResultsStats />
      <PricingPlan />
      <TestimonialSlider/>
      <FAQSection />
      <FinalCTA />
      <ContactSection />
    </div>
  );
}
