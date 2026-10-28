import { createContext, useContext } from "react";
import type { MotionValue, SpringOptions } from "motion/react";
export interface DockValue { mouseX: MotionValue<number>; spring: SpringOptions; distance: number; magnification: number }
export const DockContext = createContext<DockValue | undefined>(undefined);
export function useDock() { const value = useContext(DockContext); if (!value) throw new Error("useDock must be used within a DockProvider"); return value; }
