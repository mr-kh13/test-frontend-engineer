import { CartButton } from "./CartButton";

export function Header() {
  return (
    <header className="w-full h-16 flex px-4 items-center border-b">
      <div className="container mx-auto flex items-center">
        <h1 className="text-xl font-semibold">My Shop!</h1>
        <CartButton />
      </div>
    </header>
  );
}
