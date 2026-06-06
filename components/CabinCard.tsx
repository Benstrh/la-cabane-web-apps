import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { CabinCardProps } from "@/type";
import { UserIcon } from "lucide-react";

type CardProps = {
  data: CabinCardProps;
};

export default function CabinCard({ data }: CardProps) {
  const { id, name, image, maxCapacity, regularPrice, discount } = data;

  return (
    <CarouselItem className="md:basis-1/2 lg:basis-1/3">
      <div className="flex h-[500px] items-center justify-center border border-primary-accent-200 bg-primary-base">
        <div className="relative grid h-full w-full grid-rows-[65%_1fr] space-y-2">
          <div className="relative bg-blue-400">
            <Image
              src={image}
              quality={75}
              sizes="(max-width: 768px) 100vw, 50vw"
              alt="luxury cabins"
              fill
              className="object-cover"
            />
            IMAGE
          </div>
          <div className="flex flex-col px-2">
            <div className="flex justify-between font-decorative text-primary-accent-900">
              <p className="">{name}</p>
              <div className="flex items-center gap-x-2">
                <p className="">{maxCapacity}</p>
                <div className="flex h-6 w-6 items-center justify-center bg-primary-green-base p-1">
                  <UserIcon size={15} className="stroke-primary-accent-200" />
                </div>
              </div>
            </div>
            <p className="mt-5 text-center font-caption-decorative text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              blanditiis itaque veritatis ex quasi soluta sequi velit molestiae
              aliquam unde non, quia tempore,
            </p>
            <p className="place-self-end">BUTTON</p>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
}
