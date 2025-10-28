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
      className="relative flex flex-col gap-0 overflow-hidden rounded-[12px] bg-[#4c505c33] p-0 outline-1 outline-transparent transition-all duration-200 ease-in-out hover:border-[#8c45ff] hover:[&_div]:[&_button]:bg-[#8c45ff] hover:[&_div]:[&_button]:text-white"
    >
      {!imgError && (
        <div className="flex px-3 pt-3 pb-0">
          <Image
            src={imgUrl}
            alt={`Dogemaps #${item.id}`}
            width={112}
            height={112}
            className="mx-auto h-28 max-w-full object-contain"
            onError={() => setImgError(true)}
            unoptimized
          />
        </div>
      )}

      <div className="flex h-full flex-col px-3 pt-1 pb-3">
        {imgError ? (
          <div className="mt-11 mb-11 text-center text-[1.1rem]">
            {item.id}.dogemaps
          </div>
        ) : (
          <div className="my-1 text-center text-[1.1rem]">
            {item.id}.dogemaps
          </div>
        )}
        <div className="text-[0.8rem] text-[#fffc]">
          <div className="flex justify-between">
            <div>Seller:</div>
            <Link
              href={`/wallet/${item.seller}`}
              className="cursor-pointer font-medium text-[#c891ff] no-underline"
            >
              {item.seller.slice(0, 5)}...{item.seller.slice(-5)}
            </Link>
          </div>
        </div>
        <div className="mt-1.5 border-t border-white/10 py-2">
          <div>
            <div className="flex justify-center text-center">
              <Image
                src="/assets/coin.svg"
                alt="coin"
                width={18}
                height={18}
                priority
                className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
              />
              {item.price}&#xA0;
              <span className="text-[0.9rem] text-[#fffc]">
                (${(item.price * dogecoinPrice).toFixed(2)})
              </span>
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger className="font-inherit w-full cursor-pointer rounded-[12px] border-0 bg-[#e6d8fe] px-4 py-2 text-[1em] font-extrabold text-[#9c63fa] transition-all duration-250 ease-in-out">
            Buy
          </DialogTrigger>
          <DialogContent className="my-[50px] box-border flex min-h-[500px] w-xl max-w-[calc(100%-1rem)] shrink-0 grow-0 scale-100 flex-col overflow-visible rounded-[12px] bg-[#ffffff1f] p-6 opacity-100 backdrop-blur-xl transition-opacity duration-200 ease-linear">
            <DialogHeader>
              <DialogTitle className="mt-0 mb-2 text-center text-3xl leading-[1.1] font-semibold text-[#e6d8fe]">
                Buy dogemaps
              </DialogTitle>
              <DialogDescription></DialogDescription>
              <div className="mb-2 flex max-h-104 flex-wrap justify-center gap-2.5 overflow-y-auto">
                <div className="rounded-[12px] bg-[#00000080] p-2">
                  <div className="flex">
                    <Image
                      src={imgUrl}
                      alt={`Dogemaps #${item.id}`}
                      width={144}
                      height={144}
                      className="mx-auto h-36 w-36 rounded-md text-[0.8rem]"
                      unoptimized
                    />
                  </div>
                  <div className="mt-2 text-center text-[1rem] text-white">
                    {item.id}.dogemaps
                  </div>
                </div>
              </div>
              <div className="mt-auto grid grid-cols-[1fr_auto_auto] leading-[1.6]">
                <div className="text-[0.95rem] text-white">
                  Taker fee (2.8%)
                </div>
                <div className="flex text-[1rem] text-white">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="mt-[0.1rem] mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                  />
                  {((item.price * 2.8) / 100).toFixed(2)}
                </div>
                <span className="ml-4 text-right text-[0.9rem] text-[#fffc]">
                  $ {(item.price * 0.028 * dogecoinPrice).toFixed(2)}
                </span>
                <div className="text-[0.95rem] text-white">Network fee</div>
                <div className="flex text-[1rem] text-white">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="mt-[0.1rem] mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                  />
                  ≈0.5
                </div>
                <span className="ml-4 text-right text-[0.9rem] text-[#fffc]">
                  $0.099
                </span>
                <div className="mt-5 text-[1rem] font-bold text-white">
                  Total
                </div>
                <div className="mt-5 flex text-[1rem] font-bold text-white">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="mt-[0.1rem] mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                  />
                  {(item.price * 1.028 + 0.5).toFixed(2)}
                </div>
                <span className="mt-5 ml-4 text-right text-[0.9rem] font-bold text-[#fffc]">
                  ${((item.price * 1.028 + 0.5) * dogecoinPrice).toFixed(2)}
                </span>
                <div className="mt-2 text-[0.95rem] text-white">
                  Available balance
                </div>
                <div className="mt-2 flex text-[1rem] text-white">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={18}
                    height={18}
                    priority
                    className="mt-[0.1rem] mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                  />
                  0
                </div>
                <span className="mt-2 ml-4 text-right text-[0.9rem] text-[#fffc]">
                  $0
                </span>
              </div>
              <button
                disabled
                className="font-inherit mt-4 flex w-full justify-center rounded-[12px] border border-transparent px-4 py-2 text-[1em] font-bold text-white transition-all duration-200 ease-in-out disabled:bg-[#1a1a1a]"
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
