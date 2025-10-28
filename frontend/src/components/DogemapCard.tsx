"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
      className="relative overflow-hidden flex flex-col rounded-[12px] bg-[#4c505c33] outline-1 outline-transparent transition-all duration-200 ease-in-out p-0 gap-0 hover:border-[#8c45ff] hover:[&_div]:[&_button]:text-white hover:[&_div]:[&_button]:bg-[#8c45ff]"
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
        <Dialog>
          <DialogTrigger className="w-full font-extrabold text-[#9c63fa] border-0 transition-all duration-250 ease-in-out bg-[#e6d8fe] cursor-pointer rounded-[12px] py-2 px-4 text-[1em] font-inherit ">
            Buy
          </DialogTrigger>
          <DialogContent className="scale-100 opacity-100 w-xl flex flex-col my-[50px] box-border shrink-0 grow-0 max-w-[calc(100%-1rem)] min-h-[500px] overflow-visible  transition-opacity duration-200 ease-linear bg-[#ffffff1f] backdrop-blur-xl rounded-[12px] p-6">
            <DialogHeader>
              <DialogTitle className="text-[#e6d8fe] text-3xl mt-0 text-center font-semibold leading-[1.1] mb-2">
                Buy dogemaps
              </DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="flex justify-center flex-wrap gap-2.5 max-h-104 overflow-y-auto mb-2">
                <div className="rounded-[12px] bg-[#00000080] p-2">
                  <div className="flex">
                    <Image
                      src={imgUrl}
                      alt={`Dogemaps #${item.id}`}
                      width={144}
                      height={144}
                      className="w-36 h-36 mx-auto rounded-md text-[0.8rem]"
                      unoptimized
                    />
                  </div>
                  <div className="text-[1rem] text-center mt-2 text-white">
                    {item.id}.dogemaps
                  </div>
                </div>
              </div>
              <div className="mt-auto leading-[1.6] grid grid-cols-[1fr_auto_auto]">
                <div className="text-[0.95rem] text-white">
                  Taker fee (2.8%)
                </div>
                <div className="flex text-white text-[1rem]">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em] mt-[0.1rem]"
                  />
                  {((item.price * 2.8) / 100).toFixed(2)}
                </div>
                <span className="text-[#fffc] text-[0.9rem] text-right ml-4">
                  $ {(item.price * 0.028 * dogecoinPrice).toFixed(2)}
                </span>
                <div className="text-[0.95rem] text-white">Network fee</div>
                <div className="flex text-white text-[1rem]">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em] mt-[0.1rem]"
                  />
                  ≈0.5
                </div>
                <span className="text-[#fffc] text-[0.9rem] text-right ml-4">
                  $0.099
                </span>
                <div className="text-[1rem] text-white mt-5 font-bold">
                  Total
                </div>
                <div className="flex text-white text-[1rem] mt-5 font-bold">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em] mt-[0.1rem]"
                  />
                  {(item.price * 1.028 + 0.5).toFixed(2)}
                </div>
                <span className="text-[#fffc] text-[0.9rem] text-right ml-4 mt-5 font-bold">
                  ${((item.price * 1.028 + 0.5) * dogecoinPrice).toFixed(2)}
                </span>
                <div className="text-[0.95rem] text-white mt-2">
                  Available balance
                </div>
                <div className="flex text-white text-[1rem] mt-2">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em] mt-[0.1rem]"
                  />
                  0
                </div>
                <span className="text-[#fffc] text-[0.9rem] text-right ml-4 mt-2">
                  $0
                </span>
              </div>
              <button
                disabled
                className="mt-4 flex justify-center text-white font-bold w-full rounded-[12px] border border-transparent py-2 px-4 text-[1em] font-inherit transition-all duration-200 ease-in-out disabled:bg-[#1a1a1a]"
              >
                Insufficient balance
              </button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default DogemapCard;
