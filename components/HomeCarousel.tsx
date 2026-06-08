import { getAllCabins } from "@/services/data-service";
import CabinCarrousel from "./CabinCarrousel";

export default async function HomeCarousel() {
  const cabins = (await getAllCabins()) ?? [];
  console.log(cabins);

  return (
    <div className="relative flex h-auto w-full flex-col border-t border-t-primary-green-200 py-8 lg:min-h-screen">
      <div className="mb-5 flex items-center justify-between gap-y-2 px-6 font-decorative sm:flex-col sm:justify-center sm:px-8 sm:text-2xl">
        <h1 className="text-2xl">Our Cabins</h1>
        <div>
          <button className="flex h-8 cursor-pointer items-center justify-center bg-primary-green-500 p-2 text-xs text-primary-base hover:bg-primary-accent-900 sm:h-8 sm:text-sm">
            Discover all cabins
          </button>
        </div>
      </div>
      <div className="card-wrapper relative flex w-full flex-col items-center justify-center overflow-hidden px-6">
        <CabinCarrousel data={cabins} />
        {/* <div className="cabin-card"></div> */}
      </div>
    </div>
  );
}
