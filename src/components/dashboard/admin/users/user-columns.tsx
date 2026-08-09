"use client";

import { createColumnHelper } from "@tanstack/react-table";

import { User } from "@/types/dashboard/admin";
import UserActions from "./user-actions";
import UserStatusBadge from "./user-status-badge";
import { type UserTableFeatures } from "./user-table-features";

const columnHelper = createColumnHelper<UserTableFeatures, User>();

export const columns = columnHelper.columns([
  columnHelper.accessor("name", {
    header: "User Name",
  }),
  columnHelper.accessor("email", {
    header: "Email",
  }),
  columnHelper.accessor("role", {
    header: "Role",
  }),
  columnHelper.accessor("isActive", {
    header: "Status",
    cell: ({ getValue }) => <UserStatusBadge isActive={getValue()} />,
  }),
  columnHelper.accessor("createdAt", {
    header: "Member Since",
  }),
  columnHelper.accessor("updatedAt", {
    header: "Updated At",
  }),
  columnHelper.display({
    id: "actions",
    header: "Action",
    cell: ({ row }) => {
      const user = row.original;

      return <UserActions user={user} />;
    },
  }),
]);
