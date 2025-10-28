"use client";

import InscribeHistory from "@/components/page/inscribe/InscribeHistory";
import InscribeTabs from "@/components/page/inscribe/InscribeTabs";

export default function Inscribe() {
  return (
    <>
      <h2 className="block text-[1.5em] my-[0.83em] mx-0 font-bold leading-[1.1]">
        Inscribe on doginals
      </h2>
      <InscribeTabs />
      <InscribeHistory />
    </>
  );
}
