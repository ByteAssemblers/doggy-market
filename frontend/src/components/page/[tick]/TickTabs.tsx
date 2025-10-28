"use client";
import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TickTabs({ tick }: { tick: string }) {
  return (
    <Tabs defaultValue="activity" className="relative">
      <TabsList className="flex justify-between items-center flex-wrap shrink-0 my-4 bg-transparent">
        <div className="flex my-2 overflow-x-auto select-none list-none p-0 gap-5">
          <TabsTrigger value="activity" className="text-md">
            Activity
          </TabsTrigger>
          <TabsTrigger value="holders" className="text-md">
            Holders
          </TabsTrigger>
          <TabsTrigger value="transaction" className="text-md">
            Transaction
          </TabsTrigger>
          <TabsTrigger value="info" className="text-md">
            Info
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="activity">
        <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
          <TableHeader className="text-[#8a939b] font-normal text-[0.95rem] text-left">
            <TableRow className="">
              <TableHead>Tick</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Seller</TableHead>
              <TableHead>Buyer</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[16px]">
            {[...Array(20)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center gap-x-[1.2rem]">
                    <Link
                      href={`/${tick}`}
                      className="basis-[42px] flex-none leading-0 text-inherit"
                    >
                      <Image
                        src="https://api.doggy.market/static/drc-20/dogi.png"
                        alt="DRC-20"
                        width={42}
                        height={42}
                        unoptimized
                      />
                    </Link>
                    <div>
                      <span className="leading-[1.1]">{tick}</span>
                      <div className="leading-none">
                        <Link
                          href="inscription/db36e9ab573c91ca9699b142c948a5f110f4ea60fda60a4666182c07fbfb1a0fi0"
                          className="text-[#dfc0fd] text-[0.7rem]"
                        >
                          #179506592
                        </Link>
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-[#00d181] bg-[#00d1814d] text-[0.8rem] px-1 py-0.5 rounded-[6px]">
                    sell
                  </span>
                  {/* <span className="text-[#dc3545] bg-[#dc35454d] text-[0.8rem] px-1 py-0.5 rounded-[6px]">unlist</span> */}
                  {/* <span className="text-[#027dff] bg-[#027dff4d] text-[0.8rem] px-1 py-0.5 rounded-[6px]">list</span> */}
                </TableCell>
                <TableCell>500</TableCell>
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
                    302
                  </div>
                  <div className="flex text-[0.9rem]">
                    <Image
                      src="/assets/coin.svg"
                      alt="coin"
                      width={16}
                      height={16}
                      priority
                      className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                    />
                    0.6/{tick}
                  </div>
                </TableCell>
                <TableCell>
                  <Link
                    href="https://doggy.market/wallet/DLMmfAuYGjjUABeBHBbkt16kL4zBwWFgtm"
                    className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                  >
                    DLMmf...WFgtm
                  </Link>
                </TableCell>
                <TableCell>
                  <Link
                    href="https://doggy.market/wallet/DMig5rkKZhpn3F7Mxw6wV2kra7La8sF4DP"
                    className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                  >
                    DMig5...sF4DP
                  </Link>
                </TableCell>
                <TableCell>14 minutes ago</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="holders">
        <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
          <TableHeader className="text-[#8a939b] font-normal text-[0.95rem] text-left">
            <TableRow className="">
              <TableHead>#</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Total balance</TableHead>
              <TableHead>
                % of total
                <br />
                supply
              </TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Inscribed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-[16px]">
            {[...Array(20)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <Link
                    href="wallet/DU8vFnq97hFhD6RG9kgaeu9avVbBgNxkFa"
                    className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                  >
                    DU8vFnq97hFhD6RG9kgaeu9avVbBgNxkFa
                  </Link>
                </TableCell>
                <TableCell>1,000,000</TableCell>
                <TableCell>4.8%</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1,000,000</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="transaction">
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
                <TableCell>transfer</TableCell>
                <TableCell>{tick}</TableCell>
                <TableCell>100</TableCell>
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
                  27.10.2025
                  <br />
                  03:49:38
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="info">
        <div className="flex">
          <div className="mr-8">
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Inscription</div>
              <div className="font-bold">
                <Link
                  href="/inscription/0bd32d69ca2221f3fc34d99aa14bccc2af10eedc7514770ae842ab9a72468743i0"
                  className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                >
                  0bd32...743i0
                </Link>
              </div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Total supply</div>
              <div className="font-bold">21,000,000</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Minted</div>
              <div className="font-bold">21,000,000 | 100%</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Mint limit</div>
              <div className="font-bold">1,000</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Decimals</div>
              <div className="font-bold">18</div>
            </div>
          </div>
          <div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Deployer address</div>
              <div className="font-bold">
                <Link
                  href="/wallet/DAiBiq6oNcUZZV7xVUxJ59Skbovx8NkLwu"
                  className="font-medium text-[#c891ff] decoration-inherit cursor-pointer"
                >
                  DAiBi...NkLwu
                </Link>
              </div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Deployed at</div>
              <div className="font-bold">11.03.2023 10:22:28</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Holders</div>
              <div className="font-bold">11,107</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Transfers</div>
              <div className="font-bold">120,236</div>
            </div>
            <div className="mb-2 whitespace-nowrap">
              <div className="text-[90%] leading-none">Mint transactions</div>
              <div className="font-bold">21,113</div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
