import Footer from "@/components/frontend/Footer";
import SiteHeader from "@/components/site-header";
import React, { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
}
