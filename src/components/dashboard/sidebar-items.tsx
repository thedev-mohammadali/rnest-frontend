"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
  icon: LucideIcon;
};

const SidebarItem = ({ title, href, icon: Icon }: Props) => {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
        active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
      } `}
    >
      <Icon className="h-5 w-5" />

      {title}
    </Link>
  );
};

export default SidebarItem;
