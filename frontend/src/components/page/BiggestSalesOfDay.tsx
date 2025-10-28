"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const database = [
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 17137,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "BoredPackClub",
    collectionid: 2503,
    price: 740,
  },
  {
    id: 54326,
    imageurl:
      "https://cdn.doggy.market/content/80cb46523223f88e18f392bb47690cbb36fa439084e2bff6de63c692b34c49bdi0",
    collectionname: "DOGE AGENT",
    collectionid: 7672,
    price: 1114,
  },
  {
    id: 8567,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "BoredPackClub",
    collectionid: 4568,
    price: 6875,
  },
  {
    id: 3245,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4868,
    price: 112,
  },
  {
    id: 3473,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "DOGE AGENT",
    collectionid: 2798,
    price: 786,
  },
  {
    id: 896544,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 753577,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/80cb46523223f88e18f392bb47690cbb36fa439084e2bff6de63c692b34c49bdi0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/80cb46523223f88e18f392bb47690cbb36fa439084e2bff6de63c692b34c49bdi0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/80cb46523223f88e18f392bb47690cbb36fa439084e2bff6de63c692b34c49bdi0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/67ffe2e2ea372bf2bfca3e7c8dc1aadab650eed3e522e825e0fd9840e8f090cci0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/80cb46523223f88e18f392bb47690cbb36fa439084e2bff6de63c692b34c49bdi0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
  {
    id: 196131,
    imageurl:
      "https://cdn.doggy.market/content/1664d918636420f88bc990675b75afb4ade4a907f0c417f0a81ea85a90bb1c57i0",
    collectionname: "Doginal Mini Doges",
    collectionid: 4997,
    price: 1190,
  },
];

const dogecoinPrice = 0.1957;

export default function BiggestSalesOfDay() {
  return (
    <>
      <h2 className="text-[1.6rem] mt-8 mb-6 leading-[1.1]">
        Biggest sales of day
      </h2>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 w-full">
          {database.map((item, index) => (
            <CarouselItem
              key={`${item.id}-${index}`}
              className="pl-1 xl:basis-1/5 lg:basis-1/4 md:basis-1/3 tiny:basis-1/2 basis-1/1"
            >
              <Card className="relative w-56 pt-0 pb-0">
                <div className="absolute top-0 right-0 rounded-bl-[12px] text-white bg-[#0000006b] px-2 py-0 font-semibold text-[0.9rem] pointer-events-none">
                  #{item.id}
                </div>
                <Link href={`/inscription/${item.id}`}>
                  <Image
                    src={item.imageurl}
                    alt={`BSOD #${item.id}`}
                    width={224}
                    height={224}
                    className="w-full aspect-square bg-[#00000080] block object-contain rounded-[12px] [image-rendering:pixelated]"
                    unoptimized
                  />
                </Link>
                <div className="pt-1 px-3 pb-3 h-full flex flex-col">
                  <div className="flex justify-center gap-4 text-[1.1rem] leading-[1.2] font-semibold text-white my-1">
                    <span>{item.collectionname}</span>
                    <span>#{item.collectionid}</span>
                  </div>
                  <div className="mt-auto py-1 border-t border-white/10">
                    <div className="flex text-center justify-center">
                      <Image
                        src="/assets/coin.svg"
                        alt="coin"
                        width={18}
                        height={18}
                        priority
                        className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                      />
                      {item.price}&#xA0;
                      <span className="text-[0.9rem] text-[#fffc]">
                        (${(item.price * dogecoinPrice).toFixed(2)})
                      </span>
                    </div>
                  </div>
                  <Button
                    disabled
                    className="w-full bg-[#ffffff12] text-[#cacaca] font-extrabold border-none transition-all duration-200 ease-in-out"
                  >
                    Sold
                  </Button>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
