import HeroSection from "@/components/home/hero/hero-section";
import Properties from "@/components/home/properties/properties";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <HeroSection />

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Available Properties</h2>

            <p>Explore our latest available rental properties</p>
          </div>

          <Properties />

          <div className="mt-8 flex justify-center">
            <Button asChild size={"lg"}>
              <Link href="/properties">Browse All Properties</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
