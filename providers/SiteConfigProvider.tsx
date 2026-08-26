"use client";

import React, { createContext, useContext } from "react";
import { ISiteConfig } from "@/models/SiteConfig";

const SiteConfigContext = createContext<ISiteConfig | null>(null);

export function SiteConfigProvider({
  config,
  children,
}: {
  config: ISiteConfig;
  children: React.ReactNode;
}) {
  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  const context = useContext(SiteConfigContext);
  if (!context) {
    throw new Error("useSiteConfig must be used within a SiteConfigProvider");
  }
  return context;
}
