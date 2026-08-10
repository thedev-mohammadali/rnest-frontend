"use client";

import Image from "next/image";
import { useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

type PropertyGalleryProps = {
  images: string[];
};

const PropertyGallery = ({ images }: PropertyGalleryProps) => {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="space-y-4">
      {/* Main Image */}
      <div className="relative h-70 overflow-hidden rounded-xl sm:h-87.5 lg:h-105">
        <Image
          src={activeImage}
          alt="Property image"
          fill
          priority
          className="object-cover transition duration-300"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-3">
        {images.slice(0, 4).map((image, i) => (
          <button
            key={`${image}-${i}`}
            type="button"
            onClick={() => setActiveImage(image)}
            className={cn(
              "overflow-hidden rounded-xl",
              "transition",
              activeImage === image && "ring-primary ring-2 ring-offset-2",
            )}
          >
            <AspectRatio ratio={4 / 3}>
              <Image
                src={image}
                alt="Property thumbnail"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PropertyGallery;
