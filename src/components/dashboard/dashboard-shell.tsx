import { ReactNode } from "react";
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

const DashboardShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted/30 min-h-screen">
      <div className="flex">
        <DashboardSidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <DashboardHeader />

          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardShell;
