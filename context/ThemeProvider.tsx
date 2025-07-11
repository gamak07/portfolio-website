"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface props {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: props) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      storageKey={"theme"}
    >
      {children}
    </NextThemesProvider>
  );
}
