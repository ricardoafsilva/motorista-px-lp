"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Poppins } from "next/font/google";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { metadata } from "./metadata";

import "./globals.scss";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${poppins.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
