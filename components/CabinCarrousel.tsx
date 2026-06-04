"use client";
import CabinCard from "./CabinCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function CabinCarrousel() {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full sm:max-w-[80rem]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, i) => (
          <CabinCard key={i} index={i} />
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden cursor-pointer rounded-none border border-primary-accent-800 hover:bg-primary-accent-200 lg:flex" />
      <CarouselNext className="hidden cursor-pointer rounded-none border border-primary-accent-800 hover:bg-primary-accent-200 lg:flex" />
    </Carousel>
  );
}
