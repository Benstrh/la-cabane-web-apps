import CabinCarrousel from "./CabinCarrousel";

export default function HomeCarousel() {
  return (
    <div className="relative flex min-h-screen w-full">
      <div className="card-wrapper relative flex w-full flex-col items-center justify-center overflow-hidden px-6">
        <CabinCarrousel />
        {/* <div className="cabin-card"></div> */}
      </div>
    </div>
  );
}
