import DashboardMobileSidebar from "./dashboard-mobile-sidebar";

const DashboardHeader = () => {
  return (
    <header className="bg-background flex h-16 items-center border-b px-6">
      <DashboardMobileSidebar />

      <h1 className="ml-4 font-semibold">Dashboard</h1>
    </header>
  );
};

export default DashboardHeader;
