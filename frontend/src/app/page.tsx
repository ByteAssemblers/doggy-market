import Dogemaps from "@/components/page/Dogemaps";
import Collections from "@/components/page/Collections";
import DRCTwenty from "@/components/page/DRCTwenty";
import BiggestSalesOfDay from "@/components/page/BiggestSalesOfDay";

export default function Home() {
  return (
    <>
      <Dogemaps />

      <Collections />

      <DRCTwenty />

      <BiggestSalesOfDay />
    </>
  );
}
