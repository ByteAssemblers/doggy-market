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
        <TabsList className="flex justify-between items-center flex-wrap shrink-0 my-4 bg-transparent">
          <div className="flex my-2 overflow-x-auto select-none list-none p-0 gap-5">
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
            <div className="relative min-w-[20rem] p-8 text-center bg-[#222] border-2 border-dashed border-[#696969] rounded-[12px] mb-6">
              <div>Click to select files, or drop your files here</div>
              <div className="text-[0.9rem] text-[#ffffffe6]">
                Maximum 2500 files, if you want to inscribe more please split
                them into few batches
              </div>
            </div>
            <input
              type="file"
              multiple
              className="opacity-0 absolute inset-0 cursor-pointer"
            />
          </div>
          <div className="mb-6">
            <div className="mb-2">Network fee:</div>
            <div className="inline-flex gap-6">
              <div className="flex flex-col justify-center items-center p-3 px-4 rounded-[12px] border border-white/20 outline-1 outline-white/20">
                <div>Recommended</div>
                <div className="text-[0.9rem] text-[#fffc]">0.042 doge/kB</div>
              </div>
              <div className="flex flex-col justify-center items-center p-3 px-4 rounded-[12px] border border-white/20">
                <div>Custom</div>
                {/* <div className="text-[0.9rem] text-[#fffc]">0.042 doge/kB</div> */}
              </div>
            </div>
          </div>
          <Button className="rounded-[12px] border border-transparent py-2 px-4 text-[1em] font-medium font-inherit text-white hover:bg-[#222] bg-[#1a1a1a] transition-all duration-200 ease-in-out">
            Inscribe
          </Button>
        </TabsContent>
        <TabsContent value="delegate">
          <div className="mb-6">
            <div className="mb-2">Inscription ID:</div>
            <input
              type="text"
              placeholder="Inscription ID"
              className="w-[20rem] max-w-full border-b border-tan mr-2 bg-transparent border-0 outline-none text-inherit text-center p-1"
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
                className="bg-transparent border border-transparent border-l border-r outline-none w-16 text-center text-inherit font-bold[appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
                className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
              />
              {0.7 * num}
            </div>
          </div>
          <Button className="rounded-[12px] border border-transparent py-2 px-4 text-[1em] font-medium font-inherit text-white hover:bg-[#222] bg-[#1a1a1a] transition-all duration-200 ease-in-out">
            Inscribe
          </Button>
        </TabsContent>
      </Tabs>
    </>
  );
}
