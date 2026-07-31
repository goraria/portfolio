"use client";

import { createContext, useContext } from "react";

const DockContext = createContext(undefined);

function useDock() {
  const context = useContext(DockContext);

  if (!context) {
    throw new Error("useDock must be used within a DockProvider");
  }

  return context;
}

export { DockContext, useDock };
