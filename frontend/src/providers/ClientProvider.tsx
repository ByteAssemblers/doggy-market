"use client";

import { useState, useEffect, ReactNode } from "react";

export default function ClientProvider({ children }: { children: ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <>{children}</>;
}
