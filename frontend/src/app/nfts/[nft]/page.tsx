import { NftInfo } from "@/components/page/nfts/[nft]/NftInfo";
import NftTabs from "@/components/page/nfts/[nft]/NftTabs";

export default async function NftPage({
  params,
}: {
  params: Promise<{ nft: string }>;
}) {
  const { nft } = await params;
  return (
    <>
      <NftInfo nft={nft} />
      <NftTabs />
    </>
  );
}
