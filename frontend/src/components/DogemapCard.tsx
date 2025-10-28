"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

interface DogemapCardProps {
  item: {
    id: number;
    price: number;
    seller: string;
  };
  dogecoinPrice: number;
}

const DogemapCard: React.FC<DogemapCardProps> = ({ item, dogecoinPrice }) => {
  const [imgError, setImgError] = useState(false);

  const imgUrl = `https://api.doggy.market/dogemaps/image/${item.id}`;

  return (
    <Card
      key={item.id}
      className="relative overflow-hidden flex flex-col rounded-[12px] bg-[#4c505c33] outline-1 outline-transparent transition-all duration-200 ease-in-out p-0 gap-0"
    >
      {!imgError && (
        <div className="flex px-3 pt-3 pb-0">
          <Image
            src={imgUrl}
            alt={`Dogemaps #${item.id}`}
            width={112}
            height={112}
            className="h-28 max-w-full mx-auto object-contain"
            onError={() => setImgError(true)}
            unoptimized
          />
        </div>
      )}

      <div className="flex flex-col h-full pt-1 px-3 pb-3">
        {imgError ? (
          <div className="text-center text-[1.1rem] mt-11 mb-11">
            {item.id}.dogemaps
          </div>
        ) : (
          <div className="text-center text-[1.1rem] my-1">
            {item.id}.dogemaps
          </div>
        )}
        <div className="text-[0.8rem] text-[#fffc]">
          <div className="flex justify-between">
            <div>Seller:</div>
            <Link
              href={`/wallet/${item.seller}`}
              className="font-medium text-[#c891ff] no-underline cursor-pointer"
            >
              {item.seller.slice(0, 5)}...{item.seller.slice(-5)}
            </Link>
          </div>
        </div>
        <div className="mt-1.5 border-t border-white/10 py-2">
          <div>
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
        </div>
        <Button className="w-full font-extrabold text-[#9c63fa] border-none transition-all duration-250 ease-in-out bg-[#e6d8fe] text-md">
          Buy
        </Button>
      </div>
    </Card>
  );
};

export default DogemapCard;
