import Footer from "@/components/frontend/Footer";
import Cursor from "@/components/frontend/smooth-cursor";
import SiteHeader from "@/components/site-header";
import React, { ReactNode } from "react";

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Cursor />
      <SiteHeader />
      {children}
      <Footer />
    </div>
  );
}
