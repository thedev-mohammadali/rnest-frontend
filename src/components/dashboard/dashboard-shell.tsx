import { ReactNode } from "react";
import DashboardHeader from "./dashboard-header";
import DashboardSidebar from "./dashboard-sidebar";

const DashboardShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted/30 h-screen overflow-hidden">
      <div className="flex h-full">
        <DashboardSidebar />

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <DashboardHeader />

          <main className="min-h-0 min-w-0 flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardShell;
