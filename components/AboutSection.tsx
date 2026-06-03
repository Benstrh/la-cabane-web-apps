export default function AboutSection() {
  return (
    <div className="relative flex h-auto flex-col items-center overflow-hidden px-4 py-8 sm:min-h-svh sm:justify-center sm:px-8 sm:pt-8">
      <div className="about-section relative flex w-full flex-col font-decorative sm:grid sm:grid-cols-3">
        <div className="space-y-4 p-0 sm:col-span-2 sm:col-start-2">
          <div>
            <h1 className="mb-5 text-lg sm:text-2xl">ABOUT US</h1>
            <p className="font-caption-decorative text-[50px] leading-12 font-bold text-primary-brown-base sm:mb-8 sm:text-[75px] sm:leading-none sm:tracking-wide lg:text-[7rem]">
              L&apos;Échappée Belle
            </p>
          </div>

          <div className="flex flex-col space-y-4 text-[10px] text-pretty sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-4 sm:text-sm">
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
