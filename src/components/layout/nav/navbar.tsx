import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Link href={"/"} className="text-2xl font-bold">
          Rent Nest
        </Link>

        <div className="flex gap-2 md:gap-4">
          <Button asChild variant={"outline"}>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
