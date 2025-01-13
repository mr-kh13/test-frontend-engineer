"use client";
import { useState } from "react";
import { ProductList } from "./ProductList";
import { ProductCard } from "./ProductCard";
import { Button } from "@/shared/components/Button";
import { useProducts } from "@/data/useProducts";
import { ROUTES } from "@/core/constants/routes";
import { useRouter } from "next/navigation";

const LIMIT = 10;

export default function ProductsPageContent() {
  const { data: products, isLoading, isError } = useProducts();
  const [page, setPage] = useState(1);
  const router = useRouter();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  const hasNextPage = () => {
    if (!products) return false;
    return LIMIT * page < products?.length;
  };

  const handleLoadMore = () => {
    if (!hasNextPage) return;
    setPage(page + 1);
  };

  return (
    <div className="container mx-auto flex flex-col">
      <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
        Our Products
      </h3>
      <ProductList>
        {products?.slice(0, LIMIT * page)?.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageSrc={product.image}
            rating={product.rating}
            onClick={() => {
              router.push(ROUTES.product.details(product.id));
            }}
            onAddToCartClick={() => {}}
          />
        ))}
      </ProductList>
      <Button
        className="mt-8 w-full md:w-2/12 md:mx-auto"
        variant="secondary"
        onClick={handleLoadMore}
        disabled={!hasNextPage()}
      >
        {hasNextPage() ? "Load More" : "Nothing more to load"}
      </Button>
    </div>
  );
}
