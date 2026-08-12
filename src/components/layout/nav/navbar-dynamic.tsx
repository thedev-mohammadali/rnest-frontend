import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/services/auth/auth.server";
import Link from "next/link";
import { AvatarDropdown } from "./user-avatar";

const NavbarDynamic = async () => {
  const user = await getCurrentUser();

  if (user) {
    return <AvatarDropdown user={user} />;
  }

  return (
    <div className="flex gap-2 md:gap-4">
      <Button asChild variant={"outline"}>
        <Link href="/login">Login</Link>
      </Button>
      <Button asChild>
        <Link href="/register">Register</Link>
      </Button>
    </div>
  );
};

export default NavbarDynamic;
