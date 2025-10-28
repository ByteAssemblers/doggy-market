import Image from "next/image";
import Link from "next/link";

export default async function Inscription({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="mt-4 flex flex-wrap items-start gap-x-16 gap-y-4">
      <div className="flex aspect-square w-0 max-w-full shrink-0 grow basis-md justify-center">
        <Image
          src={
            "https://cdn.doggy.market/content/873351e7f57f111003a88c8af36f7ffb871ca771c0160551814cfd335d0d76cdi0"
          }
          alt="Doge Inscription"
          width={536}
          height={536}
          className="pixelated grow rounded-[12px] object-contain"
          unoptimized
        />
      </div>
      <div className="flex w-0 max-w-full shrink-0 grow basis-md flex-col">
        <div className="mb-8 flex">
          <div>
            <div className="text-2xl text-[1.5rem] font-bold text-white">
              Doginal Mini Doges #6715
            </div>
            <div className="leading-[1.2]">
              <span className="text-white/75">#21349</span>
              <Link href={"/nfts/minidoges"} className="ml-4 text-[#c891ff]">
                Doginal Mini Doges
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-0.5 overflow-hidden rounded-[12px]">
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Inscription ID</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              {slug}
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Owner</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-[#c891ff]">
              DQHzmgR23SmX3qhqJTWobtEDiXPHjR971Y
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Created</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              03.03.2023 02:08:23
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Content type</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              image/png
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Content length</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              590
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Output value</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              100000
            </div>
          </div>
          <div
            className="bg-[#1e1e1e] px-6 py-3"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="mb-[0.2rem] text-sm">Location</div>
            <div className="text-[0.95em] leading-[1.2] font-bold break-words text-white">
              80c347b95e8753ef319477e11250f3215a9e99b96472c128e7fb88bdf3024144:0:0
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="mb-2 text-[1.2rem] font-bold">Traits</div>
          <div className="flex flex-wrap gap-2.5">
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Background</div>
              <div>Red</div>
            </div>
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Fur</div>
              <div>Cream</div>
            </div>
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Body accessory</div>
              <div>Black collar</div>
            </div>
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Mouth</div>
              <div>Smiling</div>
            </div>
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Eyes</div>
              <div>Doge eyes</div>
            </div>
            <div
              className="min-w-28 rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2]"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Head</div>
              <div>Baseball cap black</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
