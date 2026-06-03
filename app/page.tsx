import AboutSection from "@/components/AboutSection";

import HomeBanner from "@/components/HomeBanner";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <HomeBanner />
      <AboutSection />
      <HomeCarousel />
    </div>
  );
}
