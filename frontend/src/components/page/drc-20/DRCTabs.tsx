"use client";

import { useRouter } from "next/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";

const database = [
  {
    id: 1,
    tick: "dogx",
    price: 0.00005,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 105,
    totalvolume: 4151015,
    marketcap: 1050000,
    holders: 1000975,
    imageurl: "https://doggy.market/drc-20/dogx.png",
  },
  {
    id: 2,
    tick: "pepe",
    price: 0.021,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 21,
    totalvolume: 2924579,
    marketcap: 430500,
    holders: 4006,
    imageurl: "https://doggy.market/drc-20/pepe.png",
  },
  {
    id: 3,
    tick: "dogi",
    price: 0.48,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 96030778,
    marketcap: 10080000,
    holders: 11107,
    imageurl: "https://api.doggy.market/static/drc-20/dogi.png",
  },
  {
    id: 4,
    tick: "dbit",
    price: 0.0000000003,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 37200497,
    marketcap: 630000,
    holders: 7347,
    imageurl: "https://doggy.market/drc-20/dbit.jpg",
  },
  {
    id: 5,
    tick: "dcex",
    price: 0.62,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 23614553,
    marketcap: 186000,
    holders: 2806,
    imageurl: "https://doggy.market/drc-20/dcex.png",
  },
  {
    id: 6,
    tick: "$hub",
    price: 0.013,
    twentyfourhourpercent: -7.1,
    twentyfourhourvolume: 0,
    totalvolume: 18856294,
    marketcap: 273000,
    holders: 3055,
    imageurl: "https://doggy.market/drc-20/$hub.jpg",
  },
  {
    id: 7,
    tick: "dosu",
    price: 0.000000014,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 12173877,
    marketcap: 5679315,
    holders: 3107,
    imageurl: "https://doggy.market/drc-20/dosu.jpg",
  },
  {
    id: 8,
    tick: "wufi",
    price: 0.015,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 11847939,
    marketcap: 154000,
    holders: 1696,
    imageurl: "https://doggy.market/drc-20/wufi.png",
  },
  {
    id: 9,
    tick: "dubi",
    price: 0.077,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 10431556,
    marketcap: 77000,
    holders: 1449,
    imageurl: "https://doggy.market/drc-20/dubi.jpg",
  },
  {
    id: 10,
    tick: "oink",
    price: 0.000000000072,
    twentyfourhourpercent: 0,
    twentyfourhourvolume: 0,
    totalvolume: 10265870,
    marketcap: 302400,
    holders: 18123,
    imageurl: "https://doggy.market/drc-20/oink.jpg",
  },
];

for (let i = 11; i <= 100; i++) {
  const randomName = `token${i}`;
  const randomPrice = Number((Math.random() * 2).toFixed(10));
  const randomPercent = Number((Math.random() * 20 - 10).toFixed(2));
  const random24hVol = Math.floor(Math.random() * 10000);
  const randomTotalVol = Math.floor(Math.random() * 100000000);
  const randomMarketCap = Math.floor(Math.random() * 10000000);
  const randomHolders = Math.floor(Math.random() * 50000) + 1000;

  database.push({
    id: i,
    tick: randomName,
    price: randomPrice,
    twentyfourhourpercent: randomPercent,
    twentyfourhourvolume: random24hVol,
    totalvolume: randomTotalVol,
    marketcap: randomMarketCap,
    holders: randomHolders,
    imageurl: `https://doggy.market/drc-20/${randomName}.png`,
  });
}

const dogecoinPrice = 0.1957;

export default function DRCTabs() {
  const router = useRouter();

  function toFullNumber(value: number) {
    return value.toString().includes("e")
      ? value.toFixed(20).replace(/\.?0+$/, "")
      : value.toString();
  }

  function formatNumber(value: number, decimals = 6): string {
    if (value === 0) return "0";

    // Handle very small numbers (avoid scientific notation)
    if (Math.abs(value) < 0.000001) {
      return value.toFixed(12).replace(/\.?0+$/, ""); // up to 12 decimals, trimmed
    }

    // Normal numbers: format with a dynamic number of decimals
    const formatted = value.toFixed(decimals).replace(/\.?0+$/, "");
    return formatted;
  }

  return (
    <Tabs defaultValue="toptokens" className="relative">
      <TabsList className="my-4 flex shrink-0 flex-wrap items-center justify-between bg-transparent">
        <div className="my-2 flex list-none gap-5 overflow-x-auto p-0 select-none">
          <TabsTrigger value="toptokens" className="text-md">
            Top tokens
          </TabsTrigger>
          <TabsTrigger value="mintingnow" className="text-md">
            Minting now
          </TabsTrigger>
        </div>
        <TabsContent value="toptokens">
          <div className="absolute right-0 flex gap-2 text-center text-white">
            24h 7d 30d All
          </div>
        </TabsContent>
      </TabsList>
      <TabsContent value="toptokens">
        <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
          <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
            <TableRow className="">
              <TableHead>#</TableHead>
              <TableHead>&#xA0;&#xA0;&#xA0;&#xA0;&#xA0;</TableHead>
              <TableHead>Tick</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h %</TableHead>
              <TableHead>Volume (24h)</TableHead>
              <TableHead>Total volume</TableHead>
              <TableHead>Market cap</TableHead>
              <TableHead>Holders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {database.map((item) => (
              <TableRow
                key={item.id}
                className="cursor-pointer text-[16px] text-white transition-all duration-150 ease-in-out"
                onClick={() => router.push(`/${item.tick}`)}
              >
                <TableCell className="w-auto rounded-tl-[12px] rounded-bl-[12px] px-3 py-4 align-middle font-bold">
                  {item.id}
                </TableCell>
                <TableCell>
                  <Image
                    src={item.imageurl}
                    alt={`DRC-20 #${item.tick}`}
                    width={42}
                    height={42}
                    className="h-[42px] w-[42px] rounded-full object-cover align-middle"
                    unoptimized
                  />
                </TableCell>
                <TableCell>{item.tick}</TableCell>
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
                    {toFullNumber(item.price)}
                  </div>
                  <div className="ml-5 text-[90%] leading-none font-medium text-[#fffc]">
                    ${formatNumber(item.price * dogecoinPrice)}
                  </div>
                </TableCell>
                <TableCell>
                  {item.twentyfourhourpercent == 0 && <>0%</>}
                  {item.twentyfourhourpercent > 0 && (
                    <span className="flex text-[#00FF7F]">
                      <svg
                        viewBox="-139.52 -43.52 599.04 599.04"
                        fill="currentColor"
                        style={{
                          width: "1.5em",
                          marginBottom: "-0.35em",
                        }}
                      >
                        <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                      </svg>

                      <span className="pt-1">
                        <span>{item.twentyfourhourpercent}%</span>
                      </span>
                    </span>
                  )}
                  {item.twentyfourhourpercent < 0 && (
                    <span className="flex text-[#ff6347]">
                      <svg
                        viewBox="-139.52 -43.52 599.04 599.04"
                        fill="currentColor"
                        style={{
                          width: "1.5em",
                          marginBottom: "-0.35em",
                        }}
                      >
                        <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                      </svg>
                      <span className="pt-1">
                        <span>{-item.twentyfourhourpercent}%</span>
                      </span>
                    </span>
                  )}
                </TableCell>
                <TableCell>
                  {item.twentyfourhourvolume == 0 && <>-</>}
                  {item.twentyfourhourvolume != 0 && (
                    <>
                      <div className="flex">
                        <Image
                          src="/assets/coin.svg"
                          alt="coin"
                          width={18}
                          height={18}
                          priority
                          className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                        />
                        {item.twentyfourhourvolume}
                      </div>
                      <div className="ml-5 text-[90%] leading-none font-medium text-[#fffc]">
                        $
                        {(item.twentyfourhourvolume * dogecoinPrice).toFixed(2)}
                      </div>
                    </>
                  )}
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
                  <div className="ml-5 text-[90%] leading-none font-medium text-[#fffc]">
                    $
                    {Number(
                      (item.totalvolume * dogecoinPrice).toFixed(0),
                    ).toLocaleString()}
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
                    {item.marketcap.toLocaleString()}
                  </div>
                  <div className="ml-5 text-[90%] leading-none font-medium text-[#fffc]">
                    $
                    {Number(
                      (item.marketcap * dogecoinPrice).toFixed(0),
                    ).toLocaleString()}
                  </div>
                </TableCell>
                <TableCell>{item.holders.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="mintingnow">
        <Table className="w-full max-w-full border-separate border-spacing-0 leading-[1.2]">
          <TableHeader className="text-left text-[0.95rem] font-normal text-[#8a939b]">
            <TableRow className="">
              <TableHead>#</TableHead>
              <TableHead>Tick</TableHead>
              <TableHead>% minted</TableHead>
              <TableHead>Mints (24h)</TableHead>
              <TableHead>Holders</TableHead>
              <TableHead>Deployed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody></TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
