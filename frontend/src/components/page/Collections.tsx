"use client";

import Image from "next/image";
import Link from "next/link";

const database = [
  {
    id: 1,
    name: "Doginal Mini Doges",
    floorPrice: 340,
    percent: -2.6,
    volume: 1103,
    addressurl: "minidoges",
    imageurl:
      "https://api.doggy.market/inscriptions/4f7b03a66f49a21ec4391eaad0073c41799b461ab28cde0ccf809c0a8b5c997ci0/content",
    verify: true,
  },
  {
    id: 2,
    name: "Bored Pack Club",
    floorPrice: 50,
    percent: 0,
    volume: 600,
    addressurl: "boredpackclub",
    imageurl:
      "https://api.doggy.market/inscriptions/7fe10c20fef4a7faf23df9ece6c462f445abeed7991e71591ea73489174fe26ei0/content",
    verify: false,
  },
  {
    id: 3,
    name: "Taproot Doges",
    floorPrice: 28,
    percent: 75,
    volume: 387.5,
    addressurl: "taprootdoges",
    imageurl:
      "https://api.doggy.market/inscriptions/55395def5df99b7f6d8827e40c19c9c86d497fc411281d6483bb2405f3facbb5i0/content",
    verify: false,
  },
  {
    id: 4,
    name: "Doginal Maxi Biz",
    floorPrice: 280,
    percent: 0,
    volume: 280,
    addressurl: "dmb",
    imageurl: "https://doggy.market/nfts/dmb.jpg",
    verify: true,
  },
  {
    id: 5,
    name: "DU$TINAL DOGS",
    floorPrice: 19,
    percent: 0,
    volume: 114,
    addressurl: "dustinal-dogs",
    imageurl:
      "https://api.doggy.market/inscriptions/004a0578dc472e9a791a6c6daf1aa6d32143f84497ef779453f7379264686077i0/content",
    verify: false,
  },
  {
    id: 6,
    name: "WOW! Doginalcoin!",
    floorPrice: 15,
    percent: 16.3,
    volume: 67.69,
    addressurl: "wow-doginalcoin",
    imageurl:
      "https://api.doggy.market/inscriptions/8a091c886814f5eaa6f56f8e0848f5b1ac92ce56966ee58a30a421ccb019f9e9i0/content",
    verify: false,
  },
  {
    id: 7,
    name: "Doogles",
    floorPrice: 60,
    percent: -23.1,
    volume: 65,
    addressurl: "doogles",
    imageurl:
      "https://api.doggy.market/inscriptions/6b633c9d042f0f58774845a7d5a1c2fad4137bffdb18a71708ba38d4677bde31i0/content",
    verify: false,
  },
  {
    id: 8,
    name: "DoginalMfers",
    floorPrice: 16.99,
    percent: 0,
    volume: 52.22,
    addressurl: "doginalmfers",
    imageurl:
      "https://api.doggy.market/inscriptions/e54d8e39221551747923e9871e7667fe2443b07e2d3fdd2e504e310414dbc3d2i0/content",
    verify: false,
  },
  {
    id: 9,
    name: "Dogecats",
    floorPrice: 20,
    percent: 17.6,
    volume: 51,
    addressurl: "dogecats",
    imageurl:
      "https://api.doggy.market/inscriptions/d2e85b8d110e27f77371783f8e6406f132a05b2aa102e49163bb279178dcf967i0/content",
    verify: false,
  },
];

export default function Collections() {
  return (
    <>
      <h2 className="mt-8 mb-6 text-[1.6rem] leading-[1.1]">Collections</h2>
      {/* <div className="flex flex-wrap gap-x-16"> */}
      <div className="col:grid col:grid-flow-col col:grid-rows-5 gap-x-8">
        {database.map((item) => (
          <Link
            key={item.id}
            href={`/nfts/${item.addressurl}`}
            className="flex grow items-center rounded-[12px] px-4 py-3 text-white transition-all duration-150 ease-in-out hover:bg-[#1D1E20]"
          >
            <div className="min-w-[0.7rem] text-[1.2rem] font-bold">
              {item.id}
            </div>
            <div className="relative mx-[1.4rem] my-0 shrink-0">
              <Image
                src={item.imageurl}
                alt={`Collections #${item.addressurl}`}
                width={64}
                height={64}
                className="image-pixelated h-16 w-16 rounded-full bg-[#212121] object-cover"
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
            <div>
              <div className="mb-1 max-w-[18rem] text-[1.2rem] leading-[1.2] font-semibold">
                {item.name}
              </div>
              <div className="flex text-[0.9rem] leading-[1.2] font-normal text-[#fffc]">
                Floor price:&#xA0;
                <span className="flex font-medium whitespace-nowrap text-[#fffffff2]">
                  <Image
                    src="/assets/coin.svg"
                    alt="coin"
                    width={16}
                    height={16}
                    priority
                    className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                  />
                  {item.floorPrice}&#xA0;
                  {item.percent == 0 && <></>}
                  {item.percent > 0 && (
                    <span className="flex text-[0.8rem] text-[#00FF7F]">
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
                        <span>{item.percent}%</span>
                      </span>
                    </span>
                  )}
                  {item.percent < 0 && (
                    <span className="flex text-[0.8rem] text-[#ff6347]">
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
                        <span>{-item.percent}%</span>
                      </span>
                    </span>
                  )}
                </span>
              </div>
            </div>
            <div className="ml-auto flex pl-6 whitespace-nowrap">
              <Image
                src="/assets/coin.svg"
                alt="coin"
                width={18}
                height={18}
                priority
                className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
              />
              {item.volume.toLocaleString()}
            </div>
          </Link>
        ))}
        <Link
          href="/nfts"
          className="flex items-center justify-center rounded-[12px] px-4 py-3 font-bold text-[#fbb9fb] transition-all duration-150 ease-in-out hover:bg-[#1D1E20] hover:text-[violet]"
        >
          <div className="flex h-16 items-center">Show all collections</div>
        </Link>
      </div>
    </>
  );
}
