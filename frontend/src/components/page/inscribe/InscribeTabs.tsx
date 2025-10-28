"use client";

import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonGroup } from "@/components/ui/button-group";
import { Minus, Plus } from "lucide-react";

export default function InscribeTabs() {
  const [num, setNum] = useState(1);

  const handleDecrease = () => {
    setNum((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setNum((prev) => prev + 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNum(isNaN(value) || value < 1 ? 1 : value);
  };
  console.log(num);
  return (
    <>
      <Tabs defaultValue="files" className="relative">
        <TabsList className="my-4 flex shrink-0 flex-wrap items-center justify-between bg-transparent">
          <div className="my-2 flex list-none gap-5 overflow-x-auto p-0 select-none">
            <TabsTrigger value="files" className="text-md">
              Files
            </TabsTrigger>
            <TabsTrigger value="delegate" className="text-md">
              Delegate
            </TabsTrigger>
          </div>
        </TabsList>
        <TabsContent value="files">
          <div className="relative">
            <div className="relative mb-6 min-w-[20rem] rounded-[12px] border-2 border-dashed border-[#696969] bg-[#222] p-8 text-center">
              <div>Click to select files, or drop your files here</div>
              <div className="text-[0.9rem] text-[#ffffffe6]">
                Maximum 2500 files, if you want to inscribe more please split
                them into few batches
              </div>
            </div>
            <input
              type="file"
              multiple
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2">Network fee:</div>
            <div className="inline-flex gap-6">
              <div className="flex flex-col items-center justify-center rounded-[12px] border border-white/20 p-3 px-4 outline-1 outline-white/20">
                <div>Recommended</div>
                <div className="text-[0.9rem] text-[#fffc]">0.042 doge/kB</div>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[12px] border border-white/20 p-3 px-4">
                <div>Custom</div>
                {/* <div className="text-[0.9rem] text-[#fffc]">0.042 doge/kB</div> */}
              </div>
            </div>
          </div>
          <Button className="font-inherit rounded-[12px] border border-transparent bg-[#1a1a1a] px-4 py-2 text-[1em] font-medium text-white transition-all duration-200 ease-in-out hover:bg-[#222]">
            Inscribe
          </Button>
        </TabsContent>
        <TabsContent value="delegate">
          <div className="mb-6">
            <div className="mb-2">Inscription ID:</div>
            <input
              type="text"
              placeholder="Inscription ID"
              className="border-tan mr-2 w-[20rem] max-w-full border-0 border-b bg-transparent p-1 text-center text-inherit outline-none"
            />
          </div>
          <div className="mt-4 inline-flex justify-start rounded-[12px] border border-white/10">
            <ButtonGroup>
              <Button
                onClick={handleDecrease}
                className="bg-transparent text-white hover:bg-[#222]"
              >
                <Minus />
              </Button>
              <input
                type="number"
                value={num}
                min="1"
                step="1"
                onChange={handleChange}
                className="font-bold[appearance:textfield] w-16 border border-r border-l border-transparent bg-transparent text-center text-inherit outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <Button
                onClick={handleIncrease}
                className="bg-transparent text-white hover:bg-[#222]"
              >
                <Plus />
              </Button>
            </ButtonGroup>
          </div>
          <div className="my-4">
            <div className="flex">
              Estimated fee: ~
              <Image
                src="/assets/coin.svg"
                alt="coin"
                width={18}
                height={18}
                priority
                className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
              />
              {0.7 * num}
            </div>
          </div>
          <Button className="font-inherit rounded-[12px] border border-transparent bg-[#1a1a1a] px-4 py-2 text-[1em] font-medium text-white transition-all duration-200 ease-in-out hover:bg-[#222]">
            Inscribe
          </Button>
        </TabsContent>
      </Tabs>
    </>
  );
}
