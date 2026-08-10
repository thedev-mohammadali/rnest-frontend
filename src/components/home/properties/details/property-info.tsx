import { MapPin } from "lucide-react";

const PropertyInfo = () => {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          Modern Apartment Near City Center
        </h1>

        <div className="text-muted-foreground flex items-center gap-2">
          <MapPin className="size-4" />

          <span>Gulshan, Dhaka</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <span className="bg-muted rounded-full px-3 py-1 text-sm">
          Apartment
        </span>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
          Available
        </span>
      </div>

      <div>
        <p className="text-3xl font-bold">
          ৳25,000
          <span className="text-muted-foreground text-base font-normal">
            {" "}
            / month
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">About this property</h2>

        <p className="text-muted-foreground leading-7">
          A beautiful modern apartment with spacious rooms, natural lighting,
          and convenient access to nearby facilities.
        </p>
      </div>
    </section>
  );
};

export default PropertyInfo;
