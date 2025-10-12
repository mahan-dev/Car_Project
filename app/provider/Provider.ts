"use client";

import { useEffect, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@/theme";
import { ThemeProvide } from "@emotion/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  // Wait until client renders, to avoid SSR/client mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until client mounts

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
