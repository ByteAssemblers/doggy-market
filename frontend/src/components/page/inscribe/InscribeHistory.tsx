import { RefreshCcw } from "lucide-react";

export default function InscribeHistory() {
  return (
    <>
      <div className="mt-6 mb-4 flex items-center justify-between">
        <h3 className="m-0 mx-0 my-[1em] block text-[1.17em] font-bold">
          History
        </h3>
        <div className="inline-flex cursor-pointer items-center gap-2">
          <RefreshCcw />
          <span>Refresh</span>
        </div>
      </div>
      <div>Empty</div>
    </>
  );
}
