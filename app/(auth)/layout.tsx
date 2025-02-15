import Cursor from "@/components/frontend/smooth-cursor";
import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Cursor />
      {children}
    </div>
  );
}
