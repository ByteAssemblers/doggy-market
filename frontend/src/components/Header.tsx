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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

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
    <div className="sticky top-0 z-9999 flex w-full justify-center px-4 py-6">
      <div className="tiny:gap-4 flex w-full max-w-[1200px] gap-2">
        <Link
          href="/"
          className="tiny:px-4 -mt-[0.7rem] -mb-[0.7rem] flex shrink-0 items-center"
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
        <Popover open={searchOpen} onOpenChange={setSearchOpen}>
          <PopoverTrigger asChild>
            <div className="relative w-full backdrop-blur-[20px]">
              <InputGroup className="flex h-11 cursor-text items-center border-transparent bg-[#ffffff1f] p-2 leading-[26px]">
                <InputGroupInput
                  id="search"
                  name="search"
                  placeholder="Search for tokens, collections, wallets & inscriptions"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <InputGroupAddon className="">
                  <Search className="" />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </PopoverTrigger>
          <PopoverContent side="bottom" align="start">
            <div className="visible z-9990 mt-2 max-w-[calc(100vw-10px)]">
              <div className="transition-visibility relative flex w-(--radix-popover-trigger-width) flex-col overflow-y-auto overscroll-contain rounded-xl bg-[#ffffff1a] p-2 leading-[1.4] whitespace-normal text-white backdrop-blur-[42px] transition-transform duration-200 outline-none">
                <div className="text-[0.9rem] font-medium">Tokens</div>
                {[...Array(5)].map((_, i) => (
                  <Link
                    key={i}
                    href="/ddex"
                    className="mb-1.0 flex cursor-pointer items-center gap-3 rounded-[12px] px-3 py-2 leading-[1.2] font-medium text-inherit no-underline hover:bg-[#0004]"
                    onClick={() => setSearchOpen(false)}
                  >
                    <Image
                      src="https://doggy.market/drc-20/ddex.jpg"
                      alt="ddex"
                      width={42}
                      height={42}
                      className="shrink-0 grow-0 basis-[42px] rounded-full object-cover"
                      unoptimized
                    />
                    <div className="grow">
                      <div className="font-semibold">ddex</div>
                      <div className="text-[0.9rem] font-normal text-[#fffc]">
                        523 holders
                      </div>
                    </div>
                    <div>
                      <div className="flex text-right whitespace-nowrap">
                        <Image
                          src="/assets/coin.svg"
                          alt="coin"
                          width={18}
                          height={18}
                          priority
                          className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                        />
                        0.033
                      </div>
                      <div className="text-right text-[0.9rem]">0%</div>
                    </div>
                  </Link>
                ))}
                <div className="text-[0.9rem] font-medium">Collections</div>
                {[...Array(5)].map((_, i) => (
                  <Link
                    key={i}
                    href="/ddex"
                    className="mb-1.0 flex cursor-pointer items-center gap-3 rounded-[12px] px-3 py-2 leading-[1.2] font-medium text-inherit no-underline hover:bg-[#0004]"
                  >
                    <Image
                      src="https://doggy.market/drc-20/ddex.jpg"
                      alt="ddex"
                      width={42}
                      height={42}
                      className="shrink-0 grow-0 basis-[42px] rounded-full object-cover"
                      unoptimized
                    />
                    <div className="grow">
                      <div className="font-semibold">ddex</div>
                      <div className="text-[0.9rem] font-normal text-[#fffc]">
                        10,000 items
                      </div>
                    </div>
                    <div>
                      <div className="flex text-right whitespace-nowrap">
                        <Image
                          src="/assets/coin.svg"
                          alt="coin"
                          width={18}
                          height={18}
                          priority
                          className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                        />
                        0.033
                      </div>
                      <div className="text-right text-[0.9rem]">0%</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild className="relative backdrop-blur-[20px]">
            <Button className="flex h-11 items-center gap-0 border border-transparent bg-[#ffffff1f] px-4 py-1 font-bold text-white hover:border-[#ffffff52] hover:bg-transparent">
              <span className="relative leading-none">
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
              <span className="ml-2.5 hidden text-[16px] whitespace-nowrap md:flex">
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
            <div className="visible z-9990 mt-2 max-w-[calc(100vw-10px)]">
              <div className="transition-visibility relative flex max-h-120 min-h-80 w-[min(400px,calc(100vw-1.5rem))] max-w-[400px] overflow-y-auto overscroll-contain rounded-xl bg-[#ffffff1a] leading-[1.4] whitespace-normal text-white backdrop-blur-[42px] transition-transform duration-200 outline-none">
                <div className="relative z-1 flex w-full p-4 duration-200">
                  <div className="flex w-full flex-col">
                    {walletState === "empty" && (
                      <>
                        <div className="mb-4 text-center text-[1.4rem]">
                          DoggyMarket Wallet
                        </div>
                        <div className="text-[90%] leading-[1.2]">
                          DoggyMarket comes with built-in wallet, there is no
                          need to download any browser extension. Your private
                          keys are stored in the browser and are never sent to
                          the server.
                        </div>
                        <div className="mt-6 p-4">
                          <button
                            onClick={() => setWalletState("create")}
                            className="font-inherit mb-4 w-full cursor-pointer rounded-xl border border-transparent bg-white px-4 py-[0.7rem] text-[1em] font-medium text-black transition-all duration-200 ease-in-out hover:bg-[#dedede]"
                          >
                            Create new wallet
                          </button>
                          <button
                            onClick={() => setWalletState("import")}
                            className="font-inherit w-full cursor-pointer rounded-xl border border-transparent bg-[#dbbdf9] px-4 py-2 text-[1em] font-medium text-[#8000ff] transition-all duration-200 ease-in-out hover:bg-[#c28bfa]"
                          >
                            Import wallet
                          </button>
                        </div>
                      </>
                    )}
                    {walletState === "create" && (
                      <>
                        <div className="my-4 text-center text-[1.2rem]">
                          Set your wallet password
                        </div>
                        <div className="my-2 flex rounded-md border border-white">
                          <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="font-inherit w-full border-none bg-transparent py-2.5 pl-[0.6em] text-inherit outline-none active:border"
                            placeholder="Enter password"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="inline-block cursor-pointer overflow-hidden bg-transparent p-[0.6em]"
                          >
                            {showPassword ? (
                              <Eye size={18} />
                            ) : (
                              <EyeOff size={18} />
                            )}
                          </button>
                        </div>
                        <div className="my-2 flex rounded-md border border-white">
                          <input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="font-inherit w-full border-none bg-transparent py-2.5 pl-[0.6em] text-inherit outline-none active:border"
                            placeholder="Confirm password"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            className="inline-block cursor-pointer overflow-hidden bg-transparent p-[0.6em]"
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
                            className="font-inherit cursor-pointer rounded-xl border-2 border-white bg-transparent bg-none px-4 py-5 text-[1em] font-medium text-white transition-all duration-200 ease-in-out hover:text-black"
                          >
                            Skip
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="font-inherit ml-4 cursor-pointer rounded-xl border border-transparent bg-white px-4 py-5 text-[1em] font-medium text-black transition-all duration-200 ease-in-out"
                          >
                            Set password
                          </Button>
                        </div>
                      </>
                    )}
                    {walletState === "import" && (
                      <>
                        <div className="my-1 text-center text-[1.2rem] font-semibold">
                          Import wallet
                        </div>
                        <div className="mt-2 mb-2 rounded-xl bg-[#ffe10026] px-[0.8rem] py-[0.4rem] text-[0.85rem] leading-[1.2] font-semibold text-[gold]">
                          Before you enter your seed phrase always verify that
                          URL address is&#xA0;
                          <span className="font-bold">doggy.market</span>
                        </div>
                        <Textarea
                          className="font-inherit my-2 h-32 w-full resize-none rounded-lg border-none bg-white/10 p-2.5 text-sm font-light"
                          placeholder="Enter your secret phrase here (mnemonic or private key)"
                        ></Textarea>
                        {error && (
                          <div className="mb-4 text-[95%] text-[#ff4500]">
                            Invalid seed phrase
                          </div>
                        )}
                        <div className="mt-auto">
                          <Button
                            onClick={() => setWalletState("empty")}
                            className="font-inherit cursor-pointer rounded-xl border-2 border-white bg-transparent bg-none px-4 py-5 text-[1em] font-medium text-white transition-all duration-200 ease-in-out hover:text-black"
                          >
                            Go back
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="font-inherit ml-4 cursor-pointer rounded-xl border border-transparent bg-white px-4 py-5 text-[1em] font-medium text-black transition-all duration-200 ease-in-out"
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
                          className="mx-4 my-2 grid grid-cols-2 gap-x-2 gap-y-2"
                          translate="no"
                        >
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={i}
                              className="flex w-32 overflow-hidden rounded-md bg-[#202225]"
                            >
                              <div className="w-10 bg-[#2c2f33] px-1 py-[0.1rem] text-center select-none">
                                {i + 1}.
                              </div>
                              <div className="px-[0.4rem] py-[0.1rem]">
                                alien
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 mb-6 flex justify-center">
                          <CopyButton text="alien" showText />
                        </div>
                        <div className="mb-4 rounded-xl bg-black/20 p-2 text-[0.8rem]">
                          Anyone who knows these words can access your funds.
                          Before importing to other wallet make sure it supports
                          doginals protocol.
                        </div>
                        <div className="mt-auto">
                          <Button
                            onClick={() => setWalletState("mywallet")}
                            className="font-inherit cursor-pointer rounded-xl border-2 border-white bg-transparent bg-none px-4 py-5 text-[1em] font-medium text-white transition-all duration-200 ease-in-out hover:text-black"
                          >
                            Go back
                          </Button>
                          <Button
                            onClick={handleSetPassword}
                            className="font-inherit ml-2 cursor-pointer rounded-xl border border-transparent bg-white px-4 py-5 text-[1em] font-medium text-black transition-all duration-200 ease-in-out"
                          >
                            I've saved these words
                          </Button>
                        </div>
                      </>
                    )}
                    {walletState === "mywallet" && (
                      <>
                        <div className="flex items-start">
                          <span className="flex cursor-pointer rounded-sm px-[4.6rem] py-[0.3rem]">
                            <CopyAddress
                              text="DA29jmZCZRP7jjMEdbDjmjdsBuvkTpnDZf"
                              showText
                            />
                          </span>
                          <div className="mt-1 ml-auto flex">
                            <button
                              onClick={handleLoading}
                              className="font-inherit cursor-pointer rounded-full border-0 bg-none p-1 text-[0.9rem] leading-0 font-medium text-white transition-all duration-150 ease-in-out hover:bg-[#202225]"
                            >
                              {loading ? (
                                <Spinner className="size-6" />
                              ) : (
                                <RefreshCw />
                              )}
                            </button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <button className="font-inherit cursor-pointer rounded-full border-0 bg-none p-1 text-[0.9rem] leading-0 font-medium text-white transition-all duration-150 ease-in-out hover:bg-[#202225]">
                                  <EllipsisVertical />
                                </button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="z-9999 w-44 border border-neutral-700 bg-black p-2 text-white shadow-lg"
                              >
                                <DropdownMenuItem
                                  onClick={() => setWalletState("send")}
                                  className="text-md cursor-pointer rounded-md px-1 py-2 transition-all duration-150 ease-linear"
                                >
                                  <ArrowUpRight className="h-4 w-4" />
                                  <span>Send doge</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setWalletState("secret")}
                                  className="text-md cursor-pointer rounded-md px-1 py-2 transition-all duration-150 ease-linear"
                                >
                                  <Key className="h-4 w-4" />
                                  <span>Show secrets</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onClick={() => setWalletState("empty")}
                                  className="text-md cursor-pointer rounded-md px-1 py-2 text-[tomato] transition-all duration-150 ease-linear"
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
                            <span className="flex font-bold">
                              <Image
                                src="/assets/coin.svg"
                                alt="coin"
                                width={18}
                                height={18}
                                priority
                                className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                              />
                              0&#xA0;
                              <span className="text-[#fffc]">($0)</span>
                            </span>
                          </div>
                        </div>
                        <div className="text-[90%]">
                          Your wallet needs backup&#xA0;
                          <span
                            onClick={() => setWalletState("secret")}
                            className="cursor-pointer font-semibold text-[#c891ff] decoration-inherit"
                          >
                            Backup now
                          </span>
                        </div>
                        <Tabs defaultValue="assets">
                          <TabsList className="m-1 flex shrink-0 flex-wrap items-center justify-between bg-transparent">
                            <div className="scrollbar-none my-1 flex overflow-x-auto text-[90%] select-none">
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
                        <div className="relative mb-4 flex justify-center">
                          <ChevronLeft
                            onClick={() => setWalletState("mywallet")}
                            className="absolute top-0 left-0 inline-block cursor-pointer overflow-hidden"
                          />
                          <div>Send</div>
                        </div>
                        <div className="mb-[0.1rem] rounded-[12px] rounded-b-none bg-[#00000026] px-4 py-3">
                          <div className="flex items-center gap-x-[0.75em]">
                            <Image
                              src="/assets/coin.svg"
                              alt="logo"
                              width={40}
                              height={40}
                              priority
                              className="m-0 h-10 w-10"
                            />
                            <div>
                              <div className="font-semibold">doge</div>
                              <div className="flex text-[0.9rem]">
                                Balance:&#xA0;
                                <Image
                                  src="/assets/coin.svg"
                                  alt="logo"
                                  width={16}
                                  height={16}
                                  priority
                                  className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
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
                                className="mr-0 w-full border-0 px-[0.6em] py-[0.3em] text-left outline-none"
                              />
                            </div>
                          </div>
                          <div className="mt-1 flex items-center">
                            {amount ? (
                              <div className="text-[0.9rem] text-white/90">
                                ${(amount * dogecoinPrice).toFixed(2)}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="mt-4 rounded-[12px] bg-[#00000026] px-4 py-3">
                          <div className="text-[0.9rem] font-semibold">To</div>
                          <input
                            type="text"
                            placeholder="Enter address"
                            className="font-inherit mr-2 w-full border-0 bg-transparent px-[0.6em] py-[0.3em] text-left text-inherit outline-none"
                          />
                        </div>
                        <div className="mt-4 flex justify-between text-[0.9rem]">
                          <div>Network fee</div>
                          <div className="flex">
                            <Image
                              src="/assets/coin.svg"
                              alt="coin"
                              width={18}
                              height={18}
                              priority
                              className="mr-[0.4em] mb-[-0.2em] h-[1.1em] w-[1.1em]"
                            />
                            0.1
                            <span className="text-[#fffc]">($0.02)</span>
                          </div>
                        </div>
                        <button
                          disabled
                          className="font-inherit mt-2.5 flex w-full justify-center rounded-[12px] border border-transparent px-4 py-2 text-[1em] font-bold transition-all duration-200 ease-in-out disabled:bg-[#1a1a1a] disabled:text-white"
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
