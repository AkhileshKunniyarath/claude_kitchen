"use client";

import { usePathname } from "next/navigation";
import React from "react";

export function ConditionalLayout({
  children,
  header,
  footer,
  floatingButton,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
  floatingButton: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main id="main-content">{children}</main>;
  }

  return (
    <>
      {header}
      <main id="main-content">{children}</main>
      {footer}
      {floatingButton}
    </>
  );
}
