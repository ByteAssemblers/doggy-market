"use client";

import Image from "next/image";
import Link from "next/link";

export function NftInfo({ nft }: { nft: string }) {
  return (
    <>
      <div className="mt-4 mb-8 flex items-center">
        <Image
          src="https://api.doggy.market/inscriptions/4f7b03a66f49a21ec4391eaad0073c41799b461ab28cde0ccf809c0a8b5c997ci0/content"
          alt="NFT"
          width={112}
          height={112}
          className="mr-6 h-28 w-28 shrink-0 rounded-full object-cover [image-rendering:pixelated]"
          unoptimized
        />
        <div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-2">
            <div className="flex items-center gap-x-4">
              <h1 className="m-0 text-[2.3rem] leading-[1.1]">
                Doginal Mini Doges {nft}
              </h1>
              <svg
                data-v-1f7beb45=""
                viewBox="0 0 20 20"
                fill="#f2c511"
                className="badge"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
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
          <div className="mt-2 leading-tight text-white/95">
            Much Wow! Very early! Starting shibescription 14578! Woof!
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
              <span className="text-white/95">350</span>
            </div>
            <div className="text-[90%] leading-none text-white/75">
              Floor price
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
              <span className="text-white/95">1,038</span>
            </div>
            <div className="text-[90%] leading-none text-white/75">
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
              <span className="text-white/95">27,059,680</span>
            </div>
            <div className="text-[90%] leading-none text-white/75">
              Total volume
            </div>
          </div>
          <div className="mb-2 ml-12">
            <div className="font-bold">3</div>
            <div className="text-[90%] leading-none text-white/75">
              Trades (24h)
            </div>
          </div>
          <div className="mb-2 ml-12">
            <div className="font-bold">1,873</div>
            <div className="text-[90%] leading-none text-white/75">Owners</div>
          </div>
          <div className="mb-2 ml-12">
            <div className="font-bold">10,000</div>
            <div className="text-[90%] leading-none text-white/75">Supply</div>
          </div>
          <div className="mb-2 ml-12">
            <div className="font-bold">1,198</div>
            <div className="text-[90%] leading-none text-white/75">Listed</div>
          </div>
        </div>
      </div>
    </>
  );
}
