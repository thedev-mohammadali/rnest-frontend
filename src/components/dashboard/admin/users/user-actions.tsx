"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/dashboard/admin";

const UserActions = ({ user }: { user: User }) => {
  return user.isActive ? <Button>Ban</Button> : <Button>Unban</Button>;
};

export default UserActions;
