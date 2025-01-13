"use client";
import type React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
