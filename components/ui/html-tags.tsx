import React from "react";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="container flex items-center">{children}</section>;
}
