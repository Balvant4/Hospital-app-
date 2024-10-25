import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1>i am Dashboard only pages</h1>
      {children}
    </div>
  );
}
