"use client";
import Image from "next/image";
import Link from "next/link";
import { FloorPriceChart } from "@/components/FloorPriceChart";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TickInfo({ tick }: { tick: string }) {
  return (
    <div className="flex gap-x-8">
      <div className="w-0 grow basis-105">
        <div className="mt-4 mb-8 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://api.doggy.market/static/drc-20/dogi.png"
              alt={`DRC-20`}
              width={48}
              height={48}
              className="mr-4 h-12 w-12 rounded-full object-cover"
              unoptimized
            />
            <div className="flex flex-wrap items-center gap-x-12 gap-y-[0.2rem]">
              <h1 className="m-0 text-[2.3rem] leading-[1.1]">{tick}</h1>
              <div className="flex">
                <Link
                  href="https://www.minidogeart.com/"
                  className="mr-4 leading-none text-[#fffc]"
                >
                  <svg
                    data-v-1f7beb45=""
                    viewBox="-1.6 -1.6 19.2 19.2"
                    fill="currentColor"
                    width="24"
                    height="24"
                  >
                    <path d="M0 8a8 8 0 1116 0A8 8 0 010 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 01.597-.933A7.01 7.01 0 003.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 01-1.565-.667A6.964 6.964 0 001.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 00-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 00-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 017.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 01-.598-.933 8.853 8.853 0 01-.481-1.079 8.38 8.38 0 00-1.198.49 7.01 7.01 0 002.276 1.522zm-1.383-2.964A13.36 13.36 0 013.508 8.5h-2.49a6.963 6.963 0 001.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 002.275-1.521 8.376 8.376 0 00-1.197-.49 8.853 8.853 0 01-.481 1.078 6.688 6.688 0 01-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 008.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0014.982 8.5h-2.49a13.36 13.36 0 01-.437 3.008zM14.982 7.5a6.963 6.963 0 00-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 001.196-.49 7.01 7.01 0 00-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 00-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://x.com/minidogeart"
                  className="leading-none text-[#fffc]"
                >
                  <svg
                    data-v-1f7beb45=""
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path
                      strokeWidth="1.5"
                      d="M11.3032 9.42806L16.4029 3.5H15.1945L10.7663 8.64725L7.2296 3.5H3.15039L8.49863 11.2836L3.15039 17.5H4.35894L9.03516 12.0644L12.7702 17.5H16.8494L11.3029 9.42806H11.3032ZM9.6479 11.3521L9.10601 10.5771L4.7944 4.40978H6.65066L10.1302 9.38698L10.6721 10.162L15.195 16.6316H13.3388L9.6479 11.3524V11.3521Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <div className="-ml-12 flex flex-wrap">
            <div className="mb-2 ml-12">
              <div className="flex font-bold">
                <Image
                  src="/assets/coin.svg"
                  alt="coin"
                  width={18}
                  height={18}
                  priority
                  className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                />
                0.52
              </div>
              <div className="text-[90%] leading-none text-[#fffc]">Price</div>
            </div>
            <div className="mb-2 ml-12">
              <div className="font-bold">
                <span className="flex text-[#00ff7f]">
                  <svg
                    viewBox="-139.52 -43.52 599.04 599.04"
                    fill="currentColor"
                    className="mb-[-0.35em] w-[1.5em]"
                  >
                    <path d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
                  </svg>
                  <span>8.1%</span>
                </span>
              </div>
              <div className="text-[90%] leading-none text-[#fffc]">24h %</div>
            </div>
            <div className="mb-2 ml-12">
              <div className="flex font-bold">
                <Image
                  src="/assets/coin.svg"
                  alt="coin"
                  width={18}
                  height={18}
                  priority
                  className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                />
                11,025
              </div>
              <div className="text-[90%] leading-none text-[#fffc]">
                Volume (24h)
              </div>
            </div>
            <div className="mb-2 ml-12">
              <div className="flex font-bold">
                <Image
                  src="/assets/coin.svg"
                  alt="coin"
                  width={18}
                  height={18}
                  priority
                  className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                />
                96,042,454
              </div>
              <div className="text-[90%] leading-none text-[#fffc]">
                Total volume
              </div>
            </div>
            <div className="mb-2 ml-12">
              <div className="font-bold">$2.2M</div>
              <div className="text-[90%] leading-none text-[#fffc]">
                Market cap
              </div>
            </div>
          </div>
          <div className="-ml-12 flex flex-wrap">
            <div className="mb-2 ml-12">
              <div className="font-bold">21,000,000</div>
              <div className="text-[90%] leading-none text-[#fffc]">
                Total supply
              </div>
            </div>
            <div className="mb-2 ml-12">
              <div className="font-bold">100%</div>
              <div className="text-[90%] leading-none text-[#fffc]">Minted</div>
            </div>
            <div className="mb-2 ml-12">
              <div className="font-bold">11,108</div>
              <div className="text-[90%] leading-none text-[#fffc]">
                Holders
              </div>
            </div>
          </div>
        </div>
        <div>
          <FloorPriceChart />
        </div>
      </div>
      <div className="mt-6 w-105">
        <div className="h-160 overflow-y-auto">
          <div className="flex flex-col gap-4 px-1 text-white">
            {[...Array(40)].map((_, i) => (
              <div key={i}>
                <div className="my-1 flex justify-between px-1 text-[1.05rem] font-medium">
                  <div className="flex">
                    <Image
                      src="/assets/coin.svg"
                      alt="coin"
                      width={18}
                      height={18}
                      priority
                      className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                    />
                    0.52
                    <span className="text-[0.9rem] font-normal text-white/80">
                      /{tick}
                    </span>
                  </div>
                  <div className="text-base text-white/80">$0.1</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#4c505c33] p-2">
                    <div className="ml-1">
                      <div className="flex font-medium">
                        <Image
                          src="/assets/coin.svg"
                          alt="coin"
                          width={18}
                          height={18}
                          priority
                          className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                        />
                        519
                      </div>
                      <div className="text-[0.9rem] text-white/75">$104.90</div>
                    </div>
                    <div className="flex grow justify-center text-[#bb8e20]">
                      <ArrowRight />
                    </div>
                    <div className="leading-[1.2]">
                      <div className="flex items-center">
                        <Image
                          src="https://api.doggy.market/static/drc-20/dogi.png"
                          alt="coin"
                          width={19}
                          height={19}
                          priority
                          className="mr-1 h-[1.2em] w-[1.2em]"
                          unoptimized
                        />
                        <div className="font-medium">155</div>
                      </div>
                      <div className="w-full text-right text-[0.9rem] text-white/80">
                        {tick}
                      </div>
                    </div>
                    <Button className="text-md ml-4 bg-[#3d301b] text-[#feae32] hover:cursor-pointer hover:bg-[#b8860b] hover:text-white">
                      Buy
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#4c505c33] p-2">
                    <div className="ml-1">
                      <div className="flex font-medium">
                        <Image
                          src="/assets/coin.svg"
                          alt="coin"
                          width={18}
                          height={18}
                          priority
                          className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                        />
                        519
                      </div>
                      <div className="text-[0.9rem] text-white/75">$104.90</div>
                    </div>
                    <div className="flex grow justify-center text-[#bb8e20]">
                      <ArrowRight />
                    </div>
                    <div className="leading-[1.2]">
                      <div className="flex items-center">
                        <Image
                          src="https://api.doggy.market/static/drc-20/dogi.png"
                          alt="coin"
                          width={19}
                          height={19}
                          priority
                          className="mr-1 h-[1.2em] w-[1.2em]"
                          unoptimized
                        />
                        <div className="font-medium">155</div>
                      </div>
                      <div className="w-full text-right text-[0.9rem] text-white/80">
                        {tick}
                      </div>
                    </div>
                    <Button className="text-md ml-4 bg-[#3d301b] text-[#feae32] hover:cursor-pointer hover:bg-[#b8860b] hover:text-white">
                      Buy
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
