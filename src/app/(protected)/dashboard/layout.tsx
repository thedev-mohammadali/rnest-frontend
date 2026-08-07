import DashboardShell from "@/components/dashboard/dashboard-shell";

const DashboardLayout = ({ children }: LayoutProps<"/dashboard">) => {
  return <DashboardShell>{children}</DashboardShell>;
};

export default DashboardLayout;
