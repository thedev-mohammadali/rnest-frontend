"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { getAvatarFallback } from "@/lib/formatter/get-avatar-fallback";
import { logout } from "@/services/auth/auth.client";
import { User } from "@/types/auth";
import { LayoutDashboardIcon, LogOutIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type Props = {
  user: User;
};

export function AvatarDropdown({ user }: Props) {
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

      router.refresh();
    } finally {
      setIsLoggingOut(false);
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>{getAvatarFallback(user.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboardIcon />
            <Link href={"/dashboard"}>Dashboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <UserIcon />
            <Link href={"/dashboard/profile"}>Profile</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            variant="destructive"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            {isLoggingOut ? (
              <Spinner data-icon="inline-start" />
            ) : (
              <LogOutIcon />
            )}
            {isLoggingOut ? "Logging out..." : "Log out"}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
