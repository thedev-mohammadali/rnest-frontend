"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";

import DashboardSidebarContent from "./dashboard-sidebar-content";

const DashboardMobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="p-4">
        <DashboardSidebarContent />
      </SheetContent>
    </Sheet>
  );
};

export default DashboardMobileSidebar;
