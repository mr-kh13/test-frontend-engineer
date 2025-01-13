import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Main({ children }: Props) {
  return <main className="w-full flex flex-col py-8 p-4">{children}</main>;
}
