import Navbar from "../molecules/Navbar/Navbar";
import AppSidebar from "../molecules/Sidebar/AppSidebar";
import { SidebarProvider } from "../ui/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <SidebarProvider>
        {/* Fixed Sidebar */}
        <AppSidebar parentClass="w-64 h-full flex-shrink-0 bg-white dark:bg-gray-900" />

        {/* Main Section */}
        <div className="flex flex-col flex-1 min-w-0">
          {/* Fixed Navbar */}
          <Navbar className="flex-shrink-0 bg-gray-100 dark:bg-gray-900" />

          {/* Auto Height Content */}
          <main className="flex-1 bg-gray-100 dark:bg-gray-900 p-4">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
