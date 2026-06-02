import AboutSection from "@/components/AboutSection";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <HomeBanner />
      <AboutSection />
    </div>
  );
}
