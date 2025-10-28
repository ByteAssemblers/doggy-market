"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const database = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Doginal Mini Doges #${i + 1}`,
  urlname: "minidoges",
  floorprice: Math.floor(Math.random() * 900) + 100, // 100–1000
  twentyfourhourvolume: Math.floor(Math.random() * 10000) + 500, // 500–10,000
  totalvolume: Math.floor(Math.random() * 50000000) + 100000, // 100k–50M
  trades: Math.floor(Math.random() * 50) + 1, // 1–50
  items: Math.floor(Math.random() * 10000) + 1000, // 1k–10k
  owners: Math.floor(Math.random() * 3000) + 500, // 500–3k
  imageurl: `https://api.doggy.market/static/drc-20/dogi.png`,
  verify: Math.random() > 0.3, // 70% chance true
}));

export default function nfts() {
  const router = useRouter();

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="m-0 text-[1.6rem] leading-[1.1]">Collections</h2>
        <div></div>
        <button></button>
      </div>
      <div className="px-2.0 w-full overflow-x-auto">
        <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
          <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
            <TableRow className="">
              <TableHead>#</TableHead>
              <TableHead>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</TableHead>
              <TableHead>Collection name</TableHead>
              <TableHead>Floor price</TableHead>
              <TableHead>Volume (24h)</TableHead>
              <TableHead>Total volume</TableHead>
              <TableHead>Trades (24h)</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Owners</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {database.map((item) => (
              <TableRow
                key={item.id}
                className="cursor-pointer text-[16px] text-white transition-all duration-150 ease-in-out"
                onClick={() => router.push(`/nfts/${item.urlname}`)}
              >
                <TableCell className="w-auto rounded-tl-[12px] rounded-bl-[12px] px-3 py-4 align-middle font-bold">
                  {item.id}
                </TableCell>
                <TableCell>
                  <div className="relative mx-[1.4rem] my-0 shrink-0">
                    <Image
                      src={item.imageurl}
                      alt={`DRC-20 #${item.name}`}
                      width={42}
                      height={42}
                      className="h-[42px] w-[42px] rounded-full object-cover align-middle"
                      unoptimized
                    />
                    {item.verify && (
                      <svg
                        viewBox="0 0 20 20"
                        fill="#f2c511"
                        width="24"
                        height="24"
                        stroke="#000000"
                        strokeWidth="1"
                        className=""
                        style={{
                          position: "absolute",
                          top: 0,
                          right: "-0.4rem",
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    )}
                  </div>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <div className="flex">
                    <Image
                      src="/assets/coin.svg"
                      alt="coin"
                      width={18}
                      height={18}
                      priority
                      className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                    />
                    {item.floorprice.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <Image
                      src="/assets/coin.svg"
                      alt="coin"
                      width={18}
                      height={18}
                      priority
                      className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                    />
                    {item.twentyfourhourvolume.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <Image
                      src="/assets/coin.svg"
                      alt="coin"
                      width={18}
                      height={18}
                      priority
                      className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                    />
                    {item.totalvolume.toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>{item.trades.toLocaleString()}</TableCell>
                <TableCell>{item.items.toLocaleString()}</TableCell>
                <TableCell>{item.owners.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
