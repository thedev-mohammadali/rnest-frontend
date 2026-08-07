import {
  BarChart3,
  Building2,
  CreditCard,
  FileText,
  Handshake,
  Home,
  Layers,
  LucideIcon,
  PlusCircle,
  User,
  Users,
} from "lucide-react";

export type SidebarLink = {
  title: string;
  href: string;
  icon: LucideIcon;
};

export const landlordSidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },

  {
    title: "My Properties",
    href: "/dashboard/properties",
    icon: Building2,
  },

  {
    title: "Create Property",
    href: "/dashboard/properties/create",
    icon: PlusCircle,
  },

  {
    title: "Rental Requests",
    href: "/dashboard/requests",
    icon: FileText,
  },

  {
    title: "Agreements",
    href: "/dashboard/agreements",
    icon: Handshake,
  },

  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const tenantSidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },

  {
    title: "Requests",
    href: "/dashboard/requests",
    icon: FileText,
  },

  {
    title: "Agreements",
    href: "/dashboard/agreements",
    icon: FileText,
  },

  {
    title: "Payments",
    href: "/dashboard/payments",
    icon: CreditCard,
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];

export const adminSidebarLinks = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },

  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
  },

  {
    title: "Properties",
    href: "/dashboard/properties",
    icon: Building2,
  },

  {
    title: "Categories",
    href: "/dashboard/categories",
    icon: Layers,
  },

  {
    title: "Agreements",
    href: "/dashboard/agreements",
    icon: FileText,
  },

  {
    title: "Reports",
    href: "/dashboard/reports",
    icon: BarChart3,
  },

  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: User,
  },
];
