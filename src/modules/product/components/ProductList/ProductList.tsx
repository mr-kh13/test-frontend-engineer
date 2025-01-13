import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function ProductList({ children }: Props) {
  return (
    <div className="container mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {children}
    </div>
  );
}
