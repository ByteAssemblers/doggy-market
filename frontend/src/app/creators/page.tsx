import { ChevronLeft } from "lucide-react";

export default function Creators() {
  return (
    <>
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Set up your wallet to enter creators dashboard
      </div> */}

      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center">
          <button className="rounded-[12px] border border-transparent px-4 py-2 text-[1em] font-medium font-inherit bg-[#1a1a1a] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#222]">
            Enter dashboard
          </button>
        </div>
        <div className="mt-4 text-[0.9rem] ">
          All collections will be assigned to your wallet D7xs2...4HjSm
        </div>
      </div> */}

      {/* <div className="flex gap-x-8 mb-8">
        <button className="rounded-[12px] border border-transparent px-4 py-2 text-[1em] font-medium font-inherit bg-[#1a1a1a] transition-all duration-200 ease-in-out cursor-pointer hover:bg-[#222]">
          List Collection
        </button>
      </div>
      <div>Your collections will be displayed here</div> */}

      <button className="font-inherit inline-flex cursor-pointer items-center rounded-[12px] border border-transparent bg-[#1a1a1a] pt-1 pr-2 pb-1 pl-0 text-[1em] font-medium transition-all duration-200 ease-in-out">
        <ChevronLeft />
        <span>Go back</span>
      </button>
      <h2 className="mx-0 my-[0.83em] block text-[1.5em] leading-[1.1] font-bold">
        List collection
      </h2>
      <div>
        <div className="mb-6">
          <div className="mb-2">Collection name:</div>
          <input
            type="text"
            placeholder="My collection"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">
            <div className="mb-1">Collection symbol:</div>
            <div className="text-[0.9rem] text-[#ffffffe6]">
              Minimum 4 characters, only lowercase letters a-z and "-" allowed
            </div>
          </div>
          <input
            type="text"
            placeholder="my-collection"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">Collection description:</div>
          <textarea className="text-fieldtext bg-field overflow-wrap break-word inline-block h-28 w-80 max-w-full cursor-text resize-none border border-gray-400 bg-[#3b3b3b] p-0.5 text-start font-mono text-[0.75rem] leading-normal tracking-normal whitespace-pre-wrap" />
        </div>
        <div className="mb-6">
          <div className="mb-2">Collection profile inscription id:</div>
          <input
            type="text"
            placeholder="15f3b73df7e5c072becb1d84191843ba080734805addfccb650929719080f62ei0"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">X (twitter) link:</div>
          <input
            type="text"
            placeholder="https://x.com/mycollection"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">Website url (optional):</div>
          <input
            type="text"
            placeholder="https://mycollection.com"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">Collection total supply:</div>
          <input
            type="number"
            placeholder="10000"
            className="font-inherit mr-2 w-80 max-w-full border-b border-[tan] bg-transparent p-1.5 text-center text-inherit outline-none focus:border-[violet]"
          />
        </div>
        <div className="mb-6">
          <div className="mb-2">
            Inscriptions list (
            <a
              href="/collection-example.txt"
              target="_blank"
              className="text-[#c891ff]"
            >
              example
            </a>
            )
          </div>
          <textarea className="text-fieldtext bg-field overflow-wrap break-word inline-block h-28 w-80 max-w-full cursor-text resize-none border border-gray-400 bg-[#3b3b3b] p-0.5 text-start font-mono text-[0.75rem] leading-normal tracking-normal whitespace-pre-wrap" />
          <div className="flex">
            <button className="font-inherit cursor-pointer rounded-[12px] border border-transparent bg-[#1a1a1a] px-4 py-2 text-[1em] font-medium transition-all duration-200 ease-in-out">
              Add
            </button>
          </div>
        </div>
        <div>
          <button className="font-inherit cursor-pointer rounded-[12px] border border-transparent bg-[#1a1a1a] px-4 py-2 text-[1em] font-medium transition-all duration-200 ease-in-out">
            Submit collection
          </button>
        </div>
      </div>
    </>
  );
}
