import { getAllCabins } from "@/services/data-service";
import CabinCarrousel from "./CabinCarrousel";

export default async function HomeCarousel() {
  const cabins = (await getAllCabins()) ?? [];
  console.log(cabins);

  return (
    <div className="relative flex h-auto w-full flex-col py-8 lg:min-h-screen lg:py-0">
      <div className="mb-5 flex items-center px-8 font-decorative sm:justify-center sm:text-2xl">
        <h1>Our Cabins</h1>
      </div>
      <div className="card-wrapper relative flex w-full flex-col items-center justify-center overflow-hidden px-6">
        <CabinCarrousel data={cabins} />
        {/* <div className="cabin-card"></div> */}
      </div>
    </div>
  );
}
