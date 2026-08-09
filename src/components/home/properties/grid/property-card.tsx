import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bed, Scaling, ShowerHead } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c";

const PropertyCard = () => {
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <AspectRatio ratio={4 / 3} className="overflow-hidden">
          <Image
            src={PLACEHOLDER_IMAGE}
            alt="property image"
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </AspectRatio>

        <div className="absolute top-3 left-3">
          <span
            className={`rounded-full px-3 py-1 text-xs text-white ${true ? "bg-green-600" : "bg-red-500"}`}
          >
            {true ? "Available" : "Rented"}
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle>Property Title</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">Property Location</p>

        <div className="mt-4 flex gap-4 text-sm">
          <span>
            <Bed className="h-4 w-4" /> 4 Beds
          </span>

          <span>
            <ShowerHead className="h-4 w-4" /> 2 Baths
          </span>

          <span>
            <Scaling className="h-4 w-4" /> 1200
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div>
          <span className="text-muted-foreground">Monthly Rent</span>

          <p className="text-xl font-bold">৳ 12000</p>
        </div>

        <Button asChild>
          <Link href={`/properties/id`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
