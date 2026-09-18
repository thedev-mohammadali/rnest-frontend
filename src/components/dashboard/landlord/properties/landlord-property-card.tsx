"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/formatter/currency";
import { Eye, MapPin, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Property } from "@/types/property";

import EditPropertyModal from "./edit-property-modal";
import PropertyStatusBadge from "./property-status-badge";

type Props = {
  property: Property;
};

const LandlordPropertyCard = ({ property }: Props) => {
  const [editOpen, setEditOpen] = useState(false);

  return (
    <>
      <Card className="group overflow-hidden pt-0">
        {/* Property Image */}
        <div className="bg-muted relative h-48 overflow-hidden">
          {property.images.length > 0 ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-muted-foreground text-sm">
                No image available
              </span>
            </div>
          )}

          <div className="absolute top-4 right-4">
            <PropertyStatusBadge
              status={property.isAvailable ? "AVAILABLE" : "RENTED"}
            />
          </div>
        </div>

        {/* Property Information */}
        <CardContent className="space-y-4 p-5">
          <div>
            <h2 className="truncate text-lg font-semibold">{property.title}</h2>

            <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-sm">
              <MapPin className="size-3.5 shrink-0" />

              <span className="truncate">{property.location}</span>
            </p>
          </div>

          {/* Category */}
          <div>
            <p className="text-muted-foreground text-xs">Category</p>

            <p className="mt-1 text-sm font-medium">{property.category.name}</p>
          </div>

          {/* Monthly Rent */}
          <div>
            <p className="text-muted-foreground text-xs">Monthly rent</p>

            <p className="mt-1 text-xl font-bold">
              {formatCurrency(property.rent, "BDT")}{" "}
              <span className="text-muted-foreground text-sm">/ month</span>
            </p>
          </div>
        </CardContent>

        {/* Actions */}
        <CardFooter className="bg-muted/30 border-t px-5 py-3">
          <div className="flex w-full gap-2">
            {property.isAvailable ? (
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link href={`/properties/${property.id}`}>
                  <Eye />
                  View
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                disabled
                className="flex-1 cursor-not-allowed opacity-50"
                title="Property is currently rented"
              >
                <Eye />
                View
              </Button>
            )}

            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => setEditOpen(true)}
            >
              <Pencil />
              Edit
            </Button>

            <Button variant="destructive" size="sm" className="flex-1">
              <Trash2 />
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>

      <EditPropertyModal
        property={property}
        open={editOpen}
        onOpenChange={setEditOpen}
      />
    </>
  );
};

export default LandlordPropertyCard;
