import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getUseProductsQueryKey } from "@/data/useProducts/queryKey";
import { fetchProducts } from "@/data/useProducts/queryFunctions";
import { HydrationBoundary } from "@/core/components/QueryClientProvider/Hydrate";
import ProductsPageContent from "@/modules/product/components/ProductsPageContent";

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: getUseProductsQueryKey(),
    queryFn: () => fetchProducts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsPageContent />
    </HydrationBoundary>
  );
}
