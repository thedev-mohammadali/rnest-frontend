"use client";

import { useAuth } from "@/hooks/useAuth";
import { logout } from "@/services/auth/auth.client";
import { Home, LogOutIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import {
  adminSidebarLinks,
  landlordSidebarLinks,
  SidebarLink,
  tenantSidebarLinks,
} from "./dashboard-sidebar.config";

type Props = { onNavigate?: () => void };

const DashboardSidebarContent = ({ onNavigate }: Props) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const router = useRouter();

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await logout();

      toast.success("Logged out successfully", {
        position: "top-right",
        closeButton: true,
        duration: 1000,
      });

      router.replace("/");

      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };

  const { user } = useAuth();
  const pathname = usePathname();

  let links: SidebarLink[];
  switch (user.role) {
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
            onClick={onNavigate}
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

      <Button
        variant={"destructive"}
        className="mt-3 w-full"
        onClick={() => {
          onNavigate?.();
          handleLogout();
        }}
      >
        {isLoggingOut ? <Spinner data-icon="inline-start" /> : <LogOutIcon />}
        {isLoggingOut ? "Logging out..." : "Log out"}
      </Button>
    </>
  );
};

export default DashboardSidebarContent;
