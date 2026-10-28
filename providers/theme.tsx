import type { ReactNode } from "react";
// The portfolio uses the light theme set by layouts/main.astro.
export function ThemeProvider({ children }: { children: ReactNode }) { return <>{children}</>; }
