"use client";

import InscribeHistory from "@/components/page/inscribe/InscribeHistory";
import InscribeTabs from "@/components/page/inscribe/InscribeTabs";

export default function Inscribe() {
  return (
    <>
      <h2 className="mx-0 my-[0.83em] block text-[1.5em] leading-[1.1] font-bold">
        Inscribe on doginals
      </h2>
      <InscribeTabs />
      <InscribeHistory />
    </>
  );
}
