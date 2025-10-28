"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import {
  Search,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  EllipsisVertical,
  ArrowUpRight,
  Key,
  Trash,
  ChevronLeft,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { CopyButton } from "@/components/ui/copybutton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyAddress } from "@/components/ui/copyaddress";
import { Spinner } from "@/components/ui/spinner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

export default function Header() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [walletState, setWalletState] = useState<
    "empty" | "create" | "import" | "secret" | "mywallet" | "send"
  >("empty");

  const dogecoinPrice = 0.1957;

  const handleSetPassword = () => {
    if (!password) return setError("Please enter a password");
    if (password.length < 6)
      return setError("Password must be at least 6 characters");
    // if (!/[A-Z]/.test(password))
    //   return setError("Password must contain at least one uppercase letter");
    // if (!/[a-z]/.test(password))
    //   return setError("Password must contain at least one lowercase letter");
    // if (!/[0-9]/.test(password))
    //   return setError("Password must contain at least one number");
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
    //   return setError("Password must include a special character");
    if (password !== confirmPassword) return setError("Passwords don't match");

    setError("");
  };

  const handleLoading = async () => {
    try {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    } catch (err) {
      console.error("Failed loading: ", err);
    }
  };

  return (
    <div className="sticky w-full px-4 py-6 flex justify-center top-0 z-9999 bg-[#121212]">
      <div className="flex tiny:gap-4 gap-2 max-w-[1200px] w-full">
        <Link
          href="/"
          className="flex items-center tiny:px-4 -mt-[0.7rem] -mb-[0.7rem] shrink-0"
        >
          <Image
            src="https://doggy.market/assets/logo-D71O-L__.png"
            alt="logo"
            width={40}
            height={40}
            className="tiny:w-16 tiny:h-16"
            unoptimized
          />
        </Link>
        <div className="w-full relative">
          <InputGroup className="flex items-center leading-[26px] p-2 cursor-text bg-[#ffffff1f] h-11">
            <InputGroupInput
              id="search"
              name="search"
              placeholder="Search for tokens, collections, wallets & inscriptions"
            />
            <InputGroupAddon className="">
              <Search className="" />
            </InputGroupAddon>
          </InputGroup>
          <div className="bg-[#ffffff1f] backdrop-blur-xl rounded-[12px] p-2 text-white hidden absolute top-[calc(100%+10px)] left-0 right-0">
            Search Engine
          </div>
        </div>
        <Popover>
          <PopoverTrigger asChild className="relative">
            <Button className="flex items-center px-4 py-1 font-bold bg-[#ffffff1f] text-white h-11 border border-transparent hover:bg-transparent hover:border-[#ffffff52] gap-0">
              <span className="leading-none relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                  fill="currentColor"
                  style={{ width: "30px", height: "30px" }}
                >
                  <path d="M240-180.001q-57.922 0-98.961-41.038-41.038-41.039-41.038-98.961v-320q0-57.922 41.038-98.961 41.039-41.038 98.961-41.038h480q57.922 0 98.961 41.038 41.038 41.039 41.038 98.961v320q0 57.922-41.038 98.961-41.039 41.038-98.961 41.038H240Zm0-442.691h480q27.846 0 52 9.577t42.615 26.962V-640q0-39.692-27.461-67.154-27.462-27.461-67.154-27.461H240q-39.692 0-67.154 27.461-27.461 27.462-27.461 67.154v53.847q18.461-17.385 42.615-26.962 24.154-9.577 52-9.577Zm-93.154 124.076 472.769 114.231q6.616 1.615 13.923.308 7.308-1.308 11.923-6.308l159.616-134q-11.462-23.769-34.269-38.346Q748-577.308 720-577.308H240q-35 0-61.231 22.461-26.23 22.462-31.923 56.231Z"></path>
                </svg>
              </span>
              <span className="whitespace-nowrap ml-2.5 hidden md:flex text-[16px]">
                {walletState === "empty" && <>Open wallet</>}
                {walletState === "create" && <>Open wallet</>}
                {walletState === "import" && <>Open wallet</>}
                {walletState === "mywallet" && <>DA29j...pnDZf</>}
                {walletState === "secret" && <>DA29j...pnDZf</>}
                {walletState === "send" && <>DA29j...pnDZf</>}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="end">
            <div className="max-w-[calc(100vw-10px)] z-9990 visible mt-2 ">
              <div className="flex relative max-w-[400px] w-[min(400px,calc(100vw-1.5rem))] min-h-80 max-h-120 overflow-y-auto overscroll-contain leading-[1.4] whitespace-normal outline-none rounded-xl bg-[#ffffff1a] text-white backdrop-blur-[42px] transition-transform transition-visibility duration-200">
                <div className="flex relative w-full p-4 z-1 duration-200">
                  <div className="flex flex-col w-full">
                    {walletState === "empty" && (
                      <>
                        <div className="text-[1.4rem] text-center mb-4">
                          DoggyMarket Wallet
                        </div>
                        <div className="leading-[1.2] text-[90%]">
                          DoggyMarket comes with built-in wallet, there is no
                          need to download any browser extension. Your private
                          keys are stored in the browser and are never sent to
                          the server.
                        </div>
                        <div className="p-4 mt-6">
                          <button
                            onClick={() => setWalletState("create")}
                            className="w-full py-[0.7rem] mb-4 bg-white text-black rounded-xl border border-transparent px-4 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out hover:bg-[#dedede] cursor-pointer"
                          >
                            Create new wallet
                          </button>
                          <button
                            onClick={() => setWalletState("import")}
                            className="w-full bg-[#dbbdf9] text-[#8000ff] cursor-pointer rounded-xl border border-transparent px-4 py-2 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out hover:bg-[#c28bfa]"
                          >
                            Import wallet
                          </button>
                        </div>
                      </>
                    )}
                    {walletState === "create" && (
                      <>
                        <div className="text-center text-[1.2rem] my-4">
                          Set your wallet password
                        </div>
                        <div className="my-2 flex border border-white rounded-md">
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-[0.6em] py-2.5 border-none outline-none font-inherit text-inherit bg-transparent active:border"
                            placeholder="Enter password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="cursor-pointer p-[0.6em] inline-block overflow-hidden bg-transparent"
                          >
                            {showPassword ? (
                              <Eye size={18} />
                            ) : (
                              <EyeOff size={18} />
                            )}
                          </button>
                        </div>
                        <div className="my-2 flex border border-white rounded-md">
                          <input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full pl-[0.6em] py-2.5 border-none outline-none font-inherit text-inherit bg-transparent active:border"
                            placeholder="Confirm password"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="cursor-pointer p-[0.6em] inline-block overflow-hidden bg-transparent"
                          >
                            {showConfirmPassword ? (
                              <Eye size={18} />
                            ) : (
                              <EyeOff size={18} />
                            )}
                          </button>
                        </div>
                        {error && (
                          <div className="text-[95%] text-[#ff4500]">
                            {error}
                          </div>
                        )}
                        <div className="mt-auto">
                          <Button
                            onClick={() => setWalletState("mywallet")}
                            className="border-2 border-white text-white bg-none cursor-pointer rounded-xl px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out bg-transparent hover:text-black"
                          >
                            Skip
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="ml-4 bg-white text-black cursor-pointer rounded-xl border border-transparent px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out"
                          >
                            Set password
                          </Button>
                        </div>
                      </>
                    )}
                    {walletState === "import" && (
                      <>
                        <div className="text-[1.2rem] font-semibold my-1 text-center">
                          Import wallet
                        </div>
                        <div className="bg-[#ffe10026] text-[gold] font-semibold text-[0.85rem] px-[0.8rem] py-[0.4rem] mt-2 mb-2 leading-[1.2] rounded-xl">
                          Before you enter your seed phrase always verify that
                          URL address is&#xA0;
                          <span className="font-bold">doggy.market</span>
                        </div>
                        <Textarea
                          className="text-sm resize-none font-inherit rounded-lg w-full my-2 border-none bg-white/10 p-2.5 font-light h-32"
                          placeholder="Enter your secret phrase here (mnemonic or private key)"
                        ></Textarea>
                        {error && (
                          <div className="text-[95%] text-[#ff4500] mb-4">
                            Invalid seed phrase
                          </div>
                        )}
                        <div className="mt-auto">
                          <Button
                            onClick={() => setWalletState("empty")}
                            className="border-2 border-white text-white bg-none cursor-pointer rounded-xl px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out bg-transparent hover:text-black"
                          >
                            Go back
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="ml-4 bg-white text-black cursor-pointer rounded-xl border border-transparent px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out"
                          >
                            Import wallet
                          </Button>
                        </div>
                      </>
                    )}
                    {walletState === "secret" && (
                      <>
                        <div className="text-[1.2rem]">Your secret phrase:</div>
                        <div
                          className="my-2 mx-4 grid grid-cols-2 gap-x-2 gap-y-2"
                          translate="no"
                        >
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="rounded-md w-32 bg-[#202225] flex overflow-hidden"
                            >
                              <div className="bg-[#2c2f33] px-1 py-[0.1rem] select-none text-center w-10">
                                {i + 1}.
                              </div>
                              <div className="py-[0.1rem] px-[0.4rem]">
                                alien
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-center mt-4 mb-6">
                          <CopyButton text="alien" showText />
                        </div>
                        <div className="bg-black/20 p-2 text-[0.8rem] rounded-xl mb-4">
                          Anyone who knows these words can access your funds.
                          Before importing to other wallet make sure it supports
                          doginals protocol.
                        </div>
                        <div className="mt-auto">
                          <Button
                            onClick={() => setWalletState("mywallet")}
                            className="border-2 border-white text-white bg-none cursor-pointer rounded-xl px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out bg-transparent hover:text-black"
                          >
                            Go back
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="ml-2 bg-white text-black cursor-pointer rounded-xl border border-transparent px-4 py-5 text-[1em] font-medium font-inherit transition-all duration-200 ease-in-out"
                          >
                            I've saved these words
                          </Button>
                        </div>
                      </>
                    )}
                    {walletState === "mywallet" && (
                      <>
                        <div className="flex items-start">
                          <span className="flex px-[4.6rem] py-[0.3rem] rounded-sm cursor-pointer">
                            <CopyAddress
                              text="DA29jmZCZRP7jjMEdbDjmjdsBuvkTpnDZf"
                              showText
                            />
                          </span>
                          <div className="mt-1 ml-auto flex">
                            <button
                              onClick={handleLoading}
                              className="rounded-full bg-none transition-all duration-150 ease-in-out text-[0.9rem] p-1 border-0 leading-0 text-white cursor-pointer font-medium font-inherit hover:bg-[#202225]"
                            >
                              {loading ? (
                                <Spinner className="size-6" />
                              ) : (
                                <RefreshCw />
                              )}
                            </button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="rounded-full bg-none transition-all duration-150 ease-in-out text-[0.9rem] p-1 border-0 leading-0 text-white cursor-pointer font-medium font-inherit hover:bg-[#202225]">
                                  <EllipsisVertical />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-44 bg-black text-white border border-neutral-700 shadow-lg z-9999 p-2"
                              >
                                <DropdownMenuItem
                                  onClick={() => setWalletState("send")}
                                  className="rounded-md cursor-pointer py-2 px-1 transition-all duration-150 ease-linear text-md"
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                  <span>Send doge</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setWalletState("secret")}
                                  className="rounded-md cursor-pointer py-2 px-1 transition-all duration-150 ease-linear text-md"
                                >
                                  <Key className="h-4 w-4" />
                                  <span>Show secrets</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setWalletState("empty")}
                                  className="rounded-md cursor-pointer py-2 px-1 transition-all duration-150 ease-linear text-[tomato] text-md"
                                >
                                  <Trash className="h-4 w-4 text-[tomato]" />
                                  <span className="text-[tomato] hover:text-[tomato]">
                                    Remove wallet
                                  </span>
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                        <div className="my-2">
                          <div>
                            <span className="font-bold flex">
                              <Image
                                src="/assets/coin.svg"
                                alt="coin"
                                width={18}
                                height={18}
                                priority
                                className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                              />
                              0&#xA0;
                              <span className="text-[#fffc]">($0)</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-[90%]">
                          Your wallet needs backup&#xA0;
                          <span className="font-semibold text-[#c891ff] decoration-inherit cursor-pointer">
                            Backup now
                          </span>
                        </div>
                        <Tabs defaultValue="assets">
                          <TabsList className="m-1 flex justify-between items-center flex-wrap shrink-0 bg-transparent">
                            <div className="text-[90%] my-1 select-none overflow-x-auto flex scrollbar-none">
                              <TabsTrigger value="assets">Assets</TabsTrigger>
                              <TabsTrigger value="listings">
                                Listings
                              </TabsTrigger>
                            </div>
                          </TabsList>
                          <TabsContent value="assets" className="flex flex-col">
                            <div className="text-center">nothing here</div>
                          </TabsContent>
                          <TabsContent
                            value="listings"
                            className="flex flex-col"
                          >
                            <div className="text-center">
                              you have no active listings at the moment
                            </div>
                          </TabsContent>
                        </Tabs>
                      </>
                    )}
                    {walletState === "send" && (
                      <>
                        <div className="relative flex justify-center mb-4">
                          <ChevronLeft
                            onClick={() => setWalletState("mywallet")}
                            className="absolute top-0 left-0 cursor-pointer inline-block overflow-hidden"
                          />
                          <div>Send</div>
                        </div>
                        <div className="rounded-[12px] rounded-b-none mb-[0.1rem] bg-[#00000026] px-4 py-3">
                          <div className="flex items-center gap-x-[0.75em]">
                            <Image
                              src="/assets/coin.svg"
                              alt="logo"
                              width={40}
                              height={40}
                              priority
                              className="w-10 h-10 m-0"
                            />
                            <div>
                              <div className="font-semibold">doge</div>
                              <div className="text-[0.9rem] flex">
                                Balance:&#xA0;
                                <Image
                                  src="/assets/coin.svg"
                                  alt="logo"
                                  width={16}
                                  height={16}
                                  priority
                                  className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                                />
                                0
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="rounded-[12px] rounded-t-none bg-[#00000026] px-4 py-3">
                          <div>
                            <div className="text-[0.9rem] font-semibold">
                              Amount
                            </div>
                            <div className="flex items-center gap-x-[0.5em]">
                              <input
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) =>
                                  setAmount(Number(e.target.value))
                                }
                                className="w-full px-[0.6em] py-[0.3em] mr-0 border-0 outline-none text-left"
                              />
                            </div>
                          </div>
                          <div className="flex items-center mt-1">
                            {amount ? (
                              <div className="text-[0.9rem] text-white/90">
                                ${(amount * dogecoinPrice).toFixed(2)}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="rounded-[12px] bg-[#00000026] px-4 py-3 mt-4">
                          <div className="text-[0.9rem] font-semibold">To</div>
                          <input
                            type="text"
                            placeholder="Enter address"
                            className="w-full px-[0.6em] py-[0.3em] border-0 outline-none text-left font-inherit text-inherit mr-2 bg-transparent"
                          />
                        </div>
                        <div className="flex justify-between text-[0.9rem] mt-4">
                          <div>Network fee</div>
                          <div className="flex">
                            <Image
                              src="/assets/coin.svg"
                              alt="coin"
                              width={18}
                              height={18}
                              priority
                              className="w-[1.1em] h-[1.1em] mr-[0.4em] mb-[-0.2em]"
                            />
                            0.1
                            <span className="text-[#fffc]">($0.02)</span>
                          </div>
                        </div>
                        <button
                          disabled
                          className="w-full mt-2.5 flex justify-center font-bold transition-all duration-200 ease-in-out font-inherit rounded-[12px] border border-transparent px-4 py-2 text-[1em] disabled:bg-[#1a1a1a] disabled:text-white"
                        >
                          Enter valid address
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
