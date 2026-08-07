"use client";

import { currentUser } from "@/lib/mock-user";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  adminSidebarLinks,
  landlordSidebarLinks,
  SidebarLink,
  tenantSidebarLinks,
} from "./dashboard-sidebar.config";

const DashboardSidebarContent = () => {
  const userRole = currentUser.role;
  const pathname = usePathname();

  let links: SidebarLink[];
  switch (userRole) {
    case "TENANT":
      links = tenantSidebarLinks;
      break;

    case "LANDLORD":
      links = landlordSidebarLinks;
      break;

    case "ADMIN":
      links = adminSidebarLinks;
      break;

    default:
      return null;
  }
  return (
    <>
      <Link
        href={"/"}
        className="mx-auto mb-8 flex max-w-max items-center gap-2 text-2xl font-bold"
      >
        <Home className="h-6 w-6" /> RentNest
      </Link>

      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
              pathname === link.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            } `}
          >
            <link.icon className="h-5 w-5" />

            {link.title}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default DashboardSidebarContent;
