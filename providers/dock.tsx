import type { ReactNode } from "react";
import { DockContext, type DockValue } from "@/hooks/use-dock";
export function DockProvider({ children, value }: { children: ReactNode; value: DockValue }) { return <DockContext.Provider value={value}>{children}</DockContext.Provider>; }
