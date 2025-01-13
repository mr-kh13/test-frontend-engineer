import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Main({ children }: Props) {
  return <main className="container">{children}</main>;
}
