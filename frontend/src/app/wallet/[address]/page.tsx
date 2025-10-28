"use client";
import { use } from "react";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { EllipsisVertical, Filter } from "lucide-react";

export default function WalletAddress({
  params,
}: {
  params: Promise<{ address: string }>;
}) {
  const { address } = use(params);

  return (
    <>
      <h1 className="leading-[1.1 ] text-3xl">{address}</h1>
      <Tabs defaultValue="drc" className="relative">
        <TabsList className="my-4 flex shrink-0 flex-wrap items-center justify-between bg-transparent">
          <div className="my-2 flex list-none gap-5 overflow-x-auto p-0 select-none">
            <TabsTrigger value="drc" className="text-md">
              DRC-20
            </TabsTrigger>
            <TabsTrigger value="nfts" className="text-md">
              NFTs
            </TabsTrigger>
            <TabsTrigger value="dogemaps" className="text-md">
              Dogemaps
            </TabsTrigger>
            <TabsTrigger value="history" className="text-md">
              History
            </TabsTrigger>
            <TabsContent
              value="nfts"
              className="absolute right-0 flex items-center text-white"
            >
              <button className="rounded-xl bg-none p-1.5 leading-0">
                <EllipsisVertical />
              </button>
            </TabsContent>
            <TabsContent
              value="dogemaps"
              className="absolute right-0 flex items-center text-white"
            >
              <button className="rounded-xl bg-none p-1.5 leading-0">
                <Filter />
              </button>
              <button className="rounded-xl bg-none p-1.5 leading-0">
                <EllipsisVertical />
              </button>
            </TabsContent>
            <TabsContent
              value="history"
              className="absolute right-0 flex items-center text-white"
            >
              <button className="rounded-xl bg-none p-1.5 leading-0">
                <EllipsisVertical />
              </button>
            </TabsContent>
          </div>
        </TabsList>
        <TabsContent value="drc">
          <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
            <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
              <TableRow className="">
                <TableHead></TableHead>
                <TableHead>Tick</TableHead>
                <TableHead>Total balance</TableHead>
                <TableHead>Available</TableHead>
                <TableHead>Inscribed</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[16px]">
              {[...Array(20)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell className="w-auto px-0 text-center">
                    <Link href="/dxcn">
                      <div className="m-auto flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#212121] object-cover align-middle text-[0.7rem] select-none">
                        dxcn
                      </div>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link href="/dxcn">dxcn</Link>
                  </TableCell>
                  <TableCell>1,507,100,000,000</TableCell>
                  <TableCell>1,507,100,000,000</TableCell>
                  <TableCell>0</TableCell>
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
                      587.77
                    </div>
                    <div className="ml-5 text-[90%] leading-none font-medium text-[#fffc]">
                      $119.90
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h2 className="mt-16 mb-5 text-2xl leading-[1.1]">Activity</h2>
          <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
            <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
              <TableRow className="">
                <TableHead>Inscription</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Tick</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>From</TableHead>
                <TableHead>To</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[16px]">
              {[...Array(20)].map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Link
                      href="/inscription/a93204a8caa7ba24ab3425974277fb39953773101ef0c22e47b8bb15081d777ei0"
                      className="cursor-pointer font-medium text-[#dfc0fd] decoration-inherit"
                    >
                      a93...ei0
                    </Link>
                  </TableCell>
                  <TableCell>receive</TableCell>
                  <TableCell>damm</TableCell>
                  <TableCell>1000</TableCell>
                  <TableCell>
                    <Link
                      href="wallet/DNKjZ3Tt3bwrVPFkvF43T8WcncXjDoXKVY"
                      className="cursor-pointer font-medium text-[#c891ff] decoration-inherit"
                    >
                      DNKjZ...oXKVY
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href="wallet/DRjY9RJfhQGLxmwa4EVh66az2KuXyzh1tB"
                      className="cursor-pointer font-medium text-[#c891ff] decoration-inherit"
                    >
                      DRjY9...zh1tB
                    </Link>
                  </TableCell>
                  <TableCell>
                    15.12.2023
                    <br />
                    23:24:54
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="nfts">
          <div className="relative flex">
            <div className="relative grow overflow-hidden">
              <div className="grid grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-5">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="relative flex flex-col items-center overflow-hidden rounded-xl border-2 border-transparent bg-[#4c505c33] p-4 text-center transition-all duration-150 ease-in-out"
                  >
                    <div className="flex h-32 w-32 items-center justify-center">
                      <Link
                        href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                        className="h-full w-full"
                      >
                        <Image
                          src="https://cdn.doggy.market/content/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                          alt="nft"
                          width={128}
                          height={128}
                          className="pointer-events-none h-full max-h-32 w-auto max-w-32 rounded-xl bg-[#444] object-contain text-[0.8rem] select-none"
                          unoptimized
                        />
                      </Link>
                    </div>
                    <div className="my-1.5 flex w-full justify-center text-[1.1rem] leading-[1.2]">
                      <span>doginals</span>
                      <span className="ml-4">#277</span>
                    </div>
                    <div className="mt-auto w-full border-t border-white/10 py-2">
                      <div className="text-[0.9rem]">
                        <Link href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0">
                          #35898655
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="relative flex flex-col items-center overflow-hidden rounded-xl border-2 border-transparent bg-[#4c505c33] p-4 text-center transition-all duration-150 ease-in-out">
                  <div className="flex h-32 w-32 items-center justify-center">
                    <Link
                      href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                      className="h-full w-full"
                    >
                      <Image
                        src="https://cdn.doggy.market/content/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                        alt="nft"
                        width={128}
                        height={128}
                        className="pointer-events-none h-full max-h-32 w-auto max-w-32 rounded-xl bg-[#444] object-contain text-[0.8rem] select-none"
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className="my-1.5 flex w-full justify-center text-[1.1rem] leading-[1.2]">
                    <span>Fronk Cartel</span>
                    <span className="ml-4">#277</span>
                  </div>
                  <div className="mt-auto w-full border-t border-white/10 py-2">
                    <div className="text-[0.9rem]">
                      <Link href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0">
                        #35898655
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="dogemaps">
          <div className="flex justify-center">no dogemaps on this wallet</div>
        </TabsContent>
        <TabsContent value="history">
          <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
            <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
              <TableRow className="">
                <TableHead>Item</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Buyer</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-[16px]">
              <TableRow>
                <TableCell>nothing to show</TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </>
  );
}
