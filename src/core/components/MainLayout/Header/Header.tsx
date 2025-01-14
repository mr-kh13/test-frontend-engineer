import { CartButton } from "./CartButton";

export function Header() {
  return (
    <header className="w-full h-16 flex items-center border-b">
      <div className="container mx-auto px-4 flex items-center">
        <h1 className="text-xl font-semibold">My Shop!</h1>
        <CartButton />
      </div>
    </header>
  );
}
