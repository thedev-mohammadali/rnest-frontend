import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold">RentNest</h2>

          <p className="text-muted-foreground text-sm">
            Find your perfect rental home.
          </p>
        </div>

        <nav className="flex gap-4 text-sm">
          <Link href="/properties">Properties</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
