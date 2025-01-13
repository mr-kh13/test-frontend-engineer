import { ProductList } from "@/modules/product/components/ProductList";
import { ProductCard } from "@/modules/product/components/ProductCard";

export default function Home() {
  return (
    <ProductList>
      <ProductCard
        title="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        price="109.95"
        imageSrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        rating={{
          rate: 4.7,
          count: 500,
        }}
      />
    </ProductList>
  );
}
