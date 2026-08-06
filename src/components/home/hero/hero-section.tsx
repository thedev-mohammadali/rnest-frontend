import HeroImage from "@/components/home/hero/hero-image";
import HeroStats from "@/components/home/hero/hero-stats";
import PropertySearch from "@/components/home/hero/property-search";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="to-background absolute inset-0 -z-10 bg-linear-to-br from-emerald-50 via-white" />
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="mx-auto text-center lg:mx-0 lg:text-left">
            <h1 className="max-w-xl text-4xl font-bold tracking-tight md:text-6xl">
              Find Your Perfect Rental Home
            </h1>

            <p className="text-muted-foreground mt-6 max-w-2xl text-lg">
              Discover comfortable homes, apartments, and spaces that fit your
              lifestyle.
            </p>

            <PropertySearch />

            <div className="mt-8 flex justify-center lg:justify-start">
              <Button asChild>
                <Link href="/properties">Explore Properties</Link>
              </Button>
            </div>

            <HeroStats />
          </div>

          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
