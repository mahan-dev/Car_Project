"use client";

import React, { useEffect, useState } from "react";
import theme from "@/theme/theme";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

interface ProviderProps {
  children: React.ReactNode;
}

const Provider = ({ children }: ProviderProps) => {
  const [mounted, setMounted] = useState(false);

  // Wait until client renders, to avoid SSR/client mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid rendering until client mounts

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

export default Provider;
