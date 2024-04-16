import React from "react";

export function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h- flex-col items-center justify-between p-24">
      {children}
    </main>
  );
}

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${className} container flex items-center`}>
      {children}
    </section>
  );
}
