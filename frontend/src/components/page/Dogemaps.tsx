"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import DogemapCard from "@/components/DogemapCard";

const database = [
  {
    id: 305070,
    price: 95,
    seller: "D9VDZVrYGWPMcKWiPYqHAoCgjAQRBuiAVp",
  },
  {
    id: 3435397,
    price: 28,
    seller: "D6dahHHrXSVcCW9CpXg2sF2SR6Kp2yES5x",
  },
  {
    id: 4653828,
    price: 27,
    seller: "D6dahHHrXSVcCW9CpXg2sF2SR6Kp2yES5x",
  },
  {
    id: 1440800,
    price: 2,
    seller: "DGa4LWNKS6ayBs4qJpQ3c4c5AUa1S8GTiJ",
  },
  {
    id: 1440170,
    price: 2,
    seller: "DGa4LWNKS6ayBs4qJpQ3c4c5AUa1S8GTiJ",
  },
];

const dogecoinPrice = 0.1957;

export default function Dogemaps() {
  const [visibleData, setVisibleData] = useState<
    { id: number; price: number; seller: string }[]
  >([]);

  useEffect(() => {
    const updateData = () => {
      if (window.matchMedia("(min-width: 1112px)").matches) {
        setVisibleData(database.slice(0, 4));
      } else if (window.matchMedia("(min-width: 900px)").matches) {
        setVisibleData(database.slice(0, 3));
      } else if (window.matchMedia("(min-width: 678px)").matches) {
        setVisibleData(database.slice(0, 5));
      } else {
        setVisibleData(database.slice(0, 3));
      }
    };

    updateData();
    window.addEventListener("resize", updateData);
    return () => window.removeEventListener("resize", updateData);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mt-0 mb-0 text-[1.6rem] leading-[1.1]">Dogemaps</h2>
          <div className="flex">
            Floor price:&#xA0;
            <Image
              src="/assets/coin.svg"
              alt="coin"
              width={18}
              height={18}
              priority
              className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
              unoptimized
            />
            <span className="text-white/95">1</span>
          </div>
        </div>
      </div>
      <div className="tiny:gap-5 four:grid-cols-5 three:grid-cols-4 two:grid-cols-3 tiny:grid-cols-2 mt-4 grid grid-cols-2 gap-2">
        {visibleData.map((item) => (
          <DogemapCard
            key={item.id}
            item={item}
            dogecoinPrice={dogecoinPrice}
          />
        ))}
        <Link
          href="/dogemaps"
          className="flex min-h-56 items-center justify-center rounded-[12px] border border-transparent bg-[#4c505c33] font-bold text-[#fbb9fb] transition-all duration-250 ease-in-out hover:border-[violet] hover:text-[violet]"
        >
          <div className="p-3 text-center">Show all listed dogemaps</div>
        </Link>
      </div>
    </>
  );
}
