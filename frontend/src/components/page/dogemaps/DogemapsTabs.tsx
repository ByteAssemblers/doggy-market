"use client";

import { useState } from "react";
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
import { Filter } from "lucide-react";
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

const repeatedDatabase = Array(279274)
  .fill(null)
  .map((_, index) => ({
    ...database[index % database.length], // Cycle through the original database
    id: 1000000 + index, // Ensure unique IDs 279274
  }));

const dogecoinPrice = 0.1957;

export default function DogemapsTabs() {
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

  return (
    <Tabs defaultValue="listings" className="relative">
      <TabsList className="flex justify-between items-center flex-wrap shrink-0 my-4 bg-transparent">
        <div className="flex my-2 overflow-x-auto select-none list-none p-0 gap-5">
          <TabsTrigger value="listings" className="text-md">
            Listings
          </TabsTrigger>
          <TabsTrigger value="packs" className="text-md">
            Packs
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
            <DogemapCard
              key={item.id}
              item={item}
              dogecoinPrice={dogecoinPrice}
            />
          ))}
        </div>
        <Pagination className="mt-5">
          <PaginationContent className="flex items-center space-x-2">
            {/* Previous Button */}
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

            {/* Dynamic Page Buttons */}
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

            {/* Next Button */}
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
      <TabsContent value="packs">Packs</TabsContent>
      <TabsContent value="activity">Activity</TabsContent>
    </Tabs>
  );
}
