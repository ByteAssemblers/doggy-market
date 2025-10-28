import Image from "next/image";
import Link from "next/link";

export default async function Inscription({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div className="flex flex-wrap gap-x-16 gap-y-4 items-start mt-4">
      <div className="flex justify-center w-0 basis-md max-w-full aspect-square grow shrink-0">
        <Image
          src={
            "https://cdn.doggy.market/content/873351e7f57f111003a88c8af36f7ffb871ca771c0160551814cfd335d0d76cdi0"
          }
          alt="Doge Inscription"
          width={536}
          height={536}
          className="grow object-contain rounded-[12px] pixelated"
          unoptimized
        />
      </div>
      <div className="flex flex-col w-0 basis-md max-w-full grow shrink-0">
        <div className="flex mb-8">
          <div>
            <div className="text-white text-[1.5rem] font-bold text-2xl">
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
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Inscription ID</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              {slug}
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Owner</div>
            <div className="font-bold text-[0.95em] break-words leading-[1.2] text-[#c891ff]">
              DQHzmgR23SmX3qhqJTWobtEDiXPHjR971Y
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Created</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              03.03.2023 02:08:23
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Content type</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              image/png
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Content length</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              590
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Output value</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              100000
            </div>
          </div>
          <div
            className="py-3 px-6 bg-[#1e1e1e]"
            style={{
              backgroundColor: "#ffffff10",
            }}
          >
            <div className="text-sm mb-[0.2rem]">Location</div>
            <div className="text-white font-bold text-[0.95em] break-words leading-[1.2]">
              80c347b95e8753ef319477e11250f3215a9e99b96472c128e7fb88bdf3024144:0:0
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="text-[1.2rem] font-bold mb-2">Traits</div>
          <div className="flex gap-2.5 flex-wrap">
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Background</div>
              <div>Red</div>
            </div>
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Fur</div>
              <div>Cream</div>
            </div>
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Body accessory</div>
              <div>Black collar</div>
            </div>
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Mouth</div>
              <div>Smiling</div>
            </div>
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
              style={{
                backgroundColor: "#ffffff10",
              }}
            >
              <div className="text-[0.8rem] text-[#fffc]">Eyes</div>
              <div>Doge eyes</div>
            </div>
            <div
              className="rounded-[12px] bg-[#ffffff0d] px-3 py-2 leading-[1.2] min-w-28"
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
