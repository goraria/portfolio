import type { ReactNode } from "react";
interface WrapperProps { children: ReactNode; className?: string; delay?: number; y?: number; x?: number; duration?: number; scale?: number; }
export function FramerWrapper({ children, className }: WrapperProps) { return <div className={className}>{children}</div>; }
