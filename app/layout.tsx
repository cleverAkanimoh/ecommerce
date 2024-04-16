import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { inter } from "@/components/font";



export const metadata: Metadata = {
  title:
    "Ecommerce - home to best electronics, gadgets and affordable accessories",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
