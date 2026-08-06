import { Check, Star } from "lucide-react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative">
      <Image
        src="/images/hero-home.jpg"
        alt="Modern apartment interior"
        width={600}
        height={700}
        className="h-auto w-full rounded-3xl object-cover"
        priority
      />

      <div className="bg-background absolute bottom-3 left-3 rounded-xl border p-3 shadow-lg sm:bottom-6 sm:left-6 sm:p-4">
        <div className="flex items-center gap-1 sm:gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 sm:h-5 sm:w-5" />

          <span className="text-sm font-semibold sm:text-base">4.9</span>
        </div>

        <p className="text-muted-foreground text-xs sm:text-sm">
          Average rating
        </p>
      </div>

      <div className="bg-background absolute top-3 right-3 rounded-xl border p-3 shadow-lg sm:top-6 sm:right-6 sm:p-4">
        <p className="flex items-center gap-1 text-sm font-semibold sm:text-base">
          <Check className="h-4 w-4 sm:h-5 sm:w-5" />

          <span>Verified Homes</span>
        </p>

        <p className="text-muted-foreground text-xs sm:text-sm">
          Safe & trusted listings
        </p>
      </div>
    </div>
  );
};

export default HeroImage;
