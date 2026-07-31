"use client";

import { DockContext } from "@/hooks/use-dock";

function DockProvider({ children, value }) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

export { DockProvider };
