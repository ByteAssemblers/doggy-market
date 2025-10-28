import Image from "next/image";

export default function DogemapsInfo() {
  return (
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
            <span className="text-white/95">1</span>
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
            <span className="text-white/95">27</span>
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
            <span className="text-white/95">14,347,324</span>
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
          <div className="font-bold">25,880</div>
          <div className="text-[90%] leading-none text-white/75">Owners</div>
        </div>
        <div className="mb-2 ml-12">
          <div className="font-bold">5,932,711</div>
          <div className="text-[90%] leading-none text-white/75">Supply</div>
        </div>
        <div className="mb-2 ml-12">
          <div className="font-bold">279,269</div>
          <div className="text-[90%] leading-none text-white/75">Listed</div>
        </div>
      </div>
    </div>
  );
}
