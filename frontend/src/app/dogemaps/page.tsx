"use client";

import DogemapsInfo from "@/components/page/dogemaps/DogemapsInfo";
import DogemapsTabs from "@/components/page/dogemaps/DogemapsTabs";

export default function Dogemaps() {
  return (
    <>
      <div className="flex items-center mt-4 mb-8">
        <h1 className="leading-[1.1] text-[2.3rem] m-0">Dogemaps</h1>
      </div>
      <DogemapsInfo />
      <DogemapsTabs />
    </>
  );
}
