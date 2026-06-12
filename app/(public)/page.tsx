import HeroBanner from "@/source/section/HeroBanner";
import PlatformCards from "@/source/section/PlatformCards";
import ServiceSection from "@/source/section/Services";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <PlatformCards />
      <ServiceSection />
    </div>
  );
}
