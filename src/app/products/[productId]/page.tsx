import { HydrationBoundary } from "@/core/components/QueryClientProvider/Hydrate";
import { fetchProduct } from "@/data/useProduct/queryFunctions";
import { getUseProductQueryKey } from "@/data/useProduct/queryKey";
import ProductDetailsPageContent from "@/modules/product/components/ProductDetailsPageContent";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = Promise<{ productId: string }>;

interface Props {
  params: Params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productId = await params;
  const product = await fetchProduct({ productId: Number(productId) });
  return {
    title: `My Shop | ${product.title}`,
    description: `My Shop | ${product.title} `,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const queryClient = new QueryClient();
  const productId = Number(await params);

  await queryClient.prefetchQuery({
    queryKey: getUseProductQueryKey({ productId }),
    queryFn: () => fetchProduct({ productId }),
  });

  if (!productId) {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailsPageContent productId={productId} />
    </HydrationBoundary>
  );
}
