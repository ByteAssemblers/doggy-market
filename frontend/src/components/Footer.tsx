"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full justify-center border-t border-[#454545] bg-[#0a0a0a] py-4">
      <div className="mx-4 w-full max-w-[1200px] text-[#eaeaea]">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
          <div className="flex items-center">
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={32}
              height={32}
              priority
              style={{ width: "auto", height: "auto" }}
            />
            <div className="mr-6 ml-4 text-[1.2rem] leading-[1.2] font-semibold">
              <span>Doggy</span>
              <span className="ml-[0.25em]">Market</span>
            </div>
            <Link
              href="https://x.com/doggy_market"
              className="mx-1 flex items-center rounded-[12px] border-0 p-[0.4rem_0.6rem] text-[0.8rem] leading-none text-white transition-all duration-150 ease-in-out"
            >
              <span>
                <svg
                  data-v-22f1ed45=""
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="gb-blur-svg"
                >
                  <path
                    strokeWidth="1.5"
                    d="M11.3032 9.42806L16.4029 3.5H15.1945L10.7663 8.64725L7.2296 3.5H3.15039L8.49863 11.2836L3.15039 17.5H4.35894L9.03516 12.0644L12.7702 17.5H16.8494L11.3029 9.42806H11.3032ZM9.6479 11.3521L9.10601 10.5771L4.7944 4.40978H6.65066L10.1302 9.38698L10.6721 10.162L15.195 16.6316H13.3388L9.6479 11.3524V11.3521Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span className="ml-[0.3rem]">X</span>
            </Link>
            <Link
              href="https://t.me/doggymarket"
              className="mx-1 flex items-center rounded-[12px] border-0 p-[0.4rem_0.6rem] text-[0.8rem] leading-none text-white transition-all duration-150 ease-in-out"
            >
              <span>
                <svg
                  data-v-22f1ed45=""
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  className="gb-blur-svg"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="3"
                    d="M40.83,8.48c1.14,0,2,1,1.54,2.86l-5.58,26.3c-.39,1.87-1.52,2.32-3.08,1.45L20.4,29.26a.4.4,0,0,1,0-.65L35.77,14.73c.7-.62-.15-.92-1.07-.36L15.41,26.54a.46.46,0,0,1-.4.05L6.82,24C5,23.47,5,22.22,7.23,21.33L40,8.69a2.16,2.16,0,0,1,.83-.21Z"
                  ></path>
                </svg>
              </span>
              <span className="ml-[0.3rem]">Telegram</span>
            </Link>
          </div>
          <div className="inline-flex flex-wrap gap-x-6 text-[0.9rem] text-[#c891d8]">
            <Link href="/inscribe">Inscribe on doginals</Link>
            <Link href="/creators">Creators dashboard</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
