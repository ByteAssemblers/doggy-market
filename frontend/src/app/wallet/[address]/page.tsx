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
      <h1 className="text-3xl leading-[1.1  ]">{address}</h1>
      <Tabs defaultValue="drc" className="relative">
        <TabsList className="flex justify-between items-center flex-wrap shrink-0 my-4 bg-transparent">
          <div className="flex my-2 overflow-x-auto select-none list-none p-0 gap-5">
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
              className="absolute flex items-center right-0 text-white"
            >
              <button className="p-1.5 bg-none leading-0 rounded-xl">
                <EllipsisVertical />
              </button>
            </TabsContent>
            <TabsContent
              value="dogemaps"
              className="absolute flex items-center right-0 text-white"
            >
              <button className="p-1.5 bg-none leading-0 rounded-xl">
                <Filter />
              </button>
              <button className="p-1.5 bg-none leading-0 rounded-xl">
                <EllipsisVertical />
              </button>
            </TabsContent>
            <TabsContent
              value="history"
              className="absolute flex items-center right-0 text-white"
            >
              <button className="p-1.5 bg-none leading-0 rounded-xl">
                <EllipsisVertical />
              </button>
            </TabsContent>
          </div>
        </TabsList>
        <TabsContent value="drc">
          <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
            <TableHeader className="text-[#8a939b] font-normal text-[0.95rem] text-left">
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
                  <TableCell className="text-center px-0 w-auto">
                    <Link href="/dxcn">
                      <div className="w-[42px] h-[42px] m-auto align-middle object-cover flex bg-[#212121] text-[0.7rem] justify-center items-center select-none rounded-full">
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
                        className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                      />
                      587.77
                    </div>
                    <div className="ml-5 font-medium text-[90%] leading-none text-[#fffc]">
                      $119.90
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <h2 className="mt-16 mb-5 leading-[1.1] text-2xl">Activity</h2>
          <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
            <TableHeader className="text-[#8a939b] font-normal text-[0.95rem] text-left">
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
                      className="font-medium text-[#dfc0fd] decoration-inherit cursor-pointer"
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
                      className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                    >
                      DNKjZ...oXKVY
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link
                      href="wallet/DRjY9RJfhQGLxmwa4EVh66az2KuXyzh1tB"
                      className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
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
          <div className="flex relative">
            <div className="relative overflow-hidden grow">
              <div className="grid gap-5 grid-cols-[repeat(auto-fill,minmax(12rem,1fr))]">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center relative overflow-hidden rounded-xl bg-[#4c505c33] p-4 text-center border-2 border-transparent transition-all duration-150 ease-in-out"
                  >
                    <div className="flex items-center justify-center w-32 h-32">
                      <Link
                        href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                        className="h-full w-full"
                      >
                        <Image
                          src="https://cdn.doggy.market/content/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                          alt="nft"
                          width={128}
                          height={128}
                          className="object-contain rounded-xl w-auto h-full max-w-32 max-h-32 bg-[#444] text-[0.8rem] select-none pointer-events-none"
                          unoptimized
                        />
                      </Link>
                    </div>
                    <div className="flex w-full justify-center text-[1.1rem] my-1.5 leading-[1.2]">
                      <span>doginals</span>
                      <span className="ml-4">#277</span>
                    </div>
                    <div className="w-full mt-auto border-t border-white/10 py-2">
                      <div className="text-[0.9rem]">
                        <Link href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0">
                          #35898655
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="flex flex-col items-center relative overflow-hidden rounded-xl bg-[#4c505c33] p-4 text-center border-2 border-transparent transition-all duration-150 ease-in-out">
                  <div className="flex items-center justify-center w-32 h-32">
                    <Link
                      href="/inscription/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                      className="h-full w-full"
                    >
                      <Image
                        src="https://cdn.doggy.market/content/de22f91ce12fba3f60c6f53c1fd676f4a4c67d60cbde39cb933fb37ca677b3bci0"
                        alt="nft"
                        width={128}
                        height={128}
                        className="object-contain rounded-xl w-auto h-full max-w-32 max-h-32 bg-[#444] text-[0.8rem] select-none pointer-events-none"
                        unoptimized
                      />
                    </Link>
                  </div>
                  <div className="flex w-full justify-center text-[1.1rem] my-1.5 leading-[1.2]">
                    <span>Fronk Cartel</span>
                    <span className="ml-4">#277</span>
                  </div>
                  <div className="w-full mt-auto border-t border-white/10 py-2">
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
            <TableHeader className="text-[#8a939b] font-normal text-[0.95rem] text-left">
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
