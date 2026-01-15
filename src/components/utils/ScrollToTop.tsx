'use client';

// ScrollToTop is not needed in Next.js - scroll restoration is handled automatically
// This component is kept for compatibility but does nothing

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
