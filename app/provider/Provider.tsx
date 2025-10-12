"use client";

import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Wait until client renders, to avoid SSR/client mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until client mounts

  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}
