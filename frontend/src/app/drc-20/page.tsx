"use client";

import DRCTabs from "@/components/page/drc-20/DRCTabs";

export default function DRC() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[1.6rem] leading-[1.1]">DRC-20</h2>
      </div>
      <DRCTabs />
    </>
  );
}
