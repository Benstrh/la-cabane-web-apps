"use client";
import { CabinCardProps } from "@/types/cabin";
import CabinCard from "./CabinCard";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

type Props = {
  data: CabinCardProps[];
};

export default function CabinCarrousel({ data }: Props) {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full sm:max-w-[80rem]"
    >
      <CarouselContent>
        {data.map((cabin) => (
          <CabinCard key={cabin.id} data={cabin} />
        ))}
        {/* {Array.from({ length: 5 }).map((_, i) => (
          <CabinCard key={i} />
        ))} */}
      </CarouselContent>
      <CarouselPrevious className="hidden cursor-pointer rounded-none border border-primary-accent-800 hover:bg-primary-accent-200 lg:flex" />
      <CarouselNext className="hidden cursor-pointer rounded-none border border-primary-accent-800 hover:bg-primary-accent-200 lg:flex" />
    </Carousel>
  );
}
