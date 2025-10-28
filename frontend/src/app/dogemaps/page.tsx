"use client";

import DogemapsInfo from "@/components/page/dogemaps/DogemapsInfo";
import DogemapsTabs from "@/components/page/dogemaps/DogemapsTabs";

export default function Dogemaps() {
  return (
    <>
      <div className="mt-4 mb-8 flex items-center">
        <h1 className="m-0 text-[2.3rem] leading-[1.1]">Dogemaps</h1>
      </div>
      <DogemapsInfo />
      <DogemapsTabs />
    </>
  );
}
