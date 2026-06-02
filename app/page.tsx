import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <div className="min-h-screen flex-col">
      <HomeBanner />
      <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:p-8">
        <div className="about-section relative grid w-full grid-cols-3 font-decorative">
          <h1 className="justify-self-center text-3xl sm:text-lg">ABOUT US</h1>
          <div className="col-span-2 bg-amber-600">
            <p className="text-5xl font-bold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Expedita, maxime, laudantium neque harum voluptate molestias
              pariatur inventore aliquam repellendus perferendis dolores
              accusantium. Mollitia odio quidem quas veniam aut voluptate
              voluptatum.
            </p>
            <div className="grid grid-cols-2">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                expedita velit eveniet reprehenderit explicabo ut fuga vero?
                Consectetur, esse assumenda, perferendis quas ex odio, deleniti
                molestiae inventore vitae laboriosam sunt.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                expedita velit eveniet reprehenderit explicabo ut fuga vero?
                Consectetur, esse assumenda, perferendis quas ex odio, deleniti
                molestiae inventore vitae laboriosam sunt.
              </p>
            </div>
          </div>
        </div>
        {/* <Image src={aboutBg} alt="" fill className="" /> */}
      </div>
    </div>
  );
}
