import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Property } from "@/types/property";
import { Bed, Scaling, ShowerHead } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PLACEHOLDER_IMAGE =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c";

type Prop = {
  property: Property;
};

const PropertyCard = ({ property }: Prop) => {
  const image = property.images?.[0] ?? PLACEHOLDER_IMAGE;
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow duration-300 hover:shadow-lg">
      <div className="relative">
        <AspectRatio ratio={4 / 3} className="overflow-hidden">
          <Image
            src={image}
            alt={`${property.title} property image`}
            fill
            sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw,(max-width: 1280px) 33vw,400px"
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </AspectRatio>

        <div className="absolute top-3 left-3">
          <span
            className={`rounded-full px-3 py-1 text-xs text-white ${property.isAvailable ? "bg-green-600" : "bg-red-500"}`}
          >
            {property.isAvailable ? "Available" : "Rented"}
          </span>
        </div>
      </div>

      <CardHeader>
        <CardTitle>{property.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{property.location}</p>

        <div className="mt-4 flex gap-4 text-sm">
          <span className="flex items-center gap-1">
            <Bed className="h-4 w-4" /> {property.bedrooms} Beds
          </span>

          <span className="flex items-center gap-1">
            <ShowerHead className="h-4 w-4" /> {property.bathrooms} Baths
          </span>

          <span className="flex items-center gap-1">
            <Scaling className="h-4 w-4" /> {property.size}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div>
          <span className="text-muted-foreground">Monthly Rent</span>

          <p className="text-xl font-bold">৳ {property.rent}</p>
        </div>

        <Button asChild>
          <Link href={`/properties/${property.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
