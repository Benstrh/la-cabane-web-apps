import CabinCarrousel from "./CabinCarrousel";

export default function HomeCarousel() {
  return (
    <div className="relative flex h-auto w-full py-8 lg:min-h-screen lg:py-0">
      <div className="card-wrapper relative flex w-full flex-col items-center justify-center overflow-hidden px-6">
        <CabinCarrousel />
        {/* <div className="cabin-card"></div> */}
      </div>
    </div>
  );
}
