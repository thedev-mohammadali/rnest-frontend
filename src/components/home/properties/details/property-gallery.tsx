import Image from "next/image";

const images = [
  "/images/property-1.jpg",
  "/images/property-2.jpg",
  "/images/property-3.jpg",
];

const PropertyGallery = () => {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      <div className="relative h-125 lg:col-span-2">
        <Image
          src={images[0]}
          alt="property"
          fill
          className="rounded-2xl object-cover"
        />
      </div>

      {images.slice(1).map((image) => (
        <div key={image} className="relative hidden h-60 lg:block">
          <Image
            src={image}
            alt="property"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default PropertyGallery;
