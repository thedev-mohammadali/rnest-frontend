import Link from "next/link";
import { Suspense } from "react";
import NavbarDynamic from "./navbar-dynamic";
import NavbarSkeleton from "./navbar-skeleton";

const Navbar = async () => {
  return (
    <header className="sticky top-0 z-10 border-b bg-transparent backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 py-4">
        <Link href={"/"} className="text-2xl font-bold">
          Rent Nest
        </Link>

        <Suspense fallback={<NavbarSkeleton />}>
          <NavbarDynamic />
        </Suspense>
      </div>
    </header>
  );
};

export default Navbar;
