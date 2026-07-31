"use client";

import * as React from "react";
import { cn } from "@gorth/primitive/lib/utils";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { useConfig } from "@/hooks/use-config";
// interface ThemeWrapperProps extends React.ComponentProps<"div"> {
//   defaultTheme?: string;
// }

export function ThemeProvider({
  children,
  ...props
}) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="light"
      // enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}