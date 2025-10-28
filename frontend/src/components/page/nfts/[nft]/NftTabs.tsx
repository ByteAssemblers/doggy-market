"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { FloorPriceChart } from "@/components/FloorPriceChart";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Item = {
  id: number;
  imageurl: string;
  collectionname: string;
  collectionid: number;
  price: number;
};

export default function NftTabs() {
  const baseData: Item[] = [
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
  ];

  function generateLargeDatabase(
    baseData: Item[],
    totalCount: number = 10000,
  ): Item[] {
    const database: Item[] = [];

    for (let i = 0; i < totalCount; i++) {
      const base = baseData[Math.floor(Math.random() * baseData.length)];
      const newItem: Item = {
        id: base.id + i, // ensure unique
        imageurl: base.imageurl,
        collectionname: base.collectionname,
        collectionid: base.collectionid + (i % 1000),
        price: Math.floor(base.price * (0.8 + Math.random() * 0.4)), // ±20%
      };
      database.push(newItem);
    }

    return database;
  }

  const repeatedDatabase = generateLargeDatabase(baseData, 10000);

  const ITEMS_PER_PAGE = 30;
  const totalPages = Math.ceil(repeatedDatabase.length / ITEMS_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = repeatedDatabase.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const dogecoinPrice = 0.1957;

  return (
    <Tabs defaultValue="listings" className="relative">
      <TabsList className="my-4 flex shrink-0 flex-wrap items-center justify-between bg-transparent">
        <div className="my-2 flex list-none gap-5 overflow-x-auto p-0 select-none">
          <TabsTrigger value="listings" className="text-md">
            Listings
          </TabsTrigger>
          <TabsTrigger value="activity" className="text-md">
            Activity
          </TabsTrigger>
        </div>
        <TabsContent value="listings">
          <div className="absolute right-0 flex gap-2 text-center text-white">
            <Filter />
            <Filter />
            <Filter />
            <Filter />
          </div>
        </TabsContent>
      </TabsList>
      <TabsContent value="listings">
        <div className="tiny:gap-5 four:grid-cols-5 three:grid-cols-4 two:grid-cols-3 tiny:grid-cols-2 mt-4 grid grid-cols-2 gap-2">
          {currentItems.map((item) => (
            <Card
              key={item.id}
              className="relative w-56 gap-0! pt-0 pb-0 hover:border-[#8c45ff] hover:[&_div]:[&_button]:bg-[#8c45ff] hover:[&_div]:[&_button]:text-white"
            >
              <div className="pointer-events-none absolute top-0 right-0 rounded-bl-[12px] bg-[#0000006b] px-2 py-0 text-[0.9rem] font-semibold text-white">
                #{item.id}
              </div>
              <Link href={`/inscription/${item.id}`}>
                <Image
                  src={item.imageurl}
                  alt={`BSOD #${item.id}`}
                  width={224}
                  height={224}
                  className="block aspect-square w-full rounded-[12px] bg-[#00000080] object-contain [image-rendering:pixelated]"
                  unoptimized
                />
              </Link>
              <div className="flex h-full flex-col px-3 pt-1 pb-3">
                <div className="my-1 flex justify-center gap-4 text-[1.1rem] leading-[1.2] font-semibold text-white">
                  <span>{item.collectionname}</span>
                  <span>#{item.collectionid}</span>
                </div>
                <div className="mt-auto border-t border-white/10 py-1">
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
                <Dialog>
                  <DialogTrigger className="font-inherit w-full cursor-pointer rounded-[12px] border-0 bg-[#e6d8fe] px-4 py-2 text-[1em] font-extrabold text-[#9c63fa] transition-all duration-250 ease-in-out">
                    Buy
                  </DialogTrigger>
                  <DialogContent className="my-[50px] box-border flex min-h-[500px] w-xl max-w-[calc(100%-1rem)] shrink-0 grow-0 scale-100 flex-col overflow-visible rounded-[12px] bg-[#ffffff1f] p-6 opacity-100 backdrop-blur-xl transition-opacity duration-200 ease-linear">
                    <DialogHeader>
                      <DialogTitle className="mt-0 mb-2 text-center text-3xl leading-[1.1] font-semibold text-[#e6d8fe]">
                        Buy {item.collectionname}
                      </DialogTitle>
                      <DialogDescription></DialogDescription>
                      <div className="mb-2 flex max-h-104 flex-wrap justify-center gap-2.5 overflow-y-auto">
                        <div className="rounded-[12px] bg-[#00000080] p-2">
                          <div className="flex">
                            <Image
                              src={item.imageurl}
                              alt={`Dogemaps #${item.id}`}
                              width={144}
                              height={144}
                              className="mx-auto h-36 w-36 rounded-md text-[0.8rem]"
                              unoptimized
                            />
                          </div>
                          <div className="mt-2 text-center text-[1rem] text-white">
                            {item.collectionname} #{item.collectionid}
                            <div className="text-center text-[0.8rem] text-[#dfc0fd]">
                              #{item.id}
                            </div>
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
                        <div className="text-[0.95rem] text-white">
                          Network fee
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
                          $
                          {((item.price * 1.028 + 0.5) * dogecoinPrice).toFixed(
                            2,
                          )}
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
          ))}
        </div>
        <Pagination className="mt-5">
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage - 1);
                }}
                className="rounded-md bg-[#111] text-white transition-all hover:bg-[#1c1c1c]"
              />
            </PaginationItem>

            {(() => {
              const pageButtons: (number | string)[] = [];
              if (totalPages <= 7) {
                for (let i = 1; i <= totalPages; i++) pageButtons.push(i);
              } else if (currentPage <= 4) {
                pageButtons.push(1, 2, 3, 4, 5, "...", totalPages);
              } else if (currentPage >= totalPages - 3) {
                pageButtons.push(
                  1,
                  "...",
                  totalPages - 4,
                  totalPages - 3,
                  totalPages - 2,
                  totalPages - 1,
                  totalPages,
                );
              } else {
                pageButtons.push(
                  1,
                  "...",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "...",
                  totalPages,
                );
              }

              return pageButtons.map((page, idx) =>
                typeof page === "number" ? (
                  <PaginationItem key={idx}>
                    <PaginationLink
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(page);
                      }}
                      isActive={page === currentPage}
                      className={`flex h-[38px] min-w-[38px] items-center justify-center rounded-md border transition-all ${
                        page === currentPage
                          ? "border-yellow-400 bg-[#111] text-yellow-400"
                          : "border-transparent bg-[#111] text-white hover:border-white/20 hover:bg-[#1c1c1c]"
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ) : (
                  <PaginationItem key={idx}>
                    <PaginationEllipsis className="text-white/60" />
                  </PaginationItem>
                ),
              );
            })()}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className="rounded-md bg-[#111] text-white transition-all hover:bg-[#1c1c1c]"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </TabsContent>
      <TabsContent value="activity">
        <div className="mb-8">
          <FloorPriceChart />
        </div>
      </TabsContent>
    </Tabs>
  );
}
