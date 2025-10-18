"use client";

import React, { useEffect, useState } from "react";
import theme from "@/theme/theme";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

  const queryClient = new QueryClient();

  return (
    <>
      <SessionProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
          <Toaster />
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};

export default Provider;
