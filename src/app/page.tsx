import CallToAction from "@/components/home/CallToAction";
import CaseStudiesSection from "@/components/home/Case";
import CaseStudySlider from "@/components/home/CaseStudySlider";
import FAQSection from "@/components/home/Faq";
import HeroSection from "@/components/home/Hero";
import IdeaSection from "@/components/home/Idea";
import PricingPlanSection from "@/components/home/PricingPlans";
import TestimonialsSection from "@/components/home/Testmonial";
import Trust from "@/components/home/Trust";

const images = [
  "/images/sample1.png",
  "/images/sample2.png",
  "/images/sample3.png",
  "/images/sample4.png",
  "/images/sample5.png",
  "/images/sample6.png",
  "/images/sample7.png",
  "/images/sample8.png",
  "/images/sample9.png",
  "/images/sample10.png",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <CaseStudySlider images={images} />
      <Trust />
      <CaseStudiesSection />
      <PricingPlanSection />
      <IdeaSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
    </>
  );
}
