export default function AboutSection() {
  return (
    <div className="relative flex h-auto flex-col items-center overflow-hidden px-4 py-8 sm:px-8 sm:pt-8 md:justify-center lg:min-h-svh lg:justify-center">
      <div className="about-section relative flex w-full flex-col font-decorative md:items-center md:justify-center md:text-center lg:grid lg:grid-cols-3 lg:text-left">
        <div className="space-y-4 p-0 lg:col-span-2 lg:col-start-2">
          <div>
            <h1 className="mb-5 text-lg sm:text-2xl">ABOUT US</h1>
            <p className="font-caption-decorative text-[50px] leading-12 font-bold text-primary-brown-base sm:mb-8 sm:text-[75px] sm:leading-none sm:tracking-wide lg:text-[7rem]">
              L&apos;Échappée Belle
            </p>
          </div>

          <div className="flex flex-col space-y-4 text-[10px] text-pretty md:text-sm lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-x-4">
            <p className="pr-2">
              Born from a vision to create the ultimate sanctuary, La Cabane
              seamlessly weaves the raw tranquility of nature with timeless
              French sophistication. Inspired by the effortless elegance of the
              French countryside, we have redefined the modern retreat.
            </p>
            <p className="pr-2">
              At La Cabane, every detail is meticulously curated. We blend
              intimate, thoughtful architecture with the magical essence of
              French art de vivre. We invite you to slow down, embrace the
              stillness, and celebrate life&apos;s finest moments wrapped in
              five-star comfort.
            </p>
            <p className="mt-5 justify-self-end font-semibold sm:mt-10">
              Bienvenue à La Cabane—where nature whispers, and luxury finds its
              home.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
