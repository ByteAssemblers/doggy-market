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
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Filter } from "lucide-react";
import { FloorPriceChart } from "@/components/FloorPriceChart";

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
    totalCount: number = 10000
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
      <TabsList className="flex justify-between items-center flex-wrap shrink-0 my-4 bg-transparent">
        <div className="flex my-2 overflow-x-auto select-none list-none p-0 gap-5">
          <TabsTrigger value="listings" className="text-md">
            Listings
          </TabsTrigger>
          <TabsTrigger value="activity" className="text-md">
            Activity
          </TabsTrigger>
        </div>
        <TabsContent value="listings">
          <div className="absolute flex text-center text-white gap-2 right-0">
            <Filter />
            <Filter />
            <Filter />
            <Filter />
          </div>
        </TabsContent>
      </TabsList>
      <TabsContent value="listings">
        <div className="mt-4 grid tiny:gap-5 gap-2 grid-cols-2 four:grid-cols-5 three:grid-cols-4 two:grid-cols-3 tiny:grid-cols-2">
          {currentItems.map((item) => (
            <Card key={item.id} className="relative w-56 pt-0 pb-0 gap-0!">
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
                <Button className="w-full font-extrabold text-[#9c63fa] border-none transition-all duration-250 ease-in-out bg-[#e6d8fe] text-md">
                  Buy
                </Button>
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
                className="bg-[#111] text-white rounded-md hover:bg-[#1c1c1c] transition-all"
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
                  totalPages
                );
              } else {
                pageButtons.push(
                  1,
                  "...",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "...",
                  totalPages
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
                      className={`min-w-[38px] h-[38px] flex items-center justify-center rounded-md border transition-all
                ${
                  page === currentPage
                    ? "border-yellow-400 text-yellow-400 bg-[#111]"
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
                )
              );
            })()}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(currentPage + 1);
                }}
                className="bg-[#111] text-white rounded-md hover:bg-[#1c1c1c] transition-all"
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
