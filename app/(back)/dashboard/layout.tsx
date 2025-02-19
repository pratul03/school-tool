import AppSidebar from "@/components/dashboard/sidebar/app-sidebar";
import SidebarHeaderPage from "@/components/dashboard/sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          {/** Sidebar Header */}
          <SidebarHeaderPage />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
