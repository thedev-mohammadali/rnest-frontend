import DashboardSidebarContent from "./dashboard-sidebar-content";

const DashboardSidebar = () => {
  return (
    <aside className="bg-background hidden h-screen w-72 flex-col border-r p-6 lg:flex">
      <DashboardSidebarContent />
    </aside>
  );
};

export default DashboardSidebar;
