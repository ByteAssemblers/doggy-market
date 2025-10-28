import { RefreshCcw } from "lucide-react";

export default function InscribeHistory() {
  return (
    <>
      <div className="flex items-center justify-between mt-6 mb-4">
        <h3 className="m-0 block text-[1.17em] my-[1em] mx-0 font-bold">
          History
        </h3>
        <div className="inline-flex items-center gap-2 cursor-pointer">
          <RefreshCcw />
          <span>Refresh</span>
        </div>
      </div>
      <div>Empty</div>
    </>
  );
}
